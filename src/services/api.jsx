import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api-books-store.onrender.com/api/v1/api-docs/#/'
})

export default api
