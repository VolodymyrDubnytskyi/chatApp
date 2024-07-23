import { UserType } from "@/types/supabase";
import { getAllUser, getUser } from "@/utilities/supabaseMethods"
import { useQuery, UseQueryResult } from "@tanstack/react-query"

export const useUsers = (): UseQueryResult<UserType[], unknown> => {

    return useQuery({
        queryKey: ['users'],
        queryFn: () => getAllUser()
    })
};

export const useUser = (): UseQueryResult<any, unknown> => {

    return useQuery({
        queryKey: ['user'],
        queryFn: () => getUser()
    })
};
