import { supabase } from "@/utilities/supabaseClient";

export const getUser = async () => {
    const { data } = await supabase.auth.getSession();
    return data?.session?.user;
}