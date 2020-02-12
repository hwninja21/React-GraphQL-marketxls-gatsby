const axios = require("axios")
module.exports = axios.create({
  //baseURL: "https://api.marketxls.com/website-content/",
  baseURL: "http://ds.marketxls.com/marketxls/api/v1.1/website_content/",
  headers: {
    "x-api-key": "D3BnUWFJoUybWFFR7WG98W89uXcE9MX8d8p5h8X8",
  },
})
