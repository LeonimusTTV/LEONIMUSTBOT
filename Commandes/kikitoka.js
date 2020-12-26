const discord = require("discord.js");


module.exports.run = async(client, message, args) => {
    message.channel.send("Tu as demmander la music kiki toka alors la voici");
            setTimeout(function () {
                message.channel.send("Voici le lien de la music kiki toka ->> https://www.youtube.com/watch?v=XZBU7BWQsZs amuse toi :)")
            }, 8000);
}




module.exports.help = {
    name: "kikitoka"
}