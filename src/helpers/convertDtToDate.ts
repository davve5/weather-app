
const convertDtToDate = (dt: number = new Date().getUTCMilliseconds()) => {
  const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
  const date = new Date(dt * 1000)
  const dayOfWeek = weekday[date.getDay()];
  const hour = date.getHours();
  
  return {
    dayOfWeek,
    hour
  }
}
export default convertDtToDate;