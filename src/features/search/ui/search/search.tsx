import { useState } from "react";
import { DropDown } from "../../../../shared/ui/dropDown";
import { SearchDropDown } from "../searchDropDown/searchDropDown";
import "./search.scss";

export const Search = () => {
	const [isOpen, setIsOpen] = useState(false);
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
					/>
				}
				content={<SearchDropDown />}
				isOpen={isOpen}
				className={"search-dropdown"}
			/>
		</div>
	);
};
