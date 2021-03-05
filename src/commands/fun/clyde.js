const Command = require('../Command.js');
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = class TrumpTweetCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'clyde',
      aliases: ['clydeify'],
      usage: 'clyde <message>',
      description: 'Display\'s a custom message from Clyde with the message provided.',
      type: client.types.FUN,
      examples: ['clyde Carly is the best Discord Bot!']
    });
  }
  async run(message, args) {

    // Get message
    if (!args[0]) return this.sendErrorMessage(message, 0, 'Please provide a message to clyde-ify');
    let tweet = message.content.slice(message.content.indexOf(args[0]), message.content.length);
    if (tweet.length > 68) tweet = tweet.slice(0, 65) + '...';

    try {
      const res = await fetch('https://nekobot.xyz/api/imagegen?type=clyde&text=' + tweet);
      const img = (await res.json()).message;
      const embed = new MessageEmbed()
        .setTitle('Clydeified!')
        .setImage(img)
        .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor(message.guild.me.displayHexColor);
      message.channel.send(embed);
    } catch (err) {
      message.client.logger.error(err.stack);
      this.sendErrorMessage(message, 1, 'Please try again in a few seconds', err.message);
    }
  }
};
