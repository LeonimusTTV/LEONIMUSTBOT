const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {


    await message.channel.send("en cours de supprétions /").then(async(m) => await m.edit(`en cours de supprétions -`)).then(async(m) => await m.edit(`en cours de supprétions \ `)).then(async(m) => await m.edit(`en cours de supprétions |`)).then(async(m) => await m.edit(`en cours de supprétions /`)).then(async(m) => await m.edit(`en cours de supprétions -`)).then(async(m) => await m.edit(`en cours de supprétions \ `)).then(async(m) => await m.edit(`en cours de supprétions |`)).then(async(m) => await m.edit(`En faite nn https://tenor.com/view/cheh-bienfaits-duh-gif-12323680`))
}


module.exports.help = {
    name: "clear2"
}