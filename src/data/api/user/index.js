import * as call from "../../axios/client";


const getUserData = async (params) => {
    try {
        const URL = "/user";
        const response = await call.callWithoutToken('get',URL,params)
        return {status: 200, data: response};
    }catch(e) {
        return {error: true, status: e?.response?.status, message: e?.response?.data?.message};
    }
};

const isUserExist = async (params) => {
    try {
        const URL = "/user/exist";
        const response = await call.callWithoutToken('get', URL, params);
        return {status: 200, data: response};
    }catch(e) {
        return {error: true, status: e?.response?.status, message: e?.response?.data?.message}
    }
}

const updatePassword = async (params) => {
    try {
        const URL = "/user/password/update";
        const response = await call.callWithoutToken('put', URL, params);
        return {status: 200, data: response};
    }catch(e) {
        return {error: true, status: e?.response?.status, message: e?.response?.data?.message}
    }
}

const resetPassword = async (params) => {
    try {
        const URL = "/user/password/reset";
        const response = await call.callWithoutToken('put', URL, params);
        return {status: 200, data: response};
    }catch(e) {
        return {error: true, status: e?.response?.status, message: e?.response?.data?.message}
    }
}
 
const login = async (params) => {
    try {
        const URL = "/user/login";
        const response = await call.callWithoutToken('post',URL,params);
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
        const response = await call.callWithoutToken('post',URL,params);
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

const updateProfile = async (params) => {
    try {
        const URL = "/user/update/profile";
        const response = await call.callWithToken('post',URL,params);
        return {status: 200, data: response};
    }catch(e) {
        return {error: true, status: e?.response?.status, message: e?.response?.data?.message};
    }
}

const updateProfilePicture = async (params) => {
    try {
        const URL = "/user/update/profile/picture";
        const response = await call.callWithTokenForMultiPart('post',URL,params);
        return {status: 200, data: response};
    }catch(e) {
        return {error: true, status: e?.response?.status, message: e?.response?.data?.message};
    }
}

export default {
    getUserData,
    isUserExist,
    updatePassword,
    resetPassword,
    login,
    signup,
    sendEnquiry,
    getAuthorizationUrl,
    updateProfile,
    updateProfilePicture
};
