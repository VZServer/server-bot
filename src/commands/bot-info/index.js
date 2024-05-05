import { SlashCommandBuilder } from "discord.js";
import { useAppStore } from "@/store/app";
const appStore = useAppStore();
const client = appStore.client;

export const command = new SlashCommandBuilder()
  .setName("bot-info")
  .setDescription("查看資訊");

function msToHMS(ms) {
  let seconds = ms / 1000; //將毫秒轉換為秒
  const hours = parseInt(seconds / 3600); //將可以轉為小時的秒轉換為小時
  seconds = seconds % 3600; //去除已轉換為小時的秒
  const minutes = parseInt(seconds / 60); //將可以轉為分鐘的秒轉換為分鐘
  seconds = seconds % 60; //去除已轉換為分鐘的秒
  return `${hours}:${minutes}:${~~seconds}`; //回傳轉換後的結果，秒數進行四捨五入
}
export const action = async (ctx) => {
  ctx.reply(
    `機器人名稱 : ${client.user.username}\n` +
      `機器人 ID : ${client.user.id}\n` +
      `機器人製作者：VocalicZoo16918\n` +
      `機器人建立時間：<t:${~~(client.user.createdTimestamp / 1000)}:R>\n` +
      `機器人邀請連結：正在製作\n` +
      `機器人版本：0.1.1-SNAPSHOT\n` +
      `機器人所在伺服器數量 : 製作中\n` +
      `機器人所在伺服器人數：${ctx.guild.memberCount}\n` +
      `機器人上線時間：${msToHMS(client.uptime)}`
  );
};
