const { Client, Intents } = require('discord.js');
const schedule = require('node-schedule');
require('dotenv').config();
const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES
  ]
})

client.on('ready', () => {
  // schedule.scheduleJob("* */1 * * * *", () => {
    //   const nDate = new Date().toLocaleString("ko-KR", {timeZone: "Asia/Seoul"});
    //   client.channels.cache.get("972732510561763371").send(`${'```'}\n[${nDate}]\n${'```'}🕰째깍이가 울렸어요! 째깍째깍!🕰\n🥹확인✓ 버튼 눌러주세요!🥹`);
    //   client.channels.cache.get("972732510561763371").send(`> 째깍이🕰가 울린지 **5분**이 지났어요!\n> __확인 버튼__을 누르지 않으셨다면 클릭!`);
    //   client.channels.cache.get("972732510561763371").send(`> 째깍이🕰가 울린지 **20분**이 지났어요!\n> __로그인 상태__ 확인!`);
    // });
  // 11시, 15시 정각 알람
  schedule.scheduleJob("0 0 11,15 * * *", () => {
    const nDate = new Date().toLocaleString("ko-KR", {timeZone: "Asia/Seoul"});
    client.channels.cache.get("972732510561763371").send(`${'```'}\n[${nDate}]\n${'```'}🕰째깍이가 울렸어요! 째깍째깍!🕰\n🥹확인✓ 버튼 눌러주세요!🥹`);
  });
  schedule.scheduleJob("0 5 11,15 * * *", () => {
    client.channels.cache.get("972732510561763371").send(`> 째깍이🕰가 울린지 **5분**이 지났어요!\n> __확인 버튼__을 누르지 않으셨다면 클릭!`);
  });
  schedule.scheduleJob("0 20 11,15 * * *", () => {
    client.channels.cache.get("972732510561763371").send(`> 째깍이🕰가 울린지 **20분**이 지났어요!\n> __로그인 상태__ 확인!`);
  });
})

client.login(process.env.DISCORD_TOKEN);
