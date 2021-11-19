module.exports = {
    name: `messageDelete`,
    async execute(message) {
        return;
        const modLogChannel = client.channels.cache.get(`876819353952194581`);

        interaction.client.channels.cache.get(modLogChannel).send(message);
    }
}