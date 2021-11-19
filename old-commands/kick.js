module.exports = {
    name: 'kick',
    decription: "Kicks the mentioned member.",
    execute(client, message, args, Discord) {
        const member = message.mentions.users.first();

        if (message.member.permissions.has('KICK_MEMBERS' || 'ADMINISTRATOR')) {
            if (member) {
                const target = message.guild.members.cache.get(member.id);

                if (target.permissions.has('ADMINISTRATOR')) {
                    message.reply(`${member} couldn't be kicked`)
                }
                else {
                    target.kick();
                    message.reply(`${member} has been kicked.`);
                }
            }
            else if (!args[0]) {
                return message.reply("Who do you want to kick?")
            }
            else {
                message.reply("You couldn't kick that member.")
            }
        }
        else {
            return message.reply('You don\'t have permission to use this command.');
        }
    }
}