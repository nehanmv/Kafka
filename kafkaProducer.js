var express = require('express')
const app = express()
var kafka = require('kafka-node')
var Producer = kafka.Producer;
var client = new kafka.KafkaClient("localhost:2181")
var producer = new Producer(client)

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.post('/sendMsg',function(req,res){
  var sentMessage = JSON.stringify(req.body.message);
  payloads = [
      { topic: req.body.topic, messages:sentMessage , partition: 0 }
  ];
  producer.send(payloads, function (err, data) {
          res.json(data);
  });
  
})

app.listen(5001,function(){
  console.log('Kafka producer running at 5001')
})

// var payloads = [
//   { topic: 'topic1', messages: 'hi', partition: 0, attributes: 2 },
//   { topic: 'topic2', messages: ['hello', 'world', km] }
// ];
// console.log(payloads)
// producer.on('ready', function () {
//   producer.send(payloads, function (err, data) {
//     console.log(data, "$$$$$$$$$$$$$$$$$$$")
//     app.get('/api', (req, res) => {
//       res.status(200).send(data)
//     });
//     console.log(data);
//   });
// });

// producer.on('error', function (err) { })



// const PORT = 5000;

// app.listen(PORT, () => {
//   console.log(`server running on port ${PORT}`)
// });
// console.log('Hello')