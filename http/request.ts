import axios, {AxiosRequestConfig, AxiosResponse} from "axios";

const instance = axios.create({
    baseURL: "https://mock.mengxuegu.com/mock/6475a3074f1a742ed4dbb87c/wei", // 域名配置
    withCredentials: true, // 跨域请求时是否需要使用凭证
    timeout: 30000, // 请求超时时间
});

// 成功处理函数

function successHandle(response: AxiosResponse) {
    switch (response.status) {
        case 200:
            //
            return response.data;
        // ....
        default:
            return;
    }
}

axios.interceptors.request.use(function (config: AxiosResponse) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default Api;