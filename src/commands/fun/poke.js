const superagent = require('superagent');
const Command = require('../Command.js');
const { oneLine, stripIndent } = require('common-tags');
const { MessageEmbed } = require('discord.js');

module.exports = class KissCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'poke',
      usage: 'poke <user>',
      description: oneLine`
        poke someone
      `,
      type: client.types.FUN,
      examples: ['poke @Nettles']
    });
  }
    async run (message, args) {
        if (!message.mentions.users.first()) return message.reply("You need to mention someone to poke them");
        const { body } = await superagent
        .get("https://nekos.life/api/v2/img/poke");
        
        const embed = new MessageEmbed()
        .setColor("#ff9900")
        .setTitle(`${message.author.username} poked ${message.mentions.users.first().username}`)
        .setImage(body.url) 
        message.channel.send({embed})
    }
};
