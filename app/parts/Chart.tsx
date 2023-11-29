"use client";
import React, { Component } from "react";
import CanvasJSReact from "@canvasjs/react-charts";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Chart extends Component {
  render() {
    const options = {
      animationEnabled: true,
      theme: "light2",
      title: {
        // text: "Growth of Photovoltaics",
      },
      axisY: {
        title: "",
        logarithmic: false,
      },
      scales: {
        xaxes: [
          {
            ticks: {
              display: false,
            },
          },
        ],
      },
      data: [
        {
          type: "spline",
          showInLegend: false,
          color: "#FF5403",

          // legendText: "MWp = one megawatt peak",
          dataPoints: [
            { x: new Date(2017, 0, 1), y: 100 },
            { x: new Date(2017, 1, 1), y: 135 },
            { x: new Date(2017, 2, 1), y: 144 },
            { x: new Date(2017, 3, 1), y: 103 },
            { x: new Date(2017, 4, 1), y: 93 },
            { x: new Date(2017, 5, 1), y: 129 },
            { x: new Date(2017, 6, 1), y: 143 },
            { x: new Date(2017, 8, 1), y: 122 },
            { x: new Date(2017, 9, 1), y: 106 },
            { x: new Date(2017, 10, 1), y: 137 },
            { x: new Date(2017, 11, 1), y: 142 },
          ],
        },
      ],
    };

    return (
      <div>
        <CanvasJSChart
          options={options}
          /* onRef={ref => this.chart = ref} */
        />
      </div>
    );
  }
}

export default Chart;
