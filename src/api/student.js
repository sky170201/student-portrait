import request from './request'

// 查询学生详情
export function getStudentInfo(id) {
  return request({
    url: `test/${id}`,
    // url: 'test',
    method: 'get',
  })
}