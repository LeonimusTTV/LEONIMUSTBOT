const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES", "ADMINISTRATOR")) return message.channel.send("Vous n'avez pas les perm. :(")

    let argsresult
    let mChannel = message.mentions.channels.first()

    message.delete()
    if(mChannel) {
        argsresult = args.slice(1).join(" ")
        mChannel.send(argsresult)
    } else {
        argsresult = args.join(" ")
        message.channel.send(argsresult)
    }
}

module.exports.help = {
    name: "say"
}