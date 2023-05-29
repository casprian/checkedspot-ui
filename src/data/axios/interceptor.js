import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:8080",
  // baseURL: "https://apicheckedspot.azurewebsites.net",
  headers: {
    Accept: "application/json",
  },
});


http.interceptors.request.use((config) => {
  return {
    ...config,
    headers: {
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



const instanceWithToken = axios.create({
  baseURL: "https://apicheckedspot.azurewebsites.net",
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${sessionStorage.getItem('token')}`
  },
});


instanceWithToken.interceptors.request.use((config) => {
  return {
    ...config,
    headers: {
      ...config.headers,
    },
  }
  // return config;
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
  baseURL: "https://apicheckedspot.azurewebsites.net",
  headers: {
    "Accept": "application/json",
    "Content-Type": "multipart/form-data",
    "Authorization": `Bearer ${sessionStorage.getItem('token')}`
  },
});

instanceForPostMultiPart.interceptors.request.use((config) => {
  return {
    ...config,
    headers: {
      ...config.headers,
    },
  }
  // return config;
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