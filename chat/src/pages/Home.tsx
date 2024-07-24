import { Chat } from "@/components/custom/Chat/Chat";
import { Header } from "@/components/custom/Header/Header";
import { Card } from "@/components/ui/card";

export const Home = () => {

  return (
    <div className="h-screen p-4">
      <Card className=" flex h-full gap-1 flex-col justify-between">
        <Header />
        <Chat />
      </Card>
    </div>
  )
}