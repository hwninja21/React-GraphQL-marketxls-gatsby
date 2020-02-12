import React from "react"
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import { Thead, Tbody, Th } from 'react-super-responsive-table'
import { Wraper, Wrapertable, Wrapercap, Wraperrow, Wraperdata } from '../../css/styles'

const IncomeStatments = ({ data }) => {

  //   blance sheet conversion
  const bs_qtly = []
  data.bs_qtrly.forEach(element => {
    const newEle = element.split(",").slice(1)
    bs_qtly.push(newEle)
  })
  //  income statment yearly converison
  const pnlYearly = []
  data.pnl_yearly.forEach(element => {
    const newEle = element.split(",").slice(1)
    pnlYearly.push(newEle)
  })

  // income statment quartely conversion
  const pnlQuartrly = []
  data.pnl_qtrly.forEach(element => {
    const newEle = element.split(",").slice(1)
    pnlQuartrly.push(newEle)
  })

  // balance sheet yearly
  const bsYearly = []
  data.bs_yearly.forEach(element => {
    const newEle = element.split(",").slice(1)
    bsYearly.push(newEle)
  })

  // cash flow yearly
  const cfYearly = []
  data.cf_yearly.forEach(element => {
    const newEle = element.split(",").slice(1)
    cfYearly.push(newEle)
  })

  // cash flow quartly
  const cfQuartly = []
  data.cf_qtrly.forEach(element => {
    const newEle = element.split(",").slice(1)
    cfQuartly.push(newEle)
  })

  return <Wraper id="IncomeStatments">
    <Wrapertable>
      <Wrapercap>Income Statments(Quartely)</Wrapercap>
      <Thead>
        <Wraperrow style={{ backgroundColor: "#FFFFFF" }}>
          <Th style={{ padding: "0.45em" }}>Matrix</Th>
          <Th style={{ padding: "0.45em" }}>2018 Q2</Th>
          <Th style={{ padding: "0.45em" }}>2018 Q3</Th>
          <Th style={{ padding: "0.45em" }}>2018 Q4</Th>
          <Th style={{ padding: "0.45em" }}>2019 Q1</Th>
        </Wraperrow>
      </Thead>
      <Tbody>
        <Wraperrow>
          <Wraperdata>Basic EPS from continuing operations</Wraperdata>
          <Wraperdata>{pnlQuartrly[4][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{pnlQuartrly[4][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{pnlQuartrly[4][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{pnlQuartrly[4][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>
        <Wraperrow>
          <Wraperdata>Basic EPS from total operations</Wraperdata>
          <Wraperdata>{pnlQuartrly[10][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{pnlQuartrly[10][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{pnlQuartrly[10][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{pnlQuartrly[10][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>
        <Wraperrow>
          <Wraperdata>Cost of Sale</Wraperdata>
          <Wraperdata>{pnlQuartrly[13][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{pnlQuartrly[13][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{pnlQuartrly[13][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{pnlQuartrly[13][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Cost of sales with depreciation</Wraperdata>
          <Wraperdata>{pnlQuartrly[14][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{pnlQuartrly[14][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{pnlQuartrly[14][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{pnlQuartrly[14][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Depreciation</Wraperdata>
          <Wraperdata>{pnlQuartrly[15][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{pnlQuartrly[15][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{pnlQuartrly[15][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{pnlQuartrly[15][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Diluted EPS from continuing operations</Wraperdata>
          <Wraperdata>{pnlQuartrly[17][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{pnlQuartrly[17][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{pnlQuartrly[17][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{pnlQuartrly[17][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Diluted EPS from total operations</Wraperdata>
          <Wraperdata>{pnlQuartrly[23][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{pnlQuartrly[23][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{pnlQuartrly[23][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{pnlQuartrly[23][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Dividends paid per share</Wraperdata>
          <Wraperdata>{pnlQuartrly[26][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{pnlQuartrly[26][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{pnlQuartrly[26][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{pnlQuartrly[26][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Gross margin</Wraperdata>
          <Wraperdata>{pnlQuartrly[30][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{pnlQuartrly[30][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{pnlQuartrly[30][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{pnlQuartrly[30][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Gross operating profit</Wraperdata>
          <Wraperdata>{pnlQuartrly[31][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{pnlQuartrly[31][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{pnlQuartrly[31][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{pnlQuartrly[31][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Income before tax</Wraperdata>
          <Wraperdata>{pnlQuartrly[32][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{pnlQuartrly[32][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{pnlQuartrly[32][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{pnlQuartrly[32][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Income taxes</Wraperdata>
          <Wraperdata>{pnlQuartrly[35][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{pnlQuartrly[35][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{pnlQuartrly[35][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{pnlQuartrly[35][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Interest expense</Wraperdata>
          <Wraperdata>{pnlQuartrly[38][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{pnlQuartrly[38][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{pnlQuartrly[38][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{pnlQuartrly[38][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Net income available for common</Wraperdata>
          <Wraperdata>{pnlQuartrly[41][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{pnlQuartrly[41][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{pnlQuartrly[41][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{pnlQuartrly[41][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Operating income</Wraperdata>
          <Wraperdata>{pnlQuartrly[46][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{pnlQuartrly[46][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{pnlQuartrly[46][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{pnlQuartrly[46][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Operating income after depreciation</Wraperdata>
          <Wraperdata>{pnlQuartrly[47][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{pnlQuartrly[47][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{pnlQuartrly[47][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{pnlQuartrly[47][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Operating income before depreciation (EBITDA)</Wraperdata>
          <Wraperdata>{pnlQuartrly[48][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{pnlQuartrly[48][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{pnlQuartrly[48][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{pnlQuartrly[48][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Operating revenue (revenue/sales)</Wraperdata>
          <Wraperdata>{pnlQuartrly[49][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{pnlQuartrly[49][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{pnlQuartrly[49][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{pnlQuartrly[49][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Pre-tax Income (EBT)</Wraperdata>
          <Wraperdata>{pnlQuartrly[53][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{pnlQuartrly[53][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{pnlQuartrly[53][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{pnlQuartrly[53][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Selling & administrative expense</Wraperdata>
          <Wraperdata>{pnlQuartrly[57][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{pnlQuartrly[57][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{pnlQuartrly[57][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{pnlQuartrly[57][5].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Total Income available for interest expense (EBIT)</Wraperdata>
          <Wraperdata>{pnlQuartrly[59][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{pnlQuartrly[59][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{pnlQuartrly[59][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{pnlQuartrly[59][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Total net income</Wraperdata>
          <Wraperdata>{pnlQuartrly[59][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{pnlQuartrly[59][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{pnlQuartrly[59][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{pnlQuartrly[59][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Total revenues</Wraperdata>
          <Wraperdata>{pnlQuartrly[61][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{pnlQuartrly[61][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{pnlQuartrly[61][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{pnlQuartrly[61][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>
      </Tbody>
    </Wrapertable>
  </Wraper>


}

export default IncomeStatments
