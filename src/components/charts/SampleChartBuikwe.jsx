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
      text: 'Buikwe District',
    },
  },
};

const labels =  ['E.coli (CFU/100ml)', 'pH (pH units)', 
'Electrical Conductivtiy (µs/cm)', 'Turbidity (NTU)', 'Color (PtCo.)', 'Total Dissolved Solids (mg/L)', 
'Total Alkalinity (mg/L)', 'Bicarbonates (mg/L)', 'Total Hardness (mg/L)', 'Calcium Hardness (mg/L)', 
'magnesium Hardness (mg/L)', 'Sodium (mg/L)', 'Potassium (mg/L)', 'Flouride (mg/L)', 
'Chloride (mg/L)', 'Sulphate (mg/L)', 'Nitrites-N (mg/L)', 'Nitrates-N (mg/L)', 'Ammonium-N (mg/L)', 
'Phosphates-P (mg/L)', 'Total Chlorine', 'Free Chlorine'];


/////Parameters for the single Polar Chart

const singleName = 'NWSC Nkokonjeru PSP';
const singleDataSet = [1, 6.4, 132, 2.5, 20, 92.4, 50, 61, 40.2, 22.4, 17.8, 10, 1.7, 0.24, 3.9, 0.9, 0.01, 3.16, 0.11, 0.07, 0.1, 0.04];
const singleLebels =  ['E.coli (CFU/100ml)', 'pH (pH units)', 
'Electrical Conductivtiy (µs/cm)', 'Turbidity (NTU)', 'Color (PtCo.)', 'Total Dissolved Solids (mg/L)', 
'Total Alkalinity (mg/L)', 'Bicarbonates (mg/L)', 'Total Hardness (mg/L)', 'Calcium Hardness (mg/L)', 
'magnesium Hardness (mg/L)', 'Sodium (mg/L)', 'Potassium (mg/L)', 'Flouride (mg/L)', 
'Chloride (mg/L)', 'Sulphate (mg/L)', 'Nitrites-N (mg/L)', 'Nitrates-N (mg/L)', 'Ammonium-N (mg/L)', 
'Phosphates-P (mg/L)', 'Total Chlorine', 'Free Chlorine'];

/////Parameters for the single Polar Chart End


export const data = {
  labels,
  datasets: [
    {
      label: 'NWSC Nkokonjeru PSP',
      data: [1, 6.4, 132, 2.5, 20, 92.4, 50, 61, 40.2, 22.4, 17.8, 10, 1.7, 0.24, 3.9, 0.9, 0.01, 3.16, 0.11, 0.07, 0.1, 0.04],

      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Kibali shallow well',
      data: [1, 5.8, 166, 1.7, 0.2432, 116.2, 52, 63.44, 57.6, 34.8, 22.8, 13, 3.2, 0.19, 8.1, 6.5, 0.001, 4.62, 0.06, 0.13, NaN, NaN]
,
      backgroundColor: 'rgba(105, 235, 53, 0.5)',
    },
    {
      label: 'Nakigaya Protected spring',
      data: [101, 5.9, 87, 3.1, 27, 60.9, 37, 45.14, 31.4, 14.2, 17.2, 4, 1.3, 0.2, 1.7, 3.5, 0.001, 2.44, 0.08, 0.02, NaN, NaN]
,
      backgroundColor: 'rgba(108, 53, 235, 0.5)',
    },
     {
      label: 'Buwooya mosque borehole',
      data: [1, 5.9, 81, 13, 22, 56.7, 38, 46.36, 35.2, 27, 8.2, 1.8, 0.7, 0.13, 1.3, 0.8, 0.02, 0.25, 0.04, 0.04, NaN, NaN]
,
      backgroundColor: 'rgba(235, 53, 53, 0.5)',
    },
     {
      label: 'NWSC Buikwe PSP',
      data: [1, 6.4, 142, 1.4, 0.2432, 99.4, 65, 79.3, 49.6, 27, 22.6, 8.3, 2.7, 0.25, 2.5, 0.8, 0.001, 1.22, 0.09, 0.05, 0.08, 0.04]

,
      backgroundColor: 'rgba(53, 235, 144, 0.5)',
    },
    {
      label: 'NWSC Buikwe PSP.1',
      data: [1, 6.8, 279, 2.2, 3, 195.3, 130, 158.6, 114.2, 61.4, 52.8, 12, 2.3, 0.24, 7.4, 1.5, 0.001, 0.69, 0.17, 0.18, 0.01, 0]
,
      backgroundColor: 'rgba(235, 53, 165, 0.5)',
    },
    {
      label: 'NWSC Lugazi final treated water',
      data: [1, 6.1, 90, 1.7, 0.2432, 63, 41, 50.02, 37.4, 22.2, 15.2, 2.9, 1.5, 0.16, 2.9, 1.3, 0.001, 1.09, 0.03, 0.02, 1.84, 1.72]
,
      backgroundColor: 'rgba(217, 235, 53, 0.5)',
    },
     {
      label: 'NWSC Lugazi PSP - far point',
      data: [1, 6.2, 93, 2.1, 5, 65.1, 37, 45.14, 46.6, 20.6, 26, 4.3, 1.7, 0.13, 4, 1.4, 0.001, 0.94, 0.02, 0.01, 0.09, 0.06]
,
      backgroundColor: 'rgba(111, 235, 53, 0.575)',
    },
  ///////////
  ],
};
const pieChartDataSet = [
  {
    'name': 'E.coli (CFU/100ml)',
    'value': 1
  },
  {
    'name': 'pH (pH units)',
    'value': 6.4
  },
  {
    'name': 'Electrical Conductivtiy (µs/cm)',
    'value': 132
  },
  {
    'name': 'Turbidity (NTU)',
    'value': 2.5
  },
  {
    'name': 'Color (PtCo.)',
    'value': 20
  },
  {
    'name': 'Total Dissolved Solids (mg/L)',
    'value': 92.4
  },
  {
    'name': 'Total Alkalinity (mg/L)',
    'value': 50
  },
  {
    'name': 'Bicarbonates (mg/L)',
    'value': 61
  },
  {
    'name': 'Total Hardness (mg/L)',
    'value': 40.2
  },
  {
    'name': 'Calcium Hardness (mg/L)',
    'value': 22.4
  },
  {
    'name': 'magnesium Hardness (mg/L)',
    'value': 17.8
  },
  {
    'name': 'Sodium (mg/L)',
    'value': 10
  },
  {
    'name': 'Potassium (mg/L)',
    'value': 1.7
  },
  {
    'name': 'Flouride (mg/L)',
    'value': 0.24
  },
  {
    'name': 'Chloride (mg/L)',
    'value': 3.9
  },
  {
    'name': 'Sulphate (mg/L)',
    'value': 0.9
  },
  {
    'name': 'Nitrites-N (mg/L)',
    'value': 0.01
  },
  {
    'name': 'Nitrates-N (mg/L)',
    'value': 3.16
  },
  {
    'name': 'Ammonium-N (mg/L)',
    'value': 0.11
  },
  {
    'name': 'Phosphates-P (mg/L)',
    'value': 0.07
  },
  {
    'name': 'Total Chlorine',
    'value': 0.1
  },
  {
    'name': 'Free Chlorine',
    'value': 0.04
  }
]

const SampleChartBuikwe = () => {

  return (
    <>
    <>
    <Bar options={options} data={data} />
    <Line options={options} data={data} />
    <SampleLineChart dataset={pieChartDataSet}></SampleLineChart>
    <D3PieChart dataset={pieChartDataSet} />
    <D3RadarChart options={options} dataset={singleDataSet} name={singleName } lebels={singleLebels}></D3RadarChart>

    
    </>
    
    </>
    

  )
}

export default SampleChartBuikwe
