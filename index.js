const TelegramBot = require('node-telegram-bot-api')
const TOKEN = '5475421545:AAGc1IXzD7SHbtItaFU0bROUOump9yd9VXw'
const bot = new TelegramBot(TOKEN, {
    polling: true
})


bot.on('message', (msg) => {
    const chatId = msg.chat.id
    bot.sendMessage(chatId, msg.text)
})
