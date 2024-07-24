import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { MessageType } from "@/types/supabase";
import { getInitials } from "@/utilities/getInitials"

type Props = MessageType & {
    isOwner: boolean;
}

export const Message = ({ content, fullSenderName, isOwner }: Props) => {
    return (
        <div className={`flex gap-3 items-center my-3 ${!isOwner ? 'justify-start' : 'justify-end'}`}>
            <Avatar className="flex justify-center items-center">
                <AvatarFallback>{getInitials(fullSenderName)}</AvatarFallback>
            </Avatar>
            <span className=" bg-accent p-3 rounded-md max-w-xs">
                {content}
            </span>
        </div>
    )
}
