import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, command }) => {
try {
let vn = './media/menu.mp3'
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let { money, joincount } = global.db.data.users[m.sender]
let user = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
//let user = global.db.data.users[m.sender]
//user.registered = false
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
//let enlace = { contextInfo: { externalAdReply: {title: wm, body: 'support group' , sourceUrl: nna, thumbnail: await(await fetch(img)).buffer() }}}
let pp = gataVidMenu.getRandom()
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let fsizedoc = '1'.repeat(10)
let adReply = { fileLength: fsizedoc, seconds: fsizedoc, contextInfo: { forwardingScore: fsizedoc, externalAdReply: { showAdAttribution: true, title: wm, body: '👋 ' + username, mediaUrl: ig, description: 'Hola', previewType: 'PHOTO', thumbnail: await(await fetch(gataMenu.getRandom())).buffer(), sourceUrl: redesMenu.getRandom() }}}


let menuA = `${lenguajeGB['smsConfi2']()} *${username}*

╭┄〔 *${wm}* 〕┄⊱
┊დ *${week}, ${date}*
┊დ *${lenguajeGB['smsBotonM4']()} » ${Object.keys(global.db.data.users).length}* 
┊
┊დ *${lenguajeGB['smsBotonM5']()} »* ${role}
┊დ *${lenguajeGB['smsBotonM6']()} » ${level} || ${user.exp - min}/${xp}*
┊დ *${lenguajeGB['smsBotonM7']()} »* ${user.premiumTime > 0 ? '✅' : '❌'}
╰┄┄┄┄〔 *𓃠 ${vs}* 〕┄┄┄┄⊱`.trim()

let menuB = `
*╭━〔* ${username} *〕━⬣*
*┆⚡ الخبره ➟ ${exp}*
*┆💎 الماس ➟ ${limit}*
*┆🐈 عملات البوت ➟ ${money}*
*┆🪙 العملات ➟ ${joincount}*
*╰*┅┅┅┅┅┅┅┅┅┅┅┅┅ *✧*
${readMore}
*╭━〔 معلومات البوت 〕⬣*
┃💫➺ _${usedPrefix}cuentasgb_
┃💫➺ _${usedPrefix}grupos_
┃💫➺ _${usedPrefix}donar_
┃💫➺ _${usedPrefix}listagrupos_
┃💫➺ _${usedPrefix}status_
┃💫➺ _${usedPrefix}infobot_
┃💫➺ _${usedPrefix}installbot_
┃💫➺ _${usedPrefix}owner_
┃💫➺ _${usedPrefix}ping_
┃💫➺ _Bot_ 
┃💫➺ _términos y condiciones_
*╰━━━━━━━━━━━━⬣*

*╭━〔 قائمه الالعاب 〕━⬣*
┃🎡➺ _${usedPrefix}math_
┃🎡➺ _${usedPrefix}ppt_
┃🎡➺ _${usedPrefix}ttt_
┃🎡➺ _${usedPrefix}delttt_
┃🎡➺ _${usedPrefix}topgays_
┃🎡➺ _${usedPrefix}topotakus_
┃🎡➺ _${usedPrefix}toppajer@s_
┃🎡➺ _${usedPrefix}topput@s_
┃🎡➺ _${usedPrefix}topintegrante_
┃🎡➺ _${usedPrefix}topgrasa_
┃🎡➺ _${usedPrefix}toppanafresco_
┃🎡➺ _${usedPrefix}topshipost_
┃🎡➺ _${usedPrefix}toplind@s_
┃🎡➺ _${usedPrefix}topfamos@s_
┃🎡➺ _${usedPrefix}top5parejas_
┃🎡➺ _${usedPrefix}gay_
┃🎡➺ _${usedPrefix}gay2_
┃🎡➺ _${usedPrefix}nombre_
┃🎡➺ _${usedPrefix}manca_
┃🎡➺ _${usedPrefix}manco_
┃🎡➺ _${usedPrefix}pajero_
┃🎡➺ _${usedPrefix}pajera_
┃🎡➺ _${usedPrefix}puto_
┃🎡➺ _${usedPrefix}puta_
┃🎡➺ _${usedPrefix}rata_
┃🎡➺ _${usedPrefix}love_
┃🎡➺ _${usedPrefix}doxear_
┃🎡➺ _${usedPrefix}doxxeame_
┃🎡➺ _${usedPrefix}pregunta_
┃🎡➺ _${usedPrefix}apostar_
┃🎡➺ _${usedPrefix}formarpareja_
┃🎡➺ _${usedPrefix}dado_
┃🎡➺ _${usedPrefix}verdad_
┃🎡➺ _${usedPrefix}reto_
┃🎡➺ _${usedPrefix}multijuegos_
┃🎡➺ _${usedPrefix}juegos_
*╰━━━━━━━━━━━━⬣*

*╭━━━[ قائمه القفل والفتح ]━━━⬣*
┃ *Configura si eres Propietario(a) y/o*
┃ *Admin!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃⚙️ _${usedPrefix}on *:* off *bienvenida | welcome*_
┃⚙️ _${usedPrefix}on *:* off *avisos | detect*_
┃⚙️ _${usedPrefix}on *:* off *autonivel | autolevelup*_
┃⚙️ _${usedPrefix}on *:* off *restringir | restrict*_
┃⚙️ _${usedPrefix}on *:* off *antillamar | anticall*_
┃⚙️ _${usedPrefix}on *:* off *publico | public*_
┃⚙️ _${usedPrefix}on *:* off *autovisto | autoread*_
┃⚙️ _${usedPrefix}on *:* off *temporal*_
┃⚙️ _${usedPrefix}on *:* off *stickers*_
┃⚙️ _${usedPrefix}on *:* off *autosticker*_
┃⚙️ _${usedPrefix}on *:* off *reacciones | reaction*_
┃⚙️ _${usedPrefix}on *:* off *audios*_
┃⚙️ _${usedPrefix}on *:* off *modocaliente | modohorny*_
┃⚙️ _${usedPrefix}on *:* off *antitoxicos | antitoxic*_
┃⚙️ _${usedPrefix}on *:* off *antiver | antiviewonce*_
┃⚙️ _${usedPrefix}on *:* off *antieliminar | antidelete*_
┃⚙️ _${usedPrefix}on *:* off *antinternacional | antifake*_
┃⚙️ _${usedPrefix}on *:* off *antienlace | antilink*_
┃⚙️ _${usedPrefix}on *:* off *antienlace2 | antilink2*_
┃⚙️ _${usedPrefix}on *:* off *antitiktok | antitk*_
┃⚙️ _${usedPrefix}on *:* off *antiyoutube | antiyt*_
┃⚙️ _${usedPrefix}on *:* off *antitelegram | antitel*_
┃⚙️ _${usedPrefix}on *:* off *antifacebook | antifb*_
┃⚙️ _${usedPrefix}on *:* off *antinstagram | antig*_
┃⚙️ _${usedPrefix}on *:* off *antitwitter | antitw*_
┃⚙️ _${usedPrefix}on *:* off *soloprivados | pconly*_
┃⚙️ _${usedPrefix}on *:* off *sologrupos | gconly*_
*╰━━━━━━━━━━━━⬣*

*╭━[ قائمه التنزيل ]━⬣*
┃🚀➺ _${usedPrefix}image_
┃🚀➺ _${usedPrefix}pinterest_
┃🚀➺ _${usedPrefix}wallpaper_
┃🚀➺ _${usedPrefix}play | play2_
┃🚀➺ _${usedPrefix}play.1_
┃🚀➺ _${usedPrefix}play.2_ 
┃🚀➺ _${usedPrefix}yta_
┃🚀➺ _${usedPrefix}ytv_
┃🚀➺ _${usedPrefix}ytadoc_
┃🚀➺ _${usedPrefix}ytvdoc_
┃🚀➺ _${usedPrefix}twitter_
┃🚀➺ _${usedPrefix}facebook_
┃🚀➺ _${usedPrefix}instagram_
┃🚀➺ _${usedPrefix}igstalk_
┃🚀➺ _${usedPrefix}igstory_
┃🚀➺ _${usedPrefix}tiktok_
┃🚀➺ _${usedPrefix}tiktokphoto_
┃🚀➺ _${usedPrefix}tiktokstalk_
┃🚀➺ _${usedPrefix}mediafire_
┃🚀➺ _${usedPrefix}gitclone_
┃🚀➺ _${usedPrefix}ciudad_
┃🚀➺ _${usedPrefix}consejo_
┃🚀➺ _${usedPrefix}codificar_
┃🚀➺ _${usedPrefix}decodificar_
┃🚀➺ _${usedPrefix}fraseromantica_
┃🚀➺ _${usedPrefix}historia_
*╰━━━━━━━━━━━━⬣*

*╭━[ قائمه شات مجهول ]━⬣*
┃ *¡Escribe con Alguien* 
┃ *de forma Anónima!* 
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃👤➺ _${usedPrefix}chatanonimo | anonimochat_
┃👤➺ _${usedPrefix}anonimoch_
┃👤➺ _${usedPrefix}start_
┃👤➺ _${usedPrefix}next_
┃👤➺ _${usedPrefix}leave_
*╰━━━━━━━━━━━━⬣*

*╭━[ قائمه الجروب ]━⬣*
┃ *Mejora tú Grupo con GataBot!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🌐➺ _${usedPrefix}add_
┃🌐➺ _${usedPrefix}kick_
┃🌐➺ _${usedPrefix}grupo_
┃🌐➺ _${usedPrefix}group_
┃🌐➺ _${usedPrefix}promote_
┃🌐➺ _${usedPrefix}demote_
┃🌐➺ _${usedPrefix}banchat_
┃🌐➺ _${usedPrefix}unbanchat_
┃🌐➺ _${usedPrefix}banuser_
┃🌐➺ _${usedPrefix}unbanuser_
┃🌐➺ _${usedPrefix}المشرفين_
┃🌐➺ _${usedPrefix}invocar_
┃🌐➺ _${usedPrefix}tagall_
┃🌐➺ _${usedPrefix}hidetag_
┃🌐➺ _${usedPrefix}infogroup_
┃🌐➺ _${usedPrefix}grouptime_
┃🌐➺ _${usedPrefix}advertencia_
┃🌐➺ _${usedPrefix}deladvertencia_
┃🌐➺ _${usedPrefix}delwarn_
┃🌐➺ _${usedPrefix}enlace_
┃🌐➺ _${usedPrefix}nuevonombre_
┃🌐➺ _${usedPrefix}descripcion_
┃🌐➺ _${usedPrefix}setwelcome_
┃🌐➺ _${usedPrefix}setbye_
┃🌐➺ _${usedPrefix}resetlink_
┃🌐➺ _${usedPrefix}on_
┃🌐➺ _${usedPrefix}off_
*╰━━━━━━━━━━━━⬣*

*╭━━━[ PAREJAS 💞 ]━━⬣*
┃ *Declarate con alguien*
┃ *para que sean Parejas!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃❤️➺ _${usedPrefix}listaparejas | listship_
┃❤️➺ _${usedPrefix}mipareja | mylove_
┃❤️➺ _${usedPrefix}pareja | couple *@tag*_
┃❤️➺ _${usedPrefix}aceptar | accept *@tag*_
┃❤️➺ _${usedPrefix}rechazar | decline *@tag*_
┃❤️➺ _${usedPrefix}terminar | finish *@tag*_
*╰━━━━━━━━━━━━⬣*

*╭━━━[ قائمه الاباحي 🔞 ]━━⬣*
┃ *Visita el Menú de Comandos*
┃ *Para Adultos!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🔞➺ _${usedPrefix}hornymenu_
*╰━━━━━━━━━━━━⬣*

*╭━[ قائمه التحويل 🛰️ ]━⬣*
┃ *Convierte sticker en imagen!!*
┃ *Crea enlace de archivos!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🛰️➺ _${usedPrefix}toimg_
┃🛰️➺ _${usedPrefix}tomp3_
┃🛰️➺ _${usedPrefix}tovn_
┃🛰️➺ _${usedPrefix}tovideo_
┃🛰️➺ _${usedPrefix}tourl_
┃🛰️➺ _${usedPrefix}video_
┃🛰️➺ _${usedPrefix}tts_
*╰━━━━━━━━━━━━⬣*

*╭━━━[ قائمه عمل لوجو 🔆 ]━━⬣*
┃ *Crea Logos o personaliza*
┃ *la información del Logo!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🔆 _${usedPrefix}logos *efecto texto*_
┃🌅 _${usedPrefix}menulogos2_
*╰━━━━━━━━━━━━⬣*

*╭━━━[ قائمه افكتات الصور ⛺ ]━━⬣*
┃⛺ _${usedPrefix}simpcard_
┃⛺ _${usedPrefix}hornycard_
┃⛺ _${usedPrefix}lolice_
┃⛺ _${usedPrefix}ytcomment_
┃⛺ _${usedPrefix}itssostupid_
┃⛺ _${usedPrefix}pixelar_
┃⛺ _${usedPrefix}blur_
*╰━━━━━━━━━━━━⬣*

*╭━[ قائمه الانمي 🧩 ]━⬣*
┃🧩 _${usedPrefix}chica_
┃🧩 _${usedPrefix}chico_
┃🧩 _${usedPrefix}cristianoronaldo_
┃🧩 _${usedPrefix}messi_
┃🧩 _${usedPrefix}meme_
┃🧩 _${usedPrefix}meme2_
┃🧩 _${usedPrefix}itzy_
┃🧩 _${usedPrefix}blackpink_
┃🧩 _${usedPrefix}kpop *blackpink : exo : bts*_
┃🧩 _${usedPrefix}lolivid_
┃🧩 _${usedPrefix}loli_
┃🧩 _${usedPrefix}navidad_
┃🧩 _${usedPrefix}ppcouple_
┃🧩 _${usedPrefix}neko_
┃🧩 _${usedPrefix}waifu_
┃🧩 _${usedPrefix}akira_
┃🧩 _${usedPrefix}akiyama_
┃🧩 _${usedPrefix}anna_
┃🧩 _${usedPrefix}asuna_
┃🧩 _${usedPrefix}ayuzawa_
┃🧩 _${usedPrefix}boruto_
┃🧩 _${usedPrefix}chiho_
┃🧩 _${usedPrefix}chitoge_
┃🧩 _${usedPrefix}deidara_
┃🧩 _${usedPrefix}erza_
┃🧩 _${usedPrefix}elaina_
┃🧩 _${usedPrefix}eba_
┃🧩 _${usedPrefix}emilia_
┃🧩 _${usedPrefix}hestia_
┃🧩 _${usedPrefix}hinata_
┃🧩 _${usedPrefix}inori_
┃🧩 _${usedPrefix}isuzu_
┃🧩 _${usedPrefix}itachi_
┃🧩 _${usedPrefix}itori_
┃🧩 _${usedPrefix}kaga_
┃🧩 _${usedPrefix}kagura_
┃🧩 _${usedPrefix}kaori_
┃🧩 _${usedPrefix}keneki_
┃🧩 _${usedPrefix}kotori_
┃🧩 _${usedPrefix}kurumi_
┃🧩 _${usedPrefix}madara_
┃🧩 _${usedPrefix}mikasa_
┃🧩 _${usedPrefix}miku_
┃🧩 _${usedPrefix}minato_
┃🧩 _${usedPrefix}naruto_
┃🧩 _${usedPrefix}nezuko_
┃🧩 _${usedPrefix}sagiri_
┃🧩 _${usedPrefix}sasuke_
┃🧩 _${usedPrefix}sakura_
┃🧩 _${usedPrefix}cosplay_
*╰━━━━━━━━━━━━⬣*

*╭━[ قائمه تغير الصوت 🧰 ]━⬣*
┃ *Realiza Modificaciones*
┃ *al Audio o Nota de Voz!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🧰 _${usedPrefix}دبه_
┃🧰 _${usedPrefix}ضوضاء_
┃🧰 _${usedPrefix}بطئ_
┃🧰 _${usedPrefix}بطئ2_
┃🧰 _${usedPrefix}سريع_
┃🧰 _${usedPrefix}طفل_
┃🧰 _${usedPrefix}تقطيع_
┃🧰 _${usedPrefix}روبوت_
*╰━━━━━━━━━━━━⬣*

*╭━━[ قائمه البحث 🔍 ]━━⬣*
┃ *Busca lo que quieres con GataBot!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🔍➺ _${usedPrefix}animeinfo *texto*_
┃🔍➺ _${usedPrefix}mangainfo *texto*_
┃🔍➺ _${usedPrefix}google *texto*_
┃🔍➺ _${usedPrefix}letra | lirik *texto*_
┃🔍➺ _${usedPrefix}ytsearch | yts *texto*_
┃🔍➺ _${usedPrefix}wiki | wikipedia *texto*_
*╰━━━━━━━━━━━━⬣*

*╭━━━[ قائمه اصوات 🔊 ]━━⬣*
┃ *Visita el Menú de Audios!!*
┃ *Disfruta de una Gran Variedad*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃➫🔊 _${usedPrefix}audios_
*╰━━━━━━━━━━━━⬣*

*╭━━[ قائمه ادوات 🛠️ ]━━⬣*
┃🛠️ _${usedPrefix}afk *motivo*_
┃🛠️ _${usedPrefix}acortar *url*_
┃🛠️ _${usedPrefix}calc *operacion math*_
┃🛠️ _${usedPrefix}del *respondre a mensaje del Bot*_
┃🛠️ _${usedPrefix}qrcode *texto*_
┃🛠️ _${usedPrefix}readmore *texto1|texto2*_
┃🛠️ _${usedPrefix}spamwa *numero|texto|cantidad*_
┃🛠️ _${usedPrefix}styletext *texto*_
┃🛠️ _${usedPrefix}traducir *texto*_
┃🛠️➺ _${usedPrefix}morse codificar *texto*_
┃🛠️➺ _${usedPrefix}morse decodificar *morse*_
┃🛠️➺ _${usedPrefix}encuesta | poll *Motivo*_
┃🛠️➺ _${usedPrefix}horario_
*╰━━━━━━━━━━━━⬣*

*╭━━━[ قائمه التسليه 🦦 ]━━⬣*
┃ *شراء واكتساب الموارد*
┃ *تحسين مستواك ورتبتك!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃⚗️➺ _${usedPrefix}botemporal_
┃⚗️➺ _${usedPrefix}addbot_
┃⚗️➺ _${usedPrefix}pase premium_
┃⚗️➺ _${usedPrefix}pass premium_
┃⚗️➺ _${usedPrefix}listprem_
┃⚗️➺ _${usedPrefix}transfer_
┃⚗️➺ _${usedPrefix}dar_
┃⚗️➺ _${usedPrefix}enviar_
┃⚗️➺ _${usedPrefix}balance_
┃⚗️➺ _${usedPrefix}cartera_
┃⚗️➺ _${usedPrefix}exp_
┃⚗️➺ _${usedPrefix}top_
┃⚗️➺ _${usedPrefix}level_
┃⚗️➺ _${usedPrefix}rol_
┃⚗️➺ _${usedPrefix}inventario_
┃⚗️➺ _${usedPrefix}adventure_
┃⚗️➺ _${usedPrefix}hunt_
┃⚗️➺ _${usedPrefix}fishing_
┃⚗️➺ _${usedPrefix}animales_
┃⚗️➺ _${usedPrefix}alimentos_
┃⚗️➺ _${usedPrefix}heal_
┃⚗️➺ _${usedPrefix}buy_
┃⚗️➺ _${usedPrefix}sell_
┃⚗️➺ _${usedPrefix}registrar_
┃⚗️➺ _${usedPrefix}profile_
┃⚗️➺ _${usedPrefix}myns_
┃⚗️➺ _${usedPrefix}minargemas_
┃⚗️➺ _${usedPrefix}minarcoins_
┃⚗️➺ _${usedPrefix}minarexp_
┃⚗️➺ _${usedPrefix}minar_
┃⚗️➺ _${usedPrefix}claim_
┃⚗️➺ _${usedPrefix}hourly_
┃⚗️➺ _${usedPrefix}weekly_
┃⚗️➺ _${usedPrefix}monthly_
┃⚗️➺ _${usedPrefix}cofre_
┃⚗️➺ _${usedPrefix}trabajar | work_
*╰━━━━━━━━━━━━⬣*

*╭━━━[ قائمه التوب داخل البوت ]━━⬣*
┃ *اكتشف مكانتك!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🏆➺ _${usedPrefix}top_
*╰━━━━━━━━━━━━⬣*

*╭━[ قائمه الاستيكر ]━⬣*
┃ *اصنع او انشئ ملصقات*
┃ *ملصقات مع مرشحات!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🎐 _${usedPrefix}ملصق_
┃🎐 _${usedPrefix}دمج_
┃🎐 _${usedPrefix}imagen_
┃🎐 _${usedPrefix}emoji_
┃🎐 _${usedPrefix}attp_
┃🎐 _${usedPrefix}attp2_
┃🎐 _${usedPrefix}ttp_
┃🎐 _${usedPrefix}ttp2_
┃🎐 _${usedPrefix}ttp3_
┃🎐 _${usedPrefix}ttp4_
┃🎐 _${usedPrefix}ttp5_
┃🎐 _${usedPrefix}stickermarker_
┃🎐 _${usedPrefix}stickerfilter_
┃🎐 _${usedPrefix}سرقه_
*╰━━━━━━━━━━━━⬣*

*╭━[ استيكرات انمي ]━⬣*
┃ *اتخذ إجراءات باستخدام الملصقات*
┃ *وضع علامة على شخص ما!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃⛱️ _${usedPrefix}pat_
┃⛱️ _${usedPrefix}slap_
┃⛱️ _${usedPrefix}golpear_
┃⛱️ _${usedPrefix}kiss_
┃⛱️ _${usedPrefix}food_
*╰━━━━━━━━━━━━⬣*

*╭━[ قائمه المطور ]━⬣*
┃ *هذه الاوامر للمطور فقط*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃💎 _${usedPrefix}join *enlace*_
┃💎 _${usedPrefix}unete *enlace*_
┃💎➺ _${usedPrefix}dardiamantes *cantidad*_
┃💎➺ _${usedPrefix}darxp *cantidad*_
┃💎➺ _${usedPrefix}dargatacoins *cantidad*_
┃💎➺ _${usedPrefix}addprem | userpremium *@tag* *cantidad*_
┃💎➺ _${usedPrefix}addprem2 | userpremium2 *@tag* *cantidad*_
┃💎➺ _${usedPrefix}addprem3 | userpremium3 *@tag* *cantidad*_
┃💎➺ _${usedPrefix}addprem4 | userpremium4 *@tag* *cantidad*_
┃💎➺ _${usedPrefix}idioma | language_
┃💎➺ _${usedPrefix}cajafuerte_
┃💎➺ _${usedPrefix}comunicar | broadcastall | bc *texto*_
┃💎➺ _${usedPrefix}broadcastchats | bcc *texto*_
┃💎➺ _${usedPrefix}comunicarpv *texto*_
┃💎➺ _${usedPrefix}broadcastgc *texto*_
┃💎➺ _${usedPrefix}comunicargrupos *texto*_
┃💎➺ _${usedPrefix}borrartmp | cleartmp_
┃💎➺ _${usedPrefix}delexp *@tag*_
┃💎➺ _${usedPrefix}delgatacoins *@tag*_
┃💎➺ _${usedPrefix}deldiamantes *@tag*_
┃💎➺ _${usedPrefix}reiniciar | restart_
┃💎➺ _${usedPrefix}ctualizar | update_
┃💎➺ _${usedPrefix}addprem | +prem *@tag*_
┃💎➺ _${usedPrefix}delprem | -prem *@tag*_
┃💎➺ _${usedPrefix}listapremium | listprem_
┃💎➺ _${usedPrefix}añadirdiamantes *@tag cantidad*_
┃💎➺ _${usedPrefix}añadirxp *@tag cantidad*_
┃💎➺ _${usedPrefix}añadirgatacoins *@tag cantidad*_
*╰━━━━━━━━━━━━⬣*
`.trim()

await conn.sendButtonVid(m.chat, pp, menuA, menuB, lenguajeGB.smsBotonM1(), '.menu', '🎧 ' + lenguajeGB.smsTex16() + ' 🎧', '/audios', lenguajeGB.smsBotonM3(), '#inventario', fkontak, adReply)
await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true})
	
} catch (e) {
await conn.sendButton(m.chat, `\n${wm}`, lenguajeGB['smsMalError3']() + '#report ' + usedPrefix + command, null, [[lenguajeGB.smsMensError1(), `#reporte ${lenguajeGB['smsMensError2']()} *${usedPrefix + command}*`]], m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)	
}}
handler.help = ['menu', 'اوامر', 'الاوامر']
handler.tags = ['main']
handler.command = /^(menucompleto|allmenu|allm\?)$/i
//handler.register = true
handler.exp = 50
handler.money = 20
handler.fail = null
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}  
