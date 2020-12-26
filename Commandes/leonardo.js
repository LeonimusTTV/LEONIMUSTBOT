const discord = require("discord.js");


module.exports.run = async(client, message, args) => {
    message.channel.send("Tu as demmander la music de merde de leonardo");
            setTimeout(function () {
                message.channel.send("Voici le lien de la music de merde de leonardo ->> https://www.youtube.com/watch?v=-XgRwOIOK74 tu vas mourire quand tu vas écouter la music :)")
            }, 8000);
}




module.exports.help = {
    name: "leonardo"
}