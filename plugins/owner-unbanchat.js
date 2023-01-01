/*let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = true

m.reply(`${eg}تم رفع الحظر في الجروب الان يمكنكم استخدامي`)
}
handler.help = ['banchat1']
handler.tags = ['owner']
handler.command = /^ban1|banear1|banchat1$/i
handler.exp = 500
handler.rowner = true

export default handler*/

//PARA GRUPOS

let handler = async (m, { conn }) => {
  if (!(m.chat in global.db.data.chats)) return m.reply('*Este chat no está registrado en la base de datos!*')
  let chat = global.db.data.chats[m.chat]
  if (!chat.isBanned) return m.reply('*هذا الجروب ليس محظور!!*')
  chat.isBanned = false
  m.reply(`${eg}تم رفع الحظر عن الجروب الان يمكن للجميع استخدامي.`)
}
handler.command = /^الغاء$/i
handler.botAdmin = true
handler.admin = true

export default handler
