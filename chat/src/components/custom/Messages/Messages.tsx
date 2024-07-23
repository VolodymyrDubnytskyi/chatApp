import { useMessages } from '@/hooks/queryHooks/useMessages';

const Messages = () => {
    const { data: messages } = useMessages();

    if (!messages?.length) {
        return <p>Pls type you first message</p>
    }

    return (
        <div>Messages</div>
    )
}

export default Messages