const { MessageEmbed } = require("discord.js");
const owner = ["712635947056889897"]; // PUT YOUR ID OR IT WON'T LET YOU EVAL...
//if you want more users to use this command then ["YOUR DISCORD ACCOUNT ID","ANOTHER ID", "ANOTHER"] And so On...

module.exports = {
  name: "eval",
    description: "Eval Command",
    permissions: ["SEND_MESSAGES", "EMBED_LINKS"],

  
  run: async(client, message, args) => {
    //Eval Command(Not to be made public btw!)
    if (message.author.id != owner) {
      return message.channel.send("Limited To The Bot Owner Only!")
    }
      try {
        const code = args.join(" ");
        if (!code) {
           return message.channel.send("What do you want to evaluate?")
        }
        
        let evaled = eval(code);

        if (typeof evaled !== "string")
          evaled = require("util").inspect(evaled);

          let embed = new MessageEmbed()
          .setAuthor("Eval", message.author.avatarURL())
          .addField("Input", `\`\`\`${code}\`\`\``)
          .addField("Output", `\`\`\`${evaled}\`\`\``)
          .setColor("GREEN")

        message.channel.send({embeds: [embed]});
      } catch (err) {
        message.channel.send(`\`ERROR\` \`\`\`\n${err}\`\`\``);
    }
  }
}
