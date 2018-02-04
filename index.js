const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', message => {
  if (message.content === 'sorry') {
   // message.reply('pong');
    message.channel.sendMessage('shawty shawty shawty');
  }
});

bot.on('message', message => {
  if (message.content === 'Sorry') {
   // message.reply('pong');
    message.channel.sendMessage('Sorry Sorry');
  }
});


bot.on('message', message => {
  if (message.content === 'THE BUTT DANCE') {
   // message.reply('pong');
    message.channel.sendMessage('wot');
  }
});

bot.on("ready", () => {
  bot.user.setPresence({game: {name:"DRINKING WITH JACKSON BOT AND LAY BOT"}})
  console.log('I have jackoo: {SERVERNAME}')
})

const ytdl = require('ytdl-core');

const client = new Discord.Client();

bot.on('message', message => {
    if (message.content === '.play') {
        if (message.channel.type !== 'text') return;

        const { voiceChannel } = message.member;

        if (!voiceChannel) {
            return message.reply('please join a voice channel first!');
        }

        voiceChannel.join().then(connection => {
            const stream = ytdl('https://www.youtube.com/watch?v=7ErgffP0wVw', { filter: 'audioonly' });
            const dispatcher = connection.playStream(stream);

            dispatcher.on('end', () => voiceChannel.leave());
        });
    }
});

bot.on('ready', ()=>{
  console.log(`Logged in as ${bot.user.tag}!`);
  voiceChannel = bot.guilds.find('name', 'DREAMENERG3T1CER').channels.find('name', 'DONG-HAE');
  voiceChannel.join().then(()=>{
      console.log(`Connected to ${voiceChannel.name}!`);
  });
});


// Create an event listener for new guild members
bot.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find('name', 'general');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);
});




bot.login('');
