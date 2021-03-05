const superagent = require('superagent');
const Command = require('../Command.js');
const { oneLine, stripIndent } = require('common-tags');
const { MessageEmbed } = require('discord.js');

module.exports = class KissCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'lizard',
      usage: 'lizard',
      description: oneLine`
        fetches a random pic of a lizard for your viewing pleasure
      `,
      type: client.types.FUN,
      examples: ['lizard']
    });
  }
    async run (message, args) {
       const { body } = await superagent
        .get("https://nekos.life/api/lizard");
        
        const embed = new MessageEmbed()
        .setColor("#ff9900")
        .setTitle(`Lizard!`)
        .setImage(body.url) 
        message.channel.send({embed})
    }
};
