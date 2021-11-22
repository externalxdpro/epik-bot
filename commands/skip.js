const { SlashCommandBuilder } = require(`@discordjs/builders`);
const music = require('@koenie06/discord.js-music');

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`skip`)
        .setDescription(`Skips the playing song`),
    async execute(interaction){
      music.skip({ interaction: interaction });
      interaction.reply(`Skipped`);
    }
}
