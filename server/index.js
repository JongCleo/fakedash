const express = require('express')
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');
var moment = require('moment');


const app = express()
app.use(bodyParser.json());
app.use(cors());

const initRequests = () => {

  var dataObj = {};

  for (var i = 178; i >= 0; i-- ) {

    const id = moment().subtract(i, "hours").format('H_D_M')
    //10_5_3
    dataObj[id] = {
      num_requests: 0,
      timestamp: moment().subtract(i, "hours").format('hA MMMM Do')
    }
  }

  return dataObj

}

const port = 3001
const fileNames = {}
const requestData = initRequests()

app.get('/requests', (req, res) => {
  //format as an array
  //inject the name field
  response_arr = Object.values(requestData).map((item) =>{
    return {
      num_requests: item.num_requests,
      name: item.num_requests + " requests at " + item.timestamp
    }
  })

  res.send(response_arr)
})

app.get('/files', (req, res) => {
  res.send(fileNames)
})

app.post('/files', (req, res) => {
  const id = randomBytes(4).toString('hex');
  const { filename } = req.body;

  fileNames[id] = {
    id, filename
  }
  //increment the requests
  const lookupValue = moment().format('H_D_M')
  requestData[lookupValue].num_requests += 1

  res.status(201).send(fileNames[id]);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
