const Discord = require("discord.js");
const answers = [
    "https://media.giphy.com/media/RddaRQbuBgcgw/giphy.gif",
    "https://media.giphy.com/media/KGfcnXIF8qHCThNb98/giphy.gif",
    "https://media.giphy.com/media/F6Gbwzlcmbha8/giphy.gif",
    "https://media.giphy.com/media/14j3QjLxW1E96o/giphy.gif",
    "https://media.giphy.com/media/A0aEq3RE7OFbi/giphy.gif",
    "https://media.giphy.com/media/UtVPOCJ1llKEaP3c6v/giphy.gif",
    "https://media.giphy.com/media/4uVyQiFGLicuI/giphy.gif",
    "https://media.giphy.com/media/kd4C9nXj0PnphyfPB3/giphy.gif",
    "https://media.giphy.com/media/kd4C9nXj0PnphyfPB3/giphy.gif",
    "https://media.giphy.com/media/14v0b6U1vucP1m/giphy.gif",
    "https://media.giphy.com/media/U3ZhJpKkBYPgBWnUwL/giphy.gif",
    "https://media.giphy.com/media/zmUbrAmEJcfQY/giphy.gif",
    "https://media.giphy.com/media/daUl4nKR0IgnJ4baiE/giphy.gif",
    "https://media.giphy.com/media/TgDEErjoOQD1OQemI4/giphy.gif",
]

module.exports.run = (bot, message, args) => {

    const answer = answers[Math.floor(Math.random() * answers.length)];

    let embedchat = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle(":cat: CAT :cat:")
    .setImage(answer)
    .setFooter("Image pris aléatoirement")

    message.channel.send(embedchat);


}

module.exports.help = {
    name: "chat"
}