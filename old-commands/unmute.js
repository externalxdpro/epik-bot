module.exports = {
    name: 'unmute',
    decription: "Unmutes the mentioned member.",
    execute(client, message, args, Discord) {
        if (message.member.permissions.has('ADMINISTRATOR')) {
            const target = message.mentions.users.first();
            let targetId = message.guild.members.cache.get(target.id);

            if (target) {
                let memberRole = message.guild.roles.cache.find(role => role.name === 'ppl');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'muted');

                targetId.roles.remove(muteRole.id);
                targetId.roles.add(memberRole.id);

                message.reply(`${targetId} has been unmuted.`);
            } else {
                message.reply("This user does not exist");
            }
        }
        else {
            return message.reply('You don\'t have permission to use this command.');
        }
    }
}