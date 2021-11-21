require(`./deploy-commands.js`);
const fs = require(`fs`);
const {
    Client,
    Collection,
    Intents,
    MessageEmbed,
} = require('discord.js');
const {
    token,
    prefix
} = require('./config.json');

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_PRESENCES,
        Intents.FLAGS.GUILD_MEMBERS
    ],
    partials: [
        'MESSAGE',
        'CHANNEL',
        'REACTION'
    ]
});

const eventFiles = fs.readdirSync(`./events`).filter(file => file.endsWith(`.js`));

for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    }
    else {
        client.on(event.name, (...args) => event.execute(...args));
    }
}

client.commands = new Collection();
const commandFiles = fs.readdirSync(`./commands`).filter(file => file.endsWith(`.js`));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    
    client.commands.set(command.data.name, command);
}

//const memberCounter = require('./counters/member-counter');

client.login(token);
