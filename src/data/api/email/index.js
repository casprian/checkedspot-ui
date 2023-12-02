import * as call from "../../axios/client";

const sendOTP = async (params)  => {
    try {
        const baseURL = "/email/otp";
        const response = await call.callWithToken('post', baseURL, params);
        return {status: 200, data: response}
    } catch (e) {
        return {error: true, status: e?.response?.status, message: e?.response?.data?.message}
    }
}

const verifyEmail = async (params)  => {
    try {
        const baseURL = "/email/verifyEmail";
        const response = await call.callWithToken('post', baseURL, params);
        return {status: 200, data: response}
    } catch (e) {
        return {error: true, status: e?.response?.status, message: e?.response?.data?.message}
    }
}

const sendEnquiry = async (params)  => {
    try {
        const baseURL = "/email/user/enquiry";
        const response = await call.callWithToken('post', baseURL, params);
        return {status: 200, data: response}
    } catch (e) {
        return {error: true, status: e?.response?.status, message: e?.response?.data?.message}
    }
}

export default {
    sendOTP,
    verifyEmail,
    sendEnquiry
};