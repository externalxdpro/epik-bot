const ms = require('ms');

module.exports = {
    name: 'mute',
    decription: "Mutes the mentioned member.",
    execute(client, message, args, Discord) {
        if (message.member.permissions.has('ADMINISTRATOR')) {
            const target = message.mentions.users.first();
            let targetId = message.guild.members.cache.get(target.id);

            if (target) {
                let memberRole = message.guild.roles.cache.find(role => role.name === 'ppl');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'muted');

                if (!args[1]) {
                    targetId.roles.remove(memberRole.id);
                    targetId.roles.add(muteRole.id);

                    message.reply(`${targetId} has been muted.`);
                }
                else {
                    targetId.roles.remove(memberRole.id);
                    targetId.roles.add(muteRole.id);

                    message.reply(`${targetId} has been muted for ${ms(ms(args[1]))}.`);

                    setTimeout(function () {
                        targetId.roles.remove(muteRole.id);
                        targetId.roles.add(memberRole.id);

                        message.reply(`${targetId} has been unmuted.`);
                    }, ms(args[1]));
                }
            } else {
                message.reply("This user does not exist");
            }
        }
        else {
            return message.reply('You don\'t have permission to use this command.');
        }
    }
}