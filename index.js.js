const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
var prefix = "Dit Zeexy, ";

client.login("NjY0OTE5ODI1Mjk3OTY1MTI2.XheFFA.RjtC-s07y4LeJ7Ogc6Gf7sN_NFY");

client.on("guildMemberAdd", user =>{
    user.guild.channels.get("664939753870983234").send("Bienvenue" + user + "sur le serveur" + "!")
    user.addRole("659726552891785216")
});

client.on("guildMemberRemove", user =>{
    user.guild.channels.get("664939753870983234").send("Malheuresement " + user.user.username + " nous à quitté. RIP" + "!")
});

client.on("message", message =>{
    if(!message.guild) return
    if(message.content === prefix + "hello"){
        message.channel.send("Bonjour " + message.author.username + "!")
    }        
});

client.on("message", message =>{
    if(!message.guild) return
    if(message.content === prefix + "bye"){
        message.channel.send("A bientôt " + message.author.username + "!")
    }        
});

client.on("message", message =>{
    if(!message.guild) return
    if(message.content === prefix + "comment je m'appelle ?"){
        message.channel.send("Vous vous appelez " + message.author.username + "!")
    }
});

client.on("message", message =>{
    if(!message.guild) return
    if(message.content === prefix + "je m'appelle comment ?"){
        message.channel.send("Vous vous appelez " + message.author.username + "!")
    }
});

client.on("message", message =>{
    if(!message.guild) return
    if(message.content === prefix + "comment tu vas ?"){
        message.channel.send("Je vais bien merci ! ")
    }
});

client.on("message", message =>{
    if(!message.guild) return
    if(message.content === prefix + "comment tu va ?"){
        message.channel.send("Je vais bien merci ! ")
    }
});

client.on("message", message =>{
    if(!message.guild) return
    if(message.content === prefix + "comment sa va ?"){
        message.channel.send("Je vais bien merci ! ")
    }
});

client.on("message", message =>{
    if(!message.guild) return
    if(message.content === prefix + "comment sa vas ?"){
        message.channel.send("Je vais bien merci ! ")
    }
});

client.on("message", message =>{
    if(!message.guild) return
    if(message.content === prefix + "comment ca va ?"){
        message.channel.send("Je vais bien merci ! ")
    }
});


client.on("ready", () => {
console.log("Je suis connecté !")

})

client.login("NjY0OTE5ODI1Mjk3OTY1MTI2.XhmRNQ.odXVC8PFsmu9tFY30p76hKoKvko")