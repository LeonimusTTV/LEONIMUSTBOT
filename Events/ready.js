const Discord = require("discord.js")

module.exports = async(client) => {
  client.user.setActivity('Les personnes qui font l!help', { type: 'WATCHING' })
  .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
  .catch(console.error);

    //client.user.setPresence({ activity: { name: 'Faite l!help pour voire les commandes ! est Yanick est moche mais leonardo plus que lui' }, status: 'dnd'})

}

//Les personnes qui font l!help