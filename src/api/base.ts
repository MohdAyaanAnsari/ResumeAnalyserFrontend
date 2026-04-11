import axios from 'axios'

const api = axios.create({
  baseURL: 'http://192.168.1.63:5000/api', // Your backend base URL
  timeout: 30000, // AI analysis can take a while
})

export default api