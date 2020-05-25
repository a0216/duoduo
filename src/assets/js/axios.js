import axios from 'axios';
// import Loading from 'utils/loading';

axios.defaults.timeout = 10 * 1000;
axios.defaults.baseURL = 'https://zhongjingcha.yameijian.cn/api/';
axios.defaults.retry = 2; //重试次数
axios.defaults.retryDelay = 1000; //重试延时
axios.defaults.shouldRetry = error => true; //重试条件，默认只要是错误都需要重试
// axios.defaults.baseURL = '/api'
axios.defaults.headers.post['Content-Type'] = 'application/json';

//设置拦截器 重试机制
axios.interceptors.response.use(undefined, err => {
    var config = err.config;
    // console.log('errConfig ', config);
    // 判断是否配置了重试
    if (!config || !config.retry) return Promise.reject(err);

    if (!config.shouldRetry || typeof config.shouldRetry != 'function') {
        return Promise.reject(err);
    }

    //判断是否满足重试条件
    if (!config.shouldRetry(err)) {
        return Promise.reject(err);
    }

    // 设置重置次数，默认为0
    config.__retryCount = config.__retryCount || 0;

    // 判断是否超过了重试次数
    if (config.__retryCount >= config.retry) {
        return Promise.reject(err);
    }

    //重试次数自增
    config.__retryCount += 1;

    //延时处理
    var backoff = new Promise(function(resolve) {
        setTimeout(function() {
            resolve();
        }, config.retryDelay || 1);
    });

    //重新发起axios请求
    return backoff.then(function() {
        return axios(config);
    });
});

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function fetch(url, params = {}, headers = {}) {
    return new Promise((resolve, reject) => {
        axios
            .get(url, {
                params: params,
                headers: headers
            })
            .then(response => {
                resolve(response.data);
                // reject(err);
            })
            .catch(err => {
                console.info(err);
                reject(err);
            });
    });
}
/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data = {}, headers = {}) {
    let originHeader = {
        //'Content-Type': 'application/json'
        'Content-Type': 'application/x-www-form-urlencoded'
    };
    let finalHeaders = Object.assign(originHeader, headers);
    return new Promise((resolve, reject) => {
        axios({
            method: 'post',
            url: url,
            headers: finalHeaders,
            data: data,
            transformRequest: [
                function(data) {
                    if (typeof data === 'string') {
                        return data;
                    }
                    if (finalHeaders['Content-Type'] === 'application/json') {
                        return JSON.stringify(data);
                    }
                    let ret = '';
                    for (let it in data) {
                        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
                    }
                    return ret;
                }
            ]
        }).then(
            response => {
                resolve(response.data);
            },
            err => {
                reject(err);
            }
        );
    });
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.patch(url, data).then(
            response => {
                resolve(response.data);
            },
            err => {
                reject(err);
            }
        );
    });
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.put(url, data).then(
            response => {
                resolve(response.data);
            },
            err => {
                reject(err);
            }
        );
    });
}

/**
 * 封装delete请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function delet(url, data = {}, headers = {}) {
    return new Promise((resolve, reject) => {
        axios
            .delete(url, {
                params: data,
                headers: headers
            })
            .then(
                response => {
                    resolve(response.data);
                },
                err => {
                    reject(err);
                }
            );
    });
}
