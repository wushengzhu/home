interface Window {
  $openList: any
  $message: any
  $messageBox: any
  mozRequestAnimationFrame: any
  webkitRequestAnimationFrame: any
  msRequestAnimationFrame: any
}

type ThemeType = 'light' | 'dark'
type SeasonMode = 'fog' | 'rain' | 'leaves' | 'snow'
type homeTools = 'tool' | 'blog' | 'resume' | 'album' | 'book'

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
