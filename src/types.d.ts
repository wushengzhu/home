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
