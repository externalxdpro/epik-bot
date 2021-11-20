const { SlashCommandBuilder } = require(`@discordjs/builders`);
const { MessageEmbed } = require(`discord.js`);

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`ping`)
        .setDescription(`Replies with ping!`),
    async execute(interaction){
        const ping = Date.now() - interaction.createdTimestamp;

        const embed = new MessageEmbed()
            .setTitle(`Pong!`)
            .setDescription(`Ping: ${ping}`);

        await interaction.reply({ embeds: [embed] });
    }
}
