const { SlashCommandBuilder } = require(`@discordjs/builders`);
const { MessageEmbed } = require(`discord.js`);

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`unban`)
        .setDescription(`Unbans a user`)
        .addUserOption(option =>
            option
                .setName(`user`)
                .setDescription(`The id of the user that will get unbanned`)
                .setRequired(true)),
    async execute(interaction){
      if (!interaction.member.permissions.has('BAN_MEMBERS' || 'ADMINISTRATOR')) return interaction.reply('You don\'t have permission to use this command.');
      else {
        const target = interaction.options.getUser(`user`);
        const targetId = interaction.guild.members.cache.get(target.id);
        const reason = interaction.options.getString(`reason`);
        if (!targetId) return interaction.reply(`The target doesn't exist.`);

        interaction.guild.members.unban(targetId);

        const unbanEmbed = new MessageEmbed()
            .setTitle(`${target} has been unbanned from ${interaction.guild.name}`)
            .setDescription(`Reason: ${reason}`)

        interaction.reply({ embeds: [unbanEmbed] });
      }
    }
}
