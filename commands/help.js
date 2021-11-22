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
            .addField(`Moderation`, `ban, clear, kick, mute, unban, unmute`)
            .addField(`Fun`, `8ball, epikrate, ghostping`)
            .addField(`Music`, `pause, play, repeat, resume, skip, stop`)
            .addField(`Other`, `help, ping, serverinfo, userinfo, whois`);
      interaction.reply({ embeds: [embed] });
    }
}
