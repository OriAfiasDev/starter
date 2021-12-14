import { useEffect, useState } from 'react';

const DEFAULT_DELAY = 400;

export const useDebounce = (value: string, delayMS: number = DEFAULT_DELAY): string => {
	const [debounced, setDebounced] = useState(value);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebounced(value);
		}, delayMS);

		return () => clearTimeout(handler);
	}, [value, delayMS]);

	return debounced;
};
