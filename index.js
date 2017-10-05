// Mise en place des en tetes
const discord = require('discord.js')
const client = new discord.Client()
const setting = require('./module/config.json')
const fs = require('fs')
const config = JSON.parse(fs.readFileSync('./module/config.json', 'utf8'))

// On start le bot
client.on('ready', () => {
  client.user.setGame('Je ne fais que les levels ^^', 'https://www.twitch.tv/the_commentary', 0)
  console.log('-------------------------------------')
  console.log('    [!] ComaBot level connecté [!]')
  console.log('-------------------------------------')
  console.log('le prefix est: ' + setting.prefix)
})

/* LES LEVELS */
const pointsLevel = require('./levels/points.js')
pointsLevel(client)

var dt = process.env.TOKEN || process.argv[2]
if (!dt) {
  console.log('')
}
client.login(dt)
