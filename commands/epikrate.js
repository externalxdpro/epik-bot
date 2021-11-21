const { SlashCommandBuilder } = require(`@discordjs/builders`);
const { MessageEmbed } = require(`discord.js`);

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`epikrate`)
        .setDescription(`Check how epik you are`),
    async execute(interaction){
        const user = interaction.user;
        const epikness = Math.floor(Math.random() * 100 + 1);

        const embed = new MessageEmbed()
              .setTitle(`How epik are you?`)
              .setDescription(`${user.tag} is ${epikness}% epik`);
        interaction.reply({ embeds: [embed] });
    }
}
