import React from 'react';
import Card from './components/Card';
import Stat from './components/Stat';
import Graph from './components/Graph';

import styles from './modules/App.module.css';

const App = () => {
  return (
    <div className={styles.container}>
      <Card
        requestLimit = {50}
        footer = "Views and downloads metrics updated every 20 minutes."
      >
        <Stat metric = "Requests" count = {90} period = "30 days" />
        <Graph />
        <div className = {styles.row}>
          <Stat metric = "Views" count = {0} period = "30 days" />
          <Stat metric = "Download" count = {0} period = "30 days" />
        </div>
      </Card>
    </div>
  );
}

export default App;
