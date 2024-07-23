import { ModeToggle } from "@/components/ui/mode-toggle"

export const Header = () => {
    return (
        <header className="flex items-center justify-between p-4 text-card-foreground shadow border-b">
            <h1 className="text-lg font-semibold">Chat</h1>
            <ModeToggle />
        </header>
    )
}