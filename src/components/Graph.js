import React from 'react';
import {LineChart, Line} from 'recharts';


const Graph = () => {

  const data  = [
    {
      name: "1 am at Feb 28",
      num_requests: 0
    },
    {
      name: "2 am at Feb 28",
      num_requests: 0
    },
    {
      name: "3 am at Feb 28",
      num_requests: 0
    },
    {
      name: "4 am at Feb 28",
      num_requests: 0
    },
    {
      name: "5 am at Feb 28",
      num_requests: 0
    },
  ]
  return(
    <LineChart width={400} height={200} data={data}>
      <Line type="monotone" dataKey="num_requests" stroke="#8884d8" />
    </LineChart>
  )
}


export default Graph;
