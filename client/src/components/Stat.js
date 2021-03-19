import React from 'react';
import styles from '../modules/Stat.module.css';

const Stat = ({metric, period, count}) => {
  return(
    <div className = {styles.statStyle} >
      <div> {`${metric} (${period})`}</div>
      <h2> {count} </h2>
    </div>
  )
}

export default Stat;
