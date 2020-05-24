import dayjs from 'dayjs'
export default {
  formateDate(date){
    return dayjs(date).format('YYYY-MM-DD');
  }
}