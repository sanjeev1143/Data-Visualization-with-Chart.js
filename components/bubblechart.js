import React from "react";
import Chart from "chart.js/auto";
import { Bubble } from "react-chartjs-2";

const Bubblechart = () => {


  const data = {
    datasets: [{
      label: 'First Dataset',
      data: [ {
        x: 40,
        y: 10,
        r: 10
      },
      {
        x: 50,
        y: 70,
        r: 20
      }, {
        x: 40,
        y: 50,
        r: 10
      }, {
        x: 40,
        y: 80,
        r: 10
      }, {
        x: 49,
        y: 16,
        r: 10
      }, {
        x: 30,
        y: 20,
        r: 10
      }, {
        x: 40,
        y: 18,
        r: 10
      },],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'pink',
        'skyblue',
        'violet'
      ]
    }]
  };
  return (
      <Bubble data={data} />
  
  );
};

export default Bubblechart;