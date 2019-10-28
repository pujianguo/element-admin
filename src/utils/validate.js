export const validatePhone = function (phone) {
  let reg = /^1[34578]\d{9}$/
  return reg.test(phone)
}
