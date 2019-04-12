

sendSMS
---

```
Url : https://dev.pictureair.com.cn/ai/user/sendSMS
Method : POST 
desc : 向指定的手机号码发送短信,3分钟一次
```

* Request:

|name|required|type|des|default|
| ------------- |:-------------:|:-------------:|:---------------------------------------:|:-------------:|
| phone | yes | String | 区号+手机号码如:8615834104719 | - |
| lg | yes | String | en-US/zh-CN/ja-JP | - |

* Response result:
```
{
    "status": 200,
    "message": "success",
    "result": {}
}
```
