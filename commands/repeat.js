const { SlashCommandBuilder } = require(`@discordjs/builders`);
const music = require('@koenie06/discord.js-music');

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`repeat`)
        .setDescription(`Repeats the currently playing song`)
        .addBooleanOption(option =>
            option
                .setName(`value`)
                .setDescription(`Whether repeat is on or off`)
                .setRequired(true)),
    async execute(interaction){
        const onOrOff = interaction.options.getBoolean(`value`);

        music.repeat({ interaction: interaction, value: onOrOff });
        if(onOrOff == true){
            interaction.reply(`Repeat is set to "ON"`);
        }
        else {
            interaction.reply(`Repeat is set to "OFF"`);
        }
    }
}
