"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_telegram_bot_api_1 = __importDefault(require("node-telegram-bot-api"));
const dotenv_1 = __importDefault(require("dotenv"));
// 加载环境变量
dotenv_1.default.config();
// 获取 Telegram 机器人令牌
const token = process.env.TELEGRAM_BOT_TOKEN;
if (!token) {
    throw new Error("请在 .env 文件中设置 TELEGRAM_BOT_TOKEN");
}
// 创建一个机器人实例
const bot = new node_telegram_bot_api_1.default(token, { polling: true });
// 监听 '/start' 命令
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const welcomeMessage = "欢迎使用我的 Telegram 机器人!!!!";
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
