import api from './api'

export const getAllArticles = () => api.get('/Articles')

export const postArticles = () => api.post('/Articles/post_Articles')
