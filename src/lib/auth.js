class Auth {
  extractUserFromToken(accessToken) {
    const token = accessToken.split('.')
    const paddedContent = token[1].padEnd(
      token[1].length + ((token[1].length * 3) % 4),
      '='
    )
    const base64Content = atob(paddedContent)
    const parsedUser = JSON.parse(base64Content)
    console.log(parsedUser)

    return {
      isAuth: true,
      id: parsedUser.nameid,
      name: parsedUser.unique_name,
      role: parsedUser.role,
    }
  }
}

export default new Auth()
