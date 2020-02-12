const marketxls = require("./marketxls")
const axios = require("axios")
// exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
//   if (stage === "build-html") {
//     actions.setWebpackConfig({
//       module: {
//         rules: [
//           {
//             test: /bad-module/,
//             use: loaders.null(),
//           },
//         ],
//       },
//     })
//   }
// }


const gatAllShareData = shareArray =>
  Promise.all(
    shareArray.map(async shares => {
      var count = 0
      const { data: result } = await marketxls.get(`/${shares}`)
      console.log(count)
      count++
      return { ...result, shares: shares.toLowerCase() }
    })
  )


exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const getsnp500 = await axios.get(
    "https://raw.githubusercontent.com/bhavish23/Company/master/com_name.json"
  )
  const arrayOfSnp = getsnp500.data.books
  let companytikles = []
  arrayOfSnp.map(ele => {
    companytikles.push(ele.tickle)
  })

  companytikles = companytikles.slice(0, 350)
  const allStocks = await gatAllShareData(companytikles)
  allStocks.forEach(stock => {
    createPage({
      path: `stocks/${stock.shares}/`,
      component: require.resolve("./src/templates/Stock.js"),
      context: {
        stock,
        path: `stocks/${stock.shares}/`,
      },
    })
  })

}