import React, {useEffect, useState} from 'react';
import Card from './components/Card';
import RequestsDetail from './components/RequestsDetail';
import KeyDetail from './components/KeyDetail';
import styles from './modules/App.module.css';
import { BsGraphUp } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';
import moment from 'moment';
import axios from 'axios'

const App = () => {

  const [graphData, setGraphData] = useState([]);

  const fetchGraphData = async () => {

    const res = await axios.get('http://localhost:3001/requests');
    console.log(res)
    setGraphData(res.data);
    // const data_arr = []
    // for (var i = 0; i < 168; i++ ) {
    //   const requests = Math.floor(Math.random() * 10);
    //   const name_str = requests + " requests at " + moment().subtract(i, "hours").format('hA MMMM Do')
    //   data_arr.push({
    //     name: name_str,
    //     num_requests: requests
    //   })
    // }
    // setGraphData(data_arr)
  }

  useEffect(()=>{
    fetchGraphData();
  },[])


  return (
    <div className={styles.container}>
      <Card
        headerText = {"Requests and Usage"}
        headerIcon = {<BsGraphUp />}
        cornerText = {"50/50 requests remaining this hour"}
        middle = { <RequestsDetail data = {graphData}/>}
        footerText = {<p> Note: Views and downloads metrics updated every 20 minutes. </p>}
      />

      <Card
        headerText = {"Keys"}
        headerIcon = {<FiKey />}
        middle = {<KeyDetail />}
        footerText = {
          <p style={{margin:0}}> Note: both your <code>Access Key</code> and <code>Secret Key</code> must remain confidential</p>
        }
      />
    </div>
  );
}

export default App;
