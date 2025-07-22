// ========================================================================
// Server init
// ========================================================================

const fs = require('fs-extra');

try {
	stats = fs.lstatSync('settings.json');
} catch (e) {
	if (e.code == "ENOENT") {
		try {
			fs.copySync(
				'settings.example.json',
				'settings.json'
			);
			console.log("Created new settings file.");
		} catch(e) {
			console.log(e);
			throw "Could not create new settings file.";
		}
	} else {
		console.log(e);
		throw "Could not read 'settings.json'.";
	}
}




const settings = require("./settings.json");

var express = require('express');
var app = express();
if (settings.express.serveStatic)
	app.use(express.static('./build/www'));
var server = require('http').createServer(app);

var io = require('socket.io')(server);
var port = settings.port;

exports.io = io;
const path = require('path');
var sanitize = require('sanitize-html');

function buildDirectoryStructure(dirPath, files) {
	const structure = [];
	  for (const file of files) {
		  const filePath = path.join(dirPath, file.name);
		  if (file.isDirectory()) {
			  const subFiles = fs.readdirSync(filePath, { withFileTypes: true });
			  structure.push({
				  name: file.name,
				  type: 'directory',
				  children: buildDirectoryStructure(filePath, subFiles),
			  });
		  } else {
			  structure.push({ name: file.name, type: 'file' });
		  }
	  }
	return structure;
  }
  
  function renderDirectory(structure, indent = 0) {
	let html = '<h1>HackzWORL</h1><hr><ul>';
	for (const item of structure) {
	  html += `<li><a href="./${item.name}">${item.name}</a>`;
	  if (item.type === 'directory') {
		html += "";
	  }
	  html += '</li>';
	}
	html += '</ul>';
	return html;
  }
app.get('/hackz/', (req, res) => {
	const dirPath = path.join(__dirname, 'build/www/hackz'); // Serve files from 'public' folder
	fs.readdir(dirPath, { withFileTypes: true }, (err, files) => {
	  if (err) {
		return res.status(500).send('Error reading directory');
	  }
	  const directoryStructure = buildDirectoryStructure(dirPath, files);
	  res.send(renderDirectory(directoryStructure));
	});
  });
  
const Log = require('./log.js');
Log.init();
const log = Log.log;

server.listen(port, function () {
	console.log(
		" Welcome to BonziWORLD!\n",
		"----------------------\n",
		"Server listening at port " + port
	);
});
app.use(express.static(__dirname + '/public'));


const Utils = require("./utils.js")

// ========================================================================
// The Beef(TM)
// ========================================================================
const Meat = require("./meat.js");
Meat.beat();

