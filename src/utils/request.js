import axios from 'axios'

// create an axios instance
const service = axios.create({
  timeout: 5 * 1000 // 应对网络不好的情况，请求超时时间设置为 5 秒
})

// 请求拦截器（request interceptor），为每个请求附加 token
service.interceptors.request.use(
  config => {
    // 让每个请求携带token
    // const token = getToken()
    // if (token) {
    //   config.headers['_authorization'] = token
    // }
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// 响应拦截器（respone interceptor）
service.interceptors.response.use(
  /**
   * 下面的注释为通过在response里，自定义code来标示请求状态
   * 当code返回如下情况则说明权限有问题，登出并返回到登录页
   * 如想通过xmlhttprequest来状态码标识 逻辑可写在下面error中
   * 以下代码均为样例，请结合自生需求加以修改，若不需要，则可删除
   */
  // response => {
  //   const res = response.data
  //   if (res.code !== 20000) {
  //     Message({
  //       message: res.message,
  //       type: 'error',
  //       duration: 5 * 1000
  //     })
  //     // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
  //     if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
  //       // 请自行在引入 MessageBox
  //       // import { Message, MessageBox } from 'element-ui'
  //       MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
  //         confirmButtonText: '重新登录',
  //         cancelButtonText: '取消',
  //         type: 'warning'
  //       }).then(() => {
  //         store.dispatch('FedLogOut').then(() => {
  //           location.reload() // 为了重新实例化vue-router对象 避免bug
  //         })
  //       })
  //     }
  //     return Promise.reject('error')
  //   } else {
  //     return response.data
  //   }
  // },
  response => response,
  error => {
    console.log('error:' + error)
    if (error.response) {
      switch (error.response.status) {
        case 403: {
          // 返回 403 清除token信息并跳转到登录页面
          window.alert('鉴权失败！')
          // 移除当前 token
          // 重新请求 token
        }
      }
    } else {
      window.alert('请求异常')
    }
    return Promise.reject(error)
  }
)

export default service
