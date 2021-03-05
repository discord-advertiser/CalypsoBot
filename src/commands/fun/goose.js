const superagent = require('superagent');
const Command = require('../Command.js');
const { oneLine, stripIndent } = require('common-tags');
const { MessageEmbed } = require('discord.js');

module.exports = class KissCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'goose',
      usage: 'goose',
      description: oneLine`
        fetches a random pic of a goose for your viewing pleasure
      `,
      type: client.types.FUN,
      examples: ['goose']
    });
  }
    async run (message, args) {
       const { body } = await superagent
        .get("https://nekos.life/api/v2/img/goose");
        
        const embed = new MessageEmbed()
        .setColor("#ff9900")
        .setTitle(`Goose!`)
        .setImage(body.url) 
        message.channel.send({embed})
    }
};
