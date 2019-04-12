

addCodeToUser
---

```
Url : https://dev.pictureair.com.cn/ai/card/addCodeToUser
Method : POST 
desc : 新绑卡接口
```

* head:

|name|required|type|des|
| ------------- |:-------------:|:-------------:|:---------------------------------------:|
| token | yes | String | 标识用户身份 | 

* Request:

|name|required|type|des|default|
| ------------- |:-------------:|:-------------:|:---------------------------------------:|:-------------:|
| customerId | yes | String | url | - |

* Response result:
```
{
    "status": 200,
    "message": "success",
    "result": {
        "cType": "OneDayPass",
        "code": "pppppcode"
    }
}
```
