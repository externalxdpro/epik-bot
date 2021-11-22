const { SlashCommandBuilder } = require(`@discordjs/builders`);
const { MessageEmbed } = require(`discord.js`);

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`help`)
        .setDescription(`Lists all epik bot commands`),
    async execute(interaction){
      const embed = new MessageEmbed()
            .setTitle(`Help`)
            .setDescription(`These are all of the the commands available with epik bot`)
            .addField(`Moderation`, `ban\nclear\nkick\nmute\nunban\nunmute`, true)
            .addField(`Fun`, `8ball\nepikrate\nghostping`, true)
            .addField(`Music`, `pause\nplay\nrepeat\nresume\nskip\nstop`, true)
            .addField(`Other`, `help\nping\nserverinfo\nuserinfo\nwhois`, true);
      interaction.reply({ embeds: [embed] });
    }
}
