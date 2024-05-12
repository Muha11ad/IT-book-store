import { useEffect, useState } from "react";
import { fetchSearchResult } from "../../../features/search/model/searchThunk";
import { useAppDispatch } from "../../store/store";

interface IuseDebounceProps {
	value: string;
	delay: number;
}

export const useDebounce = ({ value, delay = 500 }: IuseDebounceProps) => {
	const dispatch = useAppDispatch();
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		return () => {
			clearTimeout(handler);
		};
	}, [value, delay]);

	useEffect(() => {
		// Make the API call only when the debounced value changes
		dispatch(fetchSearchResult({ searchStr: debouncedValue }));
	}, [debouncedValue, dispatch]);
};
