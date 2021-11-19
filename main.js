const Discord = require('discord.js');
const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Discord.Intents.FLAGS.GUILD_PRESENCES,
        Discord.Intents.FLAGS.GUILD_MEMBERS
    ],
    partials: [
        'MESSAGE',
        'CHANNEL',
        'REACTION'
    ]
});
const {
    token,
    prefix
} = require('./config.json');

const memberCounter = require('./counters/member-counter');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})

client.login(token);

/*
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once("ready", () => {
    console.log(`${client.user.tag} is online!`);
    memberCounter(client);
})

client.on('guildMemberAdd', guildMember => {
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'ppl');

    guildMember.roles.add(welcomeRole)
    guildMember.guild.channels.cache.get('882305344146120714').send(`<@${guildMember.user.id}> has joined the server.`);
})

client.on("messageCreate", message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    //Commands
    if (command === 'help') {
        client.commands.get('help').execute(message, args, Discord);
    }
    else if (command === 'ban') {
        client.commands.get('ban').execute(message, args, Discord);
    }
    else if (command === 'clear') {
        client.commands.get('clear').execute(message, args, Discord);
    }
    else if (command === 'kick') {
        client.commands.get('kick').execute(message, args, Discord);
    }
    else if (command === 'mute') {
        client.commands.get('mute').execute(message, args, Discord);
    }
    else if (command === 'ping') {
        client.commands.get('ping').execute(message, args, Discord);
    }
    else if (command === 'play' || command === 'p') {
        client.commands.get('play').execute(message, args, Discord);
    }
    else if (command === 'leave') {
        client.commands.get('leave').execute(message, args, Discord);
    }
    else if (command === 'reactionrole') {
        client.commands.get('reactionrole').execute(message, args, Discord, client);
    }
    else if (command === 'unmute') {
        client.commands.get('unmute').execute(message, args, Discord);
    }
    else if (command === 'whois' || command === 'userinfo') {
        client.commands.get('whois').execute(message, args, Discord);
    }
    else if (command === 'youtube' || command === 'yt') {
        client.commands.get('youtube').execute(message, args, Discord);
    }
    else {
        message.channel.send('what?');
    }
});

client.on('raw', event => {
    const eventName = event.t;
    if (eventName === 'MESSAGE_REACTION_ADD') {
        if (event.d.message_id === '882614794774020106') {
            let reactionChannelId = client.channels.cache.get(event.d.channel_id);
            if (reactionChannelId.messages.cache.has(event.d.message_id)) {
                return;
            }
            else {
                reactionChannelId.fetch(event.d.message_id)
                    .then(msg => {
                        let msgReaction = msg.reactions.cache.get(event.d.emoji.name + ':" + event.d.emoji.id');
                        let user = client.users.get(event.d.user_id);
                        client.emit('messageReactionAdd', msgReaction, user);
                    })
                    .catch(err => console.log(err));
            }
        }
    }
    else if (eventName === 'MESSAGE_REACTION_REMOVE') {
        if (event.d.message_id === '882614794774020106') {
            let reactionChannelId = client.channels.cache.get(event.d.channel_id);
            if (reactionChannelId.messages.cache.has(event.d.message_id)) {
                return;
            }
            else {
                reactionChannelId.fetch(event.d.message_id)
                    .then(msg => {
                        let msgReaction = msg.reactions.cache.get(event.d.emoji.name + ':" + event.d.emoji.id');
                        let user = client.users.get(event.d.user_id);
                        client.emit('messageReactionRemove', msgReaction, user);
                    })
                    .catch(err => console.log(err));
            }
        }
    }
});

client.on('messageReactionAdd', (messageReaction, user) => {
    if (user.bot) return;

    let roleName = messageReaction.emoji.name;
    let role = messageReaction.message.guild.roles.cache.find(role => role.name.toLowerCase() === roleName.toLowerCase());

    if (role) {
        let member = messageReaction.message.guild.members.cache.find(member => member.id === user.id);
        if (member) {
            member.roles.add(role.id);
        }
    }
});

client.on('messageReactionRemove', (messageReaction, user) => {
    if (user.bot) return;

    let roleName = messageReaction.emoji.name;
    let role = messageReaction.message.guild.roles.cache.find(role => role.name.toLowerCase() === roleName.toLowerCase());

    if (role) {
        let member = messageReaction.message.guild.members.cache.find(member => member.id === user.id);
        if (member) {
            member.roles.remove(role.id);
        }
    }
});

/*
const discord = require('discord.js');

const client = new discord.Client({
    intents: [
        discord.Intents.FLAGS.GUILDS
    ]
});
const {token} = require('./config.json');

client.on('ready', () => {
    console.log('ready');

    client.api.application(client.user.id).guilds('857340320231456780').commands.post({
        data: {
            name: "hello",
            description: "Replies with Hello World!"
        }
    });

    client.api.application(client.user.id).guilds('857340320231456780').commands.post({
        data: {
            name: "echo",
            description: "Echoes the text following the command.",

            options: [
                {
                    name: "content",
                    description: "Content of the embed",
                    type: 3,
                    required: true
                }
            ]
        }
    });

    client.ws.on('INTERACTION_CREATE', async interaction => {
        const command = interaction.data.name.toLowerCase();
        const args = interaction.data.options;

        if (command == 'hello'){
            client.api.interactions(interaction.id, interaction.token).callback.post({
                data: {
                    type: 4,
                    data:{
                        content: "Hello World!"
                    }
                }
            });
        }

        if (command == "echo"){
            const description = args.find(args=> arg.name.toLowerCase() = "content").value;
            const embed = new discord.MessageEmbed()
                .setTitle("Echo!")
                .setDescription(description)
                .setAuthor(interaction.member.user.username);

            client.api.interactions(interaction.id, interaction.token).callback.post({
                data:{
                    type: 4,
                    data: await createAPIMessage(interaction, embed)
                }
            });
        }
    });
});

async function createAPIMessage(interaction, content){
    const apiMessage = await discord.apiMessage.create(client.channels.resolve(interaction.channel_id), content)
        .resolveData()
        .resolveFiles();

    return apiMessage;
}

client.login(token);
*/