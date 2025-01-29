const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VW25KqRhT9lVS/6pzhJqBVUxVkFFARFfGWykMDDbZcbRoVT5mnPOQhl0nyPP84n5BinKmZqpxzMuEFqulee+2919rwGaQZLtAQVaDzGeQEHyBF9SOtcgQ6oFsGASKgCXxIIeiAQhnCXtzdKuScn3ukOxOne+ae1VyZNfKj3GpL52xBk3gcKXfg0gR56cbY+wYgbeyWm9h0fHWmTjZdQiJexJx+G6Jt6hQVbkz1naVBOOLDO3CpESEmOA17+RYliMB4iKoJxORj9E3VDxuZDQVLj47zcksWPTtmyj5eaoy+HQdMyseZr0iVvv4YfWUDi1khlsOpqMuT1VmK5jM/04oSZyRgTrg7CubJiB728+JKv8BhinzDRynFtPpw3Rlt6mpL95CL+unAjlpMLqlT5EhUcrj0fMqlLULb6NjSlsePEbeGE2nSOg9IFKYbPRz7rW7SmxHf7Z37ODxoa10IBve9M66898Qn5FUr0f+pOxxPDpHmqdx0qYxDj4+mSjdKS9FeVVbvXA73WaybAzG1F9OP0Wfd2Wo647f7yDXE3XARR5U/nVvczoS4MRgbJ/9gD6xDtmbf0Ye0JN9iOWw4u0XPZ4Tj4HSUopTnjVPXOKvVuO1pkW45ErWTRh4RvZJ5fN7uOdvbGGZL23Y31rQlmkQ7sUt5uRfpyMD+2JrH4v3x7jmjCFWGDzrspQkICnFBCaQ4S+s1jhWaAPoHG3kE0efygqhKxspMUE6C3W+Yp3ubc2FLZZWgIRcrU283zjSxY9f1N+s70AQ5yTxUFMjXcUEzUpmoKGCICtD54blTddIEJRlFA+yDDuBagtQWWbktStz3xafjFtIC5vmnFFHQBAHJEhOBDiUlaoLnA125zd8LSlvkVFEWRZbj79V2V2RUvsUKsqrUKSbXoHOcoILCJAcdVuJlluOZduvyYxOk6ESv+qmz5tkmCDApqJOWeZxB/1Vcry+h52VlSu0q9dT6ARHQYd6WEaU4DYs6szKFxNviA1LrPEAngHGBLk3gowP2UI0HKtXJhfDszATxnun3d3Yxm4thXbltll63iK4POZ4PblyWl24ET4Q3ssh5N5zM874nuhwrQVCX42rd+sxXlRQfD6K4jHS5h+ShvICj8a5N1CNpraJnNVwlgAjyX6vsQi8q83kWofQbuLuqtQvdlZHsbAUzZbpO+6a6F6TGav0O9yot0Pn8Ni7VzK/xBtJ8pK84DdTdquP8Sw2dL+ghhfVm8NPT48NfT48Pvzw9Pvz69Pjw+9Pjw2/fPT0+/PH0+PDz0+PD3y/3P2sqL32qg/iIQhwXoAPUwWp9Wzi9njm3WuSoaYoRKmqogLe+vvr06gMhHwTxYTN1UMTPLcamc229V6feuex6A3HEmiKM12JLmC2iuy+A1Kb2uuPC8IT5gnCzxNGJZKXiJCiy3aToG4NBmKyXYaUWu2l7sDjqukflWBxN2VVYzM6RHZjyzt9XJzkOB8nGPB6ypbpXalO/6ut9MHlYjI+Ci5zucdV3b4NjeLtnQnzKbmGZGry0mhoGhpbVOBhWwJvOxkxij2qIs2331uJug0Wu8Xi3ILes6K22G0dl26pynSDPEyx++XLgF29f1Rhg9DyIXxr1X/188wVzab6DeJnsX9FeFw3tVcvlnL6ej5kz7RHnlAzDSDelcKUi3J5bSb60StRbbMClNnweQxpkJKn/GxK3Nk8MC6q8+fpLo4JtgqRS8tymkL6OA6DU19A9gMs/XAuwjrEIAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

