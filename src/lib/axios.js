import axios from 'axios'
import { baseURL } from '@/config'
class HttpRequest {
    constructor(baseUrl = baseURL) {
        this.baseUrl = baseUrl
        this.queue = {}
    }
    getInsideConfig() {
        const config = {
            baseURL: this.baseUrl,
            headers: {

            }
        }
        return config
    }
    interceptors(instance) {
        instance.interceptors.request.use(config => {
            // 添加全局的loading...
            // Spin.show()
            return config
        }, err => {
            return Promise.reject(err)
        })
        instance.interceptors.response.use(res => {
            console.log(res)
            return res
        }, err => {
            return Promise.reject(err)
        })
    }
    request(options) {
        const instance = axios.create()
        options = Object.assign(this.getInsideConfig(), options)
        this.interceptors(instance)
        return instance(options)
    }
}

export default HttpRequest