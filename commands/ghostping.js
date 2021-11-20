const { SlashCommandBuilder } = require(`@discordjs/builders`);

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`ghostping`)
        .setDescription(`...`)
        .addUserOption(option =>
            option
                .setName(`user`)
                .setDescription(`The user that will get... *idk*`)
                .setRequired(true)),
    async execute(interaction){
        const target = interaction.options.getUser(`user`);
        const targetId = interaction.guild.members.cache.get(target.id);

        await interaction.reply(`${targetId}`);
        await interaction.channel.messages.fetch({ limit: 1 }).then(messages => {
            interaction.channel.bulkDelete(messages);
        });
    }
}
