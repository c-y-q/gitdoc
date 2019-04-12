module.exports = {
    listPhotos: {
        method: 'POST',
        desc: "获取照片列表",
        headers: {
            // token: [0, 'String', '用户认证id']
        },
        params: {
            siteId: [1, 'String', 'siteId'],
            shootDate: [0, 'String', '时间的字符串格式，YYYY/MM/DD,共享不传，个人传'],
            code: [0, 'String', '共享不传，个人传。'],
            isPaid: [0, 'String', '-1: 全部, 0: 未购买, 1: 已购买, 默认-1'],
            limit: [0, 'Number', '显示条数,默认50'],
            useLimit: [0, 'boolean', '是否使用分页,默认传true'],
            pageNum: [0, 'Number', '页码,默认0,如果useLimit为true,则必传']
        },
        response: {
            "totalPage": 8,
            "pageNum": 4,
            "photos": [{
                "_id": "5aa89ec4581b9c004f0e934d",
                "siteId": "RSSG",
                "locationId": "al1",
                "shootOn": "2018-03-14T04:03:05.000Z",
                "isFree": false,
                "isPaid": true,
                "parkName": "River Safari",
                "mimeType": "jpg",
                "wMP4": {},
                "thumbnail": {
                    "x512": {
                        "width": 512,
                        "height": 17328,
                        "url": "media/2dc40ef353a7ee67734aef14fb42cb03f34e11ad60b4bba83147d235f551f491681525849d4994cb8c02d4976dd64c9fd192ad66b7d8d357761a9a1b6ad69c2e1478261d7c3e32fc474cd07dfafbfcb2"
                    },
                    "x1024": {
                        "width": 1024,
                        "height": 8664,
                        "url": "media/2dc40ef353a7ee67734aef14fb42cb036def052badd0126eeff675a0a57db182fa6af607c2ea9d98c2679e8b083ae1ca3dd5401d5ccadb1443a38793291fc655981db5b0130da9c933fcbda66fc2f796"
                    }
                },
                "originalInfo": {
                    "url": "media/2dc40ef353a7ee67734aef14fb42cb03d30d08c816109c4390b0cdb3bcc94ed7b2dd5989499bac4ba2ebb48568ac9adb31a6c4506a8411ee05715b1885f7b19d49cac68815b6b47600c990fcad2b0bf3",
                    "width": 3648,
                    "height": 2432,
                    "originalName": "al1_al1-6721-test-114404-43139993.JPG"
                }
            }]
        },
        resDesc: {

        }
    },
    predown: {
        method: 'POST',
        desc: '一键下载准备photoIDs',
        headers: {
            token: [1, 'String', "用户认证id"]
        },
        params: {
            photoIds: [1, 'String', "要下载的photo id，多个用逗号隔开"]
        },
        response: {
            key: 'e590d1ddadbb4025bb2e3a1b55bd5d7d'
        },
        resDesc: {
            key: ['String', '服务器加密后的key']
        }
    },
    down: {
        method: 'GET',
        desc: '下载photoIDs,进行打包压缩',
        headers: {},
        params: {
            key: [1, 'String', "要下载的photokey"]
        }
    },
    searchSharePhotosBySiteId: {
        method: 'POST',
        desc: '共享照片号码牌搜索',
        headers: {
            // token: [1, 'String', "用户认证id"]
        },
        params: {
            siteId: [1, 'String', "park的siteId"],
            keyword: [0, 'String', "号码牌的关键字"]
        },
        response: {
            "totalPage": 0,
            "pageNum": 1,
            "photos": [{
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
                "customerIds": [{
                    "code": "PACCB2HHVJUSJCB5"
                }],
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
            }]
        }
    },

    removePhotosFromPP: {
        method: 'POST',
        desc: '删除照片',
        headers: {
            token: [1, 'String', "用户认证id"]
        },
        params: {
            photoIds: [1, 'String', "要删除的photo id，多个用逗号隔开"],
            code: [1, 'String', "卡号"]
        },
        response: {
            status: '200,删除成功'
        },
        resDesc: {
            status: ['String', '200,删除成功']
        }
    }
}