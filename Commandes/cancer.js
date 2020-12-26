const Discord = require("discord.js");

module.exports.run = async(client, message, args,) => {
    if(message.mentions.users.size === 0) {
        return message.channel.send("Vous devez mentionner un utilisateur !");
    }
    
    let spliteMessage = message.content.split(' ');

    if(spliteMessage.length === 2) {
        message.channel.send(spliteMessage[1] +  `${message.author.username} A dis que tes CANCER ! https://media.giphy.com/media/kg0v0Ic95kSlKrrB3e/giphy.gif`);
    }
}

module.exports.help = {
    name: "cancer"
}
