const { SlashCommandBuilder } = require(`@discordjs/builders`);
const music = require('@koenie06/discord.js-music');

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`unpause`)
        .setDescription(`Unpauses the currently playing song`),
    async execute(interaction){
      const isPaused = await music.isPaused({ interaction: interaction });
      if (isPaused == true) {
        music.unpause({ interaction: interaction });
        interaction.reply(`Unpaused playback`)
      }
      else {
        interaction.reply(`Playback is already unpaused. Pause with "pause"`);
      }
    }
}
