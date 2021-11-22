
const { SlashCommandBuilder } = require(`@discordjs/builders`);
const music = require(`@koenie06/discord.js-music`);

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`volume`)
        .setDescription(`Sets a volume for the music`)
        .addIntegerOption(option =>
            option
            .setName(`volume`)
            .setDescription(`Music volume level`)
            .setRequired(true)),
    async execute(interaction){
      const volume = interaction.options.getInteger(`volume`);
      if(isNaN(volume)) return interaction.reply(`Please enter a number`);

      if(volume > 100) return interaction.reply(`You can\'t set the volume higher than 100`);
      else if (volume <= 0) return interaction.reply (`You can\'t set the volume lower than 0'`);

      music.volume({
        interaction: interaction,
        volume: volume
      });
      interaction.reply(`Set the volume to ${volume}`);
    }
}
