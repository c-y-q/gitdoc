

rptlogin
---

```
Url : https://dev.pictureair.com.cn/ai/user/rptlogin
Method : POST 
desc : 用户登录
```

* Request:

|name|required|type|des|default|
| ------------- |:-------------:|:-------------:|:---------------------------------------:|:-------------:|
| account | yes | String | 用户名 | - |
| password | yes | String | 密码 | - |

* Response result:
```
{
    "status": 200,
    "message": "success",
    "result": {
        "token": "2bd415d0c0e3a096d64e26f",
        "role": [
            "boss",
            "monitor"
        ]
    }
}
```

* Response des:

|response key|type|des|
| ------------- |:-------------:|:-------------:|
| token | String |认证标志 |
| role | String |0为超级权限 |
