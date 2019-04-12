

wxH5Pay
---

```
Url : https://dev.pictureair.com.cn/ai/pay/wxH5Pay
Method : POST 
desc : 支付宝支付回调
```

* head:

|name|required|type|des|
| ------------- |:-------------:|:-------------:|:---------------------------------------:|
| token | yes | String | 用户认证id | 

* Request:

|name|required|type|des|default|
| ------------- |:-------------:|:-------------:|:---------------------------------------:|:-------------:|
| orderCode | yes | String | 订单号 | - |

* Response result:
```
{
    "status": 200,
    "message": "success",
    "result": {}
}
```
