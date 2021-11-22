const { SlashCommandBuilder } = require(`@discordjs/builders`);
const music = require('@koenie06/discord.js-music');

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`pause`)
        .setDescription(`Pauses the currently playing song`),
    async execute(interaction){
      music.pause({ interaction: interaction });
      interaction.reply(`Paused playback`);
    }
}
