const { SlashCommandBuilder } = require(`@discordjs/builders`);
const { MessageEmbed } = require(`discord.js`);

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`mute`)
        .setDescription(`Mutes the mentioned user`)
        .addUserOption(option => option
            .setName(`user`)
            .setDescription(`The user that will be muted`)
            .setRequired(true))
        .addStringOption(option => option
            .setName(`reason`)
            .setDescription(`The reason for the mute`)
            .setRequired(false)),
    async execute(interaction){
      if (!interaction.member.permissions.has('MUTE_MEMBERS' || 'ADMINISTRATOR')) return interaction.reply('You don\'t have permission to use this command.');
      else {
        const target = interaction.options.getUser(`user`);
        const targetId = interaction.guild.members.cache.get(target.id);
        if (!targetId) return interaction.reply(`The target doesn't exist.`);
        const reason = interaction.options.getString(`reason`);
        const role = interaction.guild.roles.cache.find(role => role.name === `muted`);

        const embed = new MessageEmbed()
              .setTitle(`${target.tag} has been muted`)
              .setDescription(`Reason: ${reason}`);

        targetId.roles.add(role, reason);
        interaction.reply({ embeds: [embed] });
      }
    }
}
