import { h } from 'vue'
import { SpaCandle } from '@icon-park/vue-next'
import calendar from 'js-calendar-converter'

type DateType = 'solar2lunar' | 'lunar2solar'

/**
 * 获取农历时间
 */
export const getLunarTime = (type: DateType, date?: any) => {
  let curTime = date ? date : new Date()
  /** 公历年月日转农历数据 返回json */
  let lunarTime: CalendarConverter = calendar.solar2lunar(
    curTime.getFullYear(),
    curTime.getMonth() + 1,
    curTime.getDate()
  )

  /** 农历年月日转公历年月日 */
  let solarTime = calendar.lunar2solar(
    curTime.getFullYear(),
    curTime.getMonth() + 1,
    curTime.getDate()
  )
  if (type === 'solar2lunar') {
    return lunarTime
  } else {
    return solarTime
  }
}

// 时钟
export const getCurrentTime = () => {
  let curTime = new Date()

  let lunarTime: CalendarConverter = calendar.solar2lunar(
    curTime.getFullYear(),
    curTime.getMonth() + 1,
    curTime.getDate()
  )
  let hour =
    curTime.getHours() < 10 ? '0' + curTime.getHours() : curTime.getHours()
  let minute =
    curTime.getMinutes() < 10
      ? '0' + curTime.getMinutes()
      : curTime.getMinutes()
  let second =
    curTime.getSeconds() < 10
      ? '0' + curTime.getSeconds()
      : curTime.getSeconds()
  let currentTime = {
    year: lunarTime.cYear,
    month: lunarTime.cMonth,
    day: lunarTime.cDay,
    hour,
    minute,
    second,
    weekday: lunarTime.ncWeek,
  }
  return currentTime
}

// 时光胶囊
export const getTimeCapsule = () => {
  // 日进度
  const todayStartDate = new Date(new Date().toLocaleDateString()).getTime()
  const todayPassHours = ((new Date() as any) - todayStartDate) / 1000 / 60 / 60
  const todayPassHoursPercent = (todayPassHours / 24) * 100

  // 周进度
  const weeks = [7, 1, 2, 3, 4, 5, 6]
  const weekDay = weeks[new Date().getDay()]
  const weekDayPassPercent = (weekDay / 7) * 100

  // 月进度
  const year = new Date().getFullYear()
  const date = new Date().getDate()
  const month = new Date().getMonth() + 1
  const monthAll = new Date(year, month, 0).getDate()
  const monthPassPercent = (date / monthAll) * 100

  // 年进度
  const yearStartDate = new Date(year, 0, 1).getTime()
  const yearEndDate = new Date(year + 1, 0, 1).getTime()
  const yearPassHours = ((new Date() as any) - yearStartDate) / 1000 / 60 / 60
  const yearTotalHours = (yearEndDate - yearStartDate) / 1000 / 60 / 60
  const yearPassPercent = (yearPassHours / yearTotalHours) * 100

  return {
    day: {
      elapsed: Math.floor(todayPassHours),
      pass: Math.floor(todayPassHoursPercent),
    },
    week: {
      elapsed: weekDay,
      pass: Math.floor(weekDayPassPercent),
    },
    month: {
      elapsed: date,
      pass: Math.floor(monthPassPercent),
    },
    year: {
      elapsed: month - 1,
      pass: Math.floor(yearPassPercent),
    },
  }
}

// 欢迎提示
export const helloInit = () => {
  const hour = new Date().getHours()
  let hello = null
  if (hour < 6) {
    hello = '凌晨好'
  } else if (hour < 9) {
    hello = '早上好'
  } else if (hour < 12) {
    hello = '上午好'
  } else if (hour < 14) {
    hello = '中午好'
  } else if (hour < 17) {
    hello = '下午好'
  } else if (hour < 19) {
    hello = '傍晚好'
  } else if (hour < 22) {
    hello = '晚上好'
  } else {
    hello = '夜深了'
  }
  ElMessage({
    dangerouslyUseHTMLString: true,
    message: `<strong>${hello}</strong> 欢迎来到我的主页`,
  })
}

// 默哀模式
const anniversaries = {
  4.4: '清明节',
  5.12: '汶川大地震纪念日',
  7.7: '中国人民抗日战争纪念日',
  9.18: '九·一八事变纪念日',
  12.13: '南京大屠杀死难者国家公祭日',
} as any
export const checkDays = (isBaseDay: boolean = true) => {
  // 根据日子控制默哀模式
  if (isBaseDay) {
    const myDate = new Date()
    const mon = myDate.getMonth() + 1
    const date = myDate.getDate()
    const key = `${mon}.${date}`
    if (anniversaries.hasOwnProperty(key)) {
      console.log(`今天是${anniversaries[key]}`)
      const gray = document.createElement('style')
      gray.innerHTML = 'html{filter: grayscale(100%)}'
      document.head.appendChild(gray)
      ElMessage({
        message: `今天是${anniversaries[key]}`,
        duration: 14000,
        icon: h(SpaCandle, { theme: 'filled', fill: '#efefef' }),
      })
    }
  } else {
    // 根据系统配置控制默哀模式
    const gray = document.createElement('style')
    gray.innerHTML = 'html{filter: grayscale(100%)}'
    document.head.appendChild(gray)
  }
}

// 建站日期统计
export const siteDateStatistics = (startDate: any) => {
  const currentDate = new Date()
  const differenceInTime = currentDate.getTime() - startDate.getTime()
  const differenceInDays = differenceInTime / (1000 * 3600 * 24)
  const differenceInMonths = differenceInDays / 30
  const differenceInYears = differenceInMonths / 12
  if (differenceInYears >= 1) {
    return `本站已经苟活了 ${Math.floor(differenceInYears)} 年 ${Math.floor(
      differenceInMonths % 12
    )} 月 ${Math.round(differenceInDays % 30)} 天`
  } else if (differenceInMonths >= 1) {
    return `本站已经苟活了 ${Math.floor(differenceInMonths)} 月 ${Math.round(
      differenceInDays % 30
    )} 天`
  } else {
    return `本站已经苟活了 ${Math.round(differenceInDays)} 天`
  }
}
