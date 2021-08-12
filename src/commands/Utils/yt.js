const Command = require("../../structures/Command");
const Discord = require("discord.js");
const YouTube = require("simple-youtube-api");
const youtube = new YouTube("AIzaSyADDYhI9WjR-E_lfc9xUCMi3LLD4_TJnSk");

module.exports = class Help extends Command {
    constructor(client) {
      super(client);
      this.client = client;
  
      this.name = "yt";
      this.category = "Utils";
      this.description = "commands.yt";
      this.usage = "yt";
      this.aliases = [];
  
      this.enabled = true;
      this.guildOnly = true;
    }
  
    async run({ message, args, prefix, author, client }, t) {

  youtube.searchVideos(args, 1)
    .then(results => {
      const ytEmbed = new Discord.MessageEmbed()

 


      message.channel.send(`${message.author}, https://youtu.be/${results[0].id}`);

    }).catch()
}}