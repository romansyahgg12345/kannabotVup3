let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `››╭─〘 *Donasi* 〙
╭╡
│┝‷✧ *Pulsa Indosat:* 6285788612710
│┝‷✧ *Pulsa Tri:* 62895416210179
│┝‷✧ *Linkaja:* -
│┝‷✧ *Gopay:* -
│┝‷✧ *Ovo:* -
│╰───···─────
│⁺◛˖ Ingin Donasi? Chat
│wa.me/62895416210179?text=kak+mau+donasi
╰──────────···───╮
(unknown)
`.trim(), `${wm}`, 'Owner', '.owner')

module.exports = handler

let wm = global.botwm