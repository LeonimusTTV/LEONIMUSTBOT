const Discord = require("discord.js");


module.exports.run = async(client, message, args) => {

    setTimeout(function () {
        message.channel.send("Leonardo dans c'est rêve VS la vrai vie")
    }, 1000);

    let embedleonardor = new Discord.MessageEmbed()
    .setColor(15844367)
    .setTitle("Dans c'est rêve")
    .setFooter("Leonardo dans c'est rêve")
    .setDescription("dans c'est rêve")
    .setImage("https://media.giphy.com/media/eHWm98A9zbOE0JP9ZL/giphy.gif")

    setTimeout(function () {
        message.channel.send(embedleonardor);
    }, 5000);
    setTimeout(function () {
        message.channel.send("VS")
    }, 8000);

    let embedleonardop = new Discord.MessageEmbed()
    .setColor(15158332)
    .setTitle("Vrai vie")
    .setFooter("Leonardo dans la vrai vie")
    .setDescription("dans la vie")
    .setImage("https://media.giphy.com/media/l4Jz5OeZehyIY3Wow/giphy.gif")

    setTimeout(function () {
        message.channel.send(embedleonardop);
    }, 10000);
}




module.exports.help = {
    name: "leonardo_maison"
}