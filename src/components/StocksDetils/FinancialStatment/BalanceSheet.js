import React from "react"
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import { Thead, Tbody, Th } from 'react-super-responsive-table'
import { Wraper, Wrapertable, Wrapercap, Wraperrow, Wraperdata } from '../../css/styles'


const BalanceSheet = ({ data }) => {

  //   blance sheet conversion
  const bs_qtly = []
  data.bs_qtrly.forEach(element => {
    const newEle = element.split(",").slice(1)
    bs_qtly.push(newEle)
  })

  return <Wraper id="BalanceSheet">
    <Wrapertable>
      <Wrapercap>BalanceSheet(Quartely)</Wrapercap>
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
          <Wraperdata>Assest Account receivable</Wraperdata>
          <Wraperdata>{bs_qtly[0][1]}</Wraperdata>
          <Wraperdata>{bs_qtly[0][2]}</Wraperdata>
          <Wraperdata>{bs_qtly[0][3]}</Wraperdata>
          <Wraperdata>{bs_qtly[0][4]}</Wraperdata>
        </Wraperrow>
        <Wraperrow>
          <Wraperdata>Assets_Accumulated depreciation & depletion</Wraperdata>
          <Wraperdata>{bs_qtly[1][1]}</Wraperdata>
          <Wraperdata>{bs_qtly[1][2]}</Wraperdata>
          <Wraperdata>{bs_qtly[1][3]}</Wraperdata>
          <Wraperdata>{bs_qtly[1][4]}</Wraperdata>
        </Wraperrow>
        <Wraperrow>
          <Wraperdata>Assets_Building & improvements</Wraperdata>
          <Wraperdata>{bs_qtly[2][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[2][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[2][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[2][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Assets Cash and equivalents</Wraperdata>
          <Wraperdata>{bs_qtly[3][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[3][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[3][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[3][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Assets Cost in excess</Wraperdata>
          <Wraperdata>{bs_qtly[5][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[5][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[5][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[5][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Assets Finished goods</Wraperdata>
          <Wraperdata>{bs_qtly[7][1]}</Wraperdata>
          <Wraperdata>{bs_qtly[7][2]}</Wraperdata>
          <Wraperdata>{bs_qtly[7][3]}</Wraperdata>
          <Wraperdata>{bs_qtly[7][4]}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Assets Gross fixed assets(plant property & equipment)\</Wraperdata>
          <Wraperdata>{bs_qtly[8][2]}</Wraperdata>
          <Wraperdata>{bs_qtly[8][3]}</Wraperdata>
          <Wraperdata>{bs_qtly[8][4]}</Wraperdata>
          <Wraperdata>{bs_qtly[8][5]}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Assets Intangibles</Wraperdata>
          <Wraperdata>{bs_qtly[9][1]}</Wraperdata>
          <Wraperdata>{bs_qtly[9][2]}</Wraperdata>
          <Wraperdata>{bs_qtly[9][3]}</Wraperdata>
          <Wraperdata>{bs_qtly[9][4]}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Assets Inventories</Wraperdata>
          <Wraperdata>{bs_qtly[10][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[10][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[10][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[10][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Assets Land & improvements</Wraperdata>
          <Wraperdata>{bs_qtly[13][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[13][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[13][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[13][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Assets Machinery, furniture & equipment</Wraperdata>
          <Wraperdata>{bs_qtly[15][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[15][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[15][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[15][5].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Assets Net fixed assets (net PP&E)</Wraperdata>
          <Wraperdata>{bs_qtly[17][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[17][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[17][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[17][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Assets Other current assets</Wraperdata>
          <Wraperdata>{bs_qtly[19][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[19][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[19][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[19][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Assets Other fixed assets</Wraperdata>
          <Wraperdata>{bs_qtly[20][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[20][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[20][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[20][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Assets Other inventories</Wraperdata>
          <Wraperdata>{bs_qtly[21][1]}</Wraperdata>
          <Wraperdata>{bs_qtly[21][2]}</Wraperdata>
          <Wraperdata>{bs_qtly[21][3]}</Wraperdata>
          <Wraperdata>{bs_qtly[21][4]}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Assets Other non-current assets</Wraperdata>
          <Wraperdata>{bs_qtly[22][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[22][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[22][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[22][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Assets Raw materials</Wraperdata>
          <Wraperdata>{bs_qtly[26][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[26][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[26][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[26][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Assets Receivables</Wraperdata>
          <Wraperdata>{bs_qtly[27][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[27][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[27][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[27][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Assets Total assets</Wraperdata>
          <Wraperdata>{bs_qtly[29][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[29][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[29][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[29][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Assets Total current assets</Wraperdata>
          <Wraperdata>{bs_qtly[30][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[30][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[30][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[30][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Assets Total fixed assets</Wraperdata>
          <Wraperdata>{bs_qtly[31][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[31][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[31][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[31][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Assets Total non-current assets</Wraperdata>
          <Wraperdata>{bs_qtly[32][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[32][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[32][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[32][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Liabilities stockholders equity Accounts payable</Wraperdata>
          <Wraperdata>{bs_qtly[34][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[34][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[34][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[34][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Liabilities stockholders equity_Accrued expenses</Wraperdata>
          <Wraperdata>{bs_qtly[35][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[35][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[35][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[35][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Liabilities stockholders equity_Accrued liabilities</Wraperdata>
          <Wraperdata>{bs_qtly[36][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[36][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[36][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[36][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Liabilities stockholders equity_Accrued liabilities</Wraperdata>
          <Wraperdata>{bs_qtly[36][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[36][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[36][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[36][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Liabilities stockholders equity Additional paid in capital</Wraperdata>
          <Wraperdata>{bs_qtly[37][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[37][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[37][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[37][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Liabilities stockholders equity Cash flow</Wraperdata>
          <Wraperdata>{bs_qtly[39][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[39][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[39][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[39][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Liabilities stockholders equity Common par</Wraperdata>
          <Wraperdata>{bs_qtly[40][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[40][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[40][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[40][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Liabilities stockholders equity Common stock equity</Wraperdata>
          <Wraperdata>{bs_qtly[41][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[41][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[41][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[41][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Liabilities stockholders equity Current deferred income taxes</Wraperdata>
          <Wraperdata>{bs_qtly[43][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[43][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[43][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[43][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Liabilities stockholders equity Deferred revenues</Wraperdata>
          <Wraperdata>{bs_qtly[45][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[45][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[45][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[45][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Liabilities stockholders equity Float term debt</Wraperdata>
          <Wraperdata>{bs_qtly[46][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[46][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[46][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[46][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Liabilities stockholders equity Free cash flow</Wraperdata>
          <Wraperdata>{bs_qtly[47][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[47][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[47][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[47][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Liabilities stockholders equity Invested capital</Wraperdata>
          <Wraperdata>{bs_qtly[48][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[48][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[48][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[48][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Liabilities stockholders equity Minority interest</Wraperdata>
          <Wraperdata>{bs_qtly[49][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[49][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[49][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[49][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Liabilities stockholders equity Notes payable</Wraperdata>
          <Wraperdata>{bs_qtly[50][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[50][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[50][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[50][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Liabilities stockholders equity Other current liabilities</Wraperdata>
          <Wraperdata>{bs_qtly[51][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[51][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[51][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[51][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Liabilities stockholders equity Other equity adjustments</Wraperdata>
          <Wraperdata>{bs_qtly[52][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[52][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[52][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[52][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Liabilities stockholders equity Other non-current liabilities</Wraperdata>
          <Wraperdata>{bs_qtly[53][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[53][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[53][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[53][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Liabilities stockholders equity Retained earnings</Wraperdata>
          <Wraperdata>{bs_qtly[57][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[57][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[57][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[57][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Liabilities stockholders equity Short term debt</Wraperdata>
          <Wraperdata>{bs_qtly[58][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[58][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[58][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[58][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Liabilities stockholders equity Total capitalization</Wraperdata>
          <Wraperdata>{bs_qtly[59][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[59][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[59][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[59][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Liabilities stockholders equity Total current liabilities</Wraperdata>
          <Wraperdata>{bs_qtly[60][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[60][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[60][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[60][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Liabilities stockholders equity Total equity</Wraperdata>
          <Wraperdata>{bs_qtly[61][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[61][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[61][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[61][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Liabilities stockholders equity Total liabilities</Wraperdata>
          <Wraperdata>{bs_qtly[62][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[62][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[62][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[62][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Liabilities stockholders equity Total liabilities & stock equity</Wraperdata>
          <Wraperdata>{bs_qtly[63][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[63][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[63][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[63][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Liabilities stockholders equity Total non-current liabilities</Wraperdata>
          <Wraperdata>{bs_qtly[64][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[64][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[64][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[64][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Liabilities stockholders equity Treasury stock</Wraperdata>
          <Wraperdata>{bs_qtly[65][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[65][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[65][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[65][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>

        <Wraperrow>
          <Wraperdata>Liabilities stockholders equity Working capital</Wraperdata>
          <Wraperdata>{bs_qtly[66][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[66][2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[66][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
          <Wraperdata>{bs_qtly[66][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Wraperdata>
        </Wraperrow>
      </Tbody>
    </Wrapertable>
  </Wraper>
}

export default BalanceSheet