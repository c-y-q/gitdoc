

contactUs
---

```
Url : https://dev.pictureair.com.cn/ai/user/contactUs
Method : POST 
desc : 联系我们
```

* Request:

|name|required|type|des|default|
| ------------- |:-------------:|:-------------:|:---------------------------------------:|:-------------:|
| name | yes | String | 用户名 | - |
| EmailAddress | yes | String | 邮箱地址 | - |
| parkName | yes | String | 公园名称 | - |
| feedback | yes | String | 问题反馈 | - |
| lg | no | String | en-US,zh-CN,ja-Pan,默认,zh-CN | - |
| visitDate | no | String | 访问日期 | - |
| pictureAirCode | no | String | 卡号 | - |
| orderID | no | String | 订单号 | - |
| operatingSystem | no | String | 操作系统 | - |

* Response result:
```
{
    "status": 200,
    "message": "success",
    "result": {}
}
```
