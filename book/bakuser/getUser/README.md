

getUser
---

```
Url : https://dev.pictureair.com.cn/ai/bakuser/getUser
Method : POST 
desc : 注销用户
```

* head:

|name|required|type|des|
| ------------- |:-------------:|:-------------:|:---------------------------------------:|
| token | yes | String | 用户认证id | 

* Request:

|name|required|type|des|default|
| ------------- |:-------------:|:-------------:|:---------------------------------------:|:-------------:|
| limit | no | String | 每页显示几条，如果不传，默认10条 | - |
| page | no | String | 当前是第几页 | - |

* Response result:
```
{
    "status": 200,
    "message": "success",
    "result": {
        "userList": [
            {
                "name": "zhaoyi@pictureworks.biz",
                "roleIds": [
                    "RSSG",
                    "OPSH",
                    "FISH"
                ],
                "_id": "5b235796d698bb16e2801db2",
                "userName": "zhaoyi@pictureworks.biz",
                "role": "2"
            },
            {
                "name": "ye3@163.con",
                "roleIds": [
                    "RSSG",
                    "OPSH",
                    "FISH"
                ],
                "_id": "5b23593cd698bb16e2801db3",
                "userName": "ye3@163.con",
                "role": "2"
            }
        ],
        "userCount": 121,
        "totalPage": 13
    }
}
```
