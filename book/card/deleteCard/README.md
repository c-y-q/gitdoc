

deleteCard
---

```
Url : https://dev.pictureair.com.cn/ai/card/deleteCard
Method : POST 
desc : 删除用户卡号
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
    "result": {}
}
```
