import React from 'react';

const Stat = ({metric, period, count}) => {
  return(
    <div style ={{marginTop:30}}>
      <div> {`${metric} (${period} days)`}</div>
      <h2> {count} </h2>
    </div>
  )
}

export default Stat;
