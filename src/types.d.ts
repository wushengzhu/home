interface Window {
  $openList: any
  $message: any
  $messageBox: any
  mozRequestAnimationFrame:any
  webkitRequestAnimationFrame:any
  msRequestAnimationFrame:any
}

type ThemeType = 'light' | 'dark'
type SeasonMode = 'fog'|'rain'|'leaves'|'snow'