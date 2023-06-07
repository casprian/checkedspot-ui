import * as call from "../../axios/client";

const login = async (params) => {
    try {
        const URL = "/user/login";
        const response = await call.callWithoutToken('post',URL,params)
        return {status: 200, data: response};
    }catch(e) {
        return {error: true, status: e?.response?.status, message: e?.response?.data?.message};
    }
};

const signup = async (params) => {
    try {
        const URL = "/user/register";
        const response = await call.callWithoutToken('post',URL,params)
        return {status: 200, data: response};
    }catch(e) {
        return {error: true, status: e?.response?.status, message: e?.response?.data?.message};
    }
};

const sendEnquiry = async (params) => {
    try {
        const URL = "user/sendEnquiry";
        const response = await call.callWithoutToken('post',URL,params)
        return {status: 200, data: response};
    }catch(e) {
        return {error: true, status: e?.response?.status, message: e?.response?.data?.message};
    }
}

const getAuthorizationUrl = async (params) => {
    try {
        const URL = "/user/getAuthorizationUrl";
        const response = await call.callWithoutToken('get',URL,params);
        return {status: 200, data: response};
    }catch(e) {
        return {error: true, status: e?.response?.status, message: e?.response?.data?.message};
    }
}

export default {
    login,
    signup,
    sendEnquiry,
    getAuthorizationUrl
};
