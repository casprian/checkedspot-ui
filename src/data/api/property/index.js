import * as call from '../../axios/client';



const getProperties = async (params) => {
    try {
        const baseURL = "/property/filtered";
        const response = await call.callWithoutToken('get', baseURL, params);
        return { status: 200, data: response?.data, noOfdata: response?.noOfdata };
    } catch (e) {
        return { error: true, status: e?.response?.status, message: e?.response?.data?.message };
    }
};

const getProperty = async (params) => {
    try {
        const baseURL = "/property";
        const response = await call.callWithoutToken('get', baseURL, params)
        return { status: 200, data: response?.data };
    } catch (e) {
        return { error: true, status: e?.response?.status, message: e?.response?.data?.message };
    }
};

const getPropertyForUser = async (params) => {
    try {
        const baseURL = "/property/user/properties";
        const response = await call.callWithToken('get', baseURL, params)
        return { status: 200, data: response?.data };
    } catch (e) {
        return { error: true, status: e?.response?.status, message: e?.response?.data?.message };
    }
};


const getPropertyImage = async (params) => {
    try {
        const baseURL = '/property/image';
        const response = await call.callWithoutToken('get', baseURL, params);
        return { status: 200, data: response?.data };
    } catch (e) {
        return { error: true, status: e?.response?.status, message: e?.response?.data?.message };
    }
}


const getPropertyVideo = async (params) => {
    try {
        const baseURL = '/property/video';
        const response = await call.callWithoutToken('get', baseURL, params);
        return { status: 200, data: response?.data };
    } catch (e) {
        return { error: true, status: e?.response?.status, message: e?.response?.data?.message };
    }
}


const getPropertyDocument = async (params) => {
    try {
        const baseURL = '/property/document';
        const response = await call.callWithoutToken('get', baseURL, params);
        return { status: 200, data: response?.data };
    } catch (e) {
        return { error: true, status: e?.response?.status, message: e?.response?.data?.message };
    }
}

const getRecentProperties = async (params) => {
    try {
        const baseURL = '/property/recent';
        const response = await call.callWithoutToken('get', baseURL, params);
        return { status: 200, data: response?.data };
    } catch (e) {
        return { error: true, status: e?.response?.status, message: e?.response?.data?.message };
    }
}

const createProperty = async (params) => {
    try {
        const baseURL = "/property/individual";
        const response = await call.callWithTokenForMultiPart('post', baseURL, params);
        return { status: 200, data: response }
    } catch (e) {
        return { error: true, status: e?.response?.status, message: e?.response?.data?.message }
    }
}

const uploadDocument = async (params) => {
    try {
        const baseURL = "/property/document/upload";
        const response = await call.callWithTokenForMultiPart('post', baseURL, params);
        return { status: 200, data: response }
    } catch (e) {
        return { error: true, status: e?.response?.status, message: e?.response?.data?.message }
    }
}

const uploadImage = async (params) => {
    try {
        const baseURL = "/property/gallery/upload";
        const response = await call.callWithTokenForMultiPart('post', baseURL, params);
        return { status: 200, data: response }
    } catch (e) {
        return { error: true, status: e?.response?.status, message: e?.response?.data?.message }
    }
}

const uploadVideo = async (params) => {
    try {
        const baseURL = "/property/video/upload";
        const response = await call.callWithTokenForMultiPart('post', baseURL, params);
        return { status: 200, data: response }
    } catch (e) {
        return { error: true, status: e?.response?.status, message: e?.response?.data?.message }
    }
}

const deleteProperty = async (params) => {
    try {
        const baseURL = "/property";
        const response = await call.callWithToken('delete', baseURL, params);
        return { status: 200, data: response }
    } catch (e) {
        return { error: true, status: e?.response?.status, message: e?.response?.data?.message }
    }
}

export default {
    getProperties,
    getProperty,
    getPropertyForUser,
    getPropertyImage,
    getPropertyVideo,
    getPropertyDocument,
    getRecentProperties,
    createProperty,
    uploadDocument,
    uploadImage,
    uploadVideo,
    deleteProperty,
};
