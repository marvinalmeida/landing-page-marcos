import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api-articles-node.cyclic.app/api/v1/'
})

export default api
