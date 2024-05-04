const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349069045504";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_47_05_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTUyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDU2LFxuICAgICAgICAxNCxcbiAgICAgICAgMjEyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAzOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMjI0LFxuICAgICAgICAyNixcbiAgICAgICAgNTMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQzLFxuICAgICAgICAxODcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNSxcbiAgICAgICAgNixcbiAgICAgICAgMjI2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTg1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTg1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3LFxuICAgICAgICA0NixcbiAgICAgICAgMzgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDgwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgODIsXG4gICAgICAgIDczLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDg3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDM5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDM2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyLFxuICAgICAgICA4MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjE1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDksXG4gICAgICAgIDM0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDk3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTM0LFxuICAgICAgICA0NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjM2LFxuICAgICAgICA5MSxcbiAgICAgICAgNTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDIyMixcbiAgICAgICAgODEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTIyLFxuICAgICAgICA5NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA1MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTU2LFxuICAgICAgICA1NSxcbiAgICAgICAgMjI2LFxuICAgICAgICA5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDkwLFxuICAgICAgICA2OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDYxLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzUsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDQ5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTU3LFxuICAgICAgICA3OSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI3LFxuICAgICAgICAyLFxuICAgICAgICAxNTksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTksXG4gICAgICAgIDk1LFxuICAgICAgICAxNTksXG4gICAgICAgIDEzNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDU1LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDk5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDk2LFxuICAgICAgICAxODQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIsXG4gICAgICAgIDYxLFxuICAgICAgICA0NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDEsXG4gICAgICAgIDc3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjIxLFxuICAgICAgICAzNixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDUzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgODUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMCxcbiAgICAgICAgMTQyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWWFUVjdIbWlTM3k4QURQY3ZqRUxyanVyUHkrcUdjRGFqSGRIa3hDQWRPND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDY5MDQ1NTA0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxQTZBNjJDREYyNDRCMzA5MTEwQUREMTNBQTJDOTAxQ1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTQ4NTU2NzRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicUt3WjBva2lUZlNKOXA5UURIb21aQVwiLFxuICBcInBob25lSWRcIjogXCJjMTExYTg1OS02MGJhLTQ3NmYtYTg4YS04M2QxMmI3Y2UyNWVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODUsXG4gICAgICAxNzksXG4gICAgICAxNCxcbiAgICAgIDEzNixcbiAgICAgIDEwNCxcbiAgICAgIDE5MyxcbiAgICAgIDMzLFxuICAgICAgMjQzLFxuICAgICAgNjcsXG4gICAgICAxNjQsXG4gICAgICA5MCxcbiAgICAgIDEwNixcbiAgICAgIDE0MixcbiAgICAgIDE0NSxcbiAgICAgIDEwNyxcbiAgICAgIDEzNCxcbiAgICAgIDIxOCxcbiAgICAgIDIzNCxcbiAgICAgIDg0LFxuICAgICAgMjE0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDUsXG4gICAgICAxMjQsXG4gICAgICAxMzIsXG4gICAgICAxNzcsXG4gICAgICAyMjgsXG4gICAgICAxNjAsXG4gICAgICAwLFxuICAgICAgMjE5LFxuICAgICAgMTgxLFxuICAgICAgMTk5LFxuICAgICAgODAsXG4gICAgICAxMjEsXG4gICAgICAxMzYsXG4gICAgICAyMyxcbiAgICAgIDIyOSxcbiAgICAgIDEwMSxcbiAgICAgIDI0OSxcbiAgICAgIDk3LFxuICAgICAgMTU4LFxuICAgICAgMzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJNlMwWmdHRVBLOTJyRUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlB3K3dxRGNmM0RFbGdDZG1FMXZRTHBHd29vd3U2SVlCZTdhZzQ5MWd5aE09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiaHBhRGMwcHFweE1NdU5oZ01FUjcvV1JwaC9pb0wybVJFWnNEZVhrU1E3ZmhtS2Irc2NPbUhNaGVmYlcxNmQxcVJBZFBXMGVUc01yYVk5cEZmWjR2QUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiR25YVVlacms0cGdHdHBVTkFpVUE4bm82MmY4a3hHNkhWTEdLa292bWJDdzNETWp0SkNLT2g5ZHZEM2NzSmlOT2hkUUVpSmV4WG5BeE1IMFYxSVBCaVE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDY5MDQ1NTA0OjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiVG9wIE5vdGNoIFR2XCIsXG4gICAgXCJsaWRcIjogXCIxMzYwNzc4NTE1MDQ2OTc6MTZAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDY5MDQ1NTA0OjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE0ODU1NjY5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQ2djXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDZ2MuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJyYXNuMkZhSWdFNnBtV2M0VG5WRm9GV3VIU2xtb0lnQmszL2Y2UXUwNVFRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2NjIyNzM4MDUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUNnZC5qc29uIjogIntcImtleURhdGFcIjpcIkVuenB5MVp5VXp0c1hTQ2dwWC9QYXRrazFYa1hiMWJObmRyR1o5MUN6dkE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTY2MjI3MzgwNSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcxNDg1NTU4OTk5NVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUNnZS5qc29uIjogIntcImtleURhdGFcIjpcIjB0V2RnY1o3TlFOV2VJbHowK3YxQ1NUV3ZSTytDSzh5QTNzN3N2dHcyRmM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTY2MjI3MzgwNixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE0ODU1NjU3MjQwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
