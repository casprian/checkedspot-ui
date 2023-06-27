import * as call from "../../axios/client";

const getOTP = async (params)  => {
    try {
        const baseURL = "/email/otp";
        const response = await call.callWithToken('get', baseURL, params);
        return {status: 200, data: response}
    } catch (e) {
        return {error: true, status: e?.response?.status, message: e?.response?.data?.message}
    }
}

export default {
    getOTP,
};