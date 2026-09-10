import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? "http://localhost:5000",
  timeout: 30000, // AI analysis can take a while
})

export default api
