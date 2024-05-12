import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const api = "https://api.itbook.store/1.0/";

class ApiInstance {
	private axios: AxiosInstance;
	constructor() {
		this.axios = axios.create({
			baseURL: api,
			timeout: 20000,
			headers: {
				"Content-Type": "application/json",
			},
		});
	}
	async get<T>(endpoint: string, options: AxiosRequestConfig = {}): Promise<T> {
		await new Promise((resolve) => setTimeout(resolve, 300));

		const response = await this.axios.get<T>(endpoint, options);
		return response.data;
	}
}
export const apiInstanse = new ApiInstance();
