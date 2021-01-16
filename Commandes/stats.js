const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = async(client, message, args) => {

    const membre = message.mentions.members.first() || message.member;

    message.channel.send({
        embed: {
            color: "RANDOM",
            title: `Statistiques du l'utilisateur **${membre.user.username}**`,
            thumbnail: {
                url: membre.user.displayAvatarURL()
            },
            fields: [
                {
                name: "> ID :",
                value: membre.id
                },
                {
                    name: "Crée le :",
                    value: moment.utc(membre.user.createdAt).format("LL")
                },
                {
                    name: "Jeu :",
                    value: `${membre.user.activity ? `${membre.user.activity.name}` : "Aucun jeux (marche pas bien)"}`
                },
                {
                    name: "Rejoin le :",
                    value: moment.utc(membre.joinedAt).format("LL")
                }
            ],
            footer: {
                text: `Informations de l'utilisateur ${membre.user.username}`
            }
        },
    }).catch(console.log)
};

module.exports.help = {
    name: "stats"
}