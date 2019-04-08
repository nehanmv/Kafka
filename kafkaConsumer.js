
var kafka = require('kafka-node')
var Consumer = kafka.Consumer;
var client = new kafka.KafkaClient()
consumer = new Consumer(
    client,
    [
        { topic: 'Post', partition: 0 }
    ],
    {
        autoCommit: false
    }
);

consumer.on('message', function (message) {
    console.log(message);
});
consumer.on('error', function (err) 
{
    console.log('ERROR: ' + err.toString());
});

console.log('Hello')