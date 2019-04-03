var express = require('express')
const app = express()
var kafka = require('kafka-node')
var db = require('./db/db')
var Producer = kafka.Producer;
var client = new kafka.KafkaClient()
var KeyedMessage = kafka.KeyedMessage
var producer = new Producer(client)
var km = new KeyedMessage('key', 'message')
var payloads = [
    { topic: 'topic1', messages: 'hi', partition: 0 , attributes: 2 },
    { topic: 'topic2', messages: ['hello', 'world', km] }
];
producer.on('ready', function () {
producer.send(payloads, function (err, data) {
    app.get('/api', (req, res) => {
        res.status(200).send(data)
      });
    console.log(data);
});
});

producer.on('error', function (err) {})



  const PORT = 5000;
  
  app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
  });
console.log('Hello')