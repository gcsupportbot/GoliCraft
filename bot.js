const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!forum') {
    	message.reply('Our forum link is: https://forum.GoliCraft.net');
  	}
});

client.on('message', message => {
    if (message.content === '!store') {
    	message.reply('Our store is: https://store.GoliCraft.net');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
