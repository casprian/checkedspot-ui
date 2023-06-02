import call from "../../axios/client";

const getAgent = async (params)  => {
    try {
        const baseURL = "/agent";
        const response = await call('get', baseURL, params);
        return {status: 200, data: response?.data}
    } catch (e) {
        return {error: true, status: e?.response?.status, message: e?.response?.data?.message}
    }
}

export default {
    getAgent,
};
