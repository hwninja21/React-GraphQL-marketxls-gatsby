import React from "react"
import { SWrapertablediv, SNoteWraper, SWraper, SWrapertable, SWrapercap, SWraperrow, SWraperdata, SWraperlabel } from '../css/styles'
import ErrorCheck from "../../utils/Error"

const StockAnalysis = (props) => {
  return <SWraper id="StockAnalysis">
    <SWrapertablediv>
      <SWrapertable>
        <SWrapercap><h2>Basic Information</h2></SWrapercap>
        <tbody>
          <SWraperrow>
            <SWraperlabel>Earnings per Share (EPS)</SWraperlabel>
            <SWraperdata data={props.data.EarningsPerShare}><ErrorCheck data={props.data.EarningsPerShare} /></SWraperdata>
          </SWraperrow>
          <SWraperrow>
            <SWraperlabel>EPS Estimate Currrent Qtr</SWraperlabel>
            <SWraperdata primary><ErrorCheck data={props.data.EPSEstimateCurrentQTR} /></SWraperdata>
          </SWraperrow>
          <SWraperrow>
            <SWraperlabel>Book Value Per Share</SWraperlabel>
            <SWraperdata data={props.data.BookValuePerShare}><ErrorCheck data={props.data.BookValuePerShare} /></SWraperdata>
          </SWraperrow>
          <SWraperrow>
            <SWraperlabel>Market Cap</SWraperlabel>
            <SWraperdata primary><ErrorCheck data={props.data.MarketCap.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} /></SWraperdata>
          </SWraperrow>
          <SWraperrow>
            <SWraperlabel>PE Ratio</SWraperlabel>
            <SWraperdata primary><ErrorCheck data={props.data.PERatio} /></SWraperdata>
          </SWraperrow>
          <SWraperrow>
            <SWraperlabel>Enterprise Value</SWraperlabel>
            {console.log(props.data)}
            <SWraperdata primary><ErrorCheck data={props.data.EnterpriseValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} /></SWraperdata>
          </SWraperrow>
          <SWraperrow>
            <SWraperlabel>Invested Capital</SWraperlabel>
            <SWraperdata primary><ErrorCheck data={props.data.InvestedCapital.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} /></SWraperdata>
          </SWraperrow>
        </tbody>
      </SWrapertable>
    </SWrapertablediv>

    <SWrapertablediv>
      <SWrapertable>
        <SWrapercap><h2>Stock Yield</h2></SWrapercap>
        <tbody>
          <SWraperrow>
            <SWraperlabel>Stock Return 7 Days	</SWraperlabel>
            <SWraperdata data={props.data.StockReturn7Days}><ErrorCheck data={props.data.StockReturn7Days} /></SWraperdata>
          </SWraperrow>
          <SWraperrow>
            <SWraperlabel>Stock Return 15 Days</SWraperlabel>
            <SWraperdata data={props.data.StockReturn15Days}><ErrorCheck data={props.data.StockReturn15Days} /></SWraperdata>
          </SWraperrow>
          <SWraperrow>
            <SWraperlabel>Stock Return 30 Days</SWraperlabel>
            <SWraperdata data={props.data.StockReturn30Days}><ErrorCheck data={props.data.StockReturn30Days} /></SWraperdata>
          </SWraperrow>
          <SWraperrow>
            <SWraperlabel>Stock Return 3 Months</SWraperlabel>
            <SWraperdata data={props.data.StockReturn3Months}><ErrorCheck data={props.data.StockReturn3Months} /></SWraperdata>
          </SWraperrow>
          <SWraperrow>
            <SWraperlabel>Stock Return One Year</SWraperlabel>
            <SWraperdata data={props.data.StockReturnOneYear}><ErrorCheck data={props.data.StockReturnOneYear} /></SWraperdata>
          </SWraperrow>
          <SWraperrow>
            <SWraperlabel>Stock Return 3 Years</SWraperlabel>
            <SWraperdata data={props.data.StockReturnThreeYear}><ErrorCheck data={props.data.StockReturnThreeYear} /></SWraperdata>
          </SWraperrow>
        </tbody>
      </SWrapertable>
      <SNoteWraper>Note: Calculations based on previous day's adjusted closing prices</SNoteWraper>
    </SWrapertablediv>

    <SWrapertablediv>
      <SWrapertable>
        <SWrapercap><h2>Stock Technical Analysis</h2></SWrapercap>
        <tbody>
          <SWraperrow>
            <SWraperlabel>Relative Strengh Index (14)</SWraperlabel>
            <SWraperdata primary><ErrorCheck data={props.data.RSI14} /></SWraperdata>
          </SWraperrow>
          <SWraperrow>
            <SWraperlabel>Momentum (14)</SWraperlabel>
            <SWraperdata data={props.data.MOM14}><ErrorCheck data={props.data.MOM14} /></SWraperdata>
          </SWraperrow>
          <SWraperrow>
            <SWraperlabel>Simple Moving Average (14)</SWraperlabel>
            <SWraperdata primary><ErrorCheck data={props.data.SMA14} /></SWraperdata>
          </SWraperrow>
          <SWraperrow>
            <SWraperlabel> Exponential Moving Average (14)</SWraperlabel>
            <SWraperdata primary><ErrorCheck data={props.data.EMA14} /></SWraperdata>
          </SWraperrow>
          <SWraperrow>
            <SWraperlabel> Average True Range </SWraperlabel>
            <SWraperdata primary><ErrorCheck data={props.data.ATR14} /></SWraperdata>
          </SWraperrow>
        </tbody>
      </SWrapertable>
      <SNoteWraper>Note: Calculations based on previous day's adjusted closing prices</SNoteWraper>
    </SWrapertablediv>
  </SWraper>
}

export default StockAnalysis
