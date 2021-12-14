import { useState } from "react"

type UseArray<T> = {
 arr: T[];
 setArr: (newArr: T[]) => void;
 push: (value: T) => void;
 pop: () => void;
 filter: (predicate: (each: T) => boolean) => void;
 sort: (compareFn: (a: T, b: T) => number) => void;
}

export const useArray = <T extends any> (defaultArr: T[] = []): UseArray<T> => {
    const [arr, setArr] = useState<T[]>(defaultArr);

    const push = (value: T) => {
        setArr(curr => [...curr, value]);
    }

    const pop = () => {
        setArr(curr => curr.slice(0, -1));
    }

    const filter = (predicate: (each: T) => boolean) => {
        setArr(curr => curr.filter(predicate));
    }

    const sort = (compareFn: (a: T, b:T) => number) => {
        setArr(curr => [...curr.sort((compareFn))]);
    }

    return { arr, setArr, push, pop, filter, sort }
}