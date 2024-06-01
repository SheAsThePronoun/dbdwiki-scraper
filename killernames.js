//https://brightdata.com/blog/how-tos/web-scraping-with-node-js
console.log("index.js working");

const cheerio = require("cheerio")
const axios = require("axios")
const fsp = require('fs/promises');

// downloading the target web page
// by performing an HTTP GET request in Axios
async function performKillerScraping() {
    // parsing the HTML source of the target web page with Cheerio
    const axiosResponse = await axios.request({ //await can only be used in async functions
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
        console.log(killertext);
//         addonstharray.push("$" + addonsth.slice(0,-1))
//         addonstdarray.push("+" + addonstd.slice(0,-1))
// 
};
}
}
performKillerScraping()