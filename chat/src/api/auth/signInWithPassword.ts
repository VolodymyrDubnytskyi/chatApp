import { supabase } from "@/utilities/supabaseClient"
import { toast } from "sonner";

type Arg = {
    email: string,
    password: string,
}
export const signInWithPassword = async ({
    email,
    password,
}: Arg) => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
    });

    if (error) {
        toast.error("Error signing in", {
            description: error.message,
        });
        return;
    }

    return data;
};
