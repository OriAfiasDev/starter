type UseLocalStorage = [() => string | null, (value: string) => void];

export const useLocalStorage = (key: string): UseLocalStorage => {

    const setVal = (value: string) => {
        localStorage.setItem(key, value);
    }

    const getVal = () => localStorage.getItem(key)

    return [getVal, setVal];
}