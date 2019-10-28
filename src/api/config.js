export const ENV = process.env.VUE_APP_TITLE === 'pre' ? 'pre'
  : process.env.NODE_ENV === 'production' ? 'production' : 'development'

export const baseUrl = ENV === 'development' ? 'http://dev.xxx.com'
  : ENV === 'production' ? 'http://xxx.com'
    : 'http://dev.xxx.com' // pre
