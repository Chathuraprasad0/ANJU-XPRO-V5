//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEcyYUlya3NvdjhvOVIrN3lrbVdvR25MbVRCeEZCbWdxNjJhbUNRVHkwcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTnE2SHIwVjdSZjJnSVhxZmpwRHhqM1ZkV3YzVi90UFh6ZjZiNVFiOTBtaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVQU9KaXpmc21Yb0FFSGdFYkZtNnY2NDhCRUEza3NOb3Q4ZFUyY2FIaVZVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOd2lKaFMxUFByVHo4eU1SUkJHZzFZd1pXUm5VMUZWMy95Vm01MUwyYVEwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNCNkx2d1ZORFZ0eTNKMWl2YlVrZ2FuRnp5amZJSnpORUhrU3BFbE55Vkk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpxdGJ5RHBscVBzY2lwbDVJcXpyaEIvTjgvN29nc1RNWVk0T2RQNm9MVEU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0RyRzVEcFNOb2VlOXpNQlBtUWJqcWk5V3Y5K1ZOSWVUQlVrQ1l1OEJFVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUV0a2ZsRnN0V250bWJZcVdsRG13SVFpV21hd3Z0N1BBa1ZWOG52YUNtND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJzOU9vWjVYVGdML0FibmZTdUR6aVJ3ODN6RWNLUDVoRGs0QVBLcytyR1lSYjROaFBOQjBwNlg5U3NzWkl3N2M0RGVZOHg2UkxzY3JzKzA4OGxleUF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUyLCJhZHZTZWNyZXRLZXkiOiJMb1p1cFRENW1BYlBlQXZCak4xV0ZybHdHZUhGUmVOWjV4ZUhIUmx4eWJvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJvYzREME5aZFFDU1BpaGYwQjFWM193IiwicGhvbmVJZCI6ImI4NTY2Yjg1LTY0ODctNDFkMi04Y2Q3LTY4ZTQ3MGRkMmYyMSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoK1VaWHpEWFl3US9IYnBCQnZYTnhETDVLaEk9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii8xZWJsTEEzM3ZJZlkyUG1JVmRzUy9RV3g4Zz0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0kvOTZOSUZFT3ordGNVR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlBNaVBQbGV3OUwwS2thZGpReG9sSlQ1Qy91dmJaTk9xR1JGUWFaaFpkMHc9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImsxMzlJZHNXbFBkZ3VMS0VQaGhlMU9FWW5ZQzl1QlJBcFRrYXNCSXJwSTdCNXVpV2ZFd3BJenRJU0pQNWlzMEZvZkdvMlVjSDI4ZU9PaEFWYXg5QUJnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJoN1RHQ1dzLzd2N2FxRmNqWUgrZmJvQzN4eSszUUtzQ2twVjRtd2VYWWxpK2NVN3ZDZmlVbkR5Z0lLY002MjRNdHFTYzYwdUgyKytVamZhZENrc1VBdz09In0sIm1lIjp7ImlkIjoiOTQ3MjQ1NDkxMjU6NkBzLndoYXRzYXBwLm5ldCIsImxpZCI6Ijk3ODE0MjM5NTQ3NTI5OjZAbGlkIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzI0NTQ5MTI1OjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVHpJano1WHNQUzlDcEduWTBNYUpTVStRdjdyMjJUVHFoa1JVR21ZV1hkTSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU2MjAwODE2LCJsYXN0UHJvcEhhc2giOiIxSzRoSDQifQ==",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94724549125",
  PASSWORD: 
    process.env.PASSWORD || "07656004",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
