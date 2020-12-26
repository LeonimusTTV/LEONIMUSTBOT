const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    await message.channel.send("Les commandes du bot arrive...");
    //message.channel.send("!clear pour enlever les messages (pour les admin)\n!blooh_est_mort ses quand blooh est AFK\n!clear2 pour enlever les message (fake)\n!chien image aléatoire d'un chien\n!chat image aléatoire d'un chat\n!kick pour expuser des personne (admin)\n!kikitoka pour avoir la music kiki toka\n!leonardo pour vous mentrer la music malaisante\n!leonardoami pour voir combien d'ami a leonardo\n!ping pour voire vos ping")

    let embedhelp = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Tu as fait !help_admin donc voici les commandes")
    .addField("🛡️ • __ADMIN__ :", "`l!kick pour expuser des personne\nl!clear pour enlever les messages\nl!ban pour bannir des personne\nl!say <votre message> pour que le bot dit le mssage que vous avez mis dans <votre message>`")
    .setDescription("📋 • Liste de commades du bot ")
    setTimeout(function () {
        message.channel.send(embedhelp);
    }, 3000);




};

module.exports.help = {
    name: "help_admin"
}