import axios from "axios";

import ApiConfig from "../config";

const client = axios.create({
    baseURL: ApiConfig.BASE_URL,
    headers: { "Content-Type": "application/json" },
    timeout: 10000,
});

export default client;
