import { useEffect, useRef, useState } from 'react'

interface LocalStorageSerializeOptions {
    serialize?: (value: unknown) => string;
    deserialize?: (value: string) => unknown;
}

function useLocalStorageState<T>(
    key: string,
    defaultValue: T,
    { serialize = JSON.stringify, deserialize = JSON.parse }: LocalStorageSerializeOptions = {},
) {
    const [state, setState] = useState(() => {
        const valueInLocalStorage = window.localStorage.getItem(key)
        if (valueInLocalStorage) {
            try {
                return deserialize(valueInLocalStorage)
            } catch (error) {
                window.localStorage.removeItem(key)
            }
        }
        return typeof defaultValue === 'function' ? defaultValue() : defaultValue
    })

    const prevKeyRef = useRef(key)

    useEffect(() => {
        const prevKey = prevKeyRef.current
        if (prevKey !== key) {
            window.localStorage.removeItem(prevKey)
        }
        prevKeyRef.current = key
        window.localStorage.setItem(key, serialize(state))
    }, [key, state, serialize])

    return [state, setState]
}

export { useLocalStorageState }