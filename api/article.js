import { request } from '@/plugins/request.js'

/**
 * 获取所以文章列表
 * @param {*} params 
 * @returns 
 */
export const getArticles = params => {
  return request({
    method: 'GET',
    url: '/api/articles',
    params
  })
}

/**
 * 获取个人文章列表
 * @param {*} params 
 * @returns 
 */
export const getFeedArticles = params => {
  return request({
    method: 'GET',
    url: '/api/articles/feed',
    params
  })
}

/**
 * 收藏
 * @param {*} slug 
 * @returns 
 */
export const addFavorite = slug => {
  return request({
    method: 'POST',
    url: `/api/articles/${slug}/favorite`,
  })
}

/**
 * 取消收藏
 * @param {*} slug 
 * @returns 
 */
export const deleteFavorite = slug => {
  return request({
    method: 'DELETE',
    url: `/api/articles/${slug}/favorite`,
  })
}

/**
 * 文章详情
 * @param {*} slug 
 * @returns 
 */
export const getArticle = slug => {
  return request({
    method: 'GET',
    url: `/api/articles/${slug}`
  })
}

/**
 * 获取评论列表
 * @param {*} slug 
 * @returns 
 */
export const getComments = slug => {
  return request({
    method: 'GET',
    url: `/api/articles/${slug}/comments`
  })
}

/**
 * 添加评论
 * @param {*} slug 
 * @param {*} data 
 * @returns 
 */
export const addComments = (slug, data) => {
  return request({
    method: 'POST',
    url: `/api/articles/${slug}/comments`,
    data
  })
}

/**
 * 删除评论
 * @param {*} slug 
 * @param {*} data 
 * @returns 
 */
export const deleteComments = (slug, id) => {
  return request({
    method: 'DELETE',
    url: `/api/articles/${slug}/comments/${id}`
  })
}

/**
 * 创建文章
 */
export const createArticles = data => {
  return request({
    method: 'POST',
    url: '/api/articles',
    data
  })
}

/**
 * 更新文章
 * @param {*} data 
 * @returns 
 */
export const updateArticles = (slug) => {
  return function (data) {
    return request({
      method: 'PUT',
      url: `/api/articles/${slug}`,
      data
    })
  }
}

/**
 * 删除文章
 */
export const deleteArticles = slug => {
  return request({
    method: 'DELETE',
    url: `/api/articles/${slug}`,
  })
}



