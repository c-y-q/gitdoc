

listCardBags
---

```
Url : https://dev.pictureair.com.cn/ai/card/listCardBags
Method : GET 
desc : 显示用户的所有卡号
```

* head:

|name|required|type|des|
| ------------- |:-------------:|:-------------:|:---------------------------------------:|
| token | yes | String | 标识用户身份 | 

* Response result:
```
{
    "status": 200,
    "message": "success",
    "result": {}
}
```

* Response des:

|response key|type|des|
| ------------- |:-------------:|:-------------:|
| code | String |卡号 |
