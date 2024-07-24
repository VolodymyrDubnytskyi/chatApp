import { Link } from "react-router-dom";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { getInitials } from "@/utilities/getInitials";
import { UserType } from "@/types/supabase";
import { Button } from "@/components/ui/button";

type Props = UserType & {
    isUserOnline: boolean;
    activeUserId?: string;
}

export const User = ({ isUserOnline, activeUserId, ...props }: Props) => {
    const { fullName, user_id } = props;

    return (
        <Button
            asChild
            variant={activeUserId === user_id ? "active" : "outline"}
            className="flex justify-start h-auto my-4 w-full text-left group"
        >
            <Link to={`/${user_id}`}>
                <CardHeader className="p-2">
                    <div className="flex items-center">
                        <Avatar >
                            <AvatarFallback className={`group-hover:bg-zinc-950 ${activeUserId === user_id ? 'bg-zinc-950' : 'bg-muted'}`}>{getInitials(fullName)}</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col pl-3">
                            <CardTitle>{fullName}</CardTitle>
                            <CardDescription className={isUserOnline ? 'text-green-700' : 'text-zinc-700'}>{isUserOnline ? 'Online' : 'Offline'}</CardDescription>
                        </div>
                    </div>
                </CardHeader>
            </Link>
        </Button>
    )
}
