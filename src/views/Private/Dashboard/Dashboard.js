//libs
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
//constants
import { ChartColors, PageTitles } from "src/shared/constants";

import data from "src/shared/constants/data.json";
//styles
import S from "./style.module.scss";

const Dashboard = ({ }) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
   const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Upwork Test',
      },
    },
  };
  const labels = data.map(item => item.date);
  
  const chartData = {
    labels,
    datasets: [
      {
        label: 'Patients 2022',
        data: data.map(it => it.value),
        borderColor: ChartColors.purple_10,
        backgroundColor: ChartColors.purple,
      }
    ],
  };
  return (
    <section className={S.section}>
      <Helmet title={PageTitles.DASHBOARD} />
      <div className={S.container}>
        <Line options={options} data={chartData} />
      </div>
    </section>
  );
};

export default Dashboard;
