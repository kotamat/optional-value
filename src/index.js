export default (obj, target) => {
  const splitted = target.split('.')

  return splitted.reduce((pre, cur) => {
    if (pre === undefined || pre === null) {
      return null
    }
    return pre[cur] || null
  }, obj)
}