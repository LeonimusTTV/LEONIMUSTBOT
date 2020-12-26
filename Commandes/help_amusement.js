const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    await message.channel.send("Les commandes du bot arrive...");
    //message.channel.send("!clear pour enlever les messages (pour les admin)\n!blooh_est_mort ses quand blooh est AFK\n!clear2 pour enlever les message (fake)\n!chien image aléatoire d'un chien\n!chat image aléatoire d'un chat\n!kick pour expuser des personne (admin)\n!kikitoka pour avoir la music kiki toka\n!leonardo pour vous mentrer la music malaisante\n!leonardoami pour voir combien d'ami a leonardo\n!ping pour voire vos ping")

    let embedhelp = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Tu as fait !help_amusement donc voici les commandes")
    .addField("🎮 • __Amusement__ :", "`l!blooh_est_mort ses quand blooh est AFK\nl!clear2 pour enlever les message (fake)\nl!chien image aléatoire d'un chien\nl!chat image aléatoire d'un chat\nl!kikitoka pour avoir la music kiki toka\nl!leonardo pour vous mentrer la music malaisante\n!leonardoami pour voir combien d'ami a leonardo\nl!dindon pour une image aléatoire d'un dinon\nl!cancer <pseudo> pour dire a la personne qu'il est cancer !\nl!yanick Yanick dans c'est rêve VS la vrai vie\nl!leonardo_maison leonardo dans c'est rêve VS la vrai vie\nl!age_bot pour voir l'age du bot\nl!addFDP pour mettre le rôle FDP\nl!delFDP pour enlever le rôle FDP\nl!blooh quand vous étes Afk et pour avoir un grade\nl!delafk pour enlever le grade afk\nl!meme pour avoir une photo aléatoire sur reddit`")
    .setDescription("📋 • Liste de commades du bot ")
    setTimeout(function () {
        message.channel.send(embedhelp);
    }, 3000);




};

module.exports.help = {
    name: "help_amusement"
}