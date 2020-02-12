// import React, { Component } from "react"
// class Chart1 extends Component{
//   componentDidMount(){

  
//     if(typeof window !=="undefined"){

//     const removeSlases =this.props.data.replace(/'/gu, '"')
//     console.log(removeSlases)
//     const str = removeSlases.replace(/"Date":/g, '"x":')
//     const json = JSON.parse(str)
//     const arr = []
//     json.forEach(element => {
//       arr.push({ time: element.x, value: parseFloat(element.Price) })
//     })
    
    
//       var val=window.document.getElementById("abcdef-007")
//       var chart = createChart(val,{width:400,
//         height: 400})
      
//         const lineSeries = chart.addLineSeries({
//           overlay: true,
//           title: 'Last Price',
//           //  color: '#f48fb1',
//           lineStyle: 0,
//           lineWidth: 2,
//           crosshairMarkerVisible: true,
//           crosshairMarkerRadius: 6,
//           lineType: 1,
//         });
//         lineSeries.setData(arr)
//         // window.onresize = (event) => chart.resize(val.offsetWidth, 400 );
//         chart.timeScale().fitContent();
        
//         chart.applyOptions({
//           timeScale: {
//             lockVisibleTimeRangeOnResize: true,
//             rightBarStaysOnScroll: true,
//             borderVisible: true,
//             borderColor: '#4C525E',
//             visible: true,
//           },
//         });
        
//         chart.applyOptions({
//           layout: {
//             textColor: '#777777',
//             fontSize: 10,
//             fontFamily: 'Arial, Helvetica, sans-serif',
//           },
//         });
        
//         chart.applyOptions({
//           handleScroll: {
//             mouseWheel: true,
//             pressedMouseMove: true,
//           },
//           handleScale: {
//             axisPressedMouseMove: true,
//             mouseWheel: true,
//             pinch: true,
//           },
//         });
//       }
//       }
//       render(){

//         return <div ref="ninja"></div>
//       }
//     }      
    
  

// export default Chart1

// // const removeSlases = data.replace(/'/gu, '"')
// // console.log(removeSlases)
// // const str = removeSlases.replace(/"Date":/g, '"x":');
// // const json=JSON.parse(str)
// // const arr=[]
// // json.forEach(element => {
// //   arr.push({x:new Date(element.x),y:element.Price})
// // });
// // console.log(arr)

import React, { useRef, useEffect } from 'react';
const Index = (props) => {
  const removeSlases =props.data.replace(/'/gu, '"')
    
    const str = removeSlases.replace(/"Date":/g, '"x":')
    const json = JSON.parse(str)
    const arr = []
    json.forEach(element => {
      arr.push({ time: element.x, value: parseFloat(element.Price) })
    })
  
  const chartRef = useRef(null);
  let lightweightCharts;
  
  useEffect(() => {
  
    // eslint-disable-next-line global-require
    lightweightCharts = require('lightweight-charts');
    const { createChart } = lightweightCharts;
    const chart = createChart(chartRef.current, { width: chartRef.current.offsetWidth, height: 330 });
    const lineSeries = chart.addLineSeries({
      overlay: true,
      title: 'Last Price',
      color: '#4B7BFF',
      lineStyle: 0,
      lineWidth: 2,
      crosshairMarkerVisible: true,
    //  crosshairMarkerRadius: 6,
      lineType: 1,
    });
    lineSeries.setData(arr);
    chart.timeScale().fitContent();

    chart.applyOptions({
      timeScale: {
        lockVisibleTimeRangeOnResize: true,
        rightBarStaysOnScroll: true,
        borderVisible: false,
      //  borderColor: '#4C525E',
        visible: true,
      },
    });

    chart.applyOptions({
      layout: {
        textColor: '#777777',
        fontSize: 12,
      },
    });

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
    });
  }, []);

  return (
    <>
      <div ref={chartRef} style={{background:"#FFFFFF", margin: "20px 10px 10px 10px"}} />
    </>
  );
};

export default Index;

