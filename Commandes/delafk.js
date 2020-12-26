

const Discord = require("discord.js")

module.exports.run = async(client, message, args) => {

    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) {
        return message.channel.send("Le bot n'a pas la perm");
    }

    let membre = message.guild.member(message.author);

    let role = message.guild.roles.cache.find(r => r.name === "AFK");

    let embednoafk = new Discord.MessageEmbed()
    .setTitle("Tu n'est plus AKF")
    .setDescription(`${membre} n'a plus le rôle ${role}`)
    .setImage("https://media.giphy.com/media/vgyeei729llBazJNH8/giphy.gif")
    .setFooter("blooh est toujours afk :)")

    message.member.roles.remove(role).catch(console.error);
    message.channel.send(embednoafk);


};

module.exports.help = {
    name: "delafk"
}