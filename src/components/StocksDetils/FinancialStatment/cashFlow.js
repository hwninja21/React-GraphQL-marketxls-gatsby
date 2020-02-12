import React from "react"
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import { Thead, Tbody, Th } from 'react-super-responsive-table'
import { Wraper, Wrapertable, Wrapercap, Wraperrow, Wraperdata } from '../../css/styles'


const cashFlow = ({ data }) => {

 // cash flow quartly
 const cfQuartly = []
 data.cf_qtrly.forEach(element => {
   const newEle = element.split(",").slice(1)
   cfQuartly.push(newEle)
 })

  return <Wraper id="CashFlow">
    <Wrapertable>
      <Wrapercap>Cash Flows(Quartely)</Wrapercap>
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
          <Wraperdata>Cash from financing at beginning of period</Wraperdata>
          <Wraperdata>{cfQuartly[2][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[2][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[2][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[2][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>
        <Wraperrow>
          <Wraperdata>Cash from financing  at end of period</Wraperdata>
          <Wraperdata>{cfQuartly[3][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[3][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[3][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[3][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>
        <Wraperrow>
          <Wraperdata>Cash from disc. financing activities</Wraperdata>
          <Wraperdata>{cfQuartly[4][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[4][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[4][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[4][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Cash from financing Effect of exchange rate changes</Wraperdata>
          <Wraperdata>{cfQuartly[6][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[6][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[6][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[6][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Cash from financing Issuance of capital stock</Wraperdata>
          <Wraperdata>{cfQuartly[8][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[8][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[8][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[8][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Cash from financing Issuance of debt</Wraperdata>
          <Wraperdata>{cfQuartly[9][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[9][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[9][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[9][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>financing Net cash from financing activities</Wraperdata>
          <Wraperdata>{cfQuartly[10][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[10][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[10][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[10][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>financing Net change in cash & cash equivalents</Wraperdata>
          <Wraperdata>{cfQuartly[11][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[11][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[11][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[11][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata> financing Other charges net</Wraperdata>
          <Wraperdata>{cfQuartly[12][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[12][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[12][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[12][5].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Financing Payment of cash dividends</Wraperdata>
          <Wraperdata>{cfQuartly[13][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[13][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[13][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[13][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Financing Repayment of debt</Wraperdata>
          <Wraperdata>{cfQuartly[14][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[14][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[14][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[14][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Cash from Investing Acquisitions</Wraperdata>
          <Wraperdata>{cfQuartly[16][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[16][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[16][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[16][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Investing Cash from disc. investing activities</Wraperdata>
          <Wraperdata>{cfQuartly[17][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[17][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[17][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[17][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Investing Net cash from investing activities</Wraperdata>
          <Wraperdata>{cfQuartly[18][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[18][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[18][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[18][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Cash from Investing Purchase of property, plant and equipment</Wraperdata>
          <Wraperdata>{cfQuartly[21][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[21][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[21][5].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[21][6].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Cash from operating (Increase) Decrease in inventories</Wraperdata>
          <Wraperdata>{cfQuartly[26][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[26][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[26][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[26][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Cash from operating (Increase) Decrease in other current assets</Wraperdata>
          <Wraperdata>{cfQuartly[27][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[27][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[27][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[27][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Cash from operating (Increase) Decrease in other working capital</Wraperdata>
          <Wraperdata>{cfQuartly[29][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[29][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[29][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[29][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Cash from operating (Increase) Decrease in receivables</Wraperdata>
          <Wraperdata>{cfQuartly[32][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[32][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[32][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[32][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Cash from operating Deferred income taxes</Wraperdata>
          <Wraperdata>{cfQuartly[35][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[35][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[35][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[35][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Cash from operating Depreciation</Wraperdata>
          <Wraperdata>{cfQuartly[36][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[36][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[36][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[36][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Net cash from continuing operations</Wraperdata>
          <Wraperdata>{cfQuartly[38][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[38][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[38][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[38][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Net cash from discontinued operations</Wraperdata>
          <Wraperdata>{cfQuartly[39][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[39][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[39][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[39][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Net cash from operating activities</Wraperdata>
          <Wraperdata>{cfQuartly[40][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[40][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[40][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[40][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Cash from Operating (gains) losses</Wraperdata>
          <Wraperdata>{cfQuartly[42][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[42][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[42][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[42][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Cash from operating Other non-cash items</Wraperdata>
          <Wraperdata>{cfQuartly[43][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[43][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[43][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{cfQuartly[43][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

      </Tbody>
    </Wrapertable>
  </Wraper>
}

export default cashFlow