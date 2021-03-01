import React, {Fragment} from 'react';
import Card from './components/Card';
import Stat from './components/Stat';
import Graph from './components/Graph';
import styles from './modules/App.module.css';
import moment from 'moment';

const App = () => {

  const generateData = () => {

    var data_arr = [];

    for (var i = 0; i < 168; i++ ) {
      const requests = Math.floor(Math.random() * 10);
      const name_str = requests + " requests at " + moment().subtract(i, "hours").format('hA MMMM Do')
      console.log(name_str )
      data_arr.push({
        name: name_str,
        num_requests: requests
      })
    }

    return data_arr

  }
  generateData()
  return (
    <div className={styles.container}>
      <Card
        requestLimit = {50}
        footer = "Views and downloads metrics updated every 20 minutes."
      >
        <Stat metric = "Requests" count = {90} period = "30 days" />
        <Graph data = {generateData()} />
        <Fragment>
          <Stat metric = "Views" count = {0} period = "30 days" />
          <Stat metric = "Downloads" count = {0} period = "30 days" />
        </Fragment>
      </Card>
    </div>
  );
}

export default App;
