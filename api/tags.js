import { request } from '@/plugins/request.js'

/**
 * 获取标签列表
 * @param {*} params 
 * @returns 
 */
export const getTags = params => {
  return request({
    method: 'GET',
    url: '/api/tags',
    params
  })
}
