import { Outlet } from "react-router-dom";
import { ChatProvider } from "@/hooks/useChat";
import { UserList } from "../UserList/UserList";

export const Chat = () => {
    return (
        <ChatProvider>
            <div className="flex items-end h-[calc(100vh-101px)] p-1">
                <UserList />
                <Outlet />
            </div>
        </ChatProvider>
    )
}
