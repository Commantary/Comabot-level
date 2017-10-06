// Mise en place des en tetes
const discord = require('discord.js')
const client = new discord.Client()
const fs = require('fs')
const config = JSON.parse(fs.readFileSync('./module/config.json', 'utf8'))
const prefix = config.prefix
function jeux() {
	client.user.setGame('Only Levels | ' + prefix + 'level', 'https://www.twitch.tv/the_commentary', 0)
}

// On start le bot
client.on('ready', () => {
  setInterval(jeux(), 5000)
  console.log('-------------------------------------')
  console.log('    [!] ComaBot level connecté [!]')
  console.log('-------------------------------------')
  console.log('le prefix est: ' + config.prefix)
})

/* LES LEVELS */
const pointsLevel = require('./levels/points.js')
pointsLevel(client)

var dt = process.env.TOKEN || process.argv[2]
if (!dt) {
  console.log('')
}
client.login(dt)
