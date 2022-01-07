const { SlashCommandBuilder } = require(`@discordjs/builders`);
const music = require('@koenie06/discord.js-music');

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`pause`)
        .setDescription(`Pauses the currently playing song`),
    async execute(interaction){
      const isPaused = await music.isPaused({ interaction: interaction });
      if (isPaused == true) {
        interaction.reply(`Playback is already paused. Unpause with "/unpause"`);
      }
      else {
        music.pause({ interaction: interaction });
        interaction.reply(`Paused playback`);
      }
    }
}
