module.exports = {
    name: 'server',
    description: 'server info',
    execute(client, kayn, REGIONS, config, message, args, con, guilds) {
        message.channel.send(`This server's name is: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
    },
};