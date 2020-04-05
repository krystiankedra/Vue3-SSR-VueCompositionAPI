import { splitCookies } from '../../../common/Cookies/cookies'

export default function(req, res, next) {
  if (req && req.headers && req.headers.cookie) {
    const cookies = splitCookies(req.headers.cookie)
    if (cookies.token && cookies.token.length > 0) {
      next()
    } else {
      res.writeHead(301, { Location: '/' })
      res.end()
    }
  } else {
    next()
  }
}
