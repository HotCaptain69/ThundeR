const { MessageEmbed } = require("discord.js")
module.exports = {
        name : "ping",
        description : "checking ping of bot",
        userPermissions: ["SEND_MESSAGES"],
        run : async (client, interaction, args) => {
              const embed = new MessageEmbed()
              .setDescription('`Pinging...`')
              .setColor("RANDOM");    
              const msg = await interaction.followUp({ embeds: [embed] })
              const timestamp = (interaction.editedTimestamp) ? interaction.editedTimestamp : interaction.createdTimestamp;
              const latency = `\`\`\`ini\n[ ${Math.floor(msg.createdTimestamp - timestamp)}ms ]\`\`\``;
              const apiLatency = `\`\`\`ini\n[ ${Math.round(interaction.client.ws.ping)}ms ]\`\`\``;
              embed.setTitle(`Pong!`)
              .setDescription(`✅ Ping Detected!`)
              .addField(`✅ Latency`, latency, true)
              .addField(`✅ API Latency`, apiLatency, true)
              .setFooter(interaction.member.displayName,  interaction.user.displayAvatarURL({ dynamic: true }))
              .setTimestamp();
                msg.edit({ embeds: [embed] })
       }
}
