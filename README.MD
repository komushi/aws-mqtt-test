## 1. to get your iot endpoint
```
$ aws iot describe-endpoint
```

## 2. create/edit config/aws_credentials.json
```
 {
    "accessKeyId": "AKI234SYAT134243453",
    "secretAccessKey": "fYUzfhMiIyD-dfhdkfdgfdgdfgdfgfdgfd",
    "region": "ap-northeast-1"
}
```

## 3. Run the client
```
$ node index.js
```

## 4. Run the publisher
```
$ node test.js
```