

getPark
---

```
Url : https://dev.pictureair.com.cn/ai/bakuser/getPark
Method : POST 
desc : 获取项目列表
```

* Request:

|name|required|type|des|default|
| ------------- |:-------------:|:-------------:|:---------------------------------------:|:-------------:|
| limit | no | String | 每页显示几条，如果不传，默认10条 | - |
| page | no | String | 当前是第几页 | - |

* Response result:
```
{
    "status": 200,
    "message": "success",
    "result": {
        "parkCount": 309,
        "totalPage": 155,
        "project": [
            {
                "name": "666",
                "siteId": "test",
                "parkId": "test",
                "link": "test",
                "appImg": "https://dev.pictureair.com.cn/oss/sites/test/background.png",
                "orderImg": "https://dev.pictureair.com.cn/oss/sites/test/orderCard.png",
                "cardImg": "https://dev.pictureair.com.cn/oss/sites/test/cardBagPP.png",
                "webImg": "https://dev.pictureair.com.cn/oss/sites/test/background.png",
                "webPhoneImg": "https://dev.pictureair.com.cn/oss/sites/test/iphoneTitle.jpg",
                "_id": "5bfdffd9e23fc9048ec937a8",
                "orcCard": false,
                "faceCard": false,
                "currency": "HKD",
                "beginImgShow": "notSupport",
                "parkCardCode": "testC9048EC937A7"
            },
            {
                "name": "666",
                "siteId": "test",
                "parkId": "test",
                "link": "test",
                "appImg": "https://dev.pictureair.com.cn/oss/sites/test/background.png",
                "orderImg": "https://dev.pictureair.com.cn/oss/sites/test/orderCard.png",
                "cardImg": "https://dev.pictureair.com.cn/oss/sites/test/cardBagPP.png",
                "webImg": "https://dev.pictureair.com.cn/oss/sites/test/background.png",
                "webPhoneImg": "https://dev.pictureair.com.cn/oss/sites/test/iphoneTitle.jpg",
                "_id": "5bfdffd4e23fc9048ec937a6",
                "orcCard": false,
                "faceCard": false,
                "currency": "HKD",
                "beginImgShow": "notSupport",
                "parkCardCode": "testC9048EC937A5"
            }
        ]
    }
}
```
