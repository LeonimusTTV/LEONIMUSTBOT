const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) {
        return message.channel.send("Le bot n'a pas la perm");
    }

    let membre = message.guild.member(message.author);

    let role = message.guild.roles.cache.find(r => r.name === "FDP");

    message.member.roles.add(role).catch(console.error);
    message.channel.send(`${membre} a maintenant le rôle ${role}`);


};

module.exports.help = {
    name: "addFDP"
}