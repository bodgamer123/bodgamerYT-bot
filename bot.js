const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply( 'Pong!');
  }
});

client.login(process.env.BOT_TOKEN)



client.on('ready',  () => {
            console.log(`online`);
    client.user.setGame("watching you", "https://www.twitch.tv/idkg");
});  




client.on("ready", async  => {
setInterval(function(){
client.channels.find('id', '471026614738747433').setName("W");
client.channels.find('id', '471026614738747433').setName("We");
client.channels.find('id', '471026614738747433').setName("Wel");
client.channels.find('id', '471026614738747433').setName("Welc");
client.channels.find('id', '471026614738747433').setName("Welco");
client.channels.find('id', '471026614738747433').setName("Welcom");
client.channels.find('id', '471026614738747433').setName("Welcome");
client.channels.find('id', '471026614738747433').setName("Welcome T");
client.channels.find('id', '471026614738747433').setName("Welcome To");
client.channels.find('id', '471026614738747433').setName("Welcome To T");
client.channels.find('id', '471026614738747433').setName("Welcome To Th");
client.channels.find('id', '471026614738747433').setName("Welcome To Thu");
client.channels.find('id', '471026614738747433').setName("Welcome To Thun");
client.channels.find('id', '471026614738747433').setName("Welcome To Thund");
client.channels.find('id', '471026614738747433').setName("Welcome To Thunde");
client.channels.find('id', '471026614738747433').setName("Welcome To Thunder");
client.channels.find('id', '471026614738747433').setName("Welcome To Thunders");
  }, 3000);
});
client.login(process.env.BOT_TOKEN)



 client.on('message', message => {
    if (message.content.startsWith("رابط")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 10,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
  message.channel.send("**تم ارسال الرابط برسالة خاصة**")

message.author.send(`**مدة الرابط : يـوم
عدد استخدامات الرابط : 10**`)


    }
});
  
  
  
  client.on('message', message => {
    if(message.content.includes('discord.gg')){
                                            if(!message.channel.guild) return message.reply('** advertising me on DM ? 🤔   **');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`** No Invite Links :angry: !**`)
    }
}
});




  
  client.on('message' , message => {
var prefix = "!";
    if (message.content.startsWith(prefix + "shutdown")) {
        if (message.member.roles.some(r=>["┣CEO┤"].includes(r.name)) ) {
                     message.channel.sendMessage("**:** ***Currently Shutting down...*** ")
        setTimeout(function() {
            client.destroy();
            process.exit(0);
        }, 2000);
        } else {

            return message.reply(`I cannot do that for you unfortunately`)
                .then(message => {
                    message.delete(10000);
                }).catch(console.log);
        }
       
    }
});



  client.on('message', message => {
    if(message.content.includes('discord.gg')){
                                            if(!message.channel.guild) return message.reply('** advertising me on DM ? 🤔   **');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`** No Invite Links :angry: !**`)
    }
}
});
  

   
client.on("message", (message) => {
   if (message.content.startsWith("$ticket")) {  
        const reason = message.content.split(" ").slice(1).join(" ");  
        if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`This server doesn't have a \`Support Team\` role made, so the ticket won't be opened.\nIf you are an administrator, make one with that name exactly and give it to users that should be able to see tickets.`);
        if (message.guild.channels.exists("name", "ticket-{message.author.id}" + message.author.id)) return message.channel.send(`You already have a ticket open.`);    /// ALPHA CODES
        message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {
            let role = message.guild.roles.find("name", "Support Team");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            message.channel.send(`:white_check_mark: **تم إنشاء تذكرتك ، #${c.name}.**`);
            const embed = new Discord.RichEmbed()
                .setColor(0xCF40FA)
                .addField(`مرحباّ ${message.author.username}!`, `يرجى محاولة شرح سبب فتح هذه التذكرة بأكبر قدر ممكن من التفاصيل. سيكون فريق الدعم لدينا قريبا للمساعدة.`)
                .setTimestamp();
            c.send({
                embed: embed
            });
        }).catch(console.error);
    }
 
 
  if (message.content.startsWith("$close")) {
        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);
 
        message.channel.send(`هل أنت متأكد؟ بعد التأكيد ، لا يمكنك عكس هذا الإجراء!\n للتأكيد ، اكتب\`$confirm\`. سيؤدي ذلك إلى مهلة زمنية في غضون 10 ثوانٍ وإلغائها`)
            .then((m) => {
                message.channel.awaitMessages(response => response.content === '$confirm', {
                        max: 1,
                        time: 10000,
                        errors: ['time'],
                    })  
                    .then((collected) => {
                        message.channel.delete();
                    })  
                    .catch(() => {
                        m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
                            m2.delete();
                        }, 3000);
                    });
            });
    }
 
});
 
client.login(process.env.BOT_TOKEN)


coclient.on('message', async message => { 
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;
 
    var prefix = '#';
    var args = message.content.toLowerCase().split(" "); .
    var command = args[0];
 
  if(command == prefix + 'bc') {
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(':no_entry: | You dont have **ADMINISTRATOR** Permission!'); .
        if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return message.channel.send(':no_entry: | I dont have **EMBED_LINKS** Permission!');
       
        let bcCommand = new Discord.RichEmbed()
        .setTitle(':white_check_mark: **BroadCast Command.**')
        .setColor('GREEN')
        .setDescription(`**\n${prefix}bc <MESSAGE>**\n➥ \`\`Send for all members the message.\`\`\n\n**${prefix}bc <ROLE> <MESSAGE>**\n➥ \`\`Send the message to members have the role selected.\`\`\n\n**${prefix}bc admins <MESSAGE>**\n➥ \`\`Send the message to members have ADMINISTRATOR permission.\`\`\n\n**${prefix}bc members <MESSAGE>**\n➥ \`\`Send the message to members not have ADMINISTRATOR permission.\`\``)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.avatarURL)
       
        if(!args[1]) return message.channel.send(bcCommand); .
       
        var getRole = message.mentions.roles.first() || message.guild.roles.find(r => r.id === args[1]) || message.guild.roles.find(r => r.name.toLowerCase().includes(args[1]));
       
        if(args[1] === 'admins' || args[1] === 'members' || getRole) {
            var argsM = message.content.split(' ').slice(2).join(' ');
        }else if(args[1] !== 'admins' || args[1] !== 'members' || !getRole) { // Alpha Codes Server.
            var argsM = message.content.split(' ').slice(1).join(' ');
        }
       
        if(args[1] === 'admins' || args[1] === 'members') {
            if(args[1] === 'admins') {
                var admin = message.guild.members.filter(m => m.hasPermission('ADMINISTRATOR') && !m.user.bot);
                if(admin.size <= 1) return message.channel.send(':no_entry: | No admins in this server!');
               
                let notArgsM = new Discord.RichEmbed()
                .setTitle(':white_check_mark: **BroadCast Command.** (ADMINISTRATOR)')
                .setColor('GREEN')
                .setDescription(`**\n${prefix}bc admins <MESSAGE>**\n➥ \`\`Send the message to members have ADMINISTRATOR permission.\`\``)
                .setTimestamp()
                .setFooter(message.author.tag, message.author.avatarURL) // Alpha Codes Server.
               
                if(!argsM) return message.channel.send(notArgsM);
               
                let adminMsg = new Discord.RichEmbed()
                .setTitle(':white_check_mark: **BroadCast Command.** (ADMINISTRATOR)')
                .setColor('GREEN')
                .setDescription(`**\n**:red_circle: Are you sure to send the message to **${admin.size}** Admins?\n\n**➥ Message:**\n${argsM}`)
                .setTimestamp()
                .setFooter(message.author.tag, message.author.avatarURL) // Alpha Codes Server.
               
                message.channel.send(adminMsg).then(msgB => {
                    msgB.react('✅').then(() => msgB.react('❎'))
                   
                    let sendR = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
                    let dontSendR = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
                    let send = msgB.createReactionCollector(sendR);
                    let dontSend = msgB.createReactionCollector(dontSendR);
                   
                    send.on('collect', r => {
                        msgB.delete();
                        message.channel.send(`:timer: | Wait some time to send the message to **${admin.size}** Admins ...`).then(msg => {
                            admin.forEach(async a => { // Alpha Codes Server.
                                let bcMessage = new Discord.RichEmbed()
                                .setTitle(`:loudspeaker: ${a.user.username}`)
                                .setColor('GREEN')
                                .addField(':pencil: **Sender:**', message.author.username, true)
                                .addField(':globe_with_meridians: **Server:**', message.guild.name, true)
                                .addField(':scroll: **Message:**', argsM.replace('[user]', a))
                                .setTimestamp()
                                .setFooter(message.author.tag, message.author.avatarURL)
                               
                                a.send(bcMessage)
                                await msg.edit(`:white_check_mark: | <@${message.author.id}> Successfully send the message to **${admin.size}** Admins!`);
                            })
                        })
                    })
                    dontSend.on('collect', r => {
                        msgB.delete(); // Alpha Codes Server.
                        message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));
                    })
                })
            }else if(args[1] === 'members') {
                var member = message.guild.members.filter(m => !m.hasPermission('ADMINISTRATOR') && !m.user.bot);
                if(member.size === 0) return message.channel.send(':no_entry: | No members in this server!');
               
                let notArgsM = new Discord.RichEmbed()
                .setTitle(':white_check_mark: **BroadCast Command.** (MEMBER)')
                .setColor('GREEN')
                .setDescription(`**\n${prefix}bc members <MESSAGE>**\n➥ \`\`Send the message to members not have ADMINISTRATOR permission.\`\``)
                .setTimestamp() // Alpha Codes Server.
                .setFooter(message.author.tag, message.author.avatarURL)
               
                if(!argsM) return message.channel.send(notArgsM);
               
                let memberMsg = new Discord.RichEmbed()
                .setTitle(':white_check_mark: **BroadCast Command.** (MEMBER)')
                .setColor('GREEN')
                .setDescription(`**\n**:red_circle: Are you sure to send the message to **${member.size}** Members?\n\n**➥ Message:**\n${argsM}`)
                .setTimestamp()
                .setFooter(message.author.tag, message.author.avatarURL)
               
                message.channel.send(memberMsg).then(msgB => {
                    msgB.react('✅').then(() => msgB.react('❎'))
                    // Alpha Codes Server.
                    let sendR = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
                    let dontSendR = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
                    let send = msgB.createReactionCollector(sendR);
                    let dontSend = msgB.createReactionCollector(dontSendR);
                   
                    send.on('collect', r => {
                        msgB.delete();
                        message.channel.send(`:timer: | Wait some time to send the message to **${member.size}** Members ...`).then(msg => {
                            member.forEach(async m => {
                                let bcMessage = new Discord.RichEmbed()
                                .setTitle(`:loudspeaker: ${m.user.username}`)
                                .setColor('GREEN')
                                .addField(':pencil: **Sender:**', message.author.username, true)
                                .addField(':globe_with_meridians: **Server:**', message.guild.name, true)
                                .addField(':scroll: **Message:**', argsM.replace('[user]', m))
                                .setTimestamp()
                                .setFooter(message.author.tag, message.author.avatarURL)
                               
                                m.send(bcMessage) // Alpha Codes Server.
                                await msg.edit(`:white_check_mark: | <@${message.author.id}> Successfully send the message to **${member.size}** Members!`);
                            })
                        })
                    })
                    dontSend.on('collect', r => {
                        msgB.delete();
                        message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));
                    })
                }) // Alpha Codes Server.
            }
        }else if(getRole) {
            var membersRole = message.guild.members.filter(m => m.roles.has(getRole.id) && !m.user.bot);
            if(membersRole.size === 0) return message.channel.send(`:no_entry: | No members have **${getRole.name}** Role!`);
           
            let notArgsM = new Discord.RichEmbed()
            .setTitle(`:white_check_mark: **BroadCast Command.** (${getRole.name})`)
            .setColor('GREEN')
            .setDescription(`**\n${prefix}bc <ROLE> <MESSAGE>**\n➥ \`\`Send the message to members have the role selected.\`\``)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.avatarURL) // Alpha Codes Server.
           
            if(!argsM) return message.channel.send(notArgsM);
           
            let membersRoleMsg = new Discord.RichEmbed()
            .setTitle(`:white_check_mark: **BroadCast Command.** (${getRole.name})`)
            .setColor('GREEN')
            .setDescription(`**\n**:red_circle: Are you sure to send the message to **${membersRole.size}** Members?\n\n**➥ Message:**\n${argsM}`)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.avatarURL)
           
            message.channel.send(membersRoleMsg).then(msgB => {
                msgB.react('✅').then(() => msgB.react('❎')) // Alpha Codes Server.
               
                let sendR = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
                let dontSendR = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
                let send = msgB.createReactionCollector(sendR);
                let dontSend = msgB.createReactionCollector(dontSendR);
               
                send.on('collect', r => {
                    msgB.delete(); // Alpha Codes Server.
                    message.channel.send(`:timer: | Wait some time to send the message to **${membersRole.size}** Members ...`).then(msg => {
                        membersRole.forEach(async mR => {
                            let bcMessage = new Discord.RichEmbed()
                            .setTitle(`:loudspeaker: ${mR.user.username}`)
                            .setColor('GREEN')
                            .addField(':pencil: **Sender:**', message.author.username, true)
                            .addField(':globe_with_meridians: **Server:**', message.guild.name, true)
                            .addField(':scroll: **Message:**', argsM.replace('[user]', mR))
                            .setTimestamp()
                            .setFooter(message.author.tag, message.author.avatarURL)
                           
                            mR.send(bcMessage)
                            await msg.edit(`:white_check_mark: | <@${message.author.id}> Successfully send the message to **${membersRole.size}** Members!`); // Alpha Codes Server.
                        })
                    })
                })
                dontSend.on('collect', r => {
                    msgB.delete();
                    message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));
                })
            })
        }else if(args[1] !== 'admins' && args[1] !== 'members' && !getRole) {
            var allB = message.guild.members.filter(m => !m.user.bot);
            if(allB.size === 1) return message.channel.send(`:no_entry: | No members in this server!`);
           
            let allMsg = new Discord.RichEmbed() // Alpha Codes Server.
            .setTitle(`:white_check_mark: **BroadCast Command.** (ALL)`)
            .setColor('GREEN')
            .setDescription(`**\n**:red_circle: Are you sure to send the message to **${allB.size}** Members?\n\n**➥ Message:**\n${argsM}`)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.avatarURL) // Alpha Codes Server.
           
            message.channel.send(allMsg).then(msgB => {
                msgB.react('✅').then(() => msgB.react('❎'))
               
                let sendR = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
                let dontSendR = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
                let send = msgB.createReactionCollector(sendR);
                let dontSend = msgB.createReactionCollector(dontSendR); // Alpha Codes Server.
               
                send.on('collect', r => {
                    msgB.delete();
                    message.channel.send(`:timer: | Wait some time to send the message to **${allB.size}** Members ...`).then(msg => {
                        allB.forEach(async m => {
                            let bcMessage = new Discord.RichEmbed()
                            .setTitle(`:loudspeaker: ${m.user.username}`) // Alpha Codes Server.
                            .setColor('GREEN')
                            .addField(':pencil: **Sender:**', message.author.username, true)
                            .addField(':globe_with_meridians: **Server:**', message.guild.name, true)
                            .addField(':scroll: **Message:**', argsM.replace('[user]', m))
                            .setTimestamp()
                            .setFooter(message.author.tag, message.author.avatarURL)
                           
                            m.send(bcMessage)
                            await msg.edit(`:white_check_mark: | <@${message.author.id}> Successfully send the message to **${allB.size}** Members!`);
                        })
                    })
                })
                dontSend.on('collect', r => {
                    msgB.delete();
                    message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));
                })
            })
        }
    }
});
RAW Paste Data

client.on('message', async message => { // Alpha Codes Server.
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;
 
    var prefix = '#'; //<==== تقدر تغير البرفكس
    var args = message.content.toLowerCase().split(" "); // Alpha Codes Server.
    var command = args[0];
 
  if(command == prefix + 'bc') {
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(':no_entry: | You dont have **ADMINISTRATOR** Permission!'); // Alpha Codes Server.
        if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return message.channel.send(':no_entry: | I dont have **EMBED_LINKS** Permission!');
       
        let bcCommand = new Discord.RichEmbed()
        .setTitle(':white_check_mark: **BroadCast Command.**')
        .setColor('GREEN')
        .setDescription(`**\n${prefix}bc <MESSAGE>**\n➥ \`\`Send for all members the message.\`\`\n\n**${prefix}bc <ROLE> <MESSAGE>**\n➥ \`\`Send the message to members have the role selected.\`\`\n\n**${prefix}bc admins <MESSAGE>**\n➥ \`\`Send the message to members have ADMINISTRATOR permission.\`\`\n\n**${prefix}bc members <MESSAGE>**\n➥ \`\`Send the message to members not have ADMINISTRATOR permission.\`\``)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.avatarURL)
       
        if(!args[1]) return message.channel.send(bcCommand); // Alpha Codes Server.
       
        var getRole = message.mentions.roles.first() || message.guild.roles.find(r => r.id === args[1]) || message.guild.roles.find(r => r.name.toLowerCase().includes(args[1]));
       
        if(args[1] === 'admins' || args[1] === 'members' || getRole) {
            var argsM = message.content.split(' ').slice(2).join(' ');
        }else if(args[1] !== 'admins' || args[1] !== 'members' || !getRole) { // Alpha Codes Server.
            var argsM = message.content.split(' ').slice(1).join(' ');
        }
       
        if(args[1] === 'admins' || args[1] === 'members') {
            if(args[1] === 'admins') {
                var admin = message.guild.members.filter(m => m.hasPermission('ADMINISTRATOR') && !m.user.bot);
                if(admin.size <= 1) return message.channel.send(':no_entry: | No admins in this server!');
               
                let notArgsM = new Discord.RichEmbed()
                .setTitle(':white_check_mark: **BroadCast Command.** (ADMINISTRATOR)')
                .setColor('GREEN')
                .setDescription(`**\n${prefix}bc admins <MESSAGE>**\n➥ \`\`Send the message to members have ADMINISTRATOR permission.\`\``)
                .setTimestamp()
                .setFooter(message.author.tag, message.author.avatarURL) // Alpha Codes Server.
               
                if(!argsM) return message.channel.send(notArgsM);
               
                let adminMsg = new Discord.RichEmbed()
                .setTitle(':white_check_mark: **BroadCast Command.** (ADMINISTRATOR)')
                .setColor('GREEN')
                .setDescription(`**\n**:red_circle: Are you sure to send the message to **${admin.size}** Admins?\n\n**➥ Message:**\n${argsM}`)
                .setTimestamp()
                .setFooter(message.author.tag, message.author.avatarURL) // Alpha Codes Server.
               
                message.channel.send(adminMsg).then(msgB => {
                    msgB.react('✅').then(() => msgB.react('❎'))
                   
                    let sendR = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
                    let dontSendR = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
                    let send = msgB.createReactionCollector(sendR);
                    let dontSend = msgB.createReactionCollector(dontSendR);
                   
                    send.on('collect', r => {
                        msgB.delete();
                        message.channel.send(`:timer: | Wait some time to send the message to **${admin.size}** Admins ...`).then(msg => {
                            admin.forEach(async a => { // Alpha Codes Server.
                                let bcMessage = new Discord.RichEmbed()
                                .setTitle(`:loudspeaker: ${a.user.username}`)
                                .setColor('GREEN')
                                .addField(':pencil: **Sender:**', message.author.username, true)
                                .addField(':globe_with_meridians: **Server:**', message.guild.name, true)
                                .addField(':scroll: **Message:**', argsM.replace('[user]', a))
                                .setTimestamp()
                                .setFooter(message.author.tag, message.author.avatarURL)
                               
                                a.send(bcMessage)
                                await msg.edit(`:white_check_mark: | <@${message.author.id}> Successfully send the message to **${admin.size}** Admins!`);
                            })
                        })
                    })
                    dontSend.on('collect', r => {
                        msgB.delete(); // Alpha Codes Server.
                        message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));
                    })
                })
            }else if(args[1] === 'members') {
                var member = message.guild.members.filter(m => !m.hasPermission('ADMINISTRATOR') && !m.user.bot);
                if(member.size === 0) return message.channel.send(':no_entry: | No members in this server!');
               
                let notArgsM = new Discord.RichEmbed()
                .setTitle(':white_check_mark: **BroadCast Command.** (MEMBER)')
                .setColor('GREEN')
                .setDescription(`**\n${prefix}bc members <MESSAGE>**\n➥ \`\`Send the message to members not have ADMINISTRATOR permission.\`\``)
                .setTimestamp() // Alpha Codes Server.
                .setFooter(message.author.tag, message.author.avatarURL)
               
                if(!argsM) return message.channel.send(notArgsM);
               
                let memberMsg = new Discord.RichEmbed()
                .setTitle(':white_check_mark: **BroadCast Command.** (MEMBER)')
                .setColor('GREEN')
                .setDescription(`**\n**:red_circle: Are you sure to send the message to **${member.size}** Members?\n\n**➥ Message:**\n${argsM}`)
                .setTimestamp()
                .setFooter(message.author.tag, message.author.avatarURL)
               
                message.channel.send(memberMsg).then(msgB => {
                    msgB.react('✅').then(() => msgB.react('❎'))
                    // Alpha Codes Server.
                    let sendR = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
                    let dontSendR = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
                    let send = msgB.createReactionCollector(sendR);
                    let dontSend = msgB.createReactionCollector(dontSendR);
                   
                    send.on('collect', r => {
                        msgB.delete();
                        message.channel.send(`:timer: | Wait some time to send the message to **${member.size}** Members ...`).then(msg => {
                            member.forEach(async m => {
                                let bcMessage = new Discord.RichEmbed()
                                .setTitle(`:loudspeaker: ${m.user.username}`)
                                .setColor('GREEN')
                                .addField(':pencil: **Sender:**', message.author.username, true)
                                .addField(':globe_with_meridians: **Server:**', message.guild.name, true)
                                .addField(':scroll: **Message:**', argsM.replace('[user]', m))
                                .setTimestamp()
                                .setFooter(message.author.tag, message.author.avatarURL)
                               
                                m.send(bcMessage) // Alpha Codes Server.
                                await msg.edit(`:white_check_mark: | <@${message.author.id}> Successfully send the message to **${member.size}** Members!`);
                            })
                        })
                    })
                    dontSend.on('collect', r => {
                        msgB.delete();
                        message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));
                    })
                }) // Alpha Codes Server.
            }
        }else if(getRole) {
            var membersRole = message.guild.members.filter(m => m.roles.has(getRole.id) && !m.user.bot);
            if(membersRole.size === 0) return message.channel.send(`:no_entry: | No members have **${getRole.name}** Role!`);
           
            let notArgsM = new Discord.RichEmbed()
            .setTitle(`:white_check_mark: **BroadCast Command.** (${getRole.name})`)
            .setColor('GREEN')
            .setDescription(`**\n${prefix}bc <ROLE> <MESSAGE>**\n➥ \`\`Send the message to members have the role selected.\`\``)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.avatarURL) // Alpha Codes Server.
           
            if(!argsM) return message.channel.send(notArgsM);
           
            let membersRoleMsg = new Discord.RichEmbed()
            .setTitle(`:white_check_mark: **BroadCast Command.** (${getRole.name})`)
            .setColor('GREEN')
            .setDescription(`**\n**:red_circle: Are you sure to send the message to **${membersRole.size}** Members?\n\n**➥ Message:**\n${argsM}`)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.avatarURL)
           
            message.channel.send(membersRoleMsg).then(msgB => {
                msgB.react('✅').then(() => msgB.react('❎')) // Alpha Codes Server.
               
                let sendR = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
                let dontSendR = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
                let send = msgB.createReactionCollector(sendR);
                let dontSend = msgB.createReactionCollector(dontSendR);
               
                send.on('collect', r => {
                    msgB.delete(); // Alpha Codes Server.
                    message.channel.send(`:timer: | Wait some time to send the message to **${membersRole.size}** Members ...`).then(msg => {
                        membersRole.forEach(async mR => {
                            let bcMessage = new Discord.RichEmbed()
                            .setTitle(`:loudspeaker: ${mR.user.username}`)
                            .setColor('GREEN')
                            .addField(':pencil: **Sender:**', message.author.username, true)
                            .addField(':globe_with_meridians: **Server:**', message.guild.name, true)
                            .addField(':scroll: **Message:**', argsM.replace('[user]', mR))
                            .setTimestamp()
                            .setFooter(message.author.tag, message.author.avatarURL)
                           
                            mR.send(bcMessage)
                            await msg.edit(`:white_check_mark: | <@${message.author.id}> Successfully send the message to **${membersRole.size}** Members!`); // Alpha Codes Server.
                        })
                    })
                })
                dontSend.on('collect', r => {
                    msgB.delete();
                    message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));
                })
            })
        }else if(args[1] !== 'admins' && args[1] !== 'members' && !getRole) {
            var allB = message.guild.members.filter(m => !m.user.bot);
            if(allB.size === 1) return message.channel.send(`:no_entry: | No members in this server!`);
           
            let allMsg = new Discord.RichEmbed() // Alpha Codes Server.
            .setTitle(`:white_check_mark: **BroadCast Command.** (ALL)`)
            .setColor('GREEN')
            .setDescription(`**\n**:red_circle: Are you sure to send the message to **${allB.size}** Members?\n\n**➥ Message:**\n${argsM}`)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.avatarURL) // Alpha Codes Server.
           
            message.channel.send(allMsg).then(msgB => {
                msgB.react('✅').then(() => msgB.react('❎'))
               
                let sendR = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
                let dontSendR = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
                let send = msgB.createReactionCollector(sendR);
                let dontSend = msgB.createReactionCollector(dontSendR); .
               
                send.on('collect', r => {
                    msgB.delete();
                    message.channel.send(`:timer: | Wait some time to send the message to **${allB.size}** Members ...`).then(msg => {
                        allB.forEach(async m => {
                            let bcMessage = new Discord.RichEmbed()
                            .setTitle(`:loudspeaker: ${m.user.username}`) // Alpha Codes Server.
                            .setColor('GREEN')
                            .addField(':pencil: **Sender:**', message.author.username, true)
                            .addField(':globe_with_meridians: **Server:**', message.guild.name, true)
                            .addField(':scroll: **Message:**', argsM.replace('[user]', m))
                            .setTimestamp()
                            .setFooter(message.author.tag, message.author.avatarURL)
                           
                            m.send(bcMessage)
                            await msg.edit(`:white_check_mark: | <@${message.author.id}> Successfully send the message to **${allB.size}** Members!`);
                        })
                    })
                })
                dontSend.on('collect', r => {
                    msgB.delete();
                    message.channel.send(':negative_squared_cross_mark: | The command has been canceld.').then(msg => msg.delete(5000));
                })
            })
        }
    }
});
