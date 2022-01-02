const { SlashCommandBuilder } = require(`@discordjs/builders`)

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`clear`)
        .setDescription(`Clears messages`)
        .addIntegerOption(option =>
            option
                .setName(`number`)
                .setDescription(`The number of messages to clear`)
                .setRequired(true)),
    async execute(interaction) {
        let num = interaction.options.getInteger(`number`);
        if (!interaction.member.permissions.has('DELETE_MESSAGES' || 'ADMINISTRATOR')) return interaction.reply(`You don\'t have permission to use this command.`);
        else {
            if (isNaN(num)) return interaction.reply("Please enter a number");

            if (num > 100) return interaction.reply("You can't clear more than 100 messages at once");
            else if (num <= 0) return interaction.reply("That number is too small. Type a number greater than 0")

            await interaction.channel.messages.fetch({ limit: num }).then(messages => {
                interaction.channel.bulkDelete(messages);
            });
        }
    }
}
