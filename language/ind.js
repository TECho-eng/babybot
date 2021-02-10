exports.wait = () => {
	return`*「❗」WAIT*`
}

exports.succes = () => {
	return`*「 SUCCESS 」*`
}

exports.lvlon = () => {
	return`*「❗」ENABLE LEVELING*`
}

exports.lvloff = () => {
	return`*「❗」DISABLE LEVELING*`
}

exports.lvlnul = () => {
	return`*「❗」YOUR LEVEL IS STILL EMPTY*`
}

exports.lvlnoon = () => {
	return`*「❗」NOT BEEN ACTIVATED*`
}

exports.noregis = () => {
	return`*「❗」NOT REGISTERED*\n*ragister ${prefix}your name|age* \n\n*examble ${prefix}ragister chikku|19*`
}

exports.baned = () => {
	return`*「❗」SORRY SORRY BRO, YOU ARE BANNED HAHAHA :V*`
}

exports.rediregis = () => {
	return`*「 ALREADY REGISTERD 」*\n\n*already registerd >_<*`
}

exports.stikga = () => {
	return`*「 FAILED 」try again next time*`
}

exports.linkga = () => {
	return`*「❗」sorry the link is invalid*`
}

exports.groupo = () => {
	return`*「❗」GROUP ONLY*`
}

exports.ownerb = () => {
	return`*「❗」OWNER BOT ONLY*`
}

exports.ownerg = () => {
	return`*「❗」OWNER GROUP ONLY*`
}

exports.admin = () => {
	return`*「❗」ADMIN GROUP ONLY*`
}

exports.badmin = () => {
	return`*「❗」BOT MUST BE ADMIN*`
}

exports.nsfwoff = () => {
	return`*「❗」NSFW IN ACTIVE*`
}

exports.bug = () => {
	return`*Problems have been reported to the BOT owner, false reports will not be responded to*`
}

exports.wrongf = () => {
	return`*「🤔」where is the text?*`
}

exports.clears = () => {
	return`*「🚮」Clear all Success*`
}

exports.pc = () => {
	return`*「❗」REGISTRESTION*\n\n to find out if you have registered please check the message I sent \n\nNOTE:\n*bot*`
}

exports.registered = (username, ageUser, serialUser, time, sender, botName) => {
	return`*「 SUCCESSFUL REGISTRATION 」*\nUntuk User Info :\n\n*➸ Name : ${namaUser}*\n*➸ Number : wa.me/${sender.split("@")[0]}*\n*➸ name : ${nameUser}*\n*➸ Registration time : ${time}*\n\n*「SN」: ${serialUser}*\n_NOTE : This message is very important :v_`
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* tidak di temukan\coba tulis *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*maaf tapi ${pushname} bukan owner script*`
}
exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`
*「 SELAMAT 」*
➸ *Nama* : ${pushname}
➸ *Nomor* : wa.me/${sender.split("@")[0]}
➸ *Xp* : ${getLevelingXp(sender)}
➸ *Level* : ${getLevel} ➸ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*maaf ${pushname} limit hari ini habis*\n*limit di reset setiap jam 24:00*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT COUNT 」*
your limits : ${limitCounts}
My boss's premium upgrade, so it's free to use bots`
}

exports.satukos = () => {
	return`*Tambah parameter 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return'
}
