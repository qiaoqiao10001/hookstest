import { axiosGet } from "../utils/http";

function getCourseField () {
  return new Promise((resolve, reject) => {
    axiosGet({
      url: '/v2/get_course_field',
      success (data) {
        resolve(data)
      },
      error (err) {
        reject(err)
      }
    })
  })
}