import axios from 'axios'

const request = axios.create({
  baseURL: 'http://realworld.api.fed.lagounews.com',
  headers: {
    'Authorization': 'Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMWFmNzQ2ZTAwYjI1MjhiMmJmZDgyYyIsInVzZXJuYW1lIjoiYm9yZXkiLCJleHAiOjE2MzQzNDI1NTUsImlhdCI6MTYyOTE1ODU1NX0.d14wz7eoAg24zB3yEqwTziCIbZzJLDEwlhfFvJiqUZE',
    'Content-type': 'application/json; charset=utf-8'
  }
})

export default request