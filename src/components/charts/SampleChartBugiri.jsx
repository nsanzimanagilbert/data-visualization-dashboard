import React from 'react'
import pieChart from './SamplePieChart';
import D3PieChart from './d3PieChart';
import D3RadarChart from './D3RadarChart';

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
import { Row } from 'react-bootstrap';
import Example from './SamplePieChart';
import SampleLineChart from './SampleLineGraph';

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
  indexAxxis: 'y',
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
      text: 'Bugiri District',
    },
  },
};

const labels =  ['Electrical Conductivtiy (µs/cm)', 
'pH (pH units)', 'Turbidity (NTU)', 'Color (Apparent) (PtCo.)', 'Total Alkalinity (mg/L)', 
'Total hardness (mg/L)', 'Calcium Hardardness (mg/L)', 'Flouride (mg/L)', 'Nitrites (mg/L)', 
'Sulphate (mg/L)', 'Ammonium-N (mg/L)', 'Chloride (mg/L)', 'Phosphates-P (mg/L)', 'Nitrates-N (mg/L)', 
'Sodium (mg/L)', 'Potassium (mg/L)', 'Iron (mg/L)', 'Free Chlorine (mg/L)'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Shallow well at prison mosque@district HQ',
      data: [246, 7, 2.69, 57, 125, 110, 95, 0.41, 0.151, 5, 1.63, 3, 0.29, 0.71, 42, 7, 1.35, null],

      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Buyubu Shallow well',
      data: [585, 6.7, 2.22, 21, 330, 97, 47, 0.1, 0.018, 12, 0.38, 7, 0.52, 0.39, 120, 2.2, 0.32, null]
,
      backgroundColor: 'rgba(105, 235, 53, 0.5)',
    },
    {
      label: 'Kikabala Primary School Borehole',
      data: [533, 6.6, 2.75, 36, 290, 220, 125, 0.01, 0.002, 4, 0.02, 15, 0.16, 0.28, 33, 4.7, 0.02, null]
,
      backgroundColor: 'rgba(108, 53, 235, 0.5)',
    },
     {
      label: 'Lubila open well',
      data: [218, 5.7, 3.98, 29, 98, 105, 77, 0.19, 0.014, 7, 0.04, 7, 0.02, 2.28, 5.3, 3.5, 0.4, null]
,
      backgroundColor: 'rgba(235, 53, 53, 0.5)',
    },
     {
      label: 'Bukonde protected spring',
      data: [139, 5.6, 4.37, 66, 50, 48, 29, 0.25, 0.003, 4, 0.02, 3, 0.02, 5.3, 8.7, 2.1, 0.58, null]
,
      backgroundColor: 'rgba(53, 235, 144, 0.5)',
    },
    {
      label: 'Namasele Shallow well',
      data: [376, 6.8, 2.05, 18, 165, 145, 105, 0.43, 0.008, 10, 0.03, 16, 0.07, 4.51, 15, 12, 0.02, null]
,
      backgroundColor: 'rgba(235, 53, 165, 0.5)',
    },
    {
      label: 'Galidde Simon PSP',
      data: [692, 6.6, 1.84, 4,360, 300, 165, 0.44, 0.016, 32, 0.02, 14, 0.33, 2.52, 37, 1.5, 0.04, 0.01,
]
,
      backgroundColor: 'rgba(217, 235, 53, 0.5)',
    },
     {
      label: 'Abdul PSP',
      data: [694, 6.6, 1.87, 2, 350, 300, 185, 0.36, 0.006, 27, 0.03, 14, 0.1, 2.45, 40, 1.5, 0.03, 0.03]
,
      backgroundColor: 'rgba(111, 235, 53, 0.575)',
    },
    {
      label: 'Owino Ben protected spring',
      data: [208, 5.8, 2.39, 16, 77, 90, 60, 0.33, 0.005, 3, 0.002, 8, 0.12, 4.92, 7.1, 3.6, 0.14, null]
,
      backgroundColor: 'rgba(235, 187, 53, 0.575)',
    },
     {
      label: 'Gamulunguka protected spring',
      data: [255, 4.9, 2.03, 2, 20, 75, 33, 0.08, 0.004, 5, 0, 28, 0.13, 16, 17, 4.6, 0.09, null]
,
      backgroundColor: 'rgba(131, 64, 64, 0.788)',
    },
     {
      label: 'Mugoya Ayub Shallow well',
      data: [166, 4.9, 2.39, 12, 17, 48, 24, 0.01, 0.05, 1, 0.05, 18, 0.03, 10, 15, 3.4, 0.03, null]
,
      backgroundColor: 'rgba(255, 0, 0, 0.788)',
    },
     {
      label: 'Kimombasa Kiosk PSP',
      data: [532, 7.2, 5.86, 88, 280, 87, 39, 0.48, 0.001, 14, 0.002, 11, 0.27, 2.17, 100, 2.5, 0.03, 0.01]
,
      backgroundColor: 'rgba(0, 140, 255, 0.788)',
    },
    {
      label: 'Nandhubu Samuel Shallow well',
      data: [154, 5.2, 2.49, 4, 31, 57, 31, 0.11, 0.014, 1, 0.01, 10, 0.05, 7.4, 10, 2.4, 0.02, null]
,
      backgroundColor: 'rgba(0, 214, 89, 0.836)',
    },
  ],
};

/////Parameters for the single Polar Chart

const singleName = 'Shallow well at prison mosque@district HQ';
const singleDataSet = [246, 7, 2.69, 57, 125, 110, 95, 0.41, 0.151, 5, 1.63, 3, 0.29, 0.71, 42, 7, 1.35, null];
const singleLebels = ['Electrical Conductivtiy (µs/cm)', 
'pH (pH units)', 'Turbidity (NTU)', 'Color (Apparent) (PtCo.)', 'Total Alkalinity (mg/L)', 
'Total hardness (mg/L)', 'Calcium Hardardness (mg/L)', 'Flouride (mg/L)', 'Nitrites (mg/L)', 
'Sulphate (mg/L)', 'Ammonium-N (mg/L)', 'Chloride (mg/L)', 'Phosphates-P (mg/L)', 'Nitrates-N (mg/L)', 
'Sodium (mg/L)', 'Potassium (mg/L)', 'Iron (mg/L)', 'Free Chlorine (mg/L)']

/////Parameters for the single Polar Chart End

const piChartDataSet = [
  {
    'name': 'E.coli (CFU/100ml)',
    'value': 1
  },
  {
    'name': 'pH (pH units)',
    'value': 6.1
  },
  {
    'name': 'Electrical Conductivtiy (µs/cm)',
    'value': 220
  },
  {
    'name': 'Turbidity (NTU)',
    'value': 1.9
  },
  {
    'name': 'Color (PtCo.)',
    'value': 0.2432
  },
  {
    'name': 'Total Dissolved Solids (mg/L)',
    'value': 154
  },
  {
    'name': 'Total Alkalinity (mg/L)',
    'value': 100
  },
  {
    'name': 'Bicarbonates (mg/L)',
    'value': 122
  },
  {
    'name': 'Total Hardness (mg/L)',
    'value': 79
  },
  {
    'name': 'Calcium Hardness (mg/L)',
    'value': 68.8
  },
  {
    'name': 'magnesium Hardness (mg/L)',
    'value': 10.2
  },
  {
    'name': 'Sodium (mg/L)',
    'value': 14
  },
  {
    'name': 'Potassium (mg/L)',
    'value': 2
  },
  {
    'name': 'Flouride (mg/L)',
    'value': 0.22
  },
  {
    'name': 'Chloride (mg/L)',
    'value': 1.2
  },
  {
    'name': 'Sulphate (mg/L)',
    'value': 7.8
  },
  {
    'name': 'Nitrites-N (mg/L)',
    'value': 0.01
  },
  {
    'name': 'Nitrates-N (mg/L)',
    'value': 1.43
  },
  {
    'name': 'Ammonium-N (mg/L)',
    'value': 0.04
  },
  {
    'name': 'Phosphates-P (mg/L)',
    'value': 0.08
  },
  {
    'name': 'Total Chlorine',
    'value': 'ND'
  },
  {
    'name': 'Free Chlorine',
    'value': 'ND'
  }]

const SampleChartBugiri = () => {

  return (
    <>
    <Bar options={options} data={data} />
    <Line options={options} data={data} />
    <SampleLineChart dataset={piChartDataSet}></SampleLineChart>
    <D3PieChart dataset={piChartDataSet} />
    <D3RadarChart options={options} dataset={singleDataSet} name={singleName } lebels={singleLebels}></D3RadarChart>
    
    </>
  )
}

export default SampleChartBugiri
