

getPPForPreActive
---

```
Url : https://dev.pictureair.com.cn/ai/card/getPPForPreActive
Method : POST 
desc : 激活卡
```

* head:

|name|required|type|des|
| ------------- |:-------------:|:-------------:|:---------------------------------------:|
| token | yes | String | 标识用户身份 | 

* Request:

|name|required|type|des|default|
| ------------- |:-------------:|:-------------:|:---------------------------------------:|:-------------:|
| code | yes | String | 卡号 | - |

* Response result:
```
{
    "status": 200,
    "message": "success",
    "result": {
        "customerIds": [
            {
                "code": "PACCP25VXQNDK4P5",
                "shootOn": "2018-06-01",
                "siteId": "RSSG",
                "cardBagPPUrl": "/sites/RSSG/cardBagPP.png"
            },
            {
                "code": "PACCP25VXQNDK4P5",
                "shootOn": "2018-05-31",
                "siteId": "RSSG",
                "cardBagPPUrl": "/sites/RSSG/cardBagPP.png"
            },
            {
                "code": "PACCB2RCNMGHJCB6",
                "shootOn": "2018-05-21",
                "siteId": "RSSG",
                "cardBagPPUrl": "/sites/RSSG/cardBagPP.png"
            },
            {
                "code": "PACCFCK7AQGK8ZQK",
                "shootOn": "2018-06-04",
                "siteId": "RSSG",
                "cardBagPPUrl": "/sites/RSSG/cardBagPP.png"
            },
            {
                "code": "PACCFCK7AQGK8ZQK",
                "shootOn": "2018-05-31",
                "siteId": "RSSG",
                "cardBagPPUrl": "/sites/RSSG/cardBagPP.png"
            }
        ]
    }
}
```
