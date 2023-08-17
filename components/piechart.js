import React from "react";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import styled from "styled-components";
const labels = ["January", "February", "March", "April", "May", "June"];


const MainCont = styled.div`


.pie{
   

 
}



`


const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'violet',
        'pink',
        'skyblue'
      ],
      borderColor: "grey",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};
const PieChart = () => {
  return (
    <MainCont>
    <div className = "pie">
      <Pie data={data} />
    </div>
    </MainCont>
  );
};
export default PieChart;