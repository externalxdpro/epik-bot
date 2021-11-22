const { SlashCommandBuilder } = require(`@discordjs/builders`);
const music = require(`@koenie06/discord.js-music`);

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`play`)
        .setDescription(`Plays the given song`)
        .addStringOption(option =>
            option
            .setName(`song`)
            .setDescription(`The name/URL of your song`)
            .setRequired(true)),
    async execute(interaction){
      const song = interaction.options.getString(`song`);

      const voiceChannel = interaction.member.voice.channel;
      if (!voiceChannel) return interaction.reply({ content: `You need to be in a voice channel`, ephemeral: true });
      else{
        music.play({
          interaction: interaction,
          channel: voiceChannel,
          song: song
        });
        interaction.reply(`Playing...`);
      }
    }
}
