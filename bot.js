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
    client.user.setGame("on developers", "https://www.twitch.tv/idkg");
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
  
  
