// 引入必要套件
import { Client, Events, GatewayIntentBits } from "discord.js";
import vueInit from "@/core/vue.js";
import dotenv from "dotenv";

import { loadCommands } from "@/core/loader";
import { load } from "tsx";

loadCommands();
dotenv.config();
vueInit();

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent],
});

client.once(Events.ClientReady, (readyClient) => {
  console.log(`機器人上線了, 好欸 登入到機器人: ${readyClient.user.tag}`);
});

// 登入機器人
client.login(process.env.TOKEN);
