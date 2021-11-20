const { SlashCommandBuilder } = require(`@discordjs/builders`);
const { MessageEmbed } = require(`discord.js`);

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`ban`)
        .setDescription(`Bans a user`)
        .addUserOption(option =>
            option
                .setName(`user`)
                .setDescription(`The user that will get banned`)
                .setRequired(true))
        .addStringOption(option =>
            option
                .setName(`reason`)
                .setDescription(`The reason for the ban`)
                .setRequired(false)),
    async execute(interaction){
      if (!interaction.member.permissions.has('BAN_MEMBERS' || 'ADMINISTRATOR')) return interaction.reply('You don\'t have permission to use this command.');
      else {
        const target = interaction.options.getUser(`user`);
        const targetId = interaction.guild.members.cache.get(target.id);
        const reason = interaction.options.getString(`reason`);
        if (!targetId) return interaction.reply(`The target doesn't exist.`);

        interaction.guild.members.ban(targetId, { reason: reason });

        const banEmbed = new MessageEmbed()
            .setTitle(`${target} has been banned from ${interaction.guild.name}`)
            .setDescription(`Reason: ${reason}`);

        interaction.reply({ embeds: [banEmbed] });
      }
    }
}
