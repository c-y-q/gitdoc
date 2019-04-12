

createAliPayment
---

```
Url : https://dev.pictureair.com.cn/ai/pay/createAliPayment
Method : POST 
desc : 支付宝支付给app返回签名参数信息
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
    "result": {
        "encodeStr": {
            "appid": "wxb41738d7ee3af024",
            "noncestr": "SQRl4n0mHiEmWKIX",
            "package": "Sign=WXPay",
            "partnerid": "1267007301",
            "prepayid": "wx16154140984530fdff579b764148302287",
            "timestamp": "1526456501",
            "sign": "8F4436D21761F1D009E54B96F49D7122"
        }
    }
}
```
