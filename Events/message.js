const Discord = require("discord.js");
const prefix = "l!";

module.exports = async(client, message) => {

    if(message.author.bot) return;
    //if(message.channel.type === "dm") return message.channel.send("Le bot ne répond pas au message/commande on message privé <:thisshitgood:702100590448082954>");

    if(!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const commande = args.shift();

    const cmd = client.commands.get(commande);

    if(!cmd) return;
    
    cmd.run(client, message, args);
};