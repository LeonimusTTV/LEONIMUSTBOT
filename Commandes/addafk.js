const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) {
        return message.channel.send("Le bot n'a pas la perm");
    }

    let membre = message.guild.member(message.author);

    let role = message.guild.roles.cache.find(r => r.name === "AFK");

    let embedafk = new Discord.MessageEmbed()
    .setTitle("Tu tes mis en AKF")
    .setDescription(`${membre} à le rôle ${role}`)
    .setImage("https://media1.tenor.com/images/e0f05e578467f92a939fbee9773f4c61/tenor.gif?itemid=4767865")
    .setFooter("blooh est toujours afk :)")

    message.member.roles.add(role).catch(console.error);
    message.channel.send(embedafk);


};

module.exports.help = {
    name: "blooh"
}