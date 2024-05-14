import axios from "axios";
const api = "https://api.itbook.store/1.0/";
class ApiInstance {
    constructor() {
        Object.defineProperty(this, "axios", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.axios = axios.create({
            baseURL: api,
            timeout: 20000,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
    async get(endpoint, options = {}) {
        await new Promise((resolve) => setTimeout(resolve, 300));
        const response = await this.axios.get(endpoint, options);
        return response.data;
    }
}
export const apiInstanse = new ApiInstance();
