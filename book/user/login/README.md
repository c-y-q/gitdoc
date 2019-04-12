

login
---

```
Url : https://dev.pictureair.com.cn/ai/user/login
Method : POST 
desc : 用户登录
```

* Request:

|name|required|type|des|default|
| ------------- |:-------------:|:-------------:|:---------------------------------------:|:-------------:|
| username | yes | String | 用户名 | - |
| password | yes | String | 密码 | - |

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
