import { Chat } from "@/components/custom/Chat/Chat";
import { Header } from "@/components/custom/Header/Header";
import { Card } from "@/components/ui/card";
import { useMessages } from "@/hooks/queryHooks/useMessages";
import { useEffect } from "react";

export const Home = () => {
  const { data: messages } = useMessages();

  useEffect(() => {
    console.log(messages)
  }, [messages])

  return (
    <div className="h-screen p-4">
      <Card className=" flex h-full gap-1 flex-col justify-between">
        <Header />
        <Chat />
      </Card>
    </div>
  )
}