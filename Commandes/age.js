const Discord = require("discord.js")


module.exports.run = async (client, message, args) => {
    message.channel.send("Le bot calcul son age...");
    
    let embedage = new Discord.MessageEmbed()
    .setColor(15158332)
    .setTitle("Age du bot")
    .setDescription("L'AGE DE TAS MÈRE")
    .setImage("https://media.giphy.com/media/Wp0Oz39RymF97MPskz/giphy.gif")

    setTimeout(function () {
        message.channel.send(embedage);
    }, 5000);
}



module.exports.help = {
    name: "age_bot"
}