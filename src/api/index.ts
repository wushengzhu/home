/**
 *  获取一言数据
 * @returns
 */
export const getHitokoto = async () => {
  const res = await fetch('https://v1.hitokoto.cn')
  return await res.json()
}

/**
 * 音乐列表
 * @param server  netease 网易云音乐(默认)，tencent QQ音乐，kugou 酷狗音乐，xiami 虾米，kuwo 酷我
 * @param type name 歌曲名，artist 歌手，url 链接，pic 封面，lrc 歌词，song 单曲，playlist 歌单，search 搜索，album 唱片
 * @param id 类型ID（封面ID/单曲ID/歌单ID）
 * @returns
 */
export const getPlayerList = async (server: any, type: any, id: any) => {
  const res = await fetch(
    `${import.meta.env.VITE_MUSIC_API}?server=${server}&type=${type}&id=${id}`
  )
  const data = await res.json()

  if (data[0].url.startsWith('@')) {
    const [handle, jsonpCallback, jsonpCallbackFunction, url] = data[0].url
      .split('@')
      .slice(1)
    const jsonpData = await fetchJsonp(url).then((res: any) => res.json())
    const domain = (
      jsonpData.req_0.data.sip.find((i: any) => !i.startsWith('http://ws')) ||
      jsonpData.req_0.data.sip[0]
    ).replace('http://', 'https://')

    return data.map((v: any, i: any) => ({
      title: v.name || v.title,
      artist: v.artist || v.author,
      src: domain + jsonpData.req_0.data.midurlinfo[i].purl,
      pic: v.pic,
      lrc: v.lrc,
    }))
  } else {
    return data.map((v: any) => ({
      title: v.name || v.title,
      artist: v.artist || v.author,
      src: v.url,
      pic: v.pic,
      lrc: v.lrc,
    }))
  }
}

/**
 * 获取高德地理位置信息
 * @param key
 * @returns
 */
export const getAdcode = async (key: string) => {
  const res = await fetch(`https://restapi.amap.com/v3/ip?key=${key}`)
  return await res.json()
}

/**
 * 获取高德地理天气信息
 * @param key
 * @param city
 * @returns
 */
export const getWeather = async (key: string, city: string) => {
  const res = await fetch(
    `https://restapi.amap.com/v3/weather/weatherInfo?key=${key}&city=${city}`
  )
  return await res.json()
}

/**
 * 获取教书先生天气 API https://api.oioweb.cn/doc/weather/GetWeather
 * @returns
 */
export const getOtherWeather = async () => {
  const res = await fetch('https://api.oioweb.cn/api/weather/GetWeather')
  return await res.json()
}
