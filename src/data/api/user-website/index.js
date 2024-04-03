import * as call from "../../axios/client";


const uploadLogo = async (params) => {
    try {
        const URL = "/website/logo/upload";
        const response = await call.callWithTokenForMultiPart('post',URL,params)
        return {status: 200, data: response};
    }catch(e) {
        return {error: true, status: e?.response?.status, message: e?.response?.data?.message};
    }
};

const createUserWebsite = async (params) => {
    try {
        const URL = "/website";
        const response = await call.callWithToken('post',URL,params)
        return {status: 200, data: response};
    }catch(e) {
        return {error: true, status: e?.response?.status, message: e?.response?.data?.message};
    }
};



export default {
    uploadLogo,
    createUserWebsite,
};
