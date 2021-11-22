const { SlashCommandBuilder } = require(`@discordjs/builders`);
const music = require('@koenie06/discord.js-music');

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`resume`)
        .setDescription(`Resumes playing music`),
    async execute(interaction){
      music.resume({ interaction: interaction });
      interaction.reply(`Stopped playback`);
    }
}
