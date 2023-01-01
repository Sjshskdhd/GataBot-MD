let media = './media/menus/Menuvid3.mp4'
let handler = async (m, { conn, command }) => {
let str = `
💕 مرحبا بك في الجروبات الرسميه💕
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

انضم معنا في جروب الدعم وتفاعل معنا. 😼
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𓃠 *Versión de ${gt}*
➥ ${vs}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ جروب الدعم ${gt}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✨ *Informate de las Novedades!!!*
🐈 *${nna}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🐈 *${nn}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🐈 *${nnn}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🐈 *${nnnt}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🐈 *${nnntt}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🐈 *${nnnttt}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🐈 *${nnnttt2}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🐈 *https://chat.whatsapp.com/LQtGVmEfpZN5RcmFCSqtdC*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*Por favor, no ingresar con números de Bots, y mantener el respeto.*\n
*Please, do not enter with Bot numbers, and maintain respect.*
`.trim()
  
conn.sendHydrated(m.chat, str, `𝘌𝘓Ｇ𝘈𝘡𝘈𝘙 𝘉𝘖𝘛 - 𝘔𝘋\n${asistencia}\n\n` + wm, media, 'https://chat.whatsapp.com/LQtGVmEfpZN5RcmFCSqtdC', 'الدعم', null, null, [
['معلومات المطور ✅', '.cuentasgb'],
['🎁 التبرع', '.donar'],
['القائمه ☘️', '/menu']
], m,)}

handler.command = /^linkgc|grupos|gruposgatabot|gatabotgrupos|gruposdegatabot|groupofc|gruposgb|grupogb|groupgb$/i
handler.exp = 33

export default handler
