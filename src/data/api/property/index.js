import call from "../../axios/client";

const getProperties = async (params) => {
    try {
        const baseURL = "/property/getAllProperties";
        const response = await call('get',baseURL,params);
        return {status: 200, data: response?.data, noOfdata: response?.noOfdata};
    }catch(e) {
        return {error: true, status: e?.response?.status, message: e?.response?.data?.message};
    }
};

const getProperty = async (params) => {
    try {
        const baseURL = "/property";
        const response = await call('get',baseURL,params)
        return {status: 200, data: response?.data};
    }catch(e) {
        console.log("lajsdkjflasdf: ", e)
        return {error: true, status: e?.response?.status, message: e?.response?.data?.message};
    }
};

const createProperty = async (params) => {
    try {
        const baseURL = "/property/individual";
        const response = await call('post', baseURL, params);
        return {status: 200, data: response?.data}
    } catch(e) {
        return {error: true, status: e?.response?.status, message: e?.response?.data?.message}
    }
}

export default {
    getProperties,
    getProperty,
    createProperty,
};
