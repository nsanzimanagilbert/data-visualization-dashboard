import React from 'react'
import D3PieChart from './d3PieChart';

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
import { Row } from 'rsuite';
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
      text: 'Bugweri District',
    },
  },
};

const labels =  [
                "Field Temperature", "Dissolved Oxygen", "Turbidity", "Colour (Apparent)",
                "pH", "Electrical Conductivity", "Total disolved solids",
                "Total Hardness as CaCO3", "Calcium hardness as CaCO3",
                "Magnesium hardness as CaCO3", "Calcium", "Magnesium", "Sodium",
                "Potassium", "Total Alkalinity", "Bicarbonates", "Fluoride",
                "Sulphates", "Chlorides", "Nitrates as N", "Nitrites as N",
                "Ammonium as N", "Phosphates as P", "Silica", "Mercury",
                "Lead", "E.coli"
            ];

export const data = {
  labels,
  datasets: [
    {
      label: 'Makuutu subcounty borehole Results',
      data: [
                27, 5.1, 1.76, 0.5, 6.5, 359, 251, 160, 126, 34, 50, 8, 15, 5.2,
                152, 185, 0.09, 16.1, 2.8, 6.48, 0.0015, 0.006, 0.112, 53.2, 0.001,
                0.015, 1
            ],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Busiimo Pri School Borehole Results',
      data: [
                28, 5.1, 1.95, 0.5, 6.4, 175, 123, 50, 30, 20, 12, 5, 16, 5.3, 50,
                61, 0.09, 7.4, 7.1, 6.92, 0.0015, 0.004, 0.107, 51.8, 0.001, 0.015,
                1
            ],
      backgroundColor: 'rgba(105, 235, 53, 0.5)',
    },
  ],
};

/////Parameters for the single Polar Chart

const singleName = 'Makuutu subcounty borehole Results';
const singleDataSet = [
                27, 5.1, 1.76, 0.5, 6.5, 359, 251, 160, 126, 34, 50, 8, 15, 5.2,
                152, 185, 0.09, 16.1, 2.8, 6.48, 0.0015, 0.006, 0.112, 53.2, 0.001,
                0.015, 1
            ];
const singleLebels =  [
                "Field Temperature", "Dissolved Oxygen", "Turbidity", "Colour (Apparent)",
                "pH", "Electrical Conductivity", "Total disolved solids",
                "Total Hardness as CaCO3", "Calcium hardness as CaCO3",
                "Magnesium hardness as CaCO3", "Calcium", "Magnesium", "Sodium",
                "Potassium", "Total Alkalinity", "Bicarbonates", "Fluoride",
                "Sulphates", "Chlorides", "Nitrates as N", "Nitrites as N",
                "Ammonium as N", "Phosphates as P", "Silica", "Mercury",
                "Lead", "E.coli"
            ];

/////Parameters for the single Polar Chart End

const pieChartDataSet = [
  {
    'name': 'Field Temperature (oC)',
    'value': 27
  },
  {
    'name': 'Dissolved Oxygen (mg/L)',
    'value': 5.1
  },
  {
    'name': 'Turbidity (NTU)',
    'value': 1.76
  },
  {
    'name': 'Colour (Apparent) (PtCo)',
    'value': 0.5
  },
  {
    'name': 'pH (pH units)',
    'value': 6.5
  },
  {
    'name': 'Electrical Conductivity (µS/cm)',
    'value': 359
  },
  {
    'name': 'Total disolved solids (mg/l)',
    'value': 251
  },
  {
    'name': 'Total Hardness as CaCO3 (mg/l)',
    'value': 160
  },
  {
    'name': 'Calcium hardness as CaCO3 (mg/l)',
    'value': 126
  },
  {
    'name': 'Magnesium hardness as CaCO3 (mg/l)',
    'value': 34
  },
  {
    'name': 'Calcium (mg/l)',
    'value': 50
  },
  {
    'name': 'Magnesium hardness as CaCO3 (mg/l)',
    'value': 8
  },
  {
    'name': 'Sodium (mg/l)',
    'value': 15
  },
  {
    'name': 'Potassium (mg/l)',
    'value': 5.2
  },
  {
    'name': 'Total Alkalinity (mg/l)',
    'value': 152
  },
  {
    'name': 'Bicarbonates (mg/l)',
    'value': 185
  },
  {
    'name': 'Fluoride (mg/l)',
    'value': 0.09
  },
  {
    'name': 'Sulphates (mg/l)',
    'value': 16.1
  },
  {
    'name': 'Chlorides (mg/l)',
    'value': 2.8
  },
  {
    'name': 'Nitrates as N (mg/l)',
    'value': 6.48
  },
  {
    'name': 'Nitrites as N (mg/l)',
    'value': 0.0015
  },
  {
    'name': 'Ammonium as N (mg/l)',
    'value': 0.006
  },
  {
    'name': 'Phosphates as P (mg/l)',
    'value': 0.112
  },
  {
    'name': 'Silica (mg/l)',
    'value': 53.2
  },
  {
    'name': 'Mercury (mg/l)',
    'value': 0.001
  },
  {
    'name': 'Lead (mg/l)',
    'value': 0.015
  },
  {
    'name': 'E.coli (CFU/100ml)',
    'value': 1
  }
]

const SampleChartBugweri = () => {

  return ( <>
    <Bar options={options} data={data} />
    <Line options={options} data={data} />
    <SampleLineChart dataset={pieChartDataSet}></SampleLineChart>
    <D3PieChart dataset={pieChartDataSet} />
    <D3RadarChart options={options} dataset={singleDataSet} name={singleName } lebels={singleLebels}></D3RadarChart>
    </>

  )
}

export default SampleChartBugweri
