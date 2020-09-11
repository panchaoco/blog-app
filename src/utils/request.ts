// @ts-ignore
import Taro from '@tarojs/taro'

interface RequestData {
  state: number,
  message: number,
  data: boolean | any[] | object | null
}

export default function (options): Promise<{[key: string]: any}> {
  const baseUrl = 'http://127.0.0.1:7002'
  console.log('process.env.TARO_ENV', process.env.TARO_ENV)
  if (process.env.TARO_ENV === 'weapp') {

  }
  return new Promise((resolve, reject) => {
    Taro.request({
      ...options,
      url: `${baseUrl}${options.url}`,
      headers: {
        // token: 'Bearer ' + process.env.TARO_ENV === 'weapp' ? Taro.getStorageSync('token') : window.localStorage.getItem('token')
      }
    }).then(res => {
      resolve(res.data)
    })
  })
}
