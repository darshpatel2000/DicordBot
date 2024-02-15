const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
     intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages, 
        GatewayIntentBits.MessageContent
    ] 
});

client.on('messageCreate', (message) => {
    if (message.author.bot) return;
    message.reply ({
        content: 'Hello World!'
    });
});

client.on('interactionCreate', interaction => {
    interaction.reply({
        content: 'pong!'
    })
})

client.login("MTIwNzgwMzY4ODE0NDM0MzA5MA.GCbUWV.EDhljDGOSX1QaxyyAvOA-L9QdOlUVwt3q6Kulg");