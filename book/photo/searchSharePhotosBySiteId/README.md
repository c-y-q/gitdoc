

searchSharePhotosBySiteId
---

```
Url : https://dev.pictureair.com.cn/ai/photo/searchSharePhotosBySiteId
Method : POST 
desc : 共享照片号码牌搜索
```

* Request:

|name|required|type|des|default|
| ------------- |:-------------:|:-------------:|:---------------------------------------:|:-------------:|
| siteId | yes | String | park的siteId | - |
| keyword | no | String | 号码牌的关键字 | - |

* Response result:
```
{
    "status": 200,
    "message": "success",
    "result": {
        "totalPage": 0,
        "pageNum": 1,
        "photos": [
            {
                "_id": "5b1a1c180e97ba0049ad29d3",
                "siteId": "RSSG",
                "photoId": "RSSG1528437784919_73",
                "photoCode": "RSSG1528437784919_73",
                "name": "al2_al2-6721-test-135208-50113628.JPG",
                "shootOn": "2018.06.08",
                "shootDate": "2018.06.08",
                "isFree": true,
                "createdOn": "2018.06.11",
                "extractOn": "2018.06.08",
                "downloadCount": "",
                "comments": [],
                "visitedCount": "",
                "disabled": false,
                "likeCount": 0,
                "shareInfo": [],
                "createdBy": "system",
                "mobileEditActive": true,
                "modifiedOn": "2018.06.08",
                "allowDownload": true,
                "editCount": 0,
                "isPaid": true,
                "mimeType": "jpg",
                "thumbnail": {
                    "x1024": {
                        "width": 1024,
                        "height": 1820,
                        "url": "oss/RSSG/20180608/photos/tn/7c635f43004df317fb52d0ce5a242080.jpg"
                    },
                    "w1024": {
                        "width": 1024,
                        "height": 1820,
                        "url": "oss/RSSG/20180608/photos/wm/fbed5ac4af4129e4c342e3518bc30d73.jpg"
                    },
                    "x512": {
                        "width": 512,
                        "height": 910,
                        "url": "oss/RSSG/20180608/photos/tn/7c635f43004df317fb52d0ce5a242080.jpg"
                    },
                    "x128": {
                        "width": 128,
                        "height": 227,
                        "url": "oss/RSSG/20180608/photos/tn/7c635f43004df317fb52d0ce5a242080.jpg"
                    }
                },
                "originalInfo": {
                    "url": "oss/RSSG/20180608/photos/hd/38a3f95da249927f8b74738e5b0e8e3b.jpg",
                    "height": 4608,
                    "width": 2592,
                    "originalName": "al2_al2-6721-test-135208-50113628.JPG"
                },
                "customerIds": [
                    {
                        "code": "PACCB2HHVJUSJCB5"
                    }
                ],
                "coverHeaderImage": {
                    "xs": "/sites/RSSG/BG_H.jpg",
                    "lg": "/sites/RSSG/BG_V.jpg"
                },
                "logoUrl": "/sites/RSSG/logo.png",
                "pageUrl": "https://dev.pictureair.com.cn/",
                "parkName": "PictureAir Office",
                "words": [
                    "71880",
                    "表⊙+100%-合酒尺寸其全展园扫到手机口收藏下载土按图搜索口",
                    " DS",
                    " pictureAIr"
                ]
            }
        ]
    }
}
```
