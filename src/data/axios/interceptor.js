import axios from "axios";

const http = axios.create({
  // baseURL: "https://apicheckedspot.azurewebsites.net",
  baseURL: "http://localhost:8080",
  headers: {
    Accept: "application/json",
  },
});

http.interceptors.request.use((config) => {
    return {
        ...config,
        headers:{
            ...config.headers,
        },
    }
  // return config;
});

http.interceptors.response.use(
  (res) => {
    return Promise.resolve(res.data);
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default http;