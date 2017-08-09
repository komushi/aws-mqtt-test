const AWS = require('aws-sdk');
const AWSMqtt = require('aws-mqtt');
const WebSocket = require('ws');

AWS.config.credentials = new AWS.SharedIniFileCredentials({profile: 'default'});
AWS.config.region = 'ap-northeast-1';

const client = AWSMqtt.connect({
  WebSocket: WebSocket, 
  region: AWS.config.region,
  credentials: AWS.config.credentials,
  endpoint: 'a2sdpyfw66qrvw.iot.ap-northeast-1.amazonaws.com', // NOTE: get this value with `aws iot describe-endpoint`
  clientId: 'mqtt-client-' + (Math.floor((Math.random() * 100000) + 1)), // clientId to register with MQTT broker. Need to be unique per client
});

client.on('connect', (packet) => {
  // console.log('connected', packet); 
  client.subscribe('topic001');
});
client.on('message', (topic, message) => {
  console.log(topic, message.toString('utf-8'));
});
