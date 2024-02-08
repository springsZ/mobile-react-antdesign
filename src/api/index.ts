import axios from "axios"
import { loadingState } from "@/store/loading"
import { useSetRecoilState } from "recoil"

axios.defaults.baseURL = "http://localhost:3000/api"
const setLoading = useSetRecoilState(loadingState)

// 请求拦截器
axios.interceptors.request.use((config) => {
  setLoading(true)
  //加入token或其他一些操作
  const token = localStorage.getItem("token")
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// 相应拦截器
axios.interceptors.response.use((res) => {
  setLoading(false)
  return res
})
