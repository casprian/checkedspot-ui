import axios from "axios";

const http = axios.create({
  baseURL: "https://apicheckedspot.azurewebsites.net",
  headers: {
    Accept: "application/json",
  },
});

http.interceptors.request.use((config) => {
    return {
        ...config,
        headers:{
            ...config.headers,
            'EXTRA_CHECKEDSPOT_HEADERS':'EXTRAEXTRA_CHECKEDSPOT_HEADERSHEADERS',
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