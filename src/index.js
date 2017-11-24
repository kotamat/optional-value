export default (obj, target) => {
  const splitted = target.split('.')

  return splitted.reduce((pre, cur) => {
    if (pre === null) {
      return null
    }
    const value = pre[cur]
    if(value === undefined){
      return null
    }
    return value
  }, obj)
}