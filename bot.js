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



client.on('message', message => {
   
    let args = message.content.split(' ').slice(1).join(' ');
   
  if (message.content === 'ping') {
      message.channel.send(`<@${message.author.id}> Ping..!`)
  }
 
 
  if (message.content.startsWith('+bc')) {
          if (!args[0]) {
message.channel.send("**$bc <message>**");
return;
}
message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
   m.send(`${args}`);
 
});
  }
 
});


