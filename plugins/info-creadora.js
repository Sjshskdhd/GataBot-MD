import fs from 'fs'
let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let text = `
𝘌𝘓Ｇ𝘈𝘡𝘈𝘙𝘉𝘖𝘛-𝘔𝘋 💖
*Wa.me/201098906252*

𝘌𝘓Ｇ𝘈𝘡𝘈𝘙𝘉𝘖𝘛-𝘔𝘋 *2* 💖
*Wa.me/201098906252*

𝘌𝘓Ｇ𝘈𝘡𝘈𝘙𝘉𝘖𝘛-𝘔𝘋 *3* 💖
*Wa.me/201098906252*

𝘌𝘓Ｇ𝘈𝘡𝘈𝘙𝘉𝘖𝘛-𝘔𝘋 *4* 💖
*Wa.me/201098906252*

*---------------------*
*CENTER ELGAZARBOT*
*elgazarbot@gmail.com*

𝘌𝘓Ｇ𝘈𝘡𝘈𝘙 𝘉𝘖𝘛 - 𝘈𝘚𝘐𝘚𝘛𝘌𝘕𝘊𝘐𝘈
*${asistencia}*

*Sr. Pablo* - 𝘈𝘚𝘐𝘚𝘛𝘌𝘕𝘊𝘐𝘈
*Wa.me/201098906252*

🧡 *Eso son los contactos para ti.*\n💜 *That's the contacts for you.*`.trim()   
let buttonMessage= {
'document': { url: `${md}` },
'mimetype': `application/${document}`,
'fileName': `✦ 𝘌𝘓Ｇ𝘈𝘡𝘈𝘙𝘉𝘖𝘛-𝘔𝘋 ༄`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': `${md}`,
'mediaType': 2,
'previewType': 'pdf',
'title': 'Super Bot WhatsApp',
'body': wm,
'thumbnail': fs.readFileSync('./media/menus/Menu3.jpg'),
'sourceUrl': yt }},
'caption': text,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}donar`, buttonText: {displayText: '🎁 الدعم'}, type: 1}, 
{buttonId: `${usedPrefix}infobot`, buttonText: {displayText: '🐈 𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙘𝙞𝙤𝙣 | 𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙩𝙞𝙤𝙣'}, type: 1}, 
{buttonId: `${usedPrefix}allmenu`, buttonText: {displayText: '💫 𝙈𝙚𝙣𝙪́ 𝙘𝙤𝙢𝙥𝙡𝙚𝙩𝙤 | 𝙁𝙪𝙡𝙡 𝙈𝙚𝙣𝙪'}, type: 1}],
'headerType': 6 }

await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
const data = global.owner.filter(([id, isCreator]) => id && isCreator)
await conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
//await conn.sendContact(m.chat, `${owner[0][0]}`, m)//, 
//await conn.sendContact(m.chat, conn.getName(owner[0][0]+'@s.whatsapp.net', m)
  
let pp = './media/menus/Menu2.jpg'
let str = `${wm}`
let oficial = 'تواصل معي ولا تنسي الاشتراك في قناتي باليوتيوب وانضم لجروب الدعم❤'

await conn.sendHydrated2(m.chat, str, oficial, pp, 'https://youtube.com/@ABDALLAH_MOHAMED', 'قناتي', 'https://chat.whatsapp.com/LQtGVmEfpZN5RcmFCSqtdC', 'الدعم', [
['☘ القائمه', '/menu'],
], m,)
}
handler.help = ['owner', 'المطور']
handler.tags = ['info']
handler.command = /^(contacto|owner|creator|propietario|dueño|dueña|propietaria|dueño|creadora|creador)$/i
export default handler 
