export default function(req, res, next) {
  if (req && req.defaults && req.defaults.headers && req.defaults.headers.common) {
    console.log(req.defaults.headers.common)
  }
  // res.writeHead(301, { Location: '/' })
  // res.end()
  next()
}
