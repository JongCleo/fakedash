import React from 'react';
import {LineChart, Line, YAxis, Tooltip} from 'recharts';


const Graph = ({data}) => {

  return(
    <LineChart width={600} height={200} data={data}>
      <Line type="monotone" dataKey="num_requests" stroke="#8884d8" />
      <YAxis />
      <Tooltip formatter = {(a,b,c) => { return(b.payload) }}/>
    </LineChart>
  )
}

export default Graph;
