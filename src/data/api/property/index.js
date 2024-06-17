import * as call from '../../axios/client';


// NEW V2 DONE
const getProperties = async (params) => {
    try {
        const baseURL = "/v2/property/filtered";
        const response = await call.callWithoutToken('get', baseURL, params);
        return { status: 200, data: response?.data, noOfdata: response?.noOfdata };
    } catch (e) {
        return { error: true, status: e?.response?.status, message: e?.response?.data?.message };
    }
}

// NEW V2 DONE
const getProperty = async (params) => {
    try {
        const baseURL = "/v2/property";
        const response = await call.callWithoutToken('get', baseURL, params);
        return { status: 200, data: response?.data };
    } catch (e) {
        return { error: true, status: e?.response?.status, message: e?.response?.data?.message };
    }
}

// NEW V2 DONE
const getPropertyImage = async (params) => {
    try {
        const baseURL = '/v2/property/image';
        const response = await call.callWithoutToken('get', baseURL, params);
        return { status: 200, data: response?.data };
    } catch (e) {
        return { error: true, status: e?.response?.status, message: e?.response?.data?.message };
    }
}

// NEW V2 DONE
const getPropertyVideo = async (params) => {
    try {
        const baseURL = '/v2/property/video';
        const response = await call.callWithoutToken('get', baseURL, params);
        return { status: 200, data: response?.data };
    } catch (e) {
        return { error: true, status: e?.response?.status, message: e?.response?.data?.message };
    }
}

// NEW V2 DONE
const getPropertyDocument = async (params) => {
    try {
        const baseURL = '/v2/property/document';
        const response = await call.callWithoutToken('get', baseURL, params);
        return { status: 200, data: response?.data };
    } catch (e) {
        return { error: true, status: e?.response?.status, message: e?.response?.data?.message };
    }
}

// NEW V2 DONE
const getPropertyAgents = async (params) => {
    try {
        const baseURL = "/v2/property/agent";
        const response = await call.callWithoutToken('get', baseURL, params)
        return { status: 200, data: response?.data };
    } catch (e) {
        return { error: true, status: e?.response?.status, message: e?.response?.data?.message };
    }
}

// NEW V2 DONE
const getRecentProperties = async (params) => {
    try {
        const baseURL = '/v2/property/recent';
        const response = await call.callWithoutToken('get', baseURL, params);
        return { status: 200, data: response?.data };
    } catch (e) {
        return { error: true, status: e?.response?.status, message: e?.response?.data?.message };
    }
}

// NEW V2 DONE
const getPropertiesForUser = async (params) => {
    try {
        const baseURL = "/v2/property/user/properties";
        const response = await call.callWithToken('get', baseURL, params)
        return { status: 200, data: response?.data };
    } catch (e) {
        return { error: true, status: e?.response?.status, message: e?.response?.data?.message };
    }
}

// NEW V2 DONE
const getUserProperty = async (params) => {
    try {
        const baseURL = "/v2/property/user/property";
        const response = await call.callWithToken('get', baseURL, params);
        return { status: 200, data: response?.data };
    } catch (e) {
        return { error: true, status: e?.response?.status, message: e?.response?.data?.message };
    }
}

// NEW V2 DONE
const postProperty = async (params) => {
    try {
        const baseURL = "/v2/property";
        const response = await call.callWithToken('post', baseURL, params);
        return { status: 200, data: response }
    } catch (e) {
        return { error: true, status: e?.response?.status, message: e?.response?.data?.message }
    }
}

// NEW V2 DONE
const uploadImage = async (params) => {
    try {
        const baseURL = "/v2/property/upload/image";
        const response = await call.callWithTokenForMultiPart('post', baseURL, params);
        return { status: 200, data: response }
    } catch (e) {
        return { error: true, status: e?.response?.status, message: e?.response?.data?.message }
    }
}

// NEW V2 DONE
const uploadVideo = async (params) => {
    try {
        const baseURL = "/v2/property/upload/video";
        const response = await call.callWithTokenForMultiPart('post', baseURL, params);
        return { status: 200, data: response }
    } catch (e) {
        return { error: true, status: e?.response?.status, message: e?.response?.data?.message }
    }
}

// NEW V2 DONE
const uploadDocument = async (params) => {
    try {
        const baseURL = "/v2/property/upload/document";
        const response = await call.callWithTokenForMultiPart('post', baseURL, params);
        return { status: 200, data: response }
    } catch (e) {
        return { error: true, status: e?.response?.status, message: e?.response?.data?.message }
    }
}

// NEW V2 DONE
const addImage = async (params) => {
    try {
        const baseURL = "/v2/property/image";
        const response = await call.callWithToken('post', baseURL, params);
        return { status: 200, data: response }
    } catch (e) {
        return { error: true, status: e?.response?.status, message: e?.response?.data?.message }
    }
}

// NEW V2 DONE
const addVideo = async (params) => {
    try {
        const baseURL = "/v2/property/video";
        const response = await call.callWithToken('post', baseURL, params);
        return { status: 200, data: response }
    } catch (e) {
        return { error: true, status: e?.response?.status, message: e?.response?.data?.message }
    }
}

// NEW V2 DONE
const addDocument = async (params) => {
    try {
        const baseURL = "/v2/property/document";
        const response = await call.callWithToken('post', baseURL, params);
        return { status: 200, data: response }
    } catch (e) {
        return { error: true, status: e?.response?.status, message: e?.response?.data?.message }
    }
}

// NEW V2 DONE
const allocateNewAgent = async (params) => {
    try {
        const baseURL = "/v2/property/allocate/agent";
        const response = await call.callWithToken('post', baseURL, params);
        return { status: 200, data: response }
    } catch (e) {
        return { error: true, status: e?.response?.status, message: e?.response?.data?.message }
    }
}

// NEW V2 DONE
const allocateNewPrimaryAgent = async (params) => {
    try {
        const baseURL = "/v2/property/allocate/primary/agent";
        const response = await call.callWithToken('post', baseURL, params);
        return { status: 200, data: response }
    } catch (e) {
        return { error: true, status: e?.response?.status, message: e?.response?.data?.message }
    }
}

// NEW V2 DONE
const removeAgent = async (params) => {
    try {
        const baseURL = "/v2/property/remove/agent";
        const response = await call.callWithToken('post', baseURL, params);
        return { status: 200, data: response }
    } catch (e) {
        return { error: true, status: e?.response?.status, message: e?.response?.data?.message }
    }
}

// NEW V2 DONE
const updateDetails = async (params) => {
    try {
        const baseURL = "/v2/property/details";
        const response = await call.callWithToken('put', baseURL, params);
        return { status: 200, data: response }
    } catch (e) {
        return { error: true, status: e?.response?.status, message: e?.response?.data?.message }
    }
}

// NEW V2 DONE
const updateImage = async (params) => {
    try {
        const baseURL = "/v2/property/image";
        const response = await call.callWithToken('put', baseURL, params);
        return { status: 200, data: response }
    } catch (e) {
        return { error: true, status: e?.response?.status, message: e?.response?.data?.message }
    }
}

// NEW V2 DONE
const updateVideo = async (params) => {
    try {
        const baseURL = "/v2/property/video";
        const response = await call.callWithToken('put', baseURL, params);
        return { status: 200, data: response }
    } catch (e) {
        return { error: true, status: e?.response?.status, message: e?.response?.data?.message }
    }
}

// NEW V2 DONE
const updateDocument = async (params) => {
    try {
        const baseURL = "/v2/property/document";
        const response = await call.callWithToken('put', baseURL, params);
        return { status: 200, data: response }
    } catch (e) {
        return { error: true, status: e?.response?.status, message: e?.response?.data?.message }
    }
}

// NEW V2 DONE
const deleteProperty = async (params) => {
    try {
        const baseURL = "/v2/property";
        const response = await call.callWithToken('delete', baseURL, params);
        return { status: 200, data: response }
    } catch (e) {
        return { error: true, status: e?.response?.status, message: e?.response?.data?.message }
    }
}

// NEW V2 DONE
const deleteImage = async (params) => {
    try {
        const baseURL = "/v2/property/image";
        const response = await call.callWithToken('delete', baseURL, params);
        return { status: 200, data: response }
    } catch (e) {
        return { error: true, status: e?.response?.status, message: e?.response?.data?.message }
    }
}

// NEW V2 DONE
const deleteVideo = async (params) => {
    try {
        const baseURL = "/v2/property/video";
        const response = await call.callWithToken('delete', baseURL, params);
        return { status: 200, data: response }
    } catch (e) {
        return { error: true, status: e?.response?.status, message: e?.response?.data?.message }
    }
}

// NEW V2 DONE
const deleteDocument = async (params) => {
    try {
        const baseURL = "/v2/property/document";
        const response = await call.callWithToken('delete', baseURL, params);
        return { status: 200, data: response }
    } catch (e) {
        return { error: true, status: e?.response?.status, message: e?.response?.data?.message }
    }
}


export default {
    getProperties,
    getProperty,
    getPropertyImage,
    getPropertyVideo,
    getPropertyDocument,
    getPropertyAgents,
    getUserProperty,
    postProperty,
    uploadImage,
    uploadVideo,
    uploadDocument,
    addImage,
    addVideo,
    addDocument,
    updateDetails,
    updateImage,
    updateVideo,
    updateDocument,

    
    // getConstructionPackages,
    getPropertiesForUser,
    getRecentProperties,
    allocateNewAgent,
    allocateNewPrimaryAgent,
    removeAgent,
    deleteProperty,
    deleteImage,
    deleteVideo,
    deleteDocument,
};
