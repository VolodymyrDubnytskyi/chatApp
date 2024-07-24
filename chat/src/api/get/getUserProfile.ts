import { supabase } from "@/utilities/supabaseClient";
import { toast } from "sonner";
import { getUser } from "./getUser";

export const getUserProfile = async () => {
    const user = await getUser();

    if (!user) {
        toast.error("Error fetching user profile", {
            description: "User not found.",
        });
        return;
    }

    const { data, error } = await supabase.from('profiles').select('*').eq('user_id', user.id);

    if (error) {
        toast.error("Error fetching user profile", {
            description: error.message,
        });
        return;
    }

    if (data?.[0]) {
        return data[0];
    }

    toast.error("Error fetching user profile", {
        description: "Profile not found.",
    });
};
