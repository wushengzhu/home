import { defineStore } from 'pinia'

export const storeKey = 'main'

export const mainStore = defineStore(storeKey, {
  state: () => {
    return {
      innerWidth: null, // 当前窗口宽度
      systemSettings: {
        showHomeBtn: true,
        showSingleStar: false,
        showLantern: false,
        showTimeAndWeather: true,
        showDarkMode: true,
        silentMode: false,
        seasonMode: 'default',
        musicSource: 'tencent',
        pcBgc: '/images/pc/1.webp',
        mobileBgc: '/images/mobile/1.webp',
      } as SystemSettings,
      isDark: false, // 主题模式：白天、黑夜,默认白天
      themeTextColor: '#fff',
      siteStartShow: true, // 建站日期显示
      musicIsOk: false, // 音乐是否加载完成
      musicVolume: 0, // 音乐音量;
      mobileOpenState: false, // 移动端开启状态
      mobileFuncState: false, // 移动端功能区开启状态
      setOpenState: false, // 设置页面开启状态
      musicOpenState: false, // 当前播放状态
      musicName: null, // 当前播放歌曲名
      musicArtist: null, // 当前播放歌手名
      musicLrc: '歌词加载中', // 当前播放歌词
      musicClick: false, // 音乐链接是否跳转
    }
  },
  getters: {
    // 获取歌词
    getMusicLrc(state) {
      return state.musicLrc
    },
    // 获取歌曲信息
    getPlayerData(state) {
      return {
        name: state.musicName,
        artist: state.musicArtist,
      }
    },
    getSystemSetting(state) {
      return state.systemSettings as SystemSettings
    },
    getIsDark(state) {
      return state.isDark
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
      if (value) {
        this.systemSettings.seasonMode = 'snow'
      }
    },
    setSystemSetting(value: SystemSettings) {
      this.systemSettings = Object.assign(
        {},
        { ...this.systemSettings },
        { ...value }
      )
    },
    setIsDark(value: boolean) {
      this.isDark = value
    },
    // 更改播放状态
    setPlayerState(value: any) {
      this.musicOpenState = value ? false : true
    },
    // 更改歌词
    setMusicLrc(value: any) {
      this.musicLrc = value
    },
    // 更改歌曲数据
    setPlayerData(name: any, artist: any) {
      this.musicName = name
      this.musicArtist = artist
    },
  },
  //   persist: true, // 持久化存储
  persist: {
    key: 'data',
    storage: window.localStorage, // 设置存储类型
    paths: ['seasonMode'],
  },
})
