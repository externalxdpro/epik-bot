const { SlashCommandBuilder } = require(`@discordjs/builders`);
const music = require('@koenie06/discord.js-music');

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`stop`)
        .setDescription(`Stops the playing song`),
    async execute(interaction){
      music.stop({ interaction: interaction });
      interaction.reply(`Stopped playback`);
    }
}
