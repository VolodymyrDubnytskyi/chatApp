import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useUserProfile } from "@/hooks/queryHooks/useUsers";
import { useParams } from "react-router-dom";
import { sendMessages } from "@/api/post/sendMessage";

export const ChatInputBox = () => {
    const [message, setMessage] = useState<string>("");
    const { data: user } = useUserProfile();
    const { userId } = useParams();

    console.log({ user })

    const handleSendMessage = async () => {
        const data = await sendMessages({ message, getId: userId!, fullSenderName: user?.fullName });
        if (data) {
            setMessage("")
        }
    }

    return (
        <div className="flex w-full items-center space-x-2 px-2 py-1">
            <Input type="text" placeholder="Typ a message here" value={message} onChange={e => setMessage(e.target.value)} />
            <Button onClick={handleSendMessage} disabled={!message.length}>Send message</Button>
        </div>
    )
}

