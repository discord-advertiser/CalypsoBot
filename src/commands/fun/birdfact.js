const superagent = require('superagent');
const Command = require('../Command.js');
const { oneLine, stripIndent } = require('common-tags');
const { MessageEmbed } = require('discord.js');

module.exports = class KissCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'birdfact',
      aliases: ['fact4bird', 'bird-fact'],
      usage: 'foxfact',
      description: oneLine`
        fetches a random bird fact!
      `,
      type: client.types.FUN,
      examples: ['birdfact']
    });
  }
    async run (message, args) {
       const { body } = await superagent
        .get("https://some-random-api.ml/facts/bird");
        
        const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`:bird: Bird Fact :bird:`)
        .setDescription(body.fact)
        message.channel.send({embed})
    }
};
