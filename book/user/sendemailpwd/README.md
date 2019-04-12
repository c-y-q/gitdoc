

sendemailpwd
---

```
Url : https://dev.pictureair.com.cn/ai/user/sendemailpwd
Method : POST 
desc : 忘记密码了，发送邮件
```

* Request:

|name|required|type|des|default|
| ------------- |:-------------:|:-------------:|:---------------------------------------:|:-------------:|
| username | yes | String | 邮箱 | - |
| lg | no | String | en-US,zh-CN,ja-Pan,默认en-US | - |

* Response result:
```
{
    "status": 200,
    "message": "success",
    "result": {}
}
```
