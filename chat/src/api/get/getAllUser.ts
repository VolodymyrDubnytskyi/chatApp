import { supabase } from "@/utilities/supabaseClient";
import { toast } from "sonner";

export const getAllUser = async () => {
    const { data, error } = await supabase.from('profiles').select('*');

    if (error) {
        toast.error("Error fetching users", {
            description: error.message,
        });
        return;
    }

    return data;
};
