import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useUsers } from "@/hooks/queryHooks/useUsers";
import { User } from "./components/User/User";
import { convertToObjectArray } from "@/utilities/convertObjectToArray";
import { UserPresenceInfo } from "@/types/supabase";
import { useOnlineUserSubscription } from "@/hooks/queryHooks/useOnlineUserSubscription";

export const UserList = () => {
  const { data: users } = useUsers();
  const [onlineUsers, setOnlineUsers] = useState<UserPresenceInfo[]>([]);
  const { userId } = useParams();

  useOnlineUserSubscription((onlineUsers) => { setOnlineUsers(convertToObjectArray(onlineUsers)) })

  const usersList = useMemo(() => {
    return users?.map((user) => (
      <User
        key={user.user_id}
        {...user}
        activeUserId={userId}
        isUserOnline={onlineUsers.some((el) => el.presence?.user_id === user.user_id)}
      />
    ))
  }, [users, userId, onlineUsers])

  return (
    <ScrollArea className="h-full w-[500px] rounded-md border p-4">
      {usersList}
    </ScrollArea>
  )
}

