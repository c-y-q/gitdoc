

createOrder
---

```
Url : https://dev.pictureair.com.cn/ai/order/createOrder
Method : POST 
desc : 创建支付订单
```

* head:

|name|required|type|des|
| ------------- |:-------------:|:-------------:|:---------------------------------------:|
| token | yes | String | 标识用户身份 | 

* Request:

|name|required|type|des|default|
| ------------- |:-------------:|:-------------:|:---------------------------------------:|:-------------:|
| type | yes | String | DigitalPhoto/OneDayPass/DigitalVideo, 如果是买卡，OneDayPass, 如果是买照片，DigitalPhoto,如果是买照片,DigitalVideo | - |
| PPCode | no | String | code卡号 | - |
| date | yes | String | YYYY.MM.DD, 如果是买卡，卡的bindOn, 如果是买照片，照片的shootOn | - |
| proId | no | String | 如果是买卡，不传； 如果是买照片，照片的_id | - |
| count | yes | String | 如果是买卡，传卡的数量； 如果是买照片，照片的数量 | - |
| siteId | yes | String | 卡的siteId | - |
| terminal | yes | String | 终端，01 App，02 Web,03 小程序 | - |
| sys | yes | String | 手机系统， 01 ios， 02 andriod, 03 Web,05 小程序 | - |

* Response result:
```
{
    "status": 200,
    "message": "success",
    "result": {
        "transCode": "481d799d1819b7254bd4265555370e9f1e00",
        "orderCode": "0101170808449775",
        "currency": "SGD",
        "price": "88",
        "CNYCharge": "438",
        "expiredOn": "1502173481012",
        "parkName": "snow city",
        "productList": {
            "virtual": [
                {
                    "count": 1,
                    "type": 0,
                    "PPCode": "PA00102988"
                }
            ],
            "entity": []
        }
    }
}
```

* Response des:

|response key|type|des|
| ------------- |:-------------:|:-------------:|
| transCode | String |对外显示的订单号 |
| orderCode | String |对内使用的订单号 |
| currency | String |货币种类 |
| price | Number |订单总价 |
| CNYCharge | Number |订单人民币总价 |
| expiredOn | Number |订单失效时间毫秒数 30 * 60 * 1000 |
| parkName | String |siteId 对应的 parkName |
