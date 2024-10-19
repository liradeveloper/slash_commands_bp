const { REST, Routes } = require("discord.js");
const config = require("../../config.json");
const fs = require("fs");
require("dotenv").config();

const commands = [];
const commandFolders = fs.readdirSync("../commands");

for (const folder of commandFolders) {
  const commandFiles = fs
    .readdirSync(`../commands/${folder}`)
    .filter((file) => file.endsWith(".js"));

  for (const file of commandFiles) {
    const command = require(`../commands/${folder}/${file}`);
    commands.push(command.data.toJSON());
  }
}

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

async () => {
  try {
    console.log("Iniciando a atualização dos Slash Commands.");

    await rest.put(
      Routes.applicationGuildCommands(config.clientId, config.guildId),
      { body: commands }
    );

    console.log("Slash Commands atualizados com sucesso.");
  } catch (err) {
    console.log(err);
  }
};

deployCommands();
