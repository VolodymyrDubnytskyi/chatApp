import { REALTIME_LISTEN_TYPES, RealtimeChannel } from "@supabase/supabase-js";
import { supabase } from "./supabaseClient";
import { toast } from "sonner"

export const connectToSupabaseChannel = (channel: RealtimeChannel, callback: (payload: {
    [key: string]: any;
    type: `${REALTIME_LISTEN_TYPES.BROADCAST}`;
    event: string;
}) => void) => {
    channel
        .on('broadcast', { event: 'test' }, (payload) => callback(payload))
        .subscribe();
};

export const sendMessageToSupabaseChannel = (channel: RealtimeChannel, message: string) => {
    channel.send({
        type: 'broadcast',
        event: 'test',
        payload: { message: message },
    });
};

export const unsubscribeFromSupabaseChannel = (channel: RealtimeChannel) => {
    channel.unsubscribe();
};

export const getUser = async () => {
    const { data } = await supabase.auth.getSession();
    return data?.session?.user;
}

export const getAllUser = async () => {
    const { data, error } = await supabase.from('profiles').select('*');
    
    if (error) {
        toast.error("Event has been created", {
            description: error.message,
            // variant: "destructive",
        })
        // throw new Error(error.message)
    }
    if (data) {
        return data
    }
}

export const getAllMessages = async () => {
    const { data: user, error: userError } = await supabase.auth.getUser();

    const { data, error } = await supabase
        .from('messages')
        .select('*')
        .or(`profile_id.eq.${user.user.id},get_id.eq.${user.user.id}`)
        .order('created_at', { ascending: true });

    if (error) {
        toast.error("Event has been created", {
            description: error.message,
            // variant: "destructive",
        })
        // throw new Error(error.message)
    }
    if (data) {
        return data
    }
}