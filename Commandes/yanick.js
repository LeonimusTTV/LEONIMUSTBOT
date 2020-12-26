const Discord = require("discord.js");


module.exports.run = async(client, message, args) => {

    setTimeout(function () {
        message.channel.send("Yanick dans c'est rêve VS la vrai Vie")
    }, 1000);

    let embedyanickr = new Discord.MessageEmbed()
    .setColor(15844367)
    .setTitle("Dans c'est rêve")
    .setFooter("Yanick dans c'est rêve")
    .setDescription("dans c'est rêve")
    .setImage("https://media.giphy.com/media/h0MTqLyvgG0Ss/giphy.gif")

    setTimeout(function () {
        message.channel.send(embedyanickr);
    }, 5000);
    setTimeout(function () {
        message.channel.send("VS")
    }, 8000);

    let embedyanickp = new Discord.MessageEmbed()
    .setColor(15158332)
    .setTitle("Vrai vie")
    .setFooter("Yanick dans la vrai vie")
    .setDescription("dans la vie")
    .setImage("https://media.giphy.com/media/m9qKA6GxmlMjaRd2Zk/giphy.gif")

    setTimeout(function () {
        message.channel.send(embedyanickp);
    }, 10000);
}




module.exports.help = {
    name: "yanick"
}