import { request } from '@/plugins/request.js'

/**
 * 获取个人信息
 * @param {*} username 
 * @returns 
 */
export const getProfile = username => {
  return request({
    method: 'GET',
    url: `/api/profiles/${username}`,
  })
}

/**
 * 关注
 * @param {*} username 
 * @returns 
 */
export const addFollow = username => {
  return request({
    method: 'POST',
    url: `/api/profiles/${username}/follow`,
  })
}

/**
 * 取消关注
 * @param {*} username 
 * @returns 
 */
export const deleteFollow = username => {
  return request({
    method: 'DELETE',
    url: `/api/profiles/${username}/follow`,
  })
}