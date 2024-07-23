import { getAllUser } from "@/utilities/supabaseMethods"
import { useQuery, UseQueryResult } from "@tanstack/react-query"

export const useUsers = (): UseQueryResult<any[], unknown> => {

    return useQuery({
        queryKey: ['users'],
        queryFn: () => getAllUser()
    })
};
