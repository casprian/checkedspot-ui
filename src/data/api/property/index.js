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
        const response = await call.callWithoutToken('get', baseURL, params);
        return { status: 200, data: response?.data };
    } catch (e) {
        return { error: true, status: e?.response?.status, message: e?.response?.data?.message };
    }
};

const getConstructionPackages = async (params) => {
    try {
        const baseURL= '/property/construction/package';
        const response = await call.callWithoutToken('get', baseURL, params);

        return { status: 200, data: response?.data };
    } catch (e) {
        return { error: true, status: e?.response?.status, message: e?.response?.data?.message }
    }
}

const getPropertyAgents = async (params) => {
    try {
        const baseURL = "/property/agent";
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
        const baseURL = "/property";
        const response = await call.callWithToken('post', baseURL, params);
        return { status: 200, data: response }
    } catch (e) {
        return { error: true, status: e?.response?.status, message: e?.response?.data?.message }
    }
}

const addImage = async (params) => {
    try {
        const baseURL = "/property/image";
        const response = await call.callWithToken('post', baseURL, params);
        return { status: 200, data: response }
    } catch (e) {
        return { error: true, status: e?.response?.status, message: e?.response?.data?.message }
    }
}

const addVideo = async (params) => {
    try {
        const baseURL = "/property/video";
        const response = await call.callWithToken('post', baseURL, params);
        return { status: 200, data: response }
    } catch (e) {
        return { error: true, status: e?.response?.status, message: e?.response?.data?.message }
    }
}

const addDocument = async (params) => {
    try {
        const baseURL = "/property/document";
        const response = await call.callWithToken('post', baseURL, params);
        return { status: 200, data: response }
    } catch (e) {
        return { error: true, status: e?.response?.status, message: e?.response?.data?.message }
    }
}

const allocateNewAgent = async (params) => {
    try {
        const baseURL = "/property/allocate/agent";
        const response = await call.callWithToken('post', baseURL, params);
        return { status: 200, data: response }
    } catch (e) {
        return { error: true, status: e?.response?.status, message: e?.response?.data?.message }
    }
}

const allocateNewPrimaryAgent = async (params) => {
    try {
        const baseURL = "/property/allocate/primary/agent";
        const response = await call.callWithToken('post', baseURL, params);
        return { status: 200, data: response }
    } catch (e) {
        return { error: true, status: e?.response?.status, message: e?.response?.data?.message }
    }
}

const removeAgent = async (params) => {
    try {
        const baseURL = "/property/remove/agent";
        const response = await call.callWithToken('post', baseURL, params);
        return { status: 200, data: response }
    } catch (e) {
        return { error: true, status: e?.response?.status, message: e?.response?.data?.message }
    }
}

const uploadImage = async (params) => {
    try {
        const baseURL = "/property/upload/image";
        const response = await call.callWithTokenForMultiPart('post', baseURL, params);
        return { status: 200, data: response }
    } catch (e) {
        return { error: true, status: e?.response?.status, message: e?.response?.data?.message }
    }
}

const uploadVideo = async (params) => {
    try {
        const baseURL = "/property/upload/video";
        const response = await call.callWithTokenForMultiPart('post', baseURL, params);
        return { status: 200, data: response }
    } catch (e) {
        return { error: true, status: e?.response?.status, message: e?.response?.data?.message }
    }
}

const uploadDocument = async (params) => {
    try {
        const baseURL = "/property/upload/document";
        const response = await call.callWithTokenForMultiPart('post', baseURL, params);
        return { status: 200, data: response }
    } catch (e) {
        return { error: true, status: e?.response?.status, message: e?.response?.data?.message }
    }
}

const updateDetails = async (params) => {
    try {
        const baseURL = "/property/details";
        const response = await call.callWithToken('put', baseURL, params);
        return { status: 200, data: response }
    } catch (e) {
        return { error: true, status: e?.response?.status, message: e?.response?.data?.message }
    }
}

const updateImage = async (params) => {
    try {
        const baseURL = "/property/image";
        const response = await call.callWithToken('put', baseURL, params);
        return { status: 200, data: response }
    } catch (e) {
        return { error: true, status: e?.response?.status, message: e?.response?.data?.message }
    }
}

const updateVideo = async (params) => {
    try {
        const baseURL = "/property/video";
        const response = await call.callWithToken('put', baseURL, params);
        return { status: 200, data: response }
    } catch (e) {
        return { error: true, status: e?.response?.status, message: e?.response?.data?.message }
    }
}

const updateDocument = async (params) => {
    try {
        const baseURL = "/property/document";
        const response = await call.callWithToken('put', baseURL, params);
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

const deleteImage = async (params) => {
    try {
        const baseURL = "/property/image";
        const response = await call.callWithToken('delete', baseURL, params);
        return { status: 200, data: response }
    } catch (e) {
        return { error: true, status: e?.response?.status, message: e?.response?.data?.message }
    }
}

const deleteVideo = async (params) => {
    try {
        const baseURL = "/property/video";
        const response = await call.callWithToken('delete', baseURL, params);
        return { status: 200, data: response }
    } catch (e) {
        return { error: true, status: e?.response?.status, message: e?.response?.data?.message }
    }
}

const deleteDocument = async (params) => {
    try {
        const baseURL = "/property/document";
        const response = await call.callWithToken('delete', baseURL, params);
        return { status: 200, data: response }
    } catch (e) {
        return { error: true, status: e?.response?.status, message: e?.response?.data?.message }
    }
}


export default {
    getProperties,
    getProperty,
    getConstructionPackages,
    getPropertyAgents,
    getPropertyForUser,
    getPropertyImage,
    getPropertyVideo,
    getPropertyDocument,
    getRecentProperties,
    createProperty,
    addImage,
    addVideo,
    addDocument,
    allocateNewAgent,
    allocateNewPrimaryAgent,
    removeAgent,
    uploadImage,
    uploadVideo,
    uploadDocument,
    updateDetails,
    updateImage,
    updateVideo,
    updateDocument,
    deleteProperty,
    deleteImage,
    deleteVideo,
    deleteDocument,
};
