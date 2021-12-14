import { useState } from "react"


export const useToggle = (defaultState: boolean):[boolean, () => void] => {
    const [value, setValue] = useState<boolean>(defaultState);

    const toggleValue = () => setValue(cur => !cur);

    return [value, toggleValue];
}