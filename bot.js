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
    client.user.setGame("OnLiNe", "https://www.twitch.tv/idkg");
});  





client.on('message', message => {

              if(!message.channel.guild) return;

    var prefix = "$";

    if(message.content.startsWith('$bc')) {

    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));

  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );

    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);


    let request = `Requested By ${message.author.username}`;

    if (!args) return message.reply('**اكتب شي لي ارسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {

    msg.react('✅')

    .then(() => msg.react('❌'))

    .then(() =>msg.react('✅'))

    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;

    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

       let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });

    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });

    reaction1.on("collect", r => {

    message.channel.send(`☑ | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members`).then(m => m.delete(5000));

    message.guild.members.forEach(m => {

    var bc = new

       Discord.RichEmbed()

       .setColor('RANDOM')

         .setTitle('click for join server')
       
       .setURL('https://discord.gg/dsehacD')

       .addField('Server', message.guild.name)

       .addField('Sender', message.author.username)

       .addField('Message', args)

    m.send({ embed: bc })

    msg.delete();

    })

    })

    reaction2.on("collect", r => {

    message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));

    msg.delete();

    })

    })

    }

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
        if (message.member.roles.some(r=>["{th} owner"].includes(r.name)) ) {
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



client.on('message', function(msg) {
    const prefix = '$'
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField('🌐** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField('🏅** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField('🔴**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField('🔵**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField('📝**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField('🎤**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField('👑**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField('🆔**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField('📅**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });



  
client.on("message", (message) => {
    /// ALPHA CODES
   if (message.content.startsWith("$new")) {   
        const reason = message.content.split(" ").slice(1).join(" ");   
        if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`This server doesn't have a \`Support Team\` role made, so the ticket won't be opened.\nIf you are an administrator, make one with that name exactly and give it to users that should be able to see tickets.`);
        if (message.guild.channels.exists("name", "ticket-{message.author.id}" + message.author.id)) return message.channel.send(`You already have a ticket open.`);    
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
            message.channel.send(`:white_check_mark: Your ticket has been created, #${c.name}.`);
            const embed = new Discord.RichEmbed()
                .setColor(0xCF40FA)
                .addField(`Hey ${message.author.username}!`, `Please try explain why you opened this ticket with as much detail as possible. Our **Support Staff** will be here soon to help.`)
                .setTimestamp();
            c.send({
                embed: embed
            });
    }
 
  
  
 
  if (message.content.startsWith("$close")) {
        if (!message.channel.name.startsWith(`$ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);
 
       message.channel.send(`Are you sure? Once confirmed, you cannot reverse this action!\nTo confirm, type \`$confirm\`. This will time out in 10 seconds and be cancelled.`)
           .then((m) => {
               message.channel.awaitMessages(response => response.content === '$confirm', {
                       max: 1,
                       time: 10000,
                       errors: ['time'],
                   })    
                   .then((collected) => {
                       message.channel.delete();
                   })    /// ALPHA CODES
                   .catch(() => {
                       m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
                           m2.delete();
                       }, 3000);
                   });
           });
   }
 
});
   /// ALPHA CODES

client.on('message', message =>{
  if(message.content.startsWith('$join')){
    const voiceChannel = message.member.voiceChannel
    voiceChannel.join();
    message.channel.send("تم الأتصال بالروم الصوتي")
}})



client.on('message', message =>{
  if(message.content.startsWith('$leave')){
    const voiceChannel = message.member.voiceChannel
    voiceChannel.disconnect();
    message.channel.send("تم الخروج من الروم الصوتي")
}})



client.on('guildMemberAdd', member => {
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const stewart = member.guild.channels.find("name", "welcome");
     stewart.send(`<@${member.user.id}> تمت الدعوه من <@${inviter.id}>`);
  
  
