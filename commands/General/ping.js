const Command = require("../../Base/Command");

class Ping extends Command {
    constructor(client) {
        super(client, {
            name: "ping",
            description: "Get bot latency.",
            usage: ["ping"],
            aliases: ["pong", "latency"]
        });
    }

    async run(message, args, Discord) {
        let botMsg = await message.channel.send("Pinging...")

        const embed = new Discord.MessageEmbed()
            .setTitle("Pong!")
            .setDescription(
                `Websocket Latency: ${ this.client.ws.ping ? Math.round(this.client.ws.ping) : 0 }ms\nBot Latency: ${botMsg.createdAt - message.createdAt}ms`
            )
            .setColor("#7289DA");
        return botMsg.edit(embed).catch(() => botMsg.edit("An error occurred while pinging."));
    }
}

module.exports = Ping;
