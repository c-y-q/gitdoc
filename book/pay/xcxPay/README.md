

xcxPay
---

```
Url : https://dev.pictureair.com.cn/ai/pay/xcxPay
Method : POST 
desc : 小程序微信支付请求
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
        "paysign2": {
            "noncestr": "SQRl4n0mHiEmWKIX",
            "package": "wx16154140984530fdff579b764148302287",
            "timestamp": "1526456501",
            "signType": "MD5",
            "sign": "8F4436D21761F1D009E54B96F49D7122"
        }
    }
}
```
