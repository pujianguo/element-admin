import {
  _get,
  _post,
  _patch,
  _delete
} from './util'

// user
export const listUsers = (params) => { return _get('/users/page', params) }
export const getUser = (id) => { return _get(`users/${id}`) }
export const addUser = () => { return _post('users') }
export const updateUser = (id) => { return _patch(`users/${id}`) }
export const deleteUser = (id) => { return _delete(`users/${id}`) }

// 获取七牛云上传token
export const getUpToken = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      let token = ''
      // 这里用生成器生成的测试token
      // 生成器：http://jsfiddle.net/gh/get/extjs/4.2/icattlecoder/jsfiddle/tree/master/uptoken
      // 实际使用中通过我们的后端生成
      token = 'H2QU52vdLjUYIvmm3tcmIJr21QwwpZHJ8mYMt1Hv:eiqqARo93OaaX7IVnQ__GvUP8m8=:eyJzY29wZSI6ImltYWdlczpETlMua2V5IiwiZGVhZGxpbmUiOjE1NDY0Njg2MDZ9'
      let res = {
        token: token
      }
      resolve(res)
    }, 500)
  })
}
