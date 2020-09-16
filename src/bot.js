const Eris = require('eris');
const config = require('./config');

const http = require('http');
const server = http.createServer((req, res) => {
	res.writeHead(200);
	res.end('Chill Cafe Mod Mail Running');
});
server.listen(3000);

const bot = new Eris.Client(config.token, {
	getAllUsers: true,
	restMode: true
});

module.exports = bot;
