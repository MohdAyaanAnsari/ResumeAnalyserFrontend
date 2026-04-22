import axios from 'axios'

const api = axios.create({
  baseURL: 'https://resumeanalyserbackend-ixbr.onrender.com/api', // Your backend base URL
  timeout: 30000, // AI analysis can take a while
})

export default api
