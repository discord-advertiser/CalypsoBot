const superagent = require('superagent');
const Command = require('../Command.js');
const { oneLine, stripIndent } = require('common-tags');
const { MessageEmbed } = require('discord.js');

module.exports = class KissCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'panda',
      usage: 'panda',
      description: oneLine`
        fetches a random pic of a panda for your viewing pleasure
      `,
      type: client.types.FUN,
      examples: ['panda']
    });
  }
    async run (message, args) {
       const { body } = await superagent
        .get("https://some-random-api.ml/img/panda");
        
        const embed = new MessageEmbed()
        .setColor("#ff9900")
        .setTitle(`Panda!`)
        .setImage(body.link) 
        message.channel.send({embed})
    }
};
