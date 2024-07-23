
import { Messages } from "../Messages/Messages";
import { ChatInputBox } from "../ChatInputBox/ChatInputBox";
import { UserList } from "../UserList/UserList";
import { ChatProvider } from "@/hooks/useChat";
import { ChatHeader } from "../ChatHeader/ChatHeader";

export const Chat = () => {
    return (
        <ChatProvider>
            <div className="flex items-end h-screen p-1">
                <UserList />
                <div className="flex flex-col w-full h-full justify-between">
                    <ChatHeader />
                    <div className="w-full">
                        <Messages />
                        <ChatInputBox />
                    </div>
                </div>
            </div>
        </ChatProvider>
    )
}
