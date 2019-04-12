

activeCardToUser
---

```
Url : https://dev.pictureair.com.cn/ai/card/activeCardToUser
Method : POST 
desc : 激活一日通卡
```

* Request:

|name|required|type|des|default|
| ------------- |:-------------:|:-------------:|:---------------------------------------:|:-------------:|
| userId | yes | String | userId | - |
| customerId | yes | String | url | - |
| cardId | yes | String | cardId | - |
| siteId | yes | String | siteId | - |
| shootOn | yes | String | shootOn | - |

* Response result:
```
{
    "status": 200,
    "message": "success",
    "result": {}
}
```
