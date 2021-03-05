const superagent = require('superagent');
const Command = require('../Command.js');
const { oneLine, stripIndent } = require('common-tags');
const { MessageEmbed } = require('discord.js');

module.exports = class KissCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'name',
      usage: 'name',
      description: oneLine`
        creates a random name for your pleasure :)
      `,
      type: client.types.FUN,
      examples: ['name']
    });
  }
    async run (message, args) {
       const { body } = await superagent
        .get("https://nekos.life/api/v2/name");
        
        const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`Free Names!`)
        .setDescription(body.name)
        message.channel.send({embed})
    }
};
