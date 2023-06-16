import React from 'react'

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
import { Bar, Line } from 'react-chartjs-2';
import D3PieChart from './d3PieChart';
import SampleLineChart from './SampleLineGraph';
import D3RadarChart from './D3RadarChart';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
      labels:{
        usePointStyle: true,
        boxHeight: 10,
        boxWidth: 10,
        pointStyle: 'circle',
        useBorderRadius: true,
        borderRadius: '50%'
      }
    },
    title: {
      display: true,
      text: 'Luuka District',
    },
  },
};

const labels = ['E.Coli (CFU/100mL)', 'Turbidity (NTU)', 
'Electrical Conductivity (µs/cm)', 'pH (pH units)', 'Total disolved solids (mg/L)', 
'Chloride (mg/L)', 'Sulphate (mg/L)', 'Ammonium-N (mg/L)', 'Nitrite-N (mg/L)', 
'Nitrates-N (mg/L)', 'Phosphate-P (mg/L)'];

/////Parameters for the single Polar Chart

const singleName = "Our Lady's Secondary School Kitwekyambogo";
const singleDataSet =  ['1', '2.76', '480', '7.6', '336', 
'16.4', '98.6', '0.024', '0.005', '3.834', '0.281'].map(Number.parseFloat);

/////Parameters for the single Polar Chart End

export const data = {
  labels,
  datasets: [
     {
      label: "Our Lady's Secondary School Kitwekyambogo",
      data: ['1', '2.76', '480', '7.6', '336', 
'16.4', '98.6', '0.024', '0.005', '3.834', '0.281'].map(Number.parseFloat)
,
      backgroundColor: 'rgba(235, 53, 53, 0.5)',
    },
     {
      label: 'Kitwekyambogo primary school',
      data: ['1', '1.54', '370', '7.8', '259', '5.3', '33.6', 
'0.035', '0.002', '5.19', '0.206'].map(Number.parseFloat)
,
      backgroundColor: 'rgba(53, 235, 144, 0.5)',
    },
    {
      label: 'Kiyunga Primary school',
      data: ['1', '1.23', '261', '7.6', '183', '5.1', '22.5', 
'0.048', '0.002', '3.329', '0.209'].map(Number.parseFloat)
,
      backgroundColor: 'rgba(235, 53, 165, 0.5)',
    },
    {
      label: 'Tomborehole',
      data: ['1', '1.67', '456', '7.8', '319', '5.5', '47.4', '0.042', 
'0.004', '4.548', '0.235'].map(Number.parseFloat)
,
      backgroundColor: 'rgba(217, 235, 53, 0.5)',
    },
     {
      label: 'Kiyunga hospital borehole',
      data: ['1', '1.23', '558', '7.4', '391', '34.4', 
'19.2', '0.018', '0.005', '30.057', '0.135'].map(Number.parseFloat)
,
      backgroundColor: 'rgba(111, 235, 53, 0.575)',
    },
  ],
};


const pieChartDataSet = [
{
  'name': 'Electrical Conductivtiy (µs/cm)',
  'value': 480.0
},
{
  'name': 'pH (pH units)',
  'value': 7.6
},
{
  'name': 'Turbidity (NTU)',
  'value': 2.76
},
{
  'name': 'Sulphate (mg/L)',
  'value': 98.6
},
{
  'name': 'Ammonium-N (mg/L)',
  'value': 0.024
},
{
  'name': 'Nitrites (mg/L)',
  'value': 0.005
},
{
  'name': 'Nitrates-N (mg/L)',
  'value': 3.834
},
{
  'name': 'Phosphates-P (mg/L)',
  'value': 0.281
}
]

const SampleChartLuuka= () => {

  return (
    <>
    <Bar options={options} data={data} />
    <Line options={options} data={data} />
    <SampleLineChart dataset={pieChartDataSet}></SampleLineChart>
    <D3PieChart dataset={pieChartDataSet} />
    <D3RadarChart options={options} dataset={singleDataSet} name={singleName } lebels={labels}></D3RadarChart>

    
    </>
  )
}

export default SampleChartLuuka
