import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useUsers } from "@/hooks/queryHooks/useUsers";
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Messages from "../Messages/Messages";

const UserList = () => {
  const { isPending, data: users } = useUsers();
  const [message, setMessage] = useState<string>("");
  console.log({ users, isPending })

  return (
    <div className="flex items-end h-screen p-1">
      <ScrollArea className="h-full w-[500px] rounded-md border p-4">
        {users?.map((user) => (
          <Card>
            <CardHeader>
              <div className="flex items-center">
                <Avatar>
                  <AvatarFallback>VD</AvatarFallback>
                </Avatar>
                <div className="flex flex-col pl-3">
                  <CardTitle>{user.fullName}</CardTitle>
                  <CardDescription>{user.email}</CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </ScrollArea>
      <div className="flex flex-col w-full">
        <Messages />
        <div className="flex w-full items-center space-x-2">
          <Input type="text" placeholder="Typ a message here" value={message} onChange={e => setMessage(e.target.value)} />
          <Button type="submit">Send message</Button>
        </div>
      </div>


    </div>
  )
}

export default UserList