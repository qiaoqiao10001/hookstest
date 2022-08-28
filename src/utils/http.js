import axios from 'axios'
import qs from 'qs'

import { Base_URL } from './config'

function axiosGet (options) {
  axios(Base_URL + options.url).then(res => {
    options.success(res.data)
  }).catch(err => {
    options.error(err)
  })
}

export {
  axiosGet
}