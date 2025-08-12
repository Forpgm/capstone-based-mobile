import axios, { type AxiosInstance } from "axios";
class AxiosClient {
  instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: process.env.EXPO_PUBLIC_API_URL,
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
const axiosClient = new AxiosClient().instance;
export default axiosClient;
