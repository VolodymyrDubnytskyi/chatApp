import { ChatHeader } from './ChatHeader'
import { Messages } from '../../Messages/Messages'
import { ChatInputBox } from './ChatInputBox'

export const CurrentUserChat = () => {
    return (
        <div className="flex flex-col w-full h-[calc(100vh-108px)] justify-between">
            <ChatHeader />
            <div className="w-full h-full flex flex-col justify-end">
                <Messages />
                <ChatInputBox />
            </div>
        </div>
    )
}
