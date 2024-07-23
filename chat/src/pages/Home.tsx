import UserList from "@/components/custom/UserList/UserList"
import { Card } from "@/components/ui/card"
import { useMessages } from "@/hooks/queryHooks/useMessages";
import { useEffect } from "react";

export const Home = () => {
  const { data: messages } = useMessages();

  useEffect(() => {
    console.log(messages)
  }, [messages])

  return (
    <Card>
      <UserList />
    </Card>
  )
}

