import { useEffect, useState } from "react";

interface IuseDebounceProps {
	value: string;
	delay: number;
}

export const useDebounce = ({ value, delay = 500 }: IuseDebounceProps) => {
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		return () => {
			clearTimeout(handler);
		};
	}, [value, delay]);

	return debouncedValue
};
