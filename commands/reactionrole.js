const { MessageEmbed } = require(`discord.js`);
const { SlashCommandBuilder } = require(`@discordjs/builders`);

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`reactionrole`)
        .setDescription(`Creates a reaction role embed`),
    async execute(interaction) {
        const selfRoleChannel = '876811483646918677';

        const apexEmoji = interaction.guild.emojis.cache.get('876815291043164180');
        const dbdEmoji = interaction.guild.emojis.cache.get('882637607979327568');
        const minecraftEmoji = interaction.guild.emojis.cache.get('876815661895122954');
        const overwatchEmoji = interaction.guild.emojis.cache.get('882344322660433930');
        const r6Emoji = interaction.guild.emojis.cache.get('882639617856262195');
        const robloxEmoji = interaction.guild.emojis.cache.get('876816499191463946');
        const rustEmoji = interaction.guild.emojis.cache.get('882635917754531840');

        let embed = new MessageEmbed()
            .setColor('#e42643')
            .setTitle('Choose the games you play')
            .setDescription(`\n\n`
                + `${apexEmoji} for Apex\n`
                + `${dbdEmoji} for Dead by Daylight\n`
                + `${minecraftEmoji} for Minecraft\n`
                + `${overwatchEmoji} for Overwatch\n`
                + `${r6Emoji} for Rainbow Six: Siege\n`
                + `${robloxEmoji} for Roblox\n`
                + `${rustEmoji} for Rust`
            );

        const messageEmbed = await interaction.reply({ embeds: embed}, { fetchReply: true });
        messageEmbed.react(apexEmoji)
            .then(() => messageEmbed.react(dbdEmoji))
            .then(() => messageEmbed.react(minecraftEmoji))
            .then(() => messageEmbed.react(overwatchEmoji))
            .then(() => messageEmbed.react(r6Emoji))
            .then(() => messageEmbed.react(robloxEmoji))
            .then(() => messageEmbed.react(rustEmoji))
            .catch(error => console.error(`One of the emojis failed to react:`, error));
    }
}

/*
module.exports = {
    name: 'reactionrole',
    decription: "Creates a reaction role embed",
    async execute(client, message, args, Discord) {
        message.delete();

        const selfRoleChannel = '876811483646918677';

        const apexEmoji = '<:apexlogo:876815291043164180>';
        const dbdEmoji = '<:deadbydaylight:882637607979327568>';
        const minecraftEmoji = '<:minecraftlogo:876815661895122954>';
        const overwatchEmoji = '<:overwatchlogo:882344322660433930>';
        const r6Emoji = '<:r6:882639617856262195>';
        const robloxEmoji = '<:robloxlogo:876816499191463946>';
        const rustEmoji = '<:rust:882635917754531840>';

        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Choose the games you play')
            .setDescription(`\n\n`
                + `${apexEmoji} for Apex\n`
                + `${dbdEmoji} for Dead by Daylight\n`
                + `${minecraftEmoji} for Minecraft\n`
                + `${overwatchEmoji} for Overwatch\n`
                + `${r6Emoji} for Rainbow Six: Siege\n`
                + `${robloxEmoji} for Roblox\n`
                + `${rustEmoji} for Rust`
            );

        let messageEmbed = await message.channel.send({ embeds: [embed] });
        messageEmbed.react(apexEmoji);
        messageEmbed.react(dbdEmoji);
        messageEmbed.react(minecraftEmoji);
        messageEmbed.react(overwatchEmoji);
        messageEmbed.react(r6Emoji);
        messageEmbed.react(robloxEmoji);
        messageEmbed.react(rustEmoji);
    }
}
*/