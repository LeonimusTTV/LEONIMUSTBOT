const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    
    if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) {
        return message.channel.send("Tu n'as pas la perm");
    }

    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) {
        return message.channel.send("Le bot n'a pas la perm");
    }

    let membre = message.guild.member(message.author);

    let role = message.guild.roles.cache.find(r => r.name === "FDP");

    message.member.roles.remove(role).catch(console.error);
    message.channel.send(`${membre} n'a plus le rôle ${role.name}`);


};

module.exports.help = {
    name: "delFDP"
}