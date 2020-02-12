import React, { Component } from "react"
import CanvasJSReact from './canvasjs.react'
import { ResponsiveLine } from "@nivo/line"
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Chart extends Component {

  render() {

    const removeSlases = this.props.data.replace(/'/gu, '"')
    console.log(removeSlases)
    const str = removeSlases.replace(/"Date":/g, '"x":');
    const json = JSON.parse(str)
    const arr = []
    json.forEach(element => {
      arr.push({ x: new Date(element.x), y: parseFloat(element.Price) })
    });
    console.log(arr)


    const options = {
      animationEnabled: true,
      title: {
        text: "Stocks History"
      },
      axisX: {
        valueFormatString: "MMM"
      },
      axisY: {
        title: "Stock Price",
        prefix: "$",
        includeZero: false
      },
      data: [{
        yValueFormatString: "$#,###",
        xValueFormatString: "MMM DD YYYY",
        type: "spline",
        dataPoints: arr
      }]
    }
    return (
      <div>
        <CanvasJSChart options={options}
        /* onRef={ref => this.chart = ref} */
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}


export default Chart


