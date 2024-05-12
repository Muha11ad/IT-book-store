export interface ICartItem {
	/** Book cover. */
	readonly image?: string;
	/** Book title. */
	readonly title: string;
	/** 13 digit edition identifier. */
	readonly isbn13: string;
	/** Link to detailed information about the book. */
	readonly url: string;
	/** Price in $00.00 format. */
	readonly price: string;
	/** Quantity to order. */
	quantity: number;
}
