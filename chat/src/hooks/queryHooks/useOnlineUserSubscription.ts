import { getUser } from "@/api/get/getUser";
import { supabase } from "@/utilities/supabaseClient";
import { useEffect } from "react";

export const useOnlineUserSubscription = (
    callback: (neMessage: {
        [key: string]: any;
    }) => void,
) => {
    useEffect(() => {
        const channelName = `online_users`;
        const channel = supabase.channel(channelName);

        channel
            .on('presence', { event: 'sync' }, () => {
                callback(channel.presenceState());
            })
            .subscribe(async (status) => {
                if (status === 'SUBSCRIBED') {
                    const user = await getUser();
                    await channel.track({
                        online_at: new Date().toISOString(),
                        user_id: user?.id,
                    });
                }
            });
        return () => {
            supabase.removeChannel(channel);
        };
    }, []);
};