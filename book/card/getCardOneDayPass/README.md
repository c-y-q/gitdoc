

getCardOneDayPass
---

```
Url : https://dev.pictureair.com.cn/ai/card/getCardOneDayPass
Method : GET 
desc : 查询帐户上总的一日通卡
```

* head:

|name|required|type|des|
| ------------- |:-------------:|:-------------:|:---------------------------------------:|
| token | yes | String | 标识用户身份 | 

* Response result:
```
{
    "status": 200,
    "message": "success",
    "result": {
        "buyedCodes": [
            {
                "code": "PACCP29CXF5WJ9PA",
                "PPCode": "PACCP29CXF5WJ9PA",
                "active": true,
                "cardType": "OneDayPass",
                "expiredOn": "2018-10-08",
                "effectiveOn": "2017-10-07",
                "bindOn": "2017-10-07",
                "isExpired": false,
                "cardBagBCUrl": "/sites/common/cardBagODP.png"
            },
            {
                "code": "PACC927Z46CRK596",
                "PPCode": "PACC927Z46CRK596",
                "active": true,
                "cardType": "OneDayPass",
                "expiredOn": "2018-08-16",
                "effectiveOn": "2018-08-15",
                "bindOn": "2018-08-07",
                "isExpired": true,
                "cardBagBCUrl": "/sites/common/cardBagODP.png"
            }
        ]
    }
}
```
