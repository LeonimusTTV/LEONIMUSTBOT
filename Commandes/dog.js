const Discord = require("discord.js");
const answers = [
    "https://media.giphy.com/media/4Zo41lhzKt6iZ8xff9/giphy.gif",
    "https://media.giphy.com/media/Pn1gZzAY38kbm/giphy.gif",
    "https://media.giphy.com/media/RQSuZfuylVNAY/giphy.gif",
    "https://media.giphy.com/media/dTJd5ygpxkzWo/giphy.gif",
    "https://media.giphy.com/media/3o7527pa7qs9kCG78A/giphy.gif",
    "https://media.giphy.com/media/51Uiuy5QBZNkoF3b2Z/giphy.gif",
    "https://media.giphy.com/media/xUA7aQaXbhnkX4znm8/giphy.gif",
    "https://media.giphy.com/media/kiBcwEXegBTACmVOnE/giphy.gif",
    "https://media.giphy.com/media/mCRJDo24UvJMA/giphy.gif",
    "https://media.giphy.com/media/3o7abAHdYvZdBNnGZq/giphy.gif",
    "https://media.giphy.com/media/Qt7ZKXj42izpm/giphy.gif",
    "https://media.giphy.com/media/9rtpurjbqiqZXbBBet/giphy.gif",
    "https://media.giphy.com/media/1rNzWL6GFvGR9epyij/giphy.gif",
    "https://media.giphy.com/media/wjK3YnjoQf0go/giphy.gif",
    "https://media.giphy.com/media/WLbtNNR5TKJBS/giphy.gif",
    "https://media.giphy.com/media/aCqb9YW7QclN3rtto5/giphy.gif",
    "https://media.giphy.com/media/3o7TKSha51ATTx9KzC/giphy.gif",
]

module.exports.run = (bot, message, args) => {

    const answer = answers[Math.floor(Math.random() * answers.length)];

    let embedchien = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle(":dog: DOG :dog:")
    .setImage(answer)
    .setFooter("Image pris aléatoirement")

    message.channel.send(embedchien);


}

module.exports.help = {
    name: "chien"
}