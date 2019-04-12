

quickLogin
---

```
Url : https://dev.pictureair.com.cn/ai/user/quickLogin
Method : POST 
desc : 向指定的手机号码发送短信
```

* Request:

|name|required|type|des|default|
| ------------- |:-------------:|:-------------:|:---------------------------------------:|:-------------:|
| username | yes | String | 手机号码 | - |
| vcode | yes | String | 验证码 | - |
| areaCode | yes | String | 区号,如86 | - |

* Response result:
```
{
    "status": 200,
    "message": "success",
    "result": {
        "token": "2bd415d0c0e3a096d64e26f"
    }
}
```

* Response des:

|response key|type|des|
| ------------- |:-------------:|:-------------:|
| token | String |认证标志 |
