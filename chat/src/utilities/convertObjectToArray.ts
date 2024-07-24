import { UserPresenceInfo } from "@/types/supabase";

export function convertToObjectArray(data: {
    [key: string]: any;
}): UserPresenceInfo[] {
    const result: UserPresenceInfo[] = [];

    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            const presences = data[key];
            presences.forEach((presence: UserPresenceInfo['presence']) => {
                result.push({ id: key, presence });
            });
        }
    }

    return result;
}