

getRegistInfo
---

```
Url : https://dev.pictureair.com.cn/ai/user/getRegistInfo
Method : POST 
desc : 得到注册用户
```

* head:

|name|required|type|des|
| ------------- |:-------------:|:-------------:|:---------------------------------------:|
| token | yes | String | 标识用户身份 | 

* Request:

|name|required|type|des|default|
| ------------- |:-------------:|:-------------:|:---------------------------------------:|:-------------:|
| beginDate | yes | String | 用户名 | - |
| endDate | yes | String | 密码 | - |

* Response result:
```
{
    "status": 200,
    "message": "success",
    "result": {}
}
```
