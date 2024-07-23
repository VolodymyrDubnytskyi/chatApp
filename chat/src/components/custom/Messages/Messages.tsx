import { useMessages, sendMessages } from '@/hooks/queryHooks/useMessages';
import { useMemo } from 'react';
import { Message } from './components/Message/Message';
import { useChat } from '@/hooks/useChat';
import { useUser } from '@/hooks/queryHooks/useUsers';

export const Messages = () => {
    const { data: messages } = useMessages();
    const { data: user } = useUser();
    const { activeUser } = useChat();

    const messagesList = useMemo(() => {
        return messages?.map((message) => {
            return <Message key={message.id} {...message} activeUser={activeUser} isOwner={user?.id && user?.id === activeUser?.user_id} />
        })
    }, [messages, activeUser, user])

    if (!messages?.length) {
        return <p>Pls type you first message</p>
    }

    return (
        <div className='px-2 flex flex-col'>
            {messagesList}
        </div>
    )
}