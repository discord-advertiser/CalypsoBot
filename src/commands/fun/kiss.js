const superagent = require('superagent');
const Command = require('../Command.js');
const { oneLine, stripIndent } = require('common-tags');
const { MessageEmbed } = require('discord.js');

module.exports = class KissCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'kiss',
      usage: 'kiss <user>',
      description: oneLine`
        kiss someone
      `,
      type: client.types.FUN,
      examples: ['kiss @Nettles']
    });
  }
    async run (message, args) {
        if (!message.mentions.users.first()) return message.reply("You need to mention someone to kiss them");
        const { body } = await superagent
        .get("https://nekos.life/api/kiss");
        
        const embed = new MessageEmbed()
        .setColor("#ff9900")
        .setTitle(`OwO, ${message.author.username} kissed ${message.mentions.users.first().username}`)
        .setImage(body.url) 
        message.channel.send({embed})
    }
};
