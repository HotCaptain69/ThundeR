const { Client , MessageEmbed } = require("discord.js")

module.exports = {
    name: "status",
    description: "Displays the status of the client and mongoose connection.",
    /**
     * 
     * @param {CommandInteraction} interaction 
     * @param {Client} client 
     */
    run: async ( client , interaction , args ) => {
        const Response = new MessageEmbed()
        .setColor("DARK_AQUA")
        .setDescription(`**Client**: \`🟢 ONLINE\` - \`${client.ws.ping}ms\`\n **Uptime**: <t:${parseInt(client.readyTimestamp / 1000)}:R>\n\n `) 

        interaction.followUp({
            embeds: [Response],
        })

    }
}
