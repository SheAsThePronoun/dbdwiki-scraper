//https://brightdata.com/blog/how-tos/web-scraping-with-node-js
console.log("index.js working");

const cheerio = require("cheerio")
const axios = require("axios")


// downloading the target web page
// by performing an HTTP GET request in Axios
async function performScraping() {
    // parsing the HTML source of the target web page with Cheerio
    const axiosResponse = await axios.request({ //await can only be used in async functions
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
        },
        method: "GET",
        url: "https://deadbydaylight.fandom.com/wiki/Evan_MacMillan",
    })
    // parsing the HTML source of the target web page with Cheerio
    const $ = cheerio.load(axiosResponse.data)
    // initializing the data structures
    // scraping the 'h3' with ID
    const addonsHeader= $("#Add-ons_for_Bear_Trap")
    const addonsHeaderText = addonsHeader.text()
    const addonsTable = addonsHeader.parent().next()
    const addonsTableTh = addonsTable.children("tbody").children("tr").children("td").text()
    console.log(addonsTableTh);
    // console.log(addonsTable)
    
    // converting the data extracted into a more
            // readable object
            const scrapedAddons = {
                h3value : addonsHeaderText,
                tableValue : addonsTable
            }
           

            const scrapedData = {
                value: scrapedAddons
            }
        
    // converting the scraped data object to JSON
    
    // const scrapedDataJSON = JSON.stringify(scrapedData)
    
    // console.log('scrapedDataJSON' + scrapedDataJSON)


}


performScraping()