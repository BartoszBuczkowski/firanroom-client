import dayjs from 'dayjs'

function formatDate(date: string): string {
   const newDate = new Date(date)
   return newDate.toLocaleDateString() + ' ' + dayjs(date).format('HH:mm')
}

export default formatDate

export function test(e: boolean) {
   if (e) return {}
   return 'a'
}
