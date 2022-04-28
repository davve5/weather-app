
const convertDtToDate = (dt: number = new Date().getUTCMilliseconds()) => {
  const date = new Date(dt * 1000)
  
  return {
    dayOfWeek: date.toLocaleString(window.navigator.language, { weekday: 'long' }),
    hour: date.toLocaleString(window.navigator.language, { hour: 'numeric', hour12: true })
  }
}
export default convertDtToDate;