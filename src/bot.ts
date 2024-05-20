import TelegramBot from "node-telegram-bot-api";
import dotenv from "dotenv";

// 加载环境变量
dotenv.config();

// 获取 Telegram 机器人令牌
const token = process.env.TELEGRAM_BOT_TOKEN as string;

if (!token) {
  throw new Error("请在 .env 文件中设置 TELEGRAM_BOT_TOKEN");
}

// 创建一个机器人实例
const bot = new TelegramBot(token, { polling: true });

// 监听 '/start' 命令
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const welcomeMessage = "欢迎使用我的 Telegram 机器人!";
  bot.sendMessage(chatId, welcomeMessage);
});

// 监听文本消息
bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  const receivedMessage = msg.text;
  // 回显用户发送的消息
  bot.sendMessage(chatId, `你发送的消息是: ${receivedMessage}`);
});

console.log("Telegram 机器人已启动");
