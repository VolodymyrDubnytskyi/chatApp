import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useMessages } from '@/hooks/queryHooks/useMessages';
import { useUser } from '@/hooks/queryHooks/useUsers';
import { Message } from './components/Message/Message';
import { useChat } from '@/hooks/useChat';
import { MessageType } from '@/types/supabase';
import { ScrollArea } from '@/components/ui/scroll-area';

export const Messages = () => {
    const { userId } = useParams();
    const { data: messages = [], isPending } = useMessages(userId);
    const { data: user } = useUser();
    const { newMessage } = useChat();

    const messagesList = useMemo(() => {
        const messagesList: MessageType[] = newMessage ? [...messages, newMessage] : messages;

        return messagesList?.map((message) => {
            return (
                <Message
                    key={message.id}
                    {...message}
                    isOwner={!!(user?.id && user?.id === message.get_id)}
                />
            )
        })
    }, [messages, user, newMessage])

    if (!messages?.length && !isPending) {
        return <p className='px-2'>Pls type you first message</p>
    }

    return (
        <ScrollArea className='h-[calc(100vh-208px)] px-2 flex flex-col'>
            {messagesList}
        </ScrollArea>
    )
}