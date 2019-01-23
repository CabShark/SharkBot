//Base bot discord :
const Discord = require('discord.js');

const client = new Discord.Client();


//Variables :
var prefix = "s!";


//Login + connexion du bot :
client.login("");


//Statut
client.on("ready", () => {
    console.log("Connexion en cours ...");
    setInterval(function() {

        var statut = [
          `Test1`, 
          `Test2`,
          `Test3`];
    
        var random = Math.floor(Math.random()*(statut.length));
    
        client.user.setPresence({ 
            game: { 
            name: statut[random],
            type: 0
          }
        });
      }, 30000); 
});

//Commande : Liste des rôles
client.on(`message`, message =>{
    if (message.content === prefix + "roleslist") {
        message.channel.send({embed:{
                color: 3447003,
                fields: [{
                    name: "Roles List :",
                    value: message.guild.roles.map(r => r.name).length > 900 ? "Too much roles" : message.guild.roles.map(r => r.name).join('\n'),
                    inline: true
                }],
                timestamp: new Date(),
                footer: {
                    text: "SharkBot"
                }
            }
                
            });
    }
});
