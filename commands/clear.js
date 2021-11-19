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
        if (isNaN(num)) return interaction.reply("Please enter a number");

        if (num > 100) return interaction.reply("You can't clear more than 100 messages at once");
        else if (num <= 0) return interaction.reply("That number is too small. Type a number greater than 0")

        await interaction.channel.messages.fetch({ limit: num }).then(messages => {
            interaction.channel.bulkDelete(messages);
        });
    }
}

/*
module.exports = {
    name: 'clear',
    decription: "Clears messages!",
    async execute(client, message, args, Discord) {
        if (!args[0]) return message.reply("PLease enter the amount of messages that you want to clear");
        if (isNaN(args[0])) return message.reply("Please enter a number");

        if (args[0] > 100) return message.reply("You can't clear more than 100 messages at once");
        else if (args[0] <= 0) return message.reply("That number is too small. Type a number greater than 0")

        await message.channel.messages.fetch({ limit: ++args[0] }).then(messages => {
            interaction.channel.bulkDelete(messages);
        });
    }
}
*/