const Discord = require("discord.js");
const answers = [
    "https://media.giphy.com/media/lqYbxH6nkXMYM/giphy.gif",
    "https://media.giphy.com/media/126NMCvhKJfNN6/giphy.gif",
    "https://media.giphy.com/media/JBP8eDB1rhIv6/giphy.gif",
    "https://media.giphy.com/media/1oKinmMQnZ3T4XCQ15/giphy.gif",
    "https://media.giphy.com/media/3oriNOxhZpQB1511eM/giphy.gif",
    "https://media.giphy.com/media/3FsptrEiNZf5C/giphy.gif",
    "https://media.giphy.com/media/BkAoonS4ywOre/giphy.gif",
    "https://media.giphy.com/media/9jak5kuZGGJWg/giphy.gif",
    "https://media.giphy.com/media/KBUZjveZKWu8rr37QO/giphy.gif",
    "https://media.giphy.com/media/3oriNOzfsvR7u3csSI/giphy.gif",
    "https://media.giphy.com/media/XGgkpVY62gcwXkOPml/giphy.gif",
]

module.exports.run = (bot, message, args) => {

    const answer = answers[Math.floor(Math.random() * answers.length)];

    let embeddindon = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle(":turkey: DINDON :turkey:")
    .setImage(answer)
    .setFooter("Image pris aléatoirement")

    message.channel.send(embeddindon);


}

module.exports.help = {
    name: "dindon"
}