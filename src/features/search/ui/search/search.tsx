import { useState } from "react";
import { useDebounce } from "../../../../shared/libs/useDebounce";
import { DropDown } from "../../../../shared/ui/dropDown";
import { SearchDropDown } from "../searchDropDown/searchDropDown";
import "./search.scss";

export const Search = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [searchValue, setSearchValue] = useState("");
	useDebounce({ value: searchValue, delay: 1000 });
	return (
		<div className="search-wrapper">
			<DropDown
				labelElement={
					<input
						type="text"
						className="search-input"
						placeholder="Input books by title, author, ISBN or keywords"
						onFocus={() => setIsOpen(true)}
						onBlur={() => setIsOpen(false)}
						value={searchValue}
						onChange={(e) => setSearchValue(e.target.value)}
					/>
				}
				content={<SearchDropDown />}
				isOpen={isOpen}
				className={"search-dropdown"}
			/>
		</div>
	);
};
