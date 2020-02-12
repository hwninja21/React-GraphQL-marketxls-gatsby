import React from "react"

import { setConfig } from "react-hot-loader"
import StocksGR from "../components/StocksDetils/StocksGR"
import StockAnalysis from "../components/StocksDetils/StockAnalysis"
import StockAnalysis1 from "../components/StocksDetils/StockAnalysis1"
import StockAnalysis2 from "../components/StocksDetils/StockAnalysis2"
import Chart1 from "../components/StocksDetils/Chart1"
import Layout from "../components/Layout.js"
import News from "../components/StocksDetils/News"
import Styled from "styled-components"
import { Helmet } from "react-helmet"
import SLayout from "../components/SLayout"
import SimilarStock from "../components/StocksDetils/SimilarStocks"
import { COLORS, MEDIA_QUERIES, FONT_SIZES } from "../components/css/styles"
// ads
import GoogleAds from "../components/GoogleAds"

// temprory authincation

import MeanChart from "../components/StocksDetils/meanChart"
import { SEO } from "gatsby-plugin-seo"

const WraperCombine = Styled.div`
@media (max-width: ${MEDIA_QUERIES["mobile"]}px) {
  display: block;
  margin: 40px 1% 0% 1%;
  margin: ${props => (props.primary ? "20px 0% 30px 0%" : "40px 1% 0% 1%")};
}
  display: flex;
  justify-content: space-around;
  margin: 60px 3% 0px 3%;
  margin: ${props => (props.primary ? "30px 3% 30px 3%" : "40px 3% 0px 3%")};
`

const Wraper = Styled.div`
  position: relative;
  background: #F3F6FC;
`

const WraperChart = Styled.div`
@media (max-width: ${MEDIA_QUERIES["mobile"]}px) {
  width: 99%;
  margin: 1%;
}
  box-sizing: border-box;
  border: 1px solid ${COLORS.borderColor};
  background: ${COLORS.white};
  position: relative;
  z-index: 10;
  width: 32%;
  height: 430px;
`
const Wraperheading = Styled.p`
  color: ${COLORS.black};
  margin: 10px 0px 10px 0px;
  text-align: center;
  font-size: ${FONT_SIZES.xlarge};
  font-weight: 480;
`

setConfig({ pureSFC: true })

function Stocks({ pageContext: { stock, path } }) {
  if (!stock.Name || !stock.Sector) {
    // console.log(stock)
    return <>Stocks Invalid</>

  }
  const { Name, Industry, Sector, ticker } = stock //stock imformation

  const {
    ChangePrice,
    ChangePercent,
    FiftyTwoWeekHigh,
    FiftyTwoWeekLow,
    LastPrice,
    lastUpdated,
  } = stock // stocksGenral Information

  const {
    EarningsPerShare,
    EPSEstimateCurrentQTR,
    BookValuePerShare,
    MarketCap,
    PERatio,
    DividendYield,
  } = stock //financila Ratio

  const {
    StockReturn7Days,
    StockReturn15Days,
    StockReturn30Days,
    StockReturn3Months,
    StockReturnOneYear,
    StockReturnThreeYear,
    //
  } = stock //stocksyeld

  const { RSI14, SMA14, MOM14, TSF15, TSF30, EMA14 } = stock //Stock Technical Analysis

  // const {
  //   bs_qtrly,
  //   bs_yearly,
  //   cf_qtrly,
  //   cf_yearly,
  //   pnl_qtrly,
  //   pnl_yearly,
  // } = stock //Finincial statment
  const { priceHistory } = stock

  // news
  const { news } = stock

  const { PERatio5YearAverage, PEGRatio, PricePerBook, EVOverEBITDA } = stock // Basic Fundamental ratios

  const { roic, roicAverage, roe, roeAverage, roa, roaAverage } = stock //Profitability ratios

  const {
    revenueGrowth5YearCAGR,
    ebitdaGrowth,
    ebitdaGrowth5YearCAGR,
    netIncomeGrowth,
    revenueGrowth,
    netIncome5yEARcagr,
  } = stock // Growth rates

  const {
    grossMargin,
    grossMargin5YearAverage,
    ebitdaMargin,
    ebitdaMargin5YearAverage,
    netMargin,
    netMargin5YearAverage,
  } = stock // Margins

  const {
    maxDrawDown5Years,
    maxDrawDownSinceGreatDepression,
    debtToEquity,
    interestCoverage,
    returnOverMaximumDrawdown,
    returnOverMaxDrawDownSinceGreatDepression,
  } = stock // Risk and leverage

  const {
    dividendYield,
    dividendPerShare,
    dividendPerShare5YCAGR,
    dividendPayoutRatio,
    fcfPerShare,
  } = stock // Dividends and dividend sustainability

  const { ATR14, EnterpriseValue, InvestedCapital } = stock //extra

  const {
    MeanTargetPriceEstimateCurrent,
    MeanTargetPriceEstimateWeeks1ago,
    MeanTargetPriceEstimateWeeks2ago,
    MeanTargetPriceEstimateWeeks3ago,
    MeanTargetPriceEstimateCurrentDate,
    MeanTargetPriceEstimateWeeks1agoDate,
    MeanTargetPriceEstimateWeeks2agoDate,
    MeanTargetPriceEstimateWeeks3agoDate,
  } = stock

  const { similar_symbols } = stock
  console.log(stock)
  return (
    <Wraper>
      <Layout>
        <SEO
          description={` ${ticker} - stock analysis - key financial strength, profitability, growth and risk metrics,
          stock price history and news. (MarketXLS)`}
          title={` ${Name} (${ticker}) Price, History, News and Analysis`}
          pagePath="/path"
        />
        <SLayout data={Name} />
        <SimilarStock data={similar_symbols} />
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            {Name} ({ticker}) Price, History, News and Analysis
          </title>

        </Helmet>

        <WraperCombine>
          <StocksGR
            gr={{
              ChangePrice,
              ChangePercent,
              FiftyTwoWeekHigh,
              FiftyTwoWeekLow,
              Name,
              Industry,
              Sector,
              LastPrice,
              lastUpdated,
              ticker
            }}
          />

          <WraperChart id="abcdef-007" refs="ninja0">
            <Wraperheading>
              {/** <IconWraper icon={faChartLine} /> */}
              <h2>{ticker} Stock Price Chart</h2>
            </Wraperheading>
            <hr style={{ margin: "0px 0px 0px 0px" }} />
            {typeof window !== undefined ? (
              <Chart1 class="chart" data={priceHistory}></Chart1>
            ) : (
                <div>Loading...</div>
              )}
          </WraperChart>
          <GoogleAds />
        </WraperCombine>

        <>
          <StockAnalysis1
            data={{
              PERatio5YearAverage,
              PEGRatio,
              PricePerBook,
              EVOverEBITDA,
              roic,
              roicAverage,
              roe,
              roeAverage,
              roa,
              roaAverage,
              revenueGrowth5YearCAGR,
              ebitdaGrowth,
              ebitdaGrowth5YearCAGR,
              netIncomeGrowth,
              PERatio,
              EnterpriseValue,
              revenueGrowth,
              netIncome5yEARcagr,
            }}
          />
        </>

        <>
          <StockAnalysis2
            data={{
              grossMargin,
              grossMargin5YearAverage,
              ebitdaMargin,
              ebitdaMargin5YearAverage,
              netMargin,
              netMargin5YearAverage,
              maxDrawDown5Years,
              maxDrawDownSinceGreatDepression,
              returnOverMaximumDrawdown,
              returnOverMaxDrawDownSinceGreatDepression,
              debtToEquity,
              interestCoverage,
              dividendYield,
              dividendPerShare,
              dividendPerShare5YCAGR,
              dividendPayoutRatio,
              fcfPerShare,
            }}
          />
        </>

        <>
          <StockAnalysis
            data={{
              EarningsPerShare,
              EPSEstimateCurrentQTR,
              BookValuePerShare,
              MarketCap,
              PERatio,
              DividendYield,
              StockReturn7Days,
              StockReturn15Days,
              StockReturn30Days,
              StockReturn3Months,
              StockReturnOneYear,
              StockReturnThreeYear,
              RSI14,
              SMA14,
              MOM14,
              EMA14,
              TSF15,
              TSF30,
              ATR14,
              InvestedCapital,
              EnterpriseValue,
            }}
          />
        </>

        <WraperCombine primary>
          <MeanChart
            data={{
              curr: MeanTargetPriceEstimateCurrent,
              oneWeek: MeanTargetPriceEstimateWeeks1ago,
              twoWeek: MeanTargetPriceEstimateWeeks2ago,
              threeWeek: MeanTargetPriceEstimateWeeks3ago,
              Datecurr: MeanTargetPriceEstimateCurrentDate,
              DateOneWeek: MeanTargetPriceEstimateWeeks1agoDate,
              DateTwoWeek: MeanTargetPriceEstimateWeeks2agoDate,
              DateThreeWeel: MeanTargetPriceEstimateWeeks3agoDate,
            }}
          />
          <News data={{ news, Name }} />

          <GoogleAds />
        </WraperCombine>
      </Layout>
    </Wraper>
  )
}

export default Stocks
