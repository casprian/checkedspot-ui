import * as call from '../../axios/client';

const getConstructionPackages = async (params) => {
    try {
        const baseURL= '/package/city';
        const response = await call.callWithoutToken('get', baseURL, params);

        return { status: 200, data: response?.data };
    } catch (e) {
        return { error: true, status: e?.response?.status, message: e?.response?.data?.message }
    }
}

export default {
    getConstructionPackages
}