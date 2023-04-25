import Head from 'next/head';
import { useEffect, useState } from 'react';
import styles from '../../styles/Home.module.css';
import { app, db, auth } from '../../config/firebase_config'
import { useRouter } from 'next/router';
import {
    collection,
    getDocs,
    doc,
    query, where
} from 'firebase/firestore';
import { data } from 'autoprefixer';

import { Chart as ChartJS,CategoryScale,LinearScale, BarElement,
          PointElement,LineElement,Title,Tooltip,Legend,Filler} from 'chart.js';    

//registering them 
ChartJS.register(CategoryScale,LinearScale,PointElement,LineElement,BarElement,Title,Tooltip,Legend,Filler);

import { Line, Bar } from 'react-chartjs-2';

export default function userCharts() {
    const [chartData, setChartData] = useState({
      datasets: [],
    });
   
    const [chartOptions, setChartOptions] = useState({});
   
    useEffect(() => {
      setChartData({
        labels: ["1", "2", "3", "4", "5"],
        datasets: [
          {
            label: "User Logins",
            data: [12, 55, 34, 120, 20],
            borderColor: "rgb(53, 162, 235)",
            backgroundColor: "rgba(53, 162, 235, 0.4)",
          },
        ],
      });
      setChartOptions({
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "Whom'st let the dogs out",
          },
        },
      });
    }, []);
   
    return (
        
        <div className="mockup-window border bg-base-300 m-20">
            <div className="flex justify-center px-4 py-16 bg-base-200"> <Bar options={chartOptions} data={chartData} /></div>
        </div>
        
    );
  }
