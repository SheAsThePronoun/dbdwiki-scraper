console.log("index.js working");

const cheerio = require("cheerio")
const axios = require("axios")
const fsp = require('fs/promises');

async function performKillerScraping() {
    const axiosResponse = await axios.request({ 
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
        },
        method: "GET",
        url: "https://deadbydaylight.fandom.com/wiki/Killers",
    })
    const $ = cheerio.load(axiosResponse.data)
    const killersHeader = $("h2:has(span[id^=List_of_Killers])")
    const killerTableLength = $(killersHeader.next().next().find("a")).length
console.log(killerTableLength);
var killerArray = []
killerarray()
async function killerarray() {
    for(i=0 ; i<killerTableLength ; i++) {
        const killertext = $(killersHeader.next().next().find("a:eq("+i+")")).text()
        if (killertext !== "") {
            killerArray.push(killertext)
        }
};
console.log(killerArray);
}
}
performKillerScraping()