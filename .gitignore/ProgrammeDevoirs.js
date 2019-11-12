const Discord = require("discord.js")
exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setTitle(`:mag: Veuillez remplir ses conditions`)
    .setDescription(`
    
    📆 Date :
    ⏱ Échéance du devoir :
    🎓 Matière :
    ☠️ Travail noté ?
    📝 Autre chose ?
`)
.setColor(`#f10b0b`)
var test = message.content.split(" ").slice(1).join(" ");
    if (!test) return message.channel.send(embed) 
client.channels.get("643712984132354079").send(`@everyone`)
client.channels.get("643712984132354079").send(`${message.author} a fait une annonce concernant les devoirs`)
client.channels.get("643712984132354079").send(test).then(async msg => {
    await msg.react("✅")
})
message.delete()
        }
exports.help = {
    name: "d"
}
