export interface IContentNavTypes {
	title: string;
	link: string;
}
export interface IPreviewCategory {
	data: {
		[key: string]: any;
	};
	loading: string;
}

type UppercaseLetters =
	| "A"
	| "B"
	| "C"
	| "D"
	| "E"
	| "F"
	| "G"
	| "H"
	| "I"
	| "J"
	| "K"
	| "L"
	| "M"
	| "N"
	| "O"
	| "P"
	| "Q"
	| "R"
	| "S"
	| "T"
	| "U"
	| "V"
	| "W"
	| "X"
	| "Y"
	| "Z";

export interface ICategoryItem {
	title: string;
	link: string;
}

export type TCategories = Partial<Record<UppercaseLetters, ICategoryItem[]>>;
