const AWS = require('aws-sdk');
const AWSMqtt = require('aws-mqtt');
const WebSocket = require('ws');

AWS.config.loadFromPath('./config/aws_credentials.json');

const publish = AWSMqtt.publisher({
  WebSocket: WebSocket, 
  region: AWS.config.region,
  credentials: AWS.config.credentials,
  endpoint: 'a2sdpyfw66qrvw.iot.ap-northeast-1.amazonaws.com' 
});


publish('/myTopic', '1')
	.then(function(log, error){
		console.log(log);
		console.log(error);

	});