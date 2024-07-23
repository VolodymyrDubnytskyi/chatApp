import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { sendMessages } from '@/hooks/queryHooks/useMessages';
import { useState } from "react";
import { useChat } from "@/hooks/useChat";

export const ChatInputBox = () => {
    const [message, setMessage] = useState<string>("");
    const { activeUser } = useChat();

    const handleSendMessage = () => {
        sendMessages({ message, getId: activeUser?.user_id! })
    }

    return (
        <div className="flex w-full items-center space-x-2 px-2 py-1">
            <Input type="text" placeholder="Typ a message here" value={message} onChange={e => setMessage(e.target.value)} />
            <Button onClick={handleSendMessage} disabled={!message.length || !activeUser?.user_id}>Send message</Button>
        </div>
    )
}

