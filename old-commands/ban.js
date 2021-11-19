module.exports = {
    name: 'ban',
    decription: "Bans the mentioned member.",
    execute(client, message, args, Discord) {
        const member = message.mentions.users.first();

        if (message.member.permissions.has('BAN_MEMBERS' || 'ADMINISTRATOR')) {
            const target = message.guild.members.cache.get(member.id);

            if (member) {
                if (target.permissions.has('ADMINISTRATOR')) {
                    message.reply(`${member} couldn't be banned`)
                }
                else {
                    target.ban();
                    message.reply(`${member} has been banned.`);
                }
            }
            else if (!args[0]) {
                return message.reply("Who do you want to ban?")
            }
            else {
                message.reply("You couldn't ban that member.")
            }
        }
        else {
            return message.reply('You don\'t have permission to use this command.');
        }
    }
}