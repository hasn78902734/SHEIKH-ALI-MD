const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Oj5x2B5Z#1W2DWEyCFx223emr3EWv85fqXxT40vZFO8XF98dQOTI",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "false",
MODE: process.env.MODE || "public",
AUTO_VOICE: process.env.AUTO_VOICE  === undefined ? 'false' : process.env.AUTO_VOICE, 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
AUTO_REPLY: process.env.AUTO_REPLY || "true",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/KFYzSLs/Picsart-24-11-23-16-00-15-845.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "HI DEAR I'M ONLINE I'M 𓄂𝑺𝑯𝑬𝑰𝑲𝑯 𝑨𝑳𝑰 🔥༽༼ WHATSAPP BOT 😊♻️",
ANTI_LINK: process.env.ANTI_LINK || "true",
ANTI_BAD: process.env.ANTI_BAD || "true",
PREFIX: process.env.PREFIX || "$",
FAKE_RECORDING: process.env.FAKE_RECORDING || "false",
AUTO_REACT: process.env.AUTO_REACT || "true",
OWNER_REACT: process.env.OWNER_REACT || "true",
BOT_NAME: process.env.BOT_NAME || "✦✦ꜱʜᴇɪᴋʜ-ᴀʟɪ-ᴍᴅ✦✦",
};
