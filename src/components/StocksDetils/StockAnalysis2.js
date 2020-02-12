import React from "react"
import { SWrapertablediv, SWraper, SWrapertable, SWrapercap, SWraperrow, SWraperlabel, SWraperdata } from '../css/styles'
import ErrorCheck from "../../utils/Error"
const StockAnalysis2 = (props) => {
  return <SWraper id="StockAnalysis2">
    <SWrapertablediv>
      <SWrapertable>
        <SWrapercap><h2>Stock Margins</h2></SWrapercap>
        <tbody>
          <SWraperrow>
            <SWraperlabel>Gross Margin</SWraperlabel>
            <SWraperdata data={props.data.grossMargin}><ErrorCheck data={props.data.grossMargin} /></SWraperdata>
          </SWraperrow>
          <SWraperrow>
            <SWraperlabel>Gross Margin Average (5y)</SWraperlabel>
            <SWraperdata data={props.data.grossMargin5YearAverage}><ErrorCheck data={props.data.grossMargin5YearAverage} /></SWraperdata>
          </SWraperrow>
          <SWraperrow>
            <SWraperlabel>EBITDA Margin</SWraperlabel>
            <SWraperdata data={props.data.ebitdaMargin}><ErrorCheck data={props.data.ebitdaMargin} /></SWraperdata>
          </SWraperrow>
          <SWraperrow>
            <SWraperlabel>EBITDA Margin Average (5y)</SWraperlabel>
            <SWraperdata data={props.data.ebitdaMargin5YearAverage}><ErrorCheck data={props.data.ebitdaMargin5YearAverage} /></SWraperdata>
          </SWraperrow>
          <SWraperrow>
            <SWraperlabel>Net Margin</SWraperlabel>
            <SWraperdata data={props.data.netMargin}><ErrorCheck data={props.data.netMargin} /></SWraperdata>
          </SWraperrow>
          <SWraperrow>
            <SWraperlabel>Net Margin average (5y)</SWraperlabel>
            <SWraperdata data={props.data.netMargin5YearAverage}><ErrorCheck data={props.data.netMargin5YearAverage} /></SWraperdata>
          </SWraperrow>
        </tbody>
      </SWrapertable>
    </SWrapertablediv>

    <SWrapertablediv>
      <SWrapertable>
        <SWrapercap><h2>Risk and leverage</h2></SWrapercap>
        <tbody>
          <SWraperrow>
            <SWraperlabel>Max. Drawdown 5y</SWraperlabel>
            <SWraperdata data={props.data.maxDrawDown5Years} ><ErrorCheck data={props.data.maxDrawDown5Years} /></SWraperdata>
          </SWraperrow>
          <SWraperrow>
            <SWraperlabel>Return over Max Drawdown (5y)</SWraperlabel>
            <SWraperdata data={props.data.returnOverMaximumDrawdown}><ErrorCheck data={props.data.returnOverMaximumDrawdown} /></SWraperdata>
          </SWraperrow>
          <SWraperrow>
            <SWraperlabel>Max. Drawdown since GR</SWraperlabel>
            <SWraperdata data={props.data.maxDrawDownSinceGreatDepression}><ErrorCheck data={props.data.maxDrawDownSinceGreatDepression} /></SWraperdata>
          </SWraperrow>
          <SWraperrow>
            <SWraperlabel>Return over Max D. Since GR</SWraperlabel>
            <SWraperdata primary><ErrorCheck data={props.data.returnOverMaxDrawDownSinceGreatDepression} /></SWraperdata>
          </SWraperrow>
          <SWraperrow>
            <SWraperlabel>Debt to Equity</SWraperlabel>
            <SWraperdata data={props.data.debtToEquity}><ErrorCheck data={props.data.debtToEquity} /></SWraperdata>
          </SWraperrow>
          <SWraperrow>
            <SWraperlabel>Interest Coverage Ratio</SWraperlabel>
            <SWraperdata data={props.data.interestCoverage}><ErrorCheck data={props.data.interestCoverage} /></SWraperdata>
          </SWraperrow>
        </tbody>
      </SWrapertable>
    </SWrapertablediv>

    <SWrapertablediv>
      <SWrapertable>
        <SWrapercap><h2>Dividends and its sustainability</h2></SWrapercap>
        <tbody>
          <SWraperrow>
            <SWraperlabel>Dividend Yield</SWraperlabel>
            <SWraperdata primary><ErrorCheck data={props.data.dividendYield} /></SWraperdata>
          </SWraperrow>
          <SWraperrow>
            <SWraperlabel>Dividend per share</SWraperlabel>
            <SWraperdata primary><ErrorCheck data={props.data.dividendPerShare} /></SWraperdata>
          </SWraperrow>
          <SWraperrow>
            <SWraperlabel>DPS 5y CAGR</SWraperlabel>
            <SWraperdata primary><ErrorCheck data={props.data.dividendPerShare5YCAGR} /></SWraperdata>
          </SWraperrow>
          <SWraperrow>
            <SWraperlabel>Dividend payout ratio</SWraperlabel>
            <SWraperdata primary><ErrorCheck data={props.data.dividendPayoutRatio} /></SWraperdata>
          </SWraperrow>
          <SWraperrow>
            <SWraperlabel>Dividend to FCF</SWraperlabel>
            <SWraperdata primary><ErrorCheck data={props.data.fcfPerShare} /></SWraperdata>
          </SWraperrow>
          <SWraperrow>
            <SWraperlabel>Payout Ratio</SWraperlabel>
            <SWraperdata primary><ErrorCheck data={props.data.dividendPayoutRatio} /></SWraperdata>
          </SWraperrow>
        </tbody>
      </SWrapertable>
    </SWrapertablediv>
  </SWraper>
}

export default StockAnalysis2
