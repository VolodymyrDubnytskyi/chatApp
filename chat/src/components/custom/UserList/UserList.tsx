import { ScrollArea } from "@/components/ui/scroll-area";
import { useUsers } from "@/hooks/queryHooks/useUsers";
import { useEffect } from "react";
import { User } from "./components/User/User";
import { useChat } from "@/hooks/useChat";

export const UserList = () => {
  const { isPending, data: users } = useUsers();
  const { handleActiveUser } = useChat();
  const currentUser = users?.[0];

  useEffect(() => {
    if (!currentUser) return;
    handleActiveUser(currentUser)
  }, [currentUser])

  return (
    <ScrollArea className="h-full w-[500px] rounded-md border p-4">
      {users?.map((user) => (
        <User key={user.user_id} {...user} handleActiveUser={handleActiveUser}/>
      ))}
    </ScrollArea>
  )
}

