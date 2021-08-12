const Command = require("../../structures/Command");
const { MessageEmbed } = require("discord.js")


    module.exports = class ServerBannerCommand extends Command {
        constructor(client) {
          super(client);
          this.client = client;
      
          this.name = "serverbanner";
          this.category = "Utils";
          this.description = "Comando para ver o banner do servidor";
          this.usage = "serverbanner";
          this.aliases = ["guildbanner"];
      
          this.enabled = true;
          this.guildOnly = true;
          
        }

    run({ message, args, server }, t) {
        let allowed = message.guild.features.includes("BANNER")
        if (!allowed) return message.chinoReply("error", t("commands:no-premium"))
        if (!message.guild.banner) return message.chinoReply("error", t("commands:serverbanner.no-banner"))

        const embed = new MessageEmbed()
            .setDescription(("commands:serverbanner.download", { download: message.guild.bannerURL({ format: "png",size: 2048 }) }))
            .setImage(message.guild.bannerURL({ size: 2048 }))
        
        message.channel.send(message.guild.bannerURL({ size: 2048 }))
    }
}