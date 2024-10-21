import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, args }) => {
    let rgex = /m(?:a(?:rin\-kitagawa|id)|ori\-calliope|ilf)|raiden\-shogun|uniform|selfies|(?:paizur|ecch)i|hentai|o(?:ppai|ral)|waifu|ero|ass/i
    const waifu = rgex.test(args[0]) ? args[0].match(rgex)[0] : 'waifu'
    const res = await fetch(global.API('https://api.waifu.im', '/search', { included_tags: waifu }))
    if (res.status !== 200) return m.reply(`${res.status} ${res.statusText}`);
    const data = await res.json()
    if (!data.images[0].url) return m.reply(data.detail);
    conn.sendFile(m.chat, data.images[0].url, '', data.images[0].source || data.images[0].url, m)
}
handler.help = ['waifu']
handler.tags = ['internet']
handler.command = /^(waifu)$/i

export default handler