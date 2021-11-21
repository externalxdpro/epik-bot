const { SlashCommandBuilder } = require(`@discordjs/builders`);
const { MessageEmbed } = require(`discord.js`);

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`8ball`)
        .setDescription(`Gives a random response to a question`)
        .addStringOption(option =>
            option
                .setName(`question`)
                .setDescription(`The question you want the wise 8-ball to answer`)
                .setRequired(true)),
    async execute(interaction){
        const question = interaction.options.getString(`question`);
        const answers = [
            "It is decidedly so.",
            "Without a doubt.",
            "Yes - definitely.",
            "You may rely on it.",
            "As I see it, yes.",
            "Most likely.",
            "Outlook good.",
            "Yes.",
            "Signs point to yes.",
            "Reply hazy, try again.",
            "Ask again later.",
            "Better not tell you now.",
            "Cannot predict now.",
            "Concentrate and ask again.",
            "Don't count on it.",
            "My reply is no.",
            "My sources say no.",
            "Outlook not so good.",
            "Very doubtful."
        ];

        const embed = new MessageEmbed()
              .setTitle(`8-Ball`)
              .setDescription(`Question: ${question}\nAnswer: ${answers[Math.floor(Math.random()*answers.length)]}`);

        interaction.reply({ embeds: [embed] });
    }
}
