const superagent = require("snekfetch");
const Discord = require('discord.js')

exports.run = async (client, message, args, level) => {
if(message.content.charAt(0) !== "+") return;
    if (!message.channel.nsfw) return message.channel.send('You can use this command in an NSFW Channel!')
    superagent.get('https://nekos.life/api/v2/img/eroyuri')
        .end((err, response) => {
      const lewdembed = new Discord.RichEmbed()
      .setTitle("Hentai")
      .setImage(response.body.url)
      .setColor(`#704c84`)
      .setFooter(`Tags: eroyrui`)
      .setURL(response.body.url);
  message.channel.send(lewdembed);
    })
	
}

module.exports.help = {
  name: "yuri"
}