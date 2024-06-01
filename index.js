//https://brightdata.com/blog/how-tos/web-scraping-with-node-js
console.log("index.js working");

const cheerio = require("cheerio")
const axios = require("axios")
const fsp = require('fs/promises');

// downloading the target web page
// by performing an HTTP GET request in Axios
async function performScraping() {
    // parsing the HTML source of the target web page with Cheerio
    const axiosResponse = await axios.request({ //await can only be used in async functions
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
        },
        method: "GET",
        url: "https://deadbydaylight.fandom.com/wiki/The_Trapper",
    })
    // parsing the HTML source of the target web page with Cheerio
    const $ = cheerio.load(axiosResponse.data)
    // initializing the data structures
    // scraping the 'h3' with ID
    const addonsHeader = $("h3:has(span[id^=Add-ons])")
    const addonsTableLength = $(addonsHeader.next().find("tr").nextAll()).length
    var addonstharray = []
    var addonstdarray = []
    tharray()
    async function tharray() {
        for(i=0 ; i<addonsTableLength ; i++) {
            const addonsth = $(addonsHeader.next().find("tr:eq("+i+")").nextAll().find("th:eq(1)")).text()
            const addonstd = $(addonsHeader.next().find("tr:eq("+i+")").nextAll().find("ul:eq(0)")).text()
            addonstharray.push("$" + addonsth.slice(0,-1))
            addonstdarray.push("+" + addonstd.slice(0,-1))
}
};
    var addonsfinalarray = [];
    finalarray()
    async function finalarray() {
        if (addonstharray.length == addonstdarray.length) {
            for(i=0 ; i<addonstharray.length ; i++) {
                addonsfinalarray.push(addonstharray[i] + addonstdarray[i])
    }
            }
        else (
            console.log("addons and script arrays aren't the same length.")
        )
    }; 

const addonsfinalarrayjoin = addonsfinalarray.join('\n');

fsp.readFile("./addons.txt")
    .then(function (result) {
        const addonsfinalarraytest = ("" + result);
        if (addonsfinalarrayjoin !== addonsfinalarraytest) {
            fsp.writeFile('addons.txt', addonsfinalarrayjoin);
            console.log("addons.txt file written.");
        }
        else {
            console.log("No need to write, contents haven't changed.")
        }
    })


}


performScraping()