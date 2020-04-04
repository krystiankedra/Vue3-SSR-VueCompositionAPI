export const splitCookies = (cookies) => cookies.split(/; */).reduce((acc, cookie) => {
  if (!cookie) {
    return acc
  }
  const equalSyntaxPosition = cookie.indexOf('=')
  const key = equalSyntaxPosition > 0 ? cookie.slice(0, equalSyntaxPosition) : cookie
  const value = equalSyntaxPosition > 0 ? decodeURIComponent(cookie.slice(equalSyntaxPosition + 1)) : null
  acc[key] = value
  return acc
}, {})

