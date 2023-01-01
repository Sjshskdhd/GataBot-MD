let handler = async (m, { conn, text, command, usedPrefix }) => {
if (!text) throw `${mg}ضع علامة على شخص ما\nمثال\n*${usedPrefix + command} @201098906252*\n\nضع علامة على شخص ما\nمثال\n*${usedPrefix + command} @201098906252*`
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw `${mg}ضع علامة على شخص ما\nمثال\n*${usedPrefix + command} @201098906252*\n\nضع علامة على شخص ما\nمثال\n*${usedPrefix + command} @201098906252*`
let users = global.db.data.users
users[who].banned = true
conn.reply(m.chat, `${eg}تم حظر المستخدم لا يمكنه استخدام البوت`, m)
}
handler.help = ['banuser']
handler.tags = ['owner']
handler.command = /^حظر$/i
handler.group = true
handler.admin = true 
export default handler 
