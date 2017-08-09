## 1. config your shared credentials file
```
$ aws configure
AWS Access Key ID [None]: <YOUR_ACCESS_KEY_ID>
AWS Secret Access Key [None]: <YOUR_SECRET_ACCESS_KEY>
Default region name [None]: <REGION>
Default output format [None]: json
```

* Linux users: ~/.aws/credentials
* Windows users: C:\Users\USER_NAME\.aws\credentials

## 2. get your iot endpoint and edit receive.js and send.js
```
$ aws iot describe-endpoint
```

## 3. Run the client
```
$ node receive.js
```

## 4. Run the publisher
```
$ node send.js
```

## 5. Reference

* http://dev.classmethod.jp/cloud/aws/aws-iot-mqtt-over-websocket/
* http://dev.classmethod.jp/cloud/aws/aws-iot-mqtt-over-websocket-cognito-identity-unatuh/