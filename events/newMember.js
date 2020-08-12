module.exports = (client, message) => {
    client.on('guildMemberAdd', (message) => {
        let welcomeChannel = client.channels.get('742989518604337204')
        welcomeChannel.send(`Welcome **${message.member.username}** to the server!`)
    })
}