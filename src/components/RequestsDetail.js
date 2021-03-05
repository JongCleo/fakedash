import React, { Fragment } from 'react';
import Stat from './Stat';
import Graph from './Graph';
import styles from '../modules/Detail.module.css';

const RequestsDetail = ({data}) => {

  return (
    <Fragment>
      <div className = {styles.row}>
        <Stat metric = "Requests" count = {90} period = "30 days" />
      </div>
      <div className = {styles.row}>
        <Graph data = {data} />
      </div>
      <div className = {styles.row}>
        <Fragment>
        <Stat metric = "Views" count = {0} period = "30 days" />
        <Stat metric = "Downloads" count = {0} period = "30 days" />
        </Fragment>
      </div>
    </Fragment>
  )

}

export default RequestsDetail;
