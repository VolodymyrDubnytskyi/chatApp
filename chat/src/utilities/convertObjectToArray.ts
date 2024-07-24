export function convertToObjectArray(data: PresenceData): { id: string, presence: Presence }[] {
    const result: { id: string, presence: Presence }[] = [];

    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            const presences = data[key];
            presences.forEach((presence) => {
                result.push({ id: key, presence });
            });
        }
    }

    return result;
}