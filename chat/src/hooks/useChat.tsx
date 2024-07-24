import { createContext, useContext, useMemo, useState } from "react";
import { useUser } from "./queryHooks/useUsers";
import { MessageType } from "@/types/supabase";
import { useMessagesSubscription } from "./queryHooks/useMessagesSubscription";

type ChatContextType = {
    newMessage: MessageType | null
}

const defaultValue = {
    newMessage: null
}

const ChatContext = createContext<ChatContextType>(defaultValue)

const ChatProvider = ({ children }: { children: React.ReactNode }) => {
    const [newMessage, setNewMessage] = useState<MessageType | null>(null);
    const { data: user } = useUser();

    useMessagesSubscription((newMessage) => {
        setNewMessage(newMessage)
    }, user?.id);

    const value = useMemo(() => {
        return {
            newMessage
        }
    }, [newMessage])

    return (
        <ChatContext.Provider value={value}>
            {children}
        </ChatContext.Provider>
    )
}
const useChat = () => useContext(ChatContext);

export { ChatProvider, useChat }