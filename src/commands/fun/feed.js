const superagent = require('superagent');
const Command = require('../Command.js');
const { oneLine, stripIndent } = require('common-tags');
const { MessageEmbed } = require('discord.js');

module.exports = class KissCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'feed',
      usage: 'feed <user>',
      description: oneLine`
        feed someone
      `,
      type: client.types.FUN,
      examples: ['feed @Nettles']
    });
  }
    async run (message, args) {
        if (!message.mentions.users.first()) return message.reply("You need to mention someone to feed them");
        const { body } = await superagent
        .get("https://nekos.life/api/v2/img/feed");
        
        const embed = new MessageEmbed()
        .setColor("#ff9900")
        .setTitle(`${message.author.username} fed ${message.mentions.users.first().username}`)
        .setImage(body.url) 
        message.channel.send({embed})
    }
