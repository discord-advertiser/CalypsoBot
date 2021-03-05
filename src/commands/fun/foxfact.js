const superagent = require('superagent');
const Command = require('../Command.js');
const { oneLine, stripIndent } = require('common-tags');
const { MessageEmbed } = require('discord.js');

module.exports = class KissCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'foxfact',
      aliases: ['fact4fox', 'fox fact'],
      usage: 'foxfact',
      description: oneLine`
        fetches a random fox fact!
      `,
      type: client.types.FUN,
      examples: ['foxfact']
    });
  }
    async run (message, args) {
       const { body } = await superagent
        .get("https://some-random-api.ml/facts/fox");
        
        const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`:fox: Fox Fact :fox:`)
        .setDescription(body.fact)
        message.channel.send({embed})
    }
};
