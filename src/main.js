// Require the necessary discord.js classes
import { Client, Events, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";

dotenv.config();

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent],
});

client.once(Events.ClientReady, (readyClient) => {
  console.log(`機器人上線了, 好欸 登入到機器人: ${readyClient.user.tag}`);
});

// 登入機器人
client.login(process.env.TOKEN);
