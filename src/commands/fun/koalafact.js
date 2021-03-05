const superagent = require('superagent');
const Command = require('../Command.js');
const { oneLine, stripIndent } = require('common-tags');
const { MessageEmbed } = require('discord.js');

module.exports = class KissCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'koalafact',
      aliases: ['fact4koala', 'koala fact'],
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
        .get("https://some-random-api.ml/facts/koala");
        
        const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`:koala: Koala Fact :koala:`)
        .setDescription(body.fact)
        message.channel.send({embed})
    }
};
