import { SlashCommandBuilder } from "discord.js";
import { useAppStore } from "@/store/app";
const appStore = useAppStore();
const client = appStore.client;

export const command = new SlashCommandBuilder()
  .setName("ping")
  .setDescription("看看延遲!");

export const action = async (ctx) => {
  const msg = await ctx.reply({
    content: "正在計算延遲...!",
    fetchReply: true,
  });
  const ping = msg.createdTimestamp - ctx.createdTimestamp;

  ctx.editReply(`機器人延遲 : ${ping} ms\nAPI延遲 : ${client.ws.ping}`);
};
