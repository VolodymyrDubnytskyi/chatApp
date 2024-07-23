import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { getInitials } from "@/utilities/getInitials";
import { UserType } from "@/types/supabase";

type Props = UserType & {
    handleActiveUser: (user: UserType) => void
}

export const User = ({ handleActiveUser, ...props }: Props) => {
    const { fullName, email } = props;
    
    return (
        <Card className="my-4" onClick={() => handleActiveUser(props)}>
            <CardHeader>
                <div className="flex items-center">
                    <Avatar>
                        <AvatarFallback>{getInitials(fullName)}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col pl-3">
                        <CardTitle>{fullName}</CardTitle>
                        <CardDescription>{email}</CardDescription>
                    </div>
                </div>
            </CardHeader>
        </Card>
    )
}
