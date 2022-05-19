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
  // schedule.scheduleJob("* * * * * *", () => {
  // });
  schedule.scheduleJob("0 45 8 * * 1-5", () => {
    const prefix = "> ";
    const message = [
      "다들 입실해주세요😎",
      "곧 시작해요! 로그인 잊지 않으셨죠?😆",
      "이불이 놓아주지 않으시겠지만, 로그인 부탁드려요🫠",
      "피곤한 아침입니다ㅠ 입..실..😪",
      "늦지않게 로그인 부탁드립니다🫡",
      "로그인을 부탁드려요☀️"
    ];
    const index = Math.floor(Math.random() * 100) % message.length;
    client.channels.cache.get(process.env.ALARM_CHANNEL).send("🕘");
    client.channels.cache.get(process.env.ALARM_CHANNEL).send(prefix + message[index]);
  })
  // 11시, 15시 정각 알람
  schedule.scheduleJob("0 0 11,15 * * 1-5", () => {
    const nDate = new Date().toLocaleString("ko-KR", { timeZone: "Asia/Seoul" });
    client.channels.cache.get(process.env.ALARM_CHANNEL).send(`${'```'}\n[${nDate}]\n${'```'}🕰째깍이가 울렸어요! 째깍째깍!🕰\n    🥹 __확인 버튼__을 눌러주세요! 🥹`);
  });
  schedule.scheduleJob("0 5 11,15 * * 1-5", () => {
    client.channels.cache.get(process.env.ALARM_CHANNEL).send(`> 째깍이🕰가 울린지 **5분**이 지났어요!\n> __확인 버튼__ 을 누르지 않으셨다면 ☑️`);
  });
  schedule.scheduleJob("0 20 11,15 * * 1-5", () => {
    client.channels.cache.get(process.env.ALARM_CHANNEL).send(`> 째깍이🕰가 울린지 **20분**이 지났어요!\n> __로그인 상태__ ☑️`);
  });
  schedule.scheduleJob("0 0 18 * * *", () => {
    const prefix = "> ";
    const message = [
      "끝났습니다~ 다들 퇴실해주세요😎",
      "퇴실할 시간이에요! 오늘도 고생해셨어요😪",
      "6시 입니다! 오늘도 수고 많으셨습니다!🫡",
      "드디어 6시! 즐거운 저녁시간 되세요🍷",
      "일찍 로그인 하셨다면 이제 로그아웃 가능!✋",
      "gn~ 즐거운 밤 되세요🌙"
    ];
    const index = Math.floor(Math.random() * 100) % message.length;
    client.channels.cache.get(process.env.ALARM_CHANNEL).send("🕕");
    client.channels.cache.get(process.env.ALARM_CHANNEL).send(prefix + message[index]);
  })
})

client.login(process.env.DISCORD_TOKEN);
