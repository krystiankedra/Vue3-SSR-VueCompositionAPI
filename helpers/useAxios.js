import axios from 'axios'

axios.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response && error.response.data) {
      const hasErrors = error.response.data.hasOwnProperty('errors')
      const message = hasErrors ? error.response.data.errors : error.response.status
      return Promise.reject(window.alert('Message error: ' + message))
    } else if (error.message) {
      return Promise.reject(window.alert('Message error:' + error.message))
    }
  }
)

export default axios
