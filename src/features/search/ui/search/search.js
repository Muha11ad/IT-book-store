import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useDebounce } from "../../../../shared/libs/useDebounce";
import { useAppDispatch } from "../../../../shared/store/store";
import { DropDown } from "../../../../shared/ui/dropDown";
import { fetchSearchResult } from "../../model/searchThunk";
import { SearchDropDown } from "../searchDropDown/searchDropDown";
import "./search.scss";
export const Search = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useAppDispatch();
    const [searchValue, setSearchValue] = useState("");
    /*fetch data*/
    const debouncedValue = useDebounce({ value: searchValue, delay: 1000 });
    useEffect(() => {
        dispatch(fetchSearchResult({ searchStr: debouncedValue, page: 1 }));
    }, [debouncedValue, dispatch]);
    /*fetch data*/
    return (_jsx("div", { className: "search-wrapper", children: _jsx(DropDown, { labelElement: _jsx("input", { type: "text", className: "search-input", placeholder: "Input books by title, author, ISBN or keywords", onBlur: () => {
                    setTimeout(() => {
                        setIsOpen(false);
                    }, 300);
                }, onFocus: () => setIsOpen(true), value: searchValue, onChange: (e) => setSearchValue(e.target.value) }), content: _jsx(SearchDropDown, { searchValue: searchValue }), isOpen: isOpen, className: "search-dropdown" }) }));
};
