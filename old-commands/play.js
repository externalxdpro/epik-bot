const { joinVoiceChannel } = require('@discordjs/voice');
const ytdl = require('ytdl-core');
const ytSearch = require('discord-youtube-api');

module.exports = {
    name: 'play',
    decription: "Joins the voice channel and plays audio",
    async execute(client, message, args, Discord) {
        message.reply(`Sorry, this command doesn't work at the moment.`);
        return;

        const voiceChannel = message.member.voice.channel;

        if (!voiceChannel) return message.reply('You need to be in a voice channel to use this command');
        const permissions = voiceChannel.permissionsFor(message.client.user);
        if (!permissions.has('CONNECT' || 'SPEAK')) return message.reply(`You don't have the correct permissions to use this command`);
        if (!args.length) return message.reply(`What do you want to play?`);

        const connection = await joinVoiceChannel({
            channelId: voiceChannel.id,
            guildId: message.member.guild.id,
            adapterCreator: message.member.guild.voiceAdapterCreator
        })

        /*
        const videoFinder = async (query) => {
            const videoResult = await new ytSearch(query);

            return videoResult.videos;
        }
        */

        //const video = await videoFinder(args.join(' '));
        const video = await ytSearch.searchVideos(args);

        if (video) {
            const stream = ytdl(video, { filter: 'audioandvideo' });
            ytdl.play(stream, { seek: 0, volume: 1 })
                .on('finish', () => {
                    connection.destroy();
                });

            await message.reply(`:thumbsup: Now Playing ***${video.title}***`);
        }
        else {
            message.reply(`No video results found`);
        }
    }
}