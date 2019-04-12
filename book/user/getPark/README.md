

getPark
---

```
Url : https://dev.pictureair.com.cn/ai/user/getPark
Method : POST 
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
    "result": {
        "project": [
            {
                "siteId": "PUCF",
                "name": "PUCF CNY Open Day 2017"
            },
            {
                "siteId": "LLJP",
                "currency": "JYP",
                "name": "LEGOLAND®️ Japan"
            }
        ]
    }
}
```

* Response des:

|response key|type|des|
| ------------- |:-------------:|:-------------:|
| siteId | String |项目编号,乐园编号 |
| currency | String |乐园支持的货币种类 |
| name | String |乐园名字 |
