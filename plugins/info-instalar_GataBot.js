let handler  = async (m, { conn, usedPrefix, command }) => {
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}

let picture = './media/menus/Menu1.jpg'
let gata = `تنصيب بوت الجزار

*━━━━━━━━━━━━━⬣*
✅ تنصيب البوت
*⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯*
*𝘌𝘓Ｇ𝘈𝘡𝘈𝘙𝘉𝘖𝘛-𝘔𝘋:*
*⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯*
_Pagina Oficial_ 
_https://boxmineworld.com_
*⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯*
_الدعم_
_https://chat.whatsapp.com/LQtGVmEfpZN5RcmFCSqtdC_
*⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯*
_يوتيوب_
_https://youtube.com/@ABDALLAH_MOHAMED_
*⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯ ⎯*
_تيكتوك_
_https://www.tiktok.com/@q.r.a.n_0?_t=8YdfRrgXVUE&_r=1_
*━━━━━━━━━━━━━⬣*

*━━━━━━━━━━━━━⬣*
✅𝘌𝘓Ｇ𝘈𝘡𝘈𝘙 𝘉𝘖𝘛-𝘔𝘋
*تواصل مع المطور اذا كنت تريد البوت
*━━━━━━━━━━━━━⬣*`

conn.sendButton(m.chat, gata, `Comunícate con Mí Creadora si necesitas ayuda con la Instalación.\n\nContact My Creator if you need help with the Installation.\n\n${ig}\n${wm}`, picture, [
['معلومات المطور ✅', '.cuentasgb'],
['🎁 الدعم', '.donar']], fkontak, m)}

handler.command = /^(instalarbot|instalargatabot|instalargata|procesobot|botproceso|procesodelbot|botinstall|installbot)/i
export default handler
