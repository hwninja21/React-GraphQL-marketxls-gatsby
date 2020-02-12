import React from "react"
import { SWrapertablediv, SWraper, SWrapertable, SWrapercap, SWraperrow, SWraperdata, SWraperlabel } from '../css/styles'
import ErrorCheck from "../../utils/Error"

const StockAnalysis1 = (props) => {
  return <SWraper id="StockAnalysis1">
    <SWrapertablediv>
      <SWrapertable>
        <SWrapercap><h2>Fundamental ratios</h2> </SWrapercap>
        <tbody>
          <SWraperrow>
            <SWraperlabel>Price-to-Earnings Ratio (TTM)</SWraperlabel>
            <SWraperdata data={props.data.PERatio}><ErrorCheck data={props.data.PERatio} /></SWraperdata>
          </SWraperrow>
          <SWraperrow>
            <SWraperlabel>Price-to-Earnings Ratio (5 year avg)	</SWraperlabel>
            <SWraperdata data={props.data.PERatio5YearAverage}><ErrorCheck data={props.data.PERatio5YearAverage} /></SWraperdata>
          </SWraperrow>
          <SWraperrow>
            <SWraperlabel>Enterprise-value-to-EBITDA ratio</SWraperlabel>
            <SWraperdata data={props.data.EVOverEBITDA}><ErrorCheck data={props.data.EVOverEBITDA} /></SWraperdata>
          </SWraperrow>
          <SWraperrow>
            <SWraperlabel>Price-to-book ratio</SWraperlabel>
            <SWraperdata data={props.data.PricePerBook}><ErrorCheck data={props.data.PricePerBook} /></SWraperdata>
          </SWraperrow>
          <SWraperrow>
            <SWraperlabel>Price/Earnings-to-Growth Ratio</SWraperlabel>
            <SWraperdata data={props.data.PEGRatio}><ErrorCheck data={props.data.PEGRatio} /></SWraperdata>
          </SWraperrow>
          <SWraperrow>
            <SWraperlabel>EV/Invested Capital</SWraperlabel>
            <SWraperdata primary><ErrorCheck data={props.data.EnterpriseValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} /></SWraperdata>
          </SWraperrow>
        </tbody>
      </SWrapertable>
    </SWrapertablediv>

    <SWrapertablediv>
      <SWrapertable>
        <SWrapercap><h2>Profitability ratios</h2></SWrapercap>
        <tbody>
          <SWraperrow>
            <SWraperlabel>Return on Invested Capital</SWraperlabel>
            <SWraperdata data={props.data.roic} ><ErrorCheck data={props.data.roic} /></SWraperdata>
          </SWraperrow>
          <SWraperrow>
            <SWraperlabel>Return on Invested Capital average (5y)</SWraperlabel>
            <SWraperdata data={props.data.roicAverage} ><ErrorCheck data={props.data.roicAverage} /></SWraperdata>
          </SWraperrow>
          <SWraperrow>
            <SWraperlabel>Return on Equity</SWraperlabel>
            <SWraperdata data={props.data.roe} ><ErrorCheck data={props.data.roe} /></SWraperdata>
          </SWraperrow>
          <SWraperrow>
            <SWraperlabel>Return on Equity average (5y)</SWraperlabel>
            <SWraperdata data={props.data.roeAverage} ><ErrorCheck data={props.data.roeAverage} /></SWraperdata>
          </SWraperrow>
          <SWraperrow>
            <SWraperlabel>Return on Assets</SWraperlabel>
            <SWraperdata data={props.data.roa} ><ErrorCheck data={props.data.roa} /></SWraperdata>
          </SWraperrow>
          <SWraperrow>
            <SWraperlabel>Return on Assets average (5y)</SWraperlabel>
            <SWraperdata data={props.data.roaAverage} ><ErrorCheck data={props.data.roaAverage} /></SWraperdata>
          </SWraperrow>
        </tbody>
      </SWrapertable>
    </SWrapertablediv>

    <SWrapertablediv>
      <SWrapertable>
        <SWrapercap><h2>Growth rates</h2></SWrapercap>
        <tbody>
          <SWraperrow>
            <SWraperlabel>Revenue growth</SWraperlabel>
            <SWraperdata data={props.data.revenueGrowth} ><ErrorCheck data={props.data.revenueGrowth} /></SWraperdata>
          </SWraperrow>
          <SWraperrow>
            <SWraperlabel>Revenue growth 5y CAGR</SWraperlabel>
            <SWraperdata data={props.data.revenueGrowth5YearCAGR} ><ErrorCheck data={props.data.revenueGrowth5YearCAGR} /></SWraperdata>
          </SWraperrow>
          <SWraperrow>
            <SWraperlabel>EBITDA growth</SWraperlabel>
            <SWraperdata data={props.data.ebitdaGrowth} ><ErrorCheck data={props.data.ebitdaGrowth} /></SWraperdata>
          </SWraperrow>
          <SWraperrow>
            <SWraperlabel>EBITDA 5y CAGR</SWraperlabel>
            <SWraperdata data={props.data.ebitdaGrowth5YearCAGR} ><ErrorCheck data={props.data.ebitdaGrowth5YearCAGR} /></SWraperdata>
          </SWraperrow>
          <SWraperrow>
            <SWraperlabel>Net Income growth</SWraperlabel>
            <SWraperdata data={props.data.netIncomeGrowth} ><ErrorCheck data={props.data.netIncomeGrowth} /></SWraperdata>
          </SWraperrow>
          <SWraperrow>
            <SWraperlabel>Net Income 5y CAGR</SWraperlabel>
            <SWraperdata primary><ErrorCheck data={props.data.netIncome5yEARcagr} /></SWraperdata>
          </SWraperrow>
        </tbody>
      </SWrapertable>
    </SWrapertablediv>
  </SWraper>
}

export default StockAnalysis1
