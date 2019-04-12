

activeCodeToUser
---

```
Url : https://dev.pictureair.com.cn/ai/card/activeCodeToUser
Method : POST 
desc : 激活一日通卡
```

* head:

|name|required|type|des|
| ------------- |:-------------:|:-------------:|:---------------------------------------:|
| token | yes | String | 标识用户身份 | 

* Request:

|name|required|type|des|default|
| ------------- |:-------------:|:-------------:|:---------------------------------------:|:-------------:|
| customerId | yes | String | 必须传 | - |
| cardId | yes | String | 抵用券号或者一日通卡号 | - |
| siteId | yes | String | siteId | - |
| shootOn | no | String | shootOn | - |
| photoIds | no | Array | 携程的优惠券去激活几张照片,使用抵用券的时候必须传 | - |

* Response result:
```
{
    "status": 200,
    "message": "success",
    "result": {}
}
```
