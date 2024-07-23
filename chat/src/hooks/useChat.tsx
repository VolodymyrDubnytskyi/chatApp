import { Database } from "@/types/supabase";
import { createContext, useCallback, useContext, useMemo, useState } from "react";

type User = Database['public']['Tables']['profiles']['Row'];

type ChatContextType = {
    activeUser: User | null;
    handleActiveUser: (user: User) => void;
}

const defaultValue = {
    activeUser: null,
    handleActiveUser: () => { }
}

const ChatContext = createContext<ChatContextType>(defaultValue)

const ChatProvider = ({ children }: { children: React.ReactNode }) => {
    const [activeUser, setActiveUser] = useState<User | null>(null);

    const handleActiveUser = useCallback((user: User) => {
        setActiveUser(user)
    }, []);

    const value = useMemo(() => {
        return {
            activeUser,
            handleActiveUser
        }
    }, [activeUser, handleActiveUser])

    return (
        <ChatContext.Provider value={value}>
            {children}
        </ChatContext.Provider>
    )
}
const useChat = () => useContext(ChatContext);

export { ChatProvider, useChat }