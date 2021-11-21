const { SlashCommandBuilder } = require(`@discordjs/builders`);
const { MessageEmbed, Client } = require(`discord.js`);

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`ping`)
        .setDescription(`Replies with the ping`),
    async execute(interaction, client){
        const calculatingEmbed = new MessageEmbed()
            .setTitle(`Pong!`)
            .setDescription(`Calculating ping...`);

        await interaction.reply({ embeds: [calculatingEmbed], fetchReply: true }).then((resultMessage) => {
            const ping = resultMessage.createdTimestamp - interaction.createdTimestamp

            const pingEmbed = new MessageEmbed()
                .setTitle(`Pong!`)
                .setDescription(`Ping: \`${ping} ms\``)
            resultMessage.edit({ embeds: [pingEmbed] });
        });
    }
}
