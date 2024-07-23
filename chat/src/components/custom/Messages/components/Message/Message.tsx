import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { MessageType, UserType } from "@/types/supabase";
import { getInitials } from "@/utilities/getInitials"

type Props = MessageType & {
    activeUser: UserType | null;
    isOwner: boolean;
}

export const Message = ({ content, activeUser, isOwner }: Props) => {
    return (
        <div className={`flex gap-3 items-center my-3 justify-${isOwner ? 'left' : 'right'}`}>
            <Avatar className="flex justify-center items-center">
                <AvatarFallback>{getInitials(activeUser?.fullName)}</AvatarFallback>
            </Avatar>
            <span className=" bg-accent p-3 rounded-md max-w-xs">
                {content}
            </span>
        </div>
    )
}
