module.exports = {
    name: 'youtube' || 'yt',
    decription: "Sends the link for the ExternalXDPro YouTube Channel.",
    execute(client, Discord, message, args){
        message.channel.send('https://www.youtube.com/channel/UCIJmhFK6L5f-4uGPxlJbNVg');
    }
}