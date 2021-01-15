const Discord = require("discord.js");
const client = new Discord.Client();
const bdd = require("./item.json");

const fs = require("fs");

client.login(process.env.TOKEN);

client.commands = new Discord.Collection();

/*client.on("guildMemberAdd", async member2 => {
    let bienvenu = member2.guild.channels.cache.find(x => x.name === "👐bienvenue👐")

    let embedindex = new Discord.MessageEmbed()
    .setColor("0BFB03")
    .setDescription(`Bienvenue ${member2} sur mon serveur, SAH QUEL PLAISIR <:yeet:702104997592301568>`)
    .setImage("https://media.giphy.com/media/XHVso7UUDSOFm9Wzsz/giphy.gif")
    .setTitle("Bienvenue !!")

    member2.createDM().then(channel => {
        bienvenu.send(embedindex)
    }).catch(console.error)
})*/

/*client.on("guildMemberRemove", async memberr => {
    let bienvenu = memberr.guild.channels.cache.find(x => x.name === "👐au-revoire👐")

    let embedindexr = new Discord.MessageEmbed()
    .setColor("FA0404")
    .setDescription(`Bye Bye ${memberr} tu nous as quiter trop tôt <:thisshitgood:702100590448082954>`)
    .setImage("https://media.giphy.com/media/VDT5aZxtEFf8dSFarF/giphy.gif")
    .setTitle("Au-revoire !")

    memberr.createDM().then(channel => {
        bienvenu.send(embedindexr)
    }).catch(console.error)
})*/

fs.readdir("./Commandes/", (error, f) => {
    if(error) console.log(error);

    let commandes = f.filter(f => f.split(".").pop() === "js");
    if(commandes.length <= 0) return console.log("Aucune commande trouvée !");


    commandes.forEach((f) => {

        let commande = require(`./Commandes/${f}`);
        console.log(`la commande ${f} a correctement était charger ✅`);

    client.commands.set(commande.help.name, commande);
    });
});

client.on("message", message => {
    if(message.content.startsWith("l!setitemrl")){
        message.delete()
        if(message.member.hasPermission('MANAGE_MESSAGES')){
            if(message.content.length > 5){
                message_item = message.content.slice(12)
                bdd["message-item"] = message_item
                SaveItem()
            }
        }
    }

    if(message.content.startsWith("l!item")){
        if(bdd["message-item"]){
            message.channel.send(bdd["message-item"]);
        }else{

        }
    }
})

function SaveItem(){
    fs.writeFile("./item.json", JSON.stringify(bdd, null, 4), (err) => {
        if(err) message.channel.send("Une erreur est survenue.");
    });
}

fs.readdir("./Events/", (error, f) => {
    if(error) console.log(error);
    console.log(`l'events ${f.length} sont bien charger !`);

    f.forEach((f) => {
        const events = require(`./Events/${f}`);
        const event = f.split(".")[0];

    client.on(event, events.bind(null, client));
    })
})
