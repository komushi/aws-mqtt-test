const AWS = require('aws-sdk');
const AWSMqtt = require('aws-mqtt');
const WebSocket = require('ws');

AWS.config.loadFromPath('./config/aws_credentials.json');

console.log(AWS.config.credentials);

const client = AWSMqtt.connect({
  WebSocket: WebSocket, 
  region: AWS.config.region,
  credentials: AWS.config.credentials,
  endpoint: 'a2sdpyfw66qrvw.iot.ap-northeast-1.amazonaws.com', // NOTE: get this value with `aws iot describe-endpoint`
  clientId: 'mqtt-client-' + (Math.floor((Math.random() * 100000) + 1)), // clientId to register with MQTT broker. Need to be unique per client
});

client.on('connect', () => {
  client.subscribe('/myTopic')
});
client.on('message', (topic, message) => {
  console.log(topic, message.toString('utf-8'));
  
});
client.on('close', () => {
  // ...
});
client.on('offline', () => {
  // ...
});