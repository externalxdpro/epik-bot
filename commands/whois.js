const { SlashCommandBuilder } = require(`@discordjs/builders`);
const { MessageEmbed } = require(`discord.js`);

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`whois`)
        .setDescription(`Returns user info`)
        .addUserOption(option => 
            option
                .setName(`user`)
                .setDescription(`The user that will get exposed`)
                .setRequired(true)),
    async execute(interaction) {
        if (!interaction.member.permissions.has('ADMINISTRATOR')) return interaction.reply('You don\'t have permission to use this command.');
        else {
            //const member = message.mentions.users.first() || message.author;
            const target = interaction.options.getUser(`user`);

            let whoisTitle = 'Whois';
            let whoisDesc = `Whois ${target}`;
            let whoisColor = 'RANDOM';
            let serverName = interaction.guild.name;
            let userAvatar = target.displayAvatarURL();
            let userCreatedAt = target.createdAt;
            //let ujoinedAt = member.joinedAt;
            let userId = target.id;
            /*
            let userPresence = target.presence.status;
            if (userPresence === "dnd") userPresence = 'Do not Disturb'
            else if (userPresence === "idle") userPresence = 'Idle'
            else if (userPresence === "online") userPresence = "Online"
            else if (userPresence === "streaming") userPresence = 'Streaming'
            let userPremium = target.premiumSince;
            if (userPremium === `null`) {
                userPremium = 'User is not a server booster.'
            }
            */

            const whoisEmbed = new MessageEmbed()
                .setTitle(whoisTitle)
                .setColor(whoisColor)
                .setFooter(serverName)
                .setTimestamp()
                .setThumbnail(userAvatar)
                .setDescription(whoisDesc)
                .addField('Full Username:', target.tag, true)
                .addField('ID:', userId, true)
                .addField('Account Creation Date:', userCreatedAt.toString(), true)
                //.addField('Joined Server Date:', member., true)
                //.addField('Bot:', member.bot, true)
                //.addField('Last Message:', member.lastMessage, true)
                //.addField('User Status:', userPresence, true)
                //.addField('Server Booster Status:', userPremium, true)
                .setAuthor(interaction.user.username)
            interaction.reply({ embeds: [whoisembed] });
        }

        //await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
    }
}

/*
module.exports = {
    name: 'whois' || 'userinfo',
    decription: "Returns the info for the user mentioned (If no user mentioned, will show the info for the own user)",
    execute(client, message, args, Discord) {
        message.delete()

        if (!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send('You don\'t have permission to use this command.');
        else {
            const member = message.mentions.users.first() || message.author

            let whoisTitle = 'Whois';
            let whoisDesc = `Whois ${member}`;
            let whoisColor = 'RANDOM';
            let serverName = message.guild.name;
            let userAvatar = member.displayAvatarURL();
            let userCreatedAt = member.createdAt;
            //let ujoinedAt = member.joinedAt;
            let userId = member.id;
            let userPresence = member.presence.status;
            if (userPresence === "dnd") userPresence = 'Do not Disturb'
            else if (userPresence === "idle") userPresence = 'Idle'
            else if (userPresence === "online") userPresence = "Online"
            else if (userPresence === "streaming") userPresence = 'Streaming'
            let userPremium = member.premiumSince;
            if (userPremium === null) {
                userPremium = 'User is not a server booster.'
            }

            const whoisembed = new Discord.MessageEmbed()
                .setTitle(whoisTitle)
                .setColor(whoisColor)
                .setFooter(serverName)
                .setTimestamp()
                .setThumbnail(userAvatar)
                .setDescription(whoisDesc)
                .addField('Full Username:', member.tag, true)
                .addField('ID:', userId, true)
                .addField('Account Creation Date:', userCreatedAt, true)
                //.addField('Joined Server Date:', member., true)
                //.addField('Bot:', member.bot, true)
                //.addField('Last Message:', member.lastMessage, true)
                .addField('User Status:', userPresence, true)
                .addField('Server Booster Status:', userPremium, true)
                .setAuthor(member.username)
            message.channel.send({ embeds: [whoisembed] });

            const member = message.mentions.users.first() || message.author
            const whois = new Discord.MessageEmbed()
                .setAuthor(member.username)
                .addField('Discord Name', member.username, true)
                .addField('Tag', member.discrimator, true)
                .addField('Joined Server Date', member.joinedAt, true)
                .addField('Account Creation Date', member.createdAt, true)
                .addField('Is bot?', member.bot, true)
                .addField('FW', member.lastMessage, true)
                .setThumbnail(member.displayAvatarURL({dynamic: ture}))
                .setColor('RANDOM')
            message.channel.send(whois)

        }
    }
}
*/
