import * as call from "../../axios/client";

const getLeads = async (params) => {
    try {
        const URL = "/lead/all/checkedspot";
        const response = await call.callWithToken('get',URL,params);
        return {status: 200, data: response};
    }catch(e) {
        return {error: true, status: e?.response?.status, message: e?.response?.data?.message};
    }
}

const getLead = async (params) => {
    try {
        const URL = "/lead/checkedspot";
        const response = await call.callWithToken('get',URL,params);
        return {status: 200, data: response};
    }catch(e) {
        return {error: true, status: e?.response?.status, message: e?.response?.data?.message};
    }
}

const addLead = async (params) => {
    try {
        const URL = "/lead/checkedspot";
        const response = await call.callWithToken('post',URL,params);
        return {status: 200, data: response};
    }catch(e) {
        return {error: true, status: e?.response?.status, message: e?.response?.data?.message};
    }
}

export default {
    getLeads,
    getLead,
    addLead,
}