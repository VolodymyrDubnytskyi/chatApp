import { useEffect } from "react";
import { MessageType } from "@/types/supabase";
import { supabase } from "@/utilities/supabaseClient";
import { RealtimePostgresChangesPayload } from "@supabase/supabase-js";

export const useMessagesSubscription = (
    callback: (newMessage: MessageType) => void,
    userId?: string,
) => {

    useEffect(() => {
        if (!userId) return;

        const channelName = `messages`;
        const channel = supabase.channel(channelName);

        channel.on<RealtimePostgresChangesPayload<MessageType>>(
            'postgres_changes',
            { event: '*', schema: 'public', table: 'messages', },
            (payload) => {
                const data = payload.new as MessageType;
                if (data.profile_id === userId || data.get_id === userId) {
                    callback(data)
                }

            }
        ).subscribe();

        return () => {
            supabase.removeChannel(channel);
        };
    }, [userId]);
};
