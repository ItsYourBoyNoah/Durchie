module.exports = class {
    constructor(client) {
        this.client = client;
    }

    async run() {
        this.client.user.setActivity(`g?help, Made by xNo_ah#0001`, {
            type: "LISTENING"
        });
        console.log(`${this.client.user.tag}, Watching ${this.client.users.cache.size} users and ${this.client.guilds.cache.size} servers.`);
    }
}