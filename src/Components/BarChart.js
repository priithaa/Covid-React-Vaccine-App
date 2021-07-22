import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import useFetch from "../Hooks/useFetch.js";
const BarChart = () => {

   

      const {data, error, loadingM} = useFetch("https://api.covid19india.org/data.json");
      
      if(loadingM===false)
      {
       console.log(data)
        var firstdoses=0;
        var seconddoses=0;
        // var firstdoses45=0;
        // var seconddoses45=0;
        // var firstdoses18=0;
        // var seconddoses18=0;

        for(const mp in data.tested)
        {
          const {
            firstdoseadministered,
            seconddoseadministered,
            over60years1stdose,
            over60years2nddose,
            over45years1stdose,
            over45years2nddose

          }  = data.tested[mp]

            if(firstdoseadministered.length!==0)
               firstdoses+=parseInt(firstdoseadministered);
            if(seconddoseadministered.length!==0)
               seconddoses+=parseInt(seconddoseadministered);

        }
        // console.log(firstdoses60);
        // console.log(seconddoses60);
      }

       const chartData = {
        labels: ["First Doses","Second Doses"],
        datasets: [{
          label: 'Total Doses',
          data: [firstdoses,seconddoses],
          backgroundColor: ["#ff9999","rgb(116,212,204)"]
        }]
      }

      const Rdata=[
        {name:"First Doses", value:{firstdoses}},
        {name:"First Doses", value:{seconddoses}}
      ]
    return ( 
        <div className="chart-1">
            <Doughnut data={chartData}
            height={100}
            width={100}
            options={{ title:
            {
              display: true,
              text: "Vaccination Distrubution by doses in India"
            
            } }}
            />
            {/* <PieChart width={100} height={100}>
            <Pie
              dataKey="value"
              isAnimationActive={false}
              data={Rdata}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            />
            <Pie dataKey="value" data={Rdata} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
            <Tooltip />
          </PieChart> */}
            {/* <h1>Vaccination Distribution by doses</h1> */}
            
        </div>
     );
}
 
export default BarChart;