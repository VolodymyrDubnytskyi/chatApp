import { supabase } from "@/utilities/supabaseClient";
import { toast } from "sonner";

export const getAllMessages = async (activeUserId: string) => {
    const { data: user, error: userError } = await supabase.auth.getUser();

    if (userError) {
        toast.error("Error fetching user", {
            description: userError.message,
        });
        return;
    }

    const currentUserId = user.user.id;

    const { data, error } = await supabase
        .from('messages')
        .select('*')
        .or(
            `and(profile_id.eq.${currentUserId},get_id.eq.${activeUserId}),and(profile_id.eq.${activeUserId},get_id.eq.${currentUserId})`
        )
        .order('created_at', { ascending: true });

    if (error) {
        toast.error("Error fetching messages", {
            description: error.message,
        });
        return;
    }

    return data;
}