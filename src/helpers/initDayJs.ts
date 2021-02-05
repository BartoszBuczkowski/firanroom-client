import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/pl'

const initializeDayJs = () => {
   dayjs.locale('pl')
   dayjs.extend(relativeTime)
}

export default initializeDayJs
