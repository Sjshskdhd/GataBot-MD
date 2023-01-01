import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {
let grupos = [nna, nn, nnn, nnnt]
let gata = [img5, img6, img7, img8, img9]
let enlace = { contextInfo: { externalAdReply: {title: wm + ' 🐈', body: 'support group' , sourceUrl: grupos.getRandom(), thumbnail: await(await fetch(gata.getRandom())).buffer() }}}
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: '😻 𝘚𝘜𝘗𝘌𝘙 𝘌𝘓Ｇ𝘈𝘡𝘈𝘙𝘉𝘖𝘛-𝘔𝘋 - 𝘞𝘏𝘈𝘛𝘚𝘈𝘗𝘗 ', thumbnailUrl: await(await fetch(img)).buffer(), sourceUrl: yt }}}
let dos = [enlace, enlace2]
let texto = `رد على رسالة شخص ما حتى تتمكن من حذف الرسالة`
	
if (!m.quoted) return await conn.sendButton(m.chat, wm, texto, img5, [['القائمه ☘️', '/menu']], m, dos.getRandom())
try {
let delet = m.message.extendedTextMessage.contextInfo.participant
let bang = m.message.extendedTextMessage.contextInfo.stanzaId
return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
 } catch {
return conn.sendMessage(m.chat, { delete: m.quoted.vM.key })
}
}
handler.help = ['delete']
handler.tags = ['group']
handler.command = /^حذف|del(ete)?$/i

handler.group = false
handler.admin = true
handler.botAdmin = true

export default handler
