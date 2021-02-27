import React from 'react';
import Stat from './Stat';
import Graph from './Graph';
import './Card.css';
//this.props.

//icon
// headername
// text for top right
// array of components generic blob
// footer

const Card = () => {
  return(
    <div className = "ui card card-style">
      <div className = "content">
        <div className = "right floated" > 50/50 requests in the past hour </div>
        <div className = "header">
          <i class="chart area icon"></i>
          Requests and Usage
        </div>        
        <Stat metric = "Requests" count = {90} period = {30} />
        <Graph />
      </div>
    </div>
  )
}

export default Card;
