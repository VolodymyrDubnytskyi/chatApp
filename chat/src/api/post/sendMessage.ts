import { supabase } from "@/utilities/supabaseClient";
import { getUser } from "../get/getUser";
import { toast } from "sonner";

type Props = {
    getId: string;
    message: string;
    fullSenderName?: string;
};

export const sendMessages = async ({ message, getId, fullSenderName = '' }: Props) => {
    const user = await getUser();

    const { data, error } = await supabase
        .from('messages')
        .insert({ content: message, profile_id: user!.id, get_id: getId, fullSenderName })
        .select();

    if (error) {

        toast.error("Error sending messages", {
            description: error.message,
        });
    }

    return data;
};
