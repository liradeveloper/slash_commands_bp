// Declarando que a constante Discord ira puxar funcões do discord. || Declarando todas as intents ao bot. (131071)
const Discord = require("discord.js");
const Client = new Discord.Client({ intents: 131071 });

// Declarando as constantes para utilizar as funções de dotenv, path, colors e fileSystem.

const fs = require("fs");
const path = require("path");
const colors = require("colors");

// Requisitando e configurando o dotenv para puxar o token do arquivo .env

require("dotenv").config();

// Declarando a coleção de comandos

Client.commands = new Discord.Collection();

// Carregando as handlers de comandos e eventos

require("./src/handlers/commandHandler.js")(Client);
require("./src/handlers/eventHandler.js")(Client);

// Startando o bot.

Client.login(process.env.TOKEN);
