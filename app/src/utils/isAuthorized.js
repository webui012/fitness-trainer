export default isAuthorized = (role, userRole) => {
  if (userRole !== role && (userRole === 'USER' || userRole === '')){
    return false
  } else {
    return true
  }
}
