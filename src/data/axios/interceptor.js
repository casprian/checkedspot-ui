import axios from "axios";

const http = axios.create({
  // withCredentials: true, this statement is used to send cookie by default in request headers.
  withCredentials: true,
  // baseURL: "http://localhost:8080",
    baseURL: "https://api.checkedspot.com",
  headers: {
    "Accept": "application/json",
  },
});


http.interceptors.request.use((config) => {
  return {
    ...config,
    headers: {
      ...config.headers,
    },
  }
});

http.interceptors.response.use(
  (res) => {
    return Promise.resolve(res.data);
  },
  (err) => {
    return Promise.reject(err);
  }
);


const instanceWithToken = axios.create({
  withCredentials: true,
  // baseURL: "http://localhost:8080",
    baseURL: "https://api.checkedspot.com",
  headers: {
    "Accept": "application/json",
  },
});


instanceWithToken.interceptors.request.use((config) => {
  return {
    ...config,
    headers: {
      ...config.headers,
    },
  }
});

instanceWithToken.interceptors.response.use(
  (res) => {
    return Promise.resolve(res.data);
  },
  (err) => {
    return Promise.reject(err);
  }
);


const instanceForPostMultiPart = axios.create({
  withCredentials: true,
  // baseURL: "http://localhost:8080",
    baseURL: "https://api.checkedspot.com",
  headers: {
    "Accept": "application/json",
    "Content-Type": "multipart/form-data",
  },
});

instanceForPostMultiPart.interceptors.request.use((config) => {
  return {
    ...config,
    headers: {
      ...config.headers,
    },
  }
});

instanceForPostMultiPart.interceptors.response.use(
  (res) => {
    return Promise.resolve(res.data);
  },
  (err) => {
    return Promise.reject(err);
  }
);


export default {
  http,
  instanceWithToken,
  instanceForPostMultiPart
}