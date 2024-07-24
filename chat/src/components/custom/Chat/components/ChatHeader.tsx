import { Card, CardHeader } from "@/components/ui/card"
import { useChat } from "@/hooks/useChat";

export const ChatHeader = () => {
    const { activeUser } = useChat();

    return (
        <Card className="w-full">
            <CardHeader>
                {activeUser?.fullName}
            </CardHeader>
        </Card>
    )
}
