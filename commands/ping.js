const { MessageEmbed } = require('discord.js');
module.exports = {
name: "ping",
    description: "Ping Command",
    permissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  run: async(client, message, args) => {
    let embed = new MessageEmbed()
    .setTitle('Ping Command')
    .setDescription('My Ping Is ' + client.ws.ping)
    .setColor('00FFFF')
    message.channel.send({ embeds: [embed] })
}
}
