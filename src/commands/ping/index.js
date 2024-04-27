import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
  .setName("ping")
  .setDescription("看看延遲!");

export const action = async (ctx) => {
  await ctx.reply("碰!");
};
