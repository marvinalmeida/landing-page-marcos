import api from './api'

export const getAllArticles = () => api.get('/articles')

export const postArticles = () => api.post('Articles/post_articles')
