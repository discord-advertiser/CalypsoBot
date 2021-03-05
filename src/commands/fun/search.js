const Command = require('../Command.js');
const { MessageEmbed } = require('discord.js');
const { success } = require('../../utils/emojis.json');
const { oneLine } = require('common-tags');

module.exports = class SetWelcomeMessageCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'search',
      aliases: ['lmg', 'search-lmg', 'lookup'],
      usage: 'search <search quiery>',
      description: oneLine`
      Searches the internet for the words provided
      `,
      type: client.types.FUN,
      userPermissions: ['SEND_MESSAGES'],
      examples: ['search <search quiery>']
    });
  }
  async run (message, args) {

    	   	const question = args.join(" ");
	        if (!question) return message.error("fun/lmg:MISSING");
		const encodedQuestion = question.replace(/[' '_]/g, "+");
		await message.channel.send(`http://lmgtfy.com/?q=${encodedQuestion}`);
		message.delete().catch(() => {});
	}

}
