import { FC } from "react";
import clsx from "clsx";
import "./dropDown.scss";

interface IDropDown {
	/** Element under which the dropdown will open. */
	readonly labelElement: JSX.Element;
	/** Values for opening or closing a dropdown. */
	readonly isOpen?: boolean;
	/** Dropdown content. */
	readonly content?: JSX.Element | JSX.Element[];
	/** If the dropdown has an arrow at the top. */
	readonly isArrow?: boolean;
	/** Additional styles. */
	readonly className?: string;
}

export const DropDown: FC<IDropDown> = (props) => {
	const { labelElement, isOpen, content, isArrow = false, className } = props;

	let isOpenDropDown = isOpen ? "dropdown_open" : "dropdown_close";
	if (isOpen === undefined) {
		isOpenDropDown = "dropdown_opening-state_hover";
	}

	return (
		<div
			className={clsx(
				"dropdown",
				isOpenDropDown,
				isArrow && "dropdown_with-arrow",
				className
			)}
		>
			<div className="dropdown__label">{labelElement}</div>
			<div className="dropdown__wrapper-content">
				<div className="dropdown__content">{content}</div>
			</div>
		</div>
	);
};
