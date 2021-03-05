const superagent = require('superagent');
const Command = require('../Command.js');
const { oneLine, stripIndent } = require('common-tags');
const { MessageEmbed } = require('discord.js');

module.exports = class KissCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'pandafact',
      usage: 'random',
      description: oneLine`
        fetches a random panda fact!
      `,
      type: client.types.FUN,
      examples: ['pandafact']
    });
  }
    async run (message, args) {
       const { body } = await superagent
        .get("https://some-random-api.ml/facts/panda");
        
        const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`:panda_face: Panda Fact :panda_face:`)
        .setDescription(body.fact)
        message.channel.send({embed})
    }
};
