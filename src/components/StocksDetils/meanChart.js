import React, { useRef, useEffect } from "react"
import moment from "moment"
import { COLORS, FONT_SIZES } from "../css/styles"
import Styled from "styled-components"

const WraperChart = Styled.div`
@media (max-width: 768px) {
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
  margin: 0% 0% 0% 0%;
`
const Wraperheading = Styled.p`
  color: ${COLORS.black};
  margin: 10px 0px 10px 0px;
  text-align: center;
  font-size: ${FONT_SIZES.xlarge};
  font-weight: 480;
  `

const MeanChart = ({ data }) => {
  const chartRef = useRef(null)
  let lightweightCharts

  var today = moment(new Date(), "YY-MM-DD")
    .format()
    .split("T")[0]
  var oneWeek = moment(new Date(), "YY-MM-DD")
    .subtract(1, "Week")
    .format()
    .split("T")[0]
  var twoWeek = moment(new Date(), "YY-MM-DD")
    .subtract(2, "Week")
    .format()
    .split("T")[0]
  var threeWeek = moment(new Date(), "YY-MM-DD")
    .subtract(3, "Week")
    .format()
    .split("T")[0]

  useEffect(() => {
    // eslint-disable-next-line global-require
    if (
      !data.DateThreeWeel ||
      !data.DateOneWeek ||
      !data.Datecurr ||
      !data.DateTwoWeek ||
      !data.threeWeek ||
      !data.twoWeek
    ) {
      return <div>Component Data Not Available</div>
    }
    const arr = [
      { time: data.DateThreeWeel || threeWeek, value: data.threeWeek || 0 },
      { time: data.DateTwoWeek || twoWeek, value: data.twoWeek || 0 },
      { time: data.DateOneWeek || oneWeek, value: data.oneWeek || 0 },
      { time: data.Datecurr || today, value: data.curr || 0 },
    ]

    lightweightCharts = require("lightweight-charts")
    const { createChart } = lightweightCharts
    const chart = createChart(chartRef.current, {
      width: chartRef.current.offsetWidth,
      height: 330,
    })
    const lineSeries = chart.addLineSeries({
      overlay: true,
      title: "mean Price",
      color: "#4B7BFF",
      lineStyle: 0,
      lineWidth: 2,
      crosshairMarkerVisible: true,
      //  crosshairMarkerRadius: 6,
      lineType: 1,
    })
    lineSeries.setData(arr)
    chart.timeScale().fitContent()

    chart.applyOptions({
      timeScale: {
        lockVisibleTimeRangeOnResize: true,
        rightBarStaysOnScroll: true,
        borderVisible: false,
        //  borderColor: '#4C525E',
        visible: true,
      },
    })

    chart.applyOptions({
      layout: {
        textColor: "#777777",
        fontSize: 12,
      },
    })

    chart.applyOptions({
      handleScroll: {
        mouseWheel: true,
        pressedMouseMove: true,
      },
      handleScale: {
        axisPressedMouseMove: true,
        mouseWheel: true,
        pinch: true,
      },
    })
  }, [null])

  return (
    <>
      <WraperChart style={{ margin: "0px 0% 0px 0px" }}>
        <Wraperheading>
          {/* <IconWraper icon={faChartLine} /> */}
          <h2>Mean Target Price (Analysts)</h2>
        </Wraperheading>
        <hr style={{ margin: "0px 0px 0px 0px" }} />
        <div
          ref={chartRef}
          style={{ background: "#FFFFFF", margin: "20px 10px 10px 10px" }}
        />
      </WraperChart>
    </>
  )
}

export default MeanChart
