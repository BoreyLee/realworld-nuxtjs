import { request } from '@/plugins/request.js'

/**
 * 登录
 * @param {*} data 
 * @returns 
 */
export const login = data => {
  return request({
    method: 'POST',
    url: '/api/users/login',
    data
  })
}

/**
 * 注册
 * @param {*} data 
 * @returns 
 */
export const register = data => {
  return request({
    method: 'POST',
    url: '/api/users',
    data
  })
}

/**
 * 更新个人信息
 * @param {*} data 
 * @returns 
 */
export const updateUser = data => {
  return request({
    method: 'PUT',
    url: '/api/user',
    data
  })
}

