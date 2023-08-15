import {
  Tool,
  GithubOne,
  PictureAlbum,
  Bookshelf,
  Log,
  Notes,
} from '@icon-park/vue-next'

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

export const SystemInitValue: Array<SystemType> = [
  { type: 'dark', text: '暗黑模式', value: false },
  { type: 'lantern', text: '显示灯笼', value: true },
  { type: 'season', text: '季节模式', value: false },
  { type: 'homebtn', text: '点此看看', value: false },
  { type: 'dark', text: '开启斜流星', value: false },
]
