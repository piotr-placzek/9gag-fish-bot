const gagParserService = require('./gagParserService.js');
const { Client, Events, GatewayIntentBits } = require('discord.js');

const token = process.env.TOKEN;
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on(Events.MessageCreate, messageRef => {
  if(messageRef.author.id === '1110142317014306886') {
    return;
  }

  if(!messageRef.content.startsWith('https://9gag.com/gag/')) {
    return;
  }

  const content = messageRef.content;
  const channel = messageRef.channel;
  messageRef.delete();

  channel.send(gagParserService.convert_v1(content))
})


client.login(token);

