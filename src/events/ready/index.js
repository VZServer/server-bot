import { Events } from "discord.js";

export const event = {
  name: Events.ClientReady,
  once: true,
};

export const action = (client) => {
  console.log(`機器人上線了, 好欸 登入到機器人: ${client.user.tag}`);
};
