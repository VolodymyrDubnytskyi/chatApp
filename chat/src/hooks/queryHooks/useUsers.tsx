import { getAllUser } from "@/api/get/getAllUser";
import { getUser } from "@/api/get/getUser";
import { getUserProfile } from "@/api/get/getUserProfile";
import { UserType } from "@/types/supabase";
import { User } from "@supabase/supabase-js";
import { useQuery, UseQueryResult } from "@tanstack/react-query"

export const useUsers = (): UseQueryResult<UserType[], unknown> => {

    return useQuery({
        queryKey: ['users'],
        queryFn: () => getAllUser()
    })
};

export const useUser = (): UseQueryResult<User, unknown> => {

    return useQuery({
        queryKey: ['user'],
        queryFn: () => getUser()
    })
};

export const useUserProfile = (): UseQueryResult<UserType, unknown> => {

    return useQuery({
        queryKey: ['userProfile'],
        queryFn: () => getUserProfile()
    })
};
