declare module 'js-calendar-converter'
declare module 'vue3-aplayer'

interface ObjectType {
  [key: string]: any
}

interface Window {
  $openList: any
  $message: any
  $messageBox: any
  mozRequestAnimationFrame: any
  webkitRequestAnimationFrame: any
  msRequestAnimationFrame: any
}

type ThemeType = 'light' | 'dark'
type SeasonMode = 'default' | 'fog' | 'rain' | 'leaves' | 'snow'
type homeTools = 'tool' | 'blog' | 'resume' | 'album' | 'book'
type ButtonType = 'select' | 'input' | 'radio'
type MusicSource = 'default' | 'netease' | 'tencent'

interface CircleItemType {
  component?: any // 组件
  theme?: string
  iconSize?: number
  fill?: string
  tipContent?: string
  placement?: string
  imgSrc?: string | ''
  isShowTooTip?: boolean
  bgWidth?: number
  bgHeight?: number
  bgColor?: string
  pageType: homeTools
  canMobile?: boolean
}

interface SystemSettings {
  showHomeBtn?: boolean // 展示点此看看按钮
  showTimeAndWeather?: boolean // 展示时间与天气卡片
  showLantern?: boolean // 展示灯笼
  showSingleStar?: boolean // 展示简单流星
  showDarkMode?: boolean // 开启暗黑模式
  silentMode?: boolean // 默哀模式开启，默认根据特定节日显示
  seasonMode?: SeasonMode // 选择季节模式
  musicSource?: MusicSource // 音乐来源
  pcBgc?: string // pc端壁纸
  mobileBgc?: string // mobile壁纸
}

interface SystemValueType {
  text: string
  type?: 'input' | 'radio'
  attribute: string
  radioArr?: array
  btnType?: ButtonType
}

/**
 * c开头为公历各属性值
 * l开头为农历各属性值 数值
 * I开头为农历各属性值 中文值
 * gz开头为天干地支纪年
 */
interface CalendarConverter {
  Animal: string // 生肖
  IDayCn: string // 农历日
  IMonthCn: string // 农历月
  Term: any
  astro: string // 星座
  cDay: number // 公历日
  cMonth: number // 公历月
  cYear: number // 公历年
  gzDay: string //
  gzMonth: string
  gzYear: string
  isLeap: boolean
  isTerm: boolean
  isToday: boolean
  lDay: number
  lMonth: number
  lYear: number
  nWeek: number
  ncWeek: string
}
