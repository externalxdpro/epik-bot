const { SlashCommandBuilder } = require(`@discordjs/builders`);
const { MessageEmbed } = require(`discord.js`);

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`unmute`)
        .setDescription(`Unmutes the mentioned user`)
        .addUserOption(option => option
            .setName(`user`)
            .setDescription(`The user that will be unmuted`)
            .setRequired(true))
        .addStringOption(option => option
            .setName(`reason`)
            .setDescription(`The reason for the unmute`)
            .setRequired(false)),
    async execute(interaction){
      if (!interaction.member.permissions.has('MUTE_MEMBERS' || 'ADMINISTRATOR')) return interaction.reply('You don\'t have permission to use this command.');
      else {
          const target = interaction.options.getUser(`user`);
          const targetId = interaction.guild.members.cache.get(target.id);
          const reason = interaction.options.getString(`reason`);
          const role = interaction.guild.roles.cache.find(role => role.name === `muted`);
          if (!targetId) return interaction.reply(`The target doesn't exist.`);

          const embed = new MessageEmbed()
              .setAuthor(`${target.tag} has been unmuted`, target.defaultAvatarURL);

          targetId.roles.remove(role, reason);
          interaction.reply({ embeds: [embed] });
      }
    }
}
