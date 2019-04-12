

deleteOrder
---

```
Url : https://dev.pictureair.com.cn/ai/order/deleteOrder
Method : POST 
desc : 删除订单
```

* head:

|name|required|type|des|
| ------------- |:-------------:|:-------------:|:---------------------------------------:|
| token | yes | String | 标识用户身份 | 

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
