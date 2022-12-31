let media = './media/menus/Menu4paypal.jpg'
let handler = async (m, { conn, command }) => {
let str = `
💖 مرحبا !! أنا الجزار إذا دعمتني بالتبرع. يعجبني العمل الذي أنجزته وأشاركه معك. شكرا!
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
يوتيوب
*https://youtube.com/@ABDALLAH_MOHAMED*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
`.trim()
  
conn.sendHydrated(m.chat, str, `𝘌𝘓Ｇ𝘈𝘡𝘈𝘙𝘉𝘖𝘛 - 𝘔𝘋\n${asistencia}\n\n` + wm, media, 'https://youtube.com/@ABDALLAH_MOHAMED', '🎁 التبرع', null, null, [
['الدعم 🔰', '.grupos'],
['المطور 💗', '#owner'],
['القائمه ☘️', '/menu']
], m,)}

handler.command = /^dona(te|si)|donar|apoyar|paypal|donating$/i
handler.exp = 80
export default handler
