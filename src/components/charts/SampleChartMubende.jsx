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
      text: 'Mubende District',
    },
  },
};

const labels =  ['Field Temperature (oC)', 'Dissolved Oxygen (mg/L)', 
'Turbidity (NTU)', 'pH (pH units)', 'Electrical Conductivity (µS/cm)', 'Total disolved solids (mg/l)', 
'Total Hardness as CaCO3 (mg/l)', 'Calcium hardness as CaCO3 (mg/l)', 'Magnesium hardness as CaCO3 (mg/l)', 
'Calcium (mg/l)', 'Magnesium (mg/l)', 'Sodium (mg/l)', 'Potassium (mg/l)', 'Total Alkalinity (mg/l)', 
'Bicarbonates (mg/l)', 'Fluoride (mg/l)', 'Sulphates (mg/l)', 'Chlorides (mg/l)', 'Nitrates as N (mg/l)', 
'Nitrites as N (mg/l)', 'Ammonium as N (mg/l)', 'Phosphates as P (mg/l)', 'Manganese (mg/l)', 'Total Iron (mg/l)', 
'Silica (mg/l)', 'Mercury (mg/l)', 'E.coli (CFU/100ml)'];

/////Parameters for the single Polar Chart

const singleName = 'Kyebando Borehole';
const singleDataSet =   ['24', '5.1', '1.83', '5.5', '170', '119', '61', '21', 
'40', '8.4', '9.6', '20', '2.8', '68', '83', '0.2', '12.1', '4.2', '1.53', '0.002', '0.069', '0.079', 
'0.09', '0.1', '29.3', null, '1'].map(Number.parseFloat);

/////Parameters for the single Polar Chart End

export const data = {
  labels,
  datasets: [
     {
      label: 'Kyebando Borehole',
      data: ['24', '5.1', '1.83', '5.5', '170', '119', '61', '21', 
'40', '8.4', '9.6', '20', '2.8', '68', '83', '0.2', '12.1', '4.2', '1.53', '0.002', '0.069', '0.079', 
'0.09', '0.1', '29.3', null, '1'].map(Number.parseFloat)
,
      backgroundColor: 'rgba(235, 53, 53, 0.5)',
    },
     {
      label: 'Kyenda borehole',
      data: ['23', '4.85', '1.76', '5.7', '290', '203', '130', '36', 
'94', '14.4', '22.56', '24', '1.9', '125', '153', '0.2', '6.5', '11.8', '2.38', '0.002', '0.045', 
'0.139', '0.11', '0.04', '56.1', null, '1'].map(Number.parseFloat)
,
      backgroundColor: 'rgba(53, 235, 144, 0.5)',
    },
  ],
};

const pieChartDataSet = [
  {
    'name': 'Field Temperature (oC)',
    'value': 24
  },
  {
    'name': 'Dissolved Oxygen (mg/L)',
    'value': 5.1
  },
  {
    'name': 'Turbidity (NTU)',
    'value': 1.83
  },
  {
    'name': 'pH (pH units)',
    'value': 5.5
  },
  {
    'name': 'Electrical Conductivity (µS/cm)',
    'value': 170
  },
  {
    'name': 'Total disolved solids (mg/l)',
    'value': 119
  },
  {
    'name': 'Total Hardness as CaCO3 (mg/l)',
    'value': 61
  },
  {
    'name': 'Calcium hardness as CaCO3 (mg/l)',
    'value': 21
  },
  {
    'name': 'Magnesium hardness as CaCO3 (mg/l)',
    'value': 40
  },
  {
    'name': 'Calcium (mg/l)',
    'value': 8.4
  },
  {
    'name': 'Magnesium (mg/l)',
    'value': 9.6
  },
  {
    'name': 'Sodium (mg/l)',
    'value': 20
  },
  {
    'name': 'Potassium (mg/l)',
    'value': 2.8
  },
  {
    'name': 'Total Alkalinity (mg/l)',
    'value': 68
  },
  {
    'name': 'Bicarbonates (mg/l)',
    'value': 83
  },
  {
    'name': 'Fluoride (mg/l)',
    'value': 0.2
  },
  {
    'name': 'Sulphates (mg/l)',
    'value': 12.1
  },
  {
    'name': 'Chlorides (mg/l)',
    'value': 4.2
  },
  {
    'name': 'Nitrates as N (mg/l)',
    'value': 1.53
  },
  {
    'name': 'Nitrites as N (mg/l)',
    'value': 0.002
  },
  {
    'name': 'Ammonium as N (mg/l)',
    'value': 0.069
  },
  {
    'name': 'Phosphates as P (mg/l)',
    'value': 0.079
  },
  {
    'name': 'Manganese (mg/l)',
    'value': 0.09
  },
  {
    'name': 'Total Iron (mg/l)',
    'value': 0.1
  },
  {
    'name': 'Silica (mg/l)',
    'value': 29.3
  },
  {
    'name': 'Mercury (mg/l)',
    'value': 'NR'
  },
  {
    'name': 'E.coli (CFU/100ml)',
    'value': 1
  }
]

const SampleChartMubende = () => {

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

export default SampleChartMubende
