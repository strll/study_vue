// 封装axios做请求拦截和响应拦截

// 导入axios模块
import axios from "axios";
// element-plus 对应的弹窗组件
import { ElMessage } from 'element-plus'

// 创建axios实例
// baseURL 通过axios实例发送请求时默认添加的请求路径前缀
// timeout 请求超时时间
const instance = axios.create({
  baseURL:"/api",
  timeout:5000,
})

// 给axios实例对象添加请求拦截和响应拦截

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // 设置用户登录标识，每次发送请求时携带已经登录的标识
  return config;
}, function (error) {
  // 对请求错误做些什么
  // 前端异步操作终止操作
  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // response 完整的http响应信息
  // response.data 获取api接口返回的数据【R[code,msg,data]】
  const res = response.data  //res ->【R[code,msg,data]】
  if(res.code == 200){//  R对象中的code为200
    return res;
  }else{//R对象中的code不为200
    console.log(res.msg)
    // 弹窗显示异常信息
    showError(res)
  }
}, function (error) { // 不属于后台代码异常的相关异常
  console.log(error)
  const msg = error.message || error
  showError( { msg:msg }  )
  return Promise.reject(error);
});

const showError = (error)=>{
  //使用组件ElMessage
  ElMessage({
    message: error.msg || error.message || "请求异常··",
    type: 'error',
    duration : 3000
  })
}

// 导出当前模块中的对象
export default instance;