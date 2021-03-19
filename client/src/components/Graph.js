import React from 'react';
import {LineChart, Line, YAxis, XAxis, Tooltip, CartesianGrid} from 'recharts';


const Graph = ({data}) => {
  return(
    <LineChart width={600} height={200} data={data}>
      <Line type="monotone" dataKey="num_requests" stroke="#a9a9a9" />
      <YAxis tickCount = {4}/>
      <XAxis tick={false}/>
      <Tooltip
        labelFormatter = {() => ''}
        formatter = {(value, label, props) => [props.payload.name]}
      />
      <CartesianGrid vertical={false}/>
    </LineChart>
  )
}

export default Graph;
