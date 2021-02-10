const help = (pushname, prefix, botName, ownerName, reqXp, getLevelingLevel, sender, _registered, uangku) => {
        return `🔰 -----[ *MENU ${botName}* ]----- 🔰
Hello, ${pushname} 👋
Have a nice day for users, ${sender.split("@")[0]}
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ NAME : ${pushname}
┃│➸ MONEY : Rp:${uangku}
┃│➸ XP : ${reqXp}
┃│➸ LEVEL : ${getLevelingLevel(sender)}
┃│➸ USER ${botName} : ${_registered.length}
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
The following are the features of this bot!✨
If you don't understand, type *${prefix}confused*
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭──────────────────
┃│➸ *${prefix}info*
┃│➸ *${prefix}donasi*
┃│➸ *${prefix}owner*
┃│───────────────────
┃│➸ *${prefix}simplemenu*
┃│➸ *${prefix}makermenu*
┃│➸ *${prefix}gabutmenu*
┃│➸ *${prefix}downloadmenu*
┃│➸ *${prefix}randommenu*
┃│➸ *${prefix}dompetmenu*
┃│➸ *${prefix}othermenu*
┃│➸ *${prefix}groupmenu*
┃│➸ *${prefix}soundmenu*
┃│➸ *${prefix}ownermenu*
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
🔰 -----[ *POWERED BY ${ownerName}* ]----- 🔰`
}
exports.help = help
