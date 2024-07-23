import { supabase } from '@/utilities/supabaseClient';
import { getAllMessages } from '@/utilities/supabaseMethods';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';

export const useMessages = (): UseQueryResult<any['Row'][], unknown> => {
    return useQuery({
        queryKey: ['message'],
        queryFn: () => getAllMessages()
    })
};

export const useChannelUnreadMessagesSubscription = async (callback: any, hotelId: string, guestId: string) => {
    const supabaseChannelRef = useRef<any>(null);

    const subscribeForChanges = () => {
        const channelName = `hotel_mobile_update_${hotelId}`;
        supabaseChannelRef.current = supabase
            .channel(channelName)
            .on(
                'postgres_changes',
                {
                    event: 'INSERT',
                    schema: 'public',
                    table: 'messages',
                    filter: `hotel_id=eq.${hotelId}`,
                },
                (payload) => {
                    if (
                        payload.new.profile_id === guestId ||
                        payload.new.get_id === guestId
                    ) {
                        if (payload.new.content) {
                            callback({
                                id: payload.new.id,
                                content: payload.new.content,
                                hotel_id: payload.new.hotel_id,
                                profile_id: payload.new.profile_id,
                                get_id: payload.new.get_id,
                            });
                        }
                    }
                },
            )
            .on(
                'postgres_changes',
                {
                    event: 'UPDATE',
                    schema: 'public',
                    table: 'messages',
                    filter: `hotel_id=eq.${hotelId}`,
                },
                (payload) => {
                    const newMessage = payload.new;
                    callback(newMessage);
                },
            ).subscribe();

    };

    useEffect(() => {
        subscribeForChanges();
        return () => {
            supabase.removeChannel(supabaseChannelRef.current);
        };
    }, [hotelId, guestId]);
};

export const useChannelSubscription = async (callback: any, hotelId: string) => {
    const supabaseChannelRef = useRef<any>(null);

    const subscribeForChanges = async () => {
        const { data: user, error: userError } = await supabase.auth.getUser();
        const channelName = `hotel_${hotelId}`;
        supabaseChannelRef.current = supabase
            .channel(channelName) 
            .on(
                'postgres_changes',
                {
                    event: 'INSERT',
                    schema: 'public',
                    table: 'messages',
                    filter: `hotel_id=eq.${hotelId}`,
                },
                (payload) => {
                    if (
                        payload.new.profile_id === user.user.id ||
                        payload.new.get_id === user.user.id
                    ) {
                        if (payload.new.content) {
                            callback(payload.new, 'create');
                        }
                    }
                },
            )
            .on(
                'postgres_changes',
                {
                    event: 'UPDATE',
                    schema: 'public',
                    table: 'messages',
                    filter: `hotel_id=eq.${hotelId}`,
                },
                (payload) => {
                    if (
                        payload.new.profile_id === user.user.id ||
                        payload.new.get_id === user.user.id
                    ) {
                        if (payload.new.content) {
                            callback(payload.new, 'update');
                        }
                    }
                },
            ).subscribe();
    };

    useEffect(() => {
        if (!hotelId) return;
        subscribeForChanges();
        return () => {
            supabase.removeChannel(supabaseChannelRef.current);
        };
    }, [hotelId]);

    // useFocusEffect(
    //     useCallback(() => {
    //         subscribeForChanges();
    //         return () => {
    //             supabase.removeChannel(supabaseChannelRef.current);
    //         };
    //     }, [hotelId]),
    // );
};

export const useOnlineUserSubscription = async (hotelId: string, guestId: string) => {
    const channelName = `hotel_${hotelId}_online`;
    useEffect(() => {
        const channel = supabase.channel(channelName);
        channel
            .on('presence', { event: 'sync' }, () => {
                // console.log('Synced presence state: ', channel.presenceState());
            })
            .subscribe(async (status) => {
                if (status === 'SUBSCRIBED') {
                    await channel.track({
                        online_at: new Date().toISOString(),
                        user_id: guestId,
                    });
                }
            });
        return () => {
            supabase.removeChannel(channel);
        };
    }, [hotelId, guestId]);
};

type Props = {
    hotelId: string;
    message: string;
};

export const sendMessages = async ({ hotelId, message }: Props) => {
    const { data: user, error: userError } = await supabase.auth.getUser();
    const { data, error } = await supabase
        .from('messages')
        .insert({ content: message, profile_id: user.user.id, hotel_id: hotelId, status: 'unread' })
        .select();

    return { data, error, userError };
};
