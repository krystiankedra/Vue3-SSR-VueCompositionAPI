import axios from 'axios'

const axiosReject = message => Promise.reject(window.alert('Message error:' + message))

axios.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response && error.response.data) {
      const { errors, status } = error.response.data
      const message = errors || status
      return axiosReject(message)
    } else if (error.message) {
      return axiosReject(error.message)
    }
  }
)

export default axios
