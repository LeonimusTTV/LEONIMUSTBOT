const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("Vous n'avez pas la perm pour ban des personne");

    if(message.mentions.users.size === 0) {
        return message.channel.send("Vous devez mentionner un utilisateur !");
    }

    let ban = message.guild.member(message.mentions.users.first());

    if(!ban) {
        return message.channel.send("Le bot n'a pas trouver l'utilisateur");
    }

    if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.channel.send("Le bot n'a pas les permission");

    ban.ban().then(member => {

        message.channel.send(`${member.user.username} est BAN | par ${message.author.username}`);
        message.mentions.users.first().send(`Vous avais étais BAN du serveur **${message.guild.name}** par ${message.author.username}`);
    });
};

module.exports.help = {
    name: "ban"
}