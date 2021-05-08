const { Client, Message, MessageEmbed } = require('discord.js');
let m = require('moment-duration-format'),
    os = require('os'),
    cpuStat = require('cpu-stat'),
    ms = require('ms'),
    moment = require('moment')
    const version1 = require("discord.js").version
module.exports = {
    name: 'stats',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        cpuStat.usagePercent(function (error, percent, seconds) {
            if (error) {
              return console.error(error)
            }
            const cores = os.cpus().length
            const cpuModel = os.cpus()[0].model
            const guilds = client.guilds.cache.size.toLocaleString()
            const users = client.users.cache.size.toLocaleString()
            const channels = client.channels.cache.size.toLocaleString()
            const usage = formatBytes(process.memoryUsage().heapUsed)
            const node = process.version
            const CPU = percent.toFixed(2)

            const embed = new MessageEmbed()
            .addField('Aneo Stats:', `**<:Server_Owner:838109754098188329> Total Servers** ${guilds}\n\n**<:bfdverifieduser:838109624183816232> Total Users**: ${users}\n\n**<:CH_IconGreyTextChannel:838109379898376193> Total Channels**: ${channels}\n\n**<a:Success:821621580215877644> Usage**: ${usage}\n\n**<:nodejs:838108744092876810> Node Version**: ${node}\n\n**<:discordjs:838285692676735007> Discord.js Version**: v${version1}\n\n**<:cpu:838108865287028756> Cpu Usage** ${CPU}`)
            .addField('**Cpu Stats**', `**CPU**: ${cpuModel}\n\n **Cores**: ${cores}`)
            .setColor('BLUE')
            .setTimestamp()

            message.channel.send(embed)
    }
        )

        function formatBytes (a, b) {
            let c = 1024;
            d = b || 2
            e = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
            f = Math.floor(Math.log(a) / Math.log(c));

            return parseFloat((a / Math.pow(c, f)).toFixed(d)) + "" + e[f]
        }
    }
}