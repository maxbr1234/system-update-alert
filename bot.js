(async () => {
    let process = require('process');
    process.on('uncaughtException', function(err) {
        console.log(`𝕖𝕣𝕣𝕠𝕣❕`);
        console.log(err);
    });
    const events = require('events');
    let Discord = require("discord.js")
    let Database = require("easy-json-database")
    let {
        MessageEmbed,
        MessageButton,
        MessageActionRow,
        Intents,
        Permissions,
        MessageSelectMenu
    } = require("discord.js")
    let logs = require("discord-logs")
    const os = require("os-utils");
    const lyricsFinder = require('lyrics-finder');
    let fs = require('fs');
    const devMode = typeof __E_IS_DEV !== "undefined" && __E_IS_DEV;
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const s4d = {
        Discord,
        database: new Database(`./database.json`),
        fire: null,
        joiningMember: null,
        reply: null,
        tokenInvalid: false,
        tokenError: null,
        player: null,
        manager: null,
        Inviter: null,
        message: null,
        notifer: null,
        checkMessageExists() {
            if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')
            if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')
        }
    };
    s4d.client = new s4d.Discord.Client({
        intents: [Object.values(s4d.Discord.Intents.FLAGS).reduce((acc, p) => acc | p, 0)],
        partials: ["REACTION", "CHANNEL"]
    });
    s4d.client.on('ready', () => {
        console.log(s4d.client.user.tag + " is alive!")
    })
    logs(s4d.client);
    var Wiping, Downloading, Installing, Checking;


    s4d.client.on('ready', async () => {
        if (false && false) {
            s4d.client.channels.cache.get('840910402766635009').send({
                content: String()
            });
        }

    });

    s4d.client.on('messageCreate', async (s4dmessage) => {
        if ((s4dmessage.content) == 'update-and-information') {
            s4dmessage.channel.send({
                content: String('<:TeslaModelFinder_Update:955142637113974804> | Wiping System Firmware... 0% Done')
            }).then(async (s4dreply) => {
                for (var count = 0; count < 100; count++) {
                    for (Wiping = 1; Wiping <= 100; Wiping++) {
                        s4dreply.edit({
                            content: String(('<:TeslaModelFinder_Update:955142637113974804> | Wiping System Firmware... ' + String(Wiping)))
                        });
                    }
                }

            });
            s4dmessage.channel.send({
                content: String('<:TeslaModelFinder_Update:955142637113974804> | Downloading System Firmware... 0% Done')
            }).then(async (s4dreply) => {
                for (var count2 = 0; count2 < 100; count2++) {
                    for (Downloading = 1; Downloading <= 100; Downloading++) {
                        s4dreply.edit({
                            content: String(('<:TeslaModelFinder_Update:955142637113974804> | Downloading System Firmware... ' + String(Downloading)))
                        });
                    }
                }

            });
            s4dmessage.channel.send({
                content: String('<:TeslaModelFinder_Update:955142637113974804> | Installing System Firmware... 0% Done')
            }).then(async (s4dreply) => {
                for (var count3 = 0; count3 < 100; count3++) {
                    for (Installing = 1; Installing <= 100; Installing++) {
                        s4dreply.edit({
                            content: String(('<:TeslaModelFinder_Update:955142637113974804> | Installing System Firmware... ' + String(Installing)))
                        });
                    }
                }

            });
            s4dmessage.channel.send({
                content: String('<:TeslaModelFinder_Update:955142637113974804> | Checking System Firmware... 0% Done')
            }).then(async (s4dreply) => {
                for (var count4 = 0; count4 < 100; count4++) {
                    for (Checking = 1; Checking <= 100; Checking++) {
                        s4dreply.edit({
                            content: String(('<:TeslaModelFinder_Update:955142637113974804> | Checking System Firmware.. .' + String(Checking)))
                        });
                    }
                }

            });
        }

    });

    return s4d
})();