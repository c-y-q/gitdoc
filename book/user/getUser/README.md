

getUser
---

```
Url : https://dev.pictureair.com.cn/ai/user/getUser
Method : POST 
desc : 获取用户信息
```

* head:

|name|required|type|des|
| ------------- |:-------------:|:-------------:|:---------------------------------------:|
| token | yes | String | 用户认证id | 

* Response result:
```
{
    "status": 200,
    "message": "success",
    "result": {
        "user": {
            "name": "我是说",
            "userName": "eeel@111.com",
            "userType": "user",
            "mobile": "",
            "email": "eeel@111.com",
            "country": "",
            "gender": 0,
            "birthday": "1970-02-01T00:00:00.000Z",
            "address": [],
            "coverHeaderImage": "",
            "favoriteLocationIds": [],
            "qq": "",
            "userPP": "PWUPF964FFB46DAE",
            "hiddenPPList": [],
            "favoritePhotos": [],
            "likePhotos": [],
            "emailVerified": false,
            "disabled": false,
            "coupons": [],
            "disablereason": "",
            "customerIdsLen": 4,
            "lgcode": "en-US",
            "customerIds": [
                {
                    "bindOn": "2018-05-21T03:18:52.402Z",
                    "code": "PWUPF964FFB46DAE"
                },
                {
                    "bindOn": "2018-05-21T09:15:25.899Z",
                    "code": "PACCB2RCNMGHJCB6"
                },
                {
                    "bindOn": "2018-05-24T06:13:50.765Z",
                    "code": "PACC82P9AGHKJ525"
                },
                {
                    "bindOn": "2018-05-24T08:19:32.541Z",
                    "code": "PACCFCUUSPRPU2W5"
                }
            ],
            "photosNum": 108,
            "userLink": "https://web.pictureair.com/?src=usercard&vid=PWUPF964FFB46DAE"
        }
    }
}
```
