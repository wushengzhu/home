import {
  Tool,
  GithubOne,
  PictureAlbum,
  Bookshelf,
  Log,
  Notes,
} from '@icon-park/vue-next'

export const homePage: Array<CircleItemType> = [
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
