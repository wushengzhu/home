import { Tool, PictureAlbum, Bookshelf, Notes } from '@icon-park/vue-next'

export const HomePage: Array<CircleItemType> = [
  {
    component: Tool,
    tipContent: '个人工具',
    pageType: 'tool',
  },
  {
    component: Notes,
    tipContent: '个人博客',
    pageType: 'blog',
  },
  {
    imgSrc: '/images/logo.jpg',
    tipContent: '个人简历',
    pageType: 'resume',
  },
  {
    component: PictureAlbum,
    tipContent: '个人相册',
    pageType: 'album',
  },
  {
    component: Bookshelf,
    tipContent: '个人书架',
    pageType: 'book',
  },
]

export const seasonMode: Array<{ text: string; value: SeasonMode }> = [
  { text: '默认', value: 'default' },
  { text: '春雾', value: 'fog' },
  { text: '夏雨', value: 'rain' },
  { text: '秋叶', value: 'leaves' },
  { text: '冬雪', value: 'snow' },
]

export const musicSource: Array<{ text: string; value: MusicSource }> = [
  { text: '默认', value: 'default' },
  { text: '网易云', value: 'netease' },
  { text: 'qq音乐', value: 'tencent' },
]

/**
 * 注意这里的属性attribute值对应类型SystemSettings
 */
export const SystemValue: Array<SystemValueType> = [
  { text: '显示暗黑模式', attribute: 'showDarkMode' },
  { text: '显示灯笼', attribute: 'showLantern' },
  { text: '显示点此看看', attribute: 'showHomeBtn' },
  { text: '显示时间天气', attribute: 'showTimeAndWeather' },
  { text: '开启斜流星', attribute: 'showSingleStar' },
  {
    text: '季节模式',
    attribute: 'seasonMode',
    type: 'radio',
    radioArr: seasonMode,
  },
  {
    text: '音乐模式',
    attribute: 'musicSource',
    type: 'radio',
    radioArr: musicSource,
  },
]

export const pcBgcs = []

export const mobileBgcs = []
