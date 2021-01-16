const Discord = require("discord.js");
const client = new Discord.Client();
const bdd = require("./item.json");
const Canvas = require('canvas');
const moment = require("moment");

const fs = require("fs");

client.login("NzA1NDgwMTg4NjI0MTA5NjYw.XqsToA.tT1EZpzjuaGsZ9QVeUR6O2jCkAo");

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

client.on("guildMemberAdd", async member => {

    let user = member;
    const canvas = Canvas.createCanvas(700, 250);
    const ctx = canvas.getContext(`2d`);

    const background = await Canvas.loadImage(`./wallpaper.jpg`);
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    ctx.font = `40px Calvert MT Std`;
    ctx.fillStyle = `#ffffff`;

    ctx.fillText(user.user.username, canvas.width / 2.2, canvas.height / 1.7);
    ctx.fillText((user.user.bot ? '🤖' : '🙎‍♂️'), canvas.width / 1.1, canvas.height / 4.2)
    ctx.fillText((moment(user.user.createdAt).format('DD/MM/YYYY')), canvas.width / 1.5, canvas.height / 1.05)

    ctx.beginPath();
    ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();
    const avatar = await Canvas.loadImage(user.user.displayAvatarURL({ format: 'png' }))
    ctx.drawImage(avatar, 25, 25, 200, 200);

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), './Welcome.jpg');


    client.channels.cache.get('800067651346366465').send(attachment);
})

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