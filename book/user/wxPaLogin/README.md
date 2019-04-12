

wxPaLogin
---

```
Url : https://dev.pictureair.com.cn/ai/user/wxPaLogin
Method : POST 
desc : 微信小程序登录
```

* Request:

|name|required|type|des|default|
| ------------- |:-------------:|:-------------:|:---------------------------------------:|:-------------:|
| code | yes | String | 用户登录凭证（有效期五分钟） | - |
| encryptedData | yes | String | 小程序签名数据 | - |
| iv | yes | String | iv | - |

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
