import axios, { AxiosInstance, AxiosResponse } from 'axios';

// Define API base URL and authentication header
// const baseURL = 'http://';
const baseURL = 'http://127.0.0.1:4000';

// Create an instance of Axios with base configuration
const api: AxiosInstance = axios.create({
    baseURL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Axios request interceptor for adding authentication token to headers
// api.interceptors.request.use((config: any) => {
//     if (typeof window !== 'undefined') {
//         let api_key1 = sessionStorage.getItem('api_key');
//         let api_secret1 = sessionStorage.getItem('api_secret');
//         if (!api_key1 || !api_secret1) {
//             return null;
//         }
//         config.headers['Authorization'] = token ${api_key1}:${api_secret1};
//     }
//     return config;
// }, (error:any) => {
//     return Promise.reject(error);
// });

// Handle API error response and show error messages
const handleApiError = (error: any): string => {


    if (error.response) {
        console.error('API Error:', error.response.status, error.response.data);
        if (error.response.data && error.response.data.error) {
            return error.response.data.error;
        }
        return 'API Error';
    } else if (error.request) {
        console.error('Network Error:', error.request);
        return 'Network Error';
    } else {
        console.error('Error:', error.message);
        return error.message;
    }
};

// Define reusable HTTP request functions with type annotations
const get = async <T>(endpoint: string, params = {}): Promise<T> => {
    try {
        const response: AxiosResponse<T> = await api.get(endpoint, { params });
        return response.data;
    } catch (error) {
        throw handleApiError(error);
    }
};


export interface PostPutOpt {
    formData?: boolean
}

// Define the response and error types for your API calls
interface ApiResponse<T> {
    data: T
}

export async function post<T>(endpoint: string, data: any, opt?: PostPutOpt): Promise<T | any> {
    try {
        if (opt?.formData) {
            api.interceptors.request.use(config => {
                config.headers['Content-Type'] = 'multipart/form-data'
                return config
            })
        }
        const response: AxiosResponse<ApiResponse<T>> = await api.post(endpoint, data)
        return response.data as any
    } catch (error: any) {
        console.log(error)

        throw handleApiError(error)
    }
}


const put = async <T>(endpoint: string, data = {}): Promise<T> => {
    try {
        const response: AxiosResponse<T> = await api.put(endpoint, data);
        return response.data;
    } catch (error) {
        throw handleApiError(error);
    }
};

const patch = async <T>(endpoint: string, data = {}): Promise<T> => {
    try {
        const response: AxiosResponse<T> = await api.patch(endpoint, data);
        return response.data;
    } catch (error) {
        throw handleApiError(error);
    }
};

const del = async <T>(endpoint: string): Promise<T> => {
    try {
        const response: AxiosResponse<T> = await api.delete(endpoint);
        return response.data;
    } catch (error) {
        throw handleApiError(error);
    }
};

export { get, put, patch, del };