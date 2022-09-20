import axios from 'axios'
import Element from 'element-ui'
import store from './store'
import router from './router'

axios.defaults.baseURL="http://8.210.114.85:8081"
// axios.defaults.baseURL="http://localhost:8081"
//前置拦截
axios.interceptors.request.use(config => {
    return config
})


//后置拦截
axios.interceptors.response.use(response => {
    let res = response.data;
    // console.log("------------------")
    // console.log(res)
    if(res.code === 200){
        return response
    }else{
        Element.Message.error('Login failed',{duration:5000});
        return Promise.reject(response.data.msg)
    }
},error => {
    // console.log("------------------")
    // console.log(error)

    if(error.response.data){
        error.message = error.response.data.msg
    }
    if(error.response.status === 401){
        store.commit("REMOVE_INFO")
        router.push("/")
    }else{
        Element.Message.error(error.message, {duration:5000})
        return Promise.reject(error)
    }
}
)