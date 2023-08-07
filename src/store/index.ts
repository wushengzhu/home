import { defineStore } from 'pinia'

type ThemeType = 'light' | 'dark'
export const storeKey = 'main'

export const mainStore = defineStore(storeKey, {
  state: () => {
    return {
      innerWidth: null, // 当前窗口宽度
      themeMode: 'light' as ThemeType, // 主题模式：白天、黑夜
      themeTextColor: '#fff',
      showGame: false,
      coverType: '0', // 壁纸种类
      siteStartShow: true, // 建站日期显示
      musicIsOk: false, // 音乐是否加载完成
      musicVolume: 0, // 音乐音量;
      musicOpenState: false, // 音乐面板开启状态
      backgroundShow: false, // 壁纸展示状态
      boxOpenState: false, // 盒子开启状态
      mobileOpenState: false, // 移动端开启状态
      mobileFuncState: false, // 移动端功能区开启状态
      setOpenState: false, // 设置页面开启状态
      playerState: false, // 当前播放状态
      playerTitle: null, // 当前播放歌曲名
      playerArtist: null, // 当前播放歌手名
      playerLrc: '歌词加载中', // 当前播放歌词
      musicClick: false, // 音乐链接是否跳转
    }
  },
  getters: {
    // 获取歌词
    getPlayerLrc(state) {
      return state.playerLrc
    },
    // 获取歌曲信息
    getPlayerData(state) {
      return {
        name: state.playerTitle,
        artist: state.playerArtist,
      }
    },
    getInnerWidth(state) {
      if (state.innerWidth) {
        return state.innerWidth
      }
      return JSON.parse(localStorage.getItem(storeKey) + '')
    },
  },
  actions: {
    setInnerWidth(value: any) {
      this.innerWidth = value
      this.mobileOpenState = value >= 720 ? false : true
    },
    setShowGame(value: any) {
      this.showGame = value
    },
    // 更改播放状态
    setPlayerState(value: any) {
      if (value) {
        this.playerState = false
      } else {
        this.playerState = true
      }
    },
    // 更改歌词
    setPlayerLrc(value: any) {
      this.playerLrc = value
    },
    // 更改歌曲数据
    setPlayerData(title: any, artist: any) {
      this.playerTitle = title
      this.playerArtist = artist
    },
  },
  //   persist: true, // 持久化存储
  persist: {
    key: 'data',
    storage: window.localStorage, // 设置存储类型
    paths: ['mobileOpenState'],
  },
})
