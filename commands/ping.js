const { SlashCommandBuilder } = require(`@discordjs/builders`);

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`ping`)
        .setDescription(`Replies with pong!`),
    async execute(interaction){
        await interaction.reply(`pong!`);
    }
}

/*
module.exports = {
    name: 'ping',
    decription: "Replies with pong",
    execute(client, Discord, message, args){
        message.channel.send('pong!');
    }
}
*/