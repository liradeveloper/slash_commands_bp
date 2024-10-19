const fs = require("fs");
const path = require("path");

module.exports = (client) => {
  const commandPath = path.join(__dirname, "../commands");
  const commandFolders = fs.readdirSync(commandPath);

  for (const folder of commandFolders) {
    const commandFiles = fs
      .readdirSync(`${commandPath}/${folder}`)
      .filter((file) => file.endsWith(".js"));

    for (const file of commandFiles) {
      const command = require(`${commandPath}/${folder}/${file}`);
      client.commands.set(command.data.name, command);
    }
  }
};
