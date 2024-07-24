import { getAllMessages } from '@/api/get/getAllMessages';
import { Database } from '@/types/supabase';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

type MessageType = Database['public']['Tables']['messages']['Row'];

export const useMessages = (activeUserId?: string): UseQueryResult<MessageType[], unknown> => {
    return useQuery({
        queryKey: ['messages', activeUserId],
        queryFn: () => getAllMessages(activeUserId!),
        enabled: !!activeUserId,
    });
};