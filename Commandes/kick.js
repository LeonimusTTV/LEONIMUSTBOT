const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send("Vous n'avez pas la perm pour kick des personne");

    if(message.mentions.users.size === 0) {
        return message.channel.send("Vous devez mentionner un utilisateur !");
    }

    let kick = message.guild.member(message.mentions.users.first());

    if(!kick) {
        return message.channel.send("Le bot n'a pas trouver l'utilisateur");
    }

    if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.channel.send("Le bot n'a pas les permission");

    kick.kick().then(member => {

        message.channel.send(`${member.user.username} est kick ! par ${message.author.username}`);
        message.mentions.users.first().send(`Vous avais étais kick du serveur **${message.guild.name}** par ${message.author.username}`);
    });
};

module.exports.help = {
    name: "kick"
}