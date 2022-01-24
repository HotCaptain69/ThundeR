const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
const axios = require('axios')
module.exports = {
    name: "djs", 
    description: "gives discord.js documentation",
    type: 'CHAT_INPUT',
    options: [
        {
            name: 'query',
            description: 'Enter your query:',
            required: true,
            type: 'STRING',

        }
    ],

    run: async (client, interaction, args) => {

        const [query] = args
        if (!query) return interaction.followUp({ content: 'Please specify your query' })

        const link = `https://djsdocs.sorta.moe/v2/embed?src=stable&q=${encodeURIComponent(query)}`

        axios.get(link)
            .then(({ data }) => {
                if (data) {
                    const dataEmbed = new MessageEmbed(data)
                    interaction.followUp({ embeds: [dataEmbed] })
                }
            })

    },
};
