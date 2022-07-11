const app = require('express')();

app.get('/', (req, res) => res.send('Projects UpTime Now () Dev: Dark_Master'));

app.listen(3000); 

const { Client,Intents, MessageReaction} =require ('discord.js')
const { Permissions } = require('discord.js');
const { MessageButton } = require('discord.js');
const { WebhookClient } = require('discord.js');
const { MessageAttachment } = require('discord.js');
const { MessageActionRow } = require('discord.js');
const { MessageSelectMenu } = require('discord.js');
const { Collector } = require('discord.js');
const { MessageEmbed } = require('discord.js');
const db = require('pro.db')
const config = require("./config.json")
const { channel } = require('node:diagnostics_channel');
const client = new Client({intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
	Intents.FLAGS.GUILD_INVITES,
	Intents.FLAGS.GUILD_VOICE_STATES,
	Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
	Intents.FLAGS.GUILD_INTEGRATIONS,
	Intents.FLAGS.GUILD_SCHEDULED_EVENTS,
	Intents.FLAGS.GUILD_WEBHOOKS,
	Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
	Intents.FLAGS.GUILD_MEMBERS,
	Intents.FLAGS.GUILD_BANS

]})
let prefix = config.prefix
let ch_vote = config.ch_vote
let type_max = config.type_max_sub
let type_no_date = config.type_no_date
let img_dev = config.img_dev
client.login(process.env.token) 

var _0xaacb=["\x72\x65\x61\x64\x79","\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D","\x6C\x6F\x67","\x49\x20\x52\x45\x41\x44\x59\x20\x4E\x4F\x57\x20\x28\x29\x20\x43\x6C\x69\x65\x6E\x74\x3A\x20","\x74\x61\x67","\x75\x73\x65\x72","","\x2D\x2D\x2D\x2D\x2D\x44\x65\x76\x3A\x20\x44\x61\x72\x6B\x5F\x4D\x61\x73\x74\x65\x72\x2D\x2D\x2D\x2D\x2D\x2D","\x6F\x6E"];client[_0xaacb[8]](_0xaacb[0],()=>{console[_0xaacb[2]](`${_0xaacb[1]}`);console[_0xaacb[2]](`${_0xaacb[3]}${client[_0xaacb[5]][_0xaacb[4]]}${_0xaacb[6]}`);console[_0xaacb[2]](`${_0xaacb[1]}`);console[_0xaacb[2]](`${_0xaacb[7]}`);console[_0xaacb[2]](`${_0xaacb[1]}`)})


client.on('messageCreate', async message =>{
    if(message.content.startsWith(prefix + "اشتراك")){
        var _0x4df1=["\x44\x4F\x4E\x45\x5F","\x69\x64","\x61\x75\x74\x68\x6F\x72","","\x68\x61\x73","\x72\x65\x70\x6C\x79"];if(db[_0x4df1[4]](`${_0x4df1[0]}${message[_0x4df1[2]][_0x4df1[1]]}${_0x4df1[3]}`)){return message[_0x4df1[5]]({content:`${_0x4df1[3]}${type_max}${_0x4df1[3]}`})}
        let Ifliter = m=> message.author.id === m.author.id
return message.reply({content : `**برجاء اسم التسجيل للمسابقه**`}).then(m=>{
    m.channel.awaitMessages({Ifliter, max : 1, time: 0}).then(m1=>{
        m1 = m1.first()
        var username = m1.content;
        m1.delete()

        return m.edit({content : `**لينك الصوره الخاصه بيك للمسابقه**`}).then(m=>{
            m.channel.awaitMessages({Ifliter, max : 1, time: 0}).then(m2=>{
                m2 = m2.first()
        var img = m2.content;
        m2.delete()


        return m.edit({content : `**تم تسجيل في مسابقه**`}).then(m=>{
            db.add(`Vote_${message.guild.id}`,1)
            let po = db.fetch(`Vote_${message.guild.id}`)
            if(!po || po === null) po = 1;
            var _0x81d1=["\x44\x4F\x4E\x45\x5F","\x69\x64","\x61\x75\x74\x68\x6F\x72","","\x73\x65\x74"];db[_0x81d1[4]](`${_0x81d1[0]}${message[_0x81d1[2]][_0x81d1[1]]}${_0x81d1[3]}`,message[_0x81d1[2]][_0x81d1[1]])
            setTimeout(()=>{
                let ch = client.channels.cache.get(ch_vote)
                if(!ch)return;
                ch.send({embeds : [
                    new MessageEmbed()
                    .setColor("DARK_NAVY")
                    .addFields(
                        {name : `**لأسم : \`${username}\`**`, value : `**المتسابق رقم : \`${po}\`**`},

                    )
                    .setImage(`${img}`)
                ]}).then(m=>{
                    m.react("✅")
                })
            }, 3000)
            
        })
            })
        })
    })
})
    }
})

client.on('messageCreate', async message => {
    if(message.content.startsWith(prefix + "reset-all")){
        if(!message.member.permissions.has("ADMINISTRATOR")) return message.reply({content : `**انت لست من لأدمن**`});
        db.delete(`Vote_${message.guild.id}`)
        return message.reply({content : `**تم مسح جميع البيانات المسابقه**`})
    }if(message.content.startsWith(prefix + "reset-user")){
        if(!message.member.permissions.has("ADMINISTRATOR")) return message.reply({content : `**انت لست من لأدمن**`});
        let mention = message.mentions.users.first() || message.author
        var _0x3ef7=["\x44\x4F\x4E\x45\x5F","\x69\x64","","\x66\x65\x74\x63\x68","\x72\x65\x70\x6C\x79"];let how_fo=db[_0x3ef7[3]](`${_0x3ef7[0]}${mention[_0x3ef7[1]]}${_0x3ef7[2]}`);if(!how_fo){return message[_0x3ef7[4]]({content:`${_0x3ef7[2]}${type_no_date}${_0x3ef7[2]}`})}
        var _0x8002=["\x44\x4F\x4E\x45\x5F","\x69\x64","","\x64\x65\x6C\x65\x74\x65"];db[_0x8002[3]](`${_0x8002[0]}${mention[_0x8002[1]]}${_0x8002[2]}`)
        return message.reply({content : `**تم مسح بيانات المسابق**`})
    }if(message.content.startsWith(prefix + "help")){
        const djs_embed = new MessageEmbed()
        .setColor("BLUE")
        .addFields(
            {name : `> ${prefix}اشتراك`, value : `**دخول العضو المسابقه**`},
            {name : `> ${prefix}reset-all`, value : `**مسح جميع عدد المتسابقين**`},
            {name : `> ${prefix}reset-user`, value : `**مسح العضو من المسابقه لتسجيل مره اخره**`},
        )
        .setImage(`${img_dev}`)
        return message.reply({embeds : [djs_embed]})
    }
})