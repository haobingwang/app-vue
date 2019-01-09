import request from '@/utils/request'

export function getPostList (params = {}) {
  return request({
    url: '/api/posts',
    method: 'get',
    params
  })
}

export function getPost (params = {}) {
  return request({
    url: '/api/post',
    method: 'get',
    params
  })
}

export function addPost (data = {}) {
  return request({
    url: '/api/post',
    method: 'post',
    data
  })
}

export function setPost (data = {}) {
  return request({
    url: '/api/post',
    method: 'put',
    data
  })
}

export function deletePost (data = {}) {
  return request({
    url: '/api/post',
    method: 'delete',
    data
  })
}
