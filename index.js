// Declarando que a constante Discord ira puxar funcões do discord. || Declarando todas as intents ao bot. (131071)
const Discord = require("discord.js");
const Client = new Discord.Client({ intents: 131071 });

// Declarando as constantes para utilizar as funções de dotenv, path, colors e fileSystem.

const fs = require("fs");
const path = require("path");
const colors = require("colors");
const env = require("dotenv");

// Configurando o dot env. || Startando o bot.

env.config();

Client.login(process.env.TOKEN);
