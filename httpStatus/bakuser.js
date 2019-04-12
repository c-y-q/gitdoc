module.exports = {
	logout: {
		method: 'POST',
		desc: '注销用户',
		headers: {
			token: [1, 'String', '用户认证id']
		},
		params: {
			// tokenParam: [1, 'String', '用户认证id']
		},
		response: {},
		resDesc: {}
	},
	getUser: {
		method: 'POST',
		desc: '注销用户',
		headers: {
			token: [1, 'String', '用户认证id']
		},
		params: {
			limit: [0, 'String', "每页显示几条，如果不传，默认10条"],
			page: [0, 'String', "当前是第几页"]
		},
		response: {
			"userList": [{
				"name": "zhaoyi@pictureworks.biz",
				"roleIds": [
					"RSSG",
					"OPSH",
					"FISH"
				],
				"_id": "5b235796d698bb16e2801db2",
				"userName": "zhaoyi@pictureworks.biz",
				"role": "2"
			}, {
				"name": "ye3@163.con",
				"roleIds": [
					"RSSG",
					"OPSH",
					"FISH"
				],
				"_id": "5b23593cd698bb16e2801db3",
				"userName": "ye3@163.con",
				"role": "2"
			}],
			"userCount": 121,
			"totalPage": 13
		},
		resDesc: {}
	},
	addUser: {
		method: 'POST',
		desc: '增加用户',
		headers: {},
		params: {
			username: [1, 'String', "用户名"],
			name: [1, 'String', "用户名"],
			roleIds: [1, 'Array', "服务范围"],
			role: [1, 'Array', "权限范围"],
			password: [1, 'String', "密码"]
		},
		response: {},
		resDesc: {}
	},
	editUser: {
		method: 'POST',
		desc: '注销用户',
		headers: {
			token: [1, 'String', '用户认证id']
		},
		params: {
			username: [1, 'String', "用户名"],
			name: [1, 'String', "用户名"],
			roleIds: [1, 'Array', "服务范围"],
			userId: [1, 'String', "修改的用户id"],
			role: [1, 'Array', "权限范围"],
			password: [1, 'String', "密码"]
		},
		response: {},
		resDesc: {}
	},
	getSiteIds: {
		method: 'GET',
		desc: '服务范围选择',
		headers: {},
		params: {

		},
		response: {},
		resDesc: {}
	},
	delUser: {
		method: 'POST',
		desc: '删除用户',
		headers: {
			// token: [1, 'String', '用户认证id']
		},
		params: {
			userId: [1, 'String', "修改的用户id"]
		},
		response: {},
		resDesc: {}
	},
	addProject: {
		method: 'POST',
		desc: '添加用户',
		headers: {
			token: [1, 'String', '用户认证id']
		},
		params: {
			name: [0, 'String', "乐园名称"],
			siteId: [0, 'String', "乐园代号"],
			pageUrl: [0, 'String', "url"],
			orderImg: [0, 'String', "https://dev.pictureair.com.cn/oss/sites/adad/1543456651644/orderCard.png"],
			currency: [0, 'String', "货币"],
			address: [0, 'String', "乐园所在地"],
			appImg: [0, 'String', "同orderImg"],
			cardImg: [0, 'String', "同orderImg"],
			webImg: [0, 'String', "同orderImg"],
			webPhoneImg: [0, 'String', "同orderImg"],
			ocrCard: [0, 'Boolean', "是否支持号码搜索"],
			faceCard: [0, 'Boolean', "是否支持人脸照片搜索"],
			beginImgShow: [0, 'String', "是否显示开机动画"],
			parkCardCode: [0, 'String', "乐园的共享卡"],
		},
		response: {},
		resDesc: {}
	},
	getAllRole: {
		method: 'GET',
		desc: '权限范围选择',
		headers: {},
		params: {

		},
		response: [
			"admin",
			"manager",
			"operator"
		],
		resDesc: {}
	},
	getPark: {
		method: 'POST',
		desc: '获取项目列表',
		headers: {},
		params: {
			limit: [0, 'String', "每页显示几条，如果不传，默认10条"],
			page: [0, 'String', "当前是第几页"]
		},
		response: {
			"parkCount": 309,
			"totalPage": 155,
			"project":[{
				"name": "666",
				"siteId": "test",
				"parkId": "test",
				"link": "test",
				"appImg": "https://dev.pictureair.com.cn/oss/sites/test/background.png",
				"orderImg": "https://dev.pictureair.com.cn/oss/sites/test/orderCard.png",
				"cardImg": "https://dev.pictureair.com.cn/oss/sites/test/cardBagPP.png",
				"webImg": "https://dev.pictureair.com.cn/oss/sites/test/background.png",
				"webPhoneImg": "https://dev.pictureair.com.cn/oss/sites/test/iphoneTitle.jpg",
				"_id": "5bfdffd9e23fc9048ec937a8",
				"orcCard": false,
				"faceCard": false,
				"currency": "HKD",
				"beginImgShow": "notSupport",
				"parkCardCode": "testC9048EC937A7"
			}, {
				"name": "666",
				"siteId": "test",
				"parkId": "test",
				"link": "test",
				"appImg": "https://dev.pictureair.com.cn/oss/sites/test/background.png",
				"orderImg": "https://dev.pictureair.com.cn/oss/sites/test/orderCard.png",
				"cardImg": "https://dev.pictureair.com.cn/oss/sites/test/cardBagPP.png",
				"webImg": "https://dev.pictureair.com.cn/oss/sites/test/background.png",
				"webPhoneImg": "https://dev.pictureair.com.cn/oss/sites/test/iphoneTitle.jpg",
				"_id": "5bfdffd4e23fc9048ec937a6",
				"orcCard": false,
				"faceCard": false,
				"currency": "HKD",
				"beginImgShow": "notSupport",
				"parkCardCode": "testC9048EC937A5"
			}]
		},
		resDesc: {}
	},
	editPark: {
		method: 'POST',
		desc: '删除用户',
		headers: {
			token: [1, 'String', '用户认证id']
		},
		params: {
			parkId: [1, 'String', "乐园_id"],
			name: [0, 'String', "乐园名称"],
			siteId: [0, 'String', "乐园代号"],
			pageUrl: [0, 'String', "url"],
			orderImg: [0, 'String', "https://dev.pictureair.com.cn/oss/sites/adad/1543456651644/orderCard.png"],
			currency: [0, 'String', "货币"],
			address: [0, 'String', "乐园所在地"],
			appImg: [0, 'String', "同orderImg"],
			cardImg: [0, 'String', "同orderImg"],
			webImg: [0, 'String', "同orderImg"],
			webPhoneImg: [0, 'String', "同orderImg"],
			ocrCard: [0, 'Boolean', "是否支持号码搜索"],
			faceCard: [0, 'Boolean', "是否支持人脸照片搜索"],
			beginImgShow: [0, 'String', "是否显示开机动画"],
			parkCardCode: [0, 'String', "乐园的共享卡"],
		},
		response: {},
		resDesc: {}
	},
	deletePark: {
		method: 'POST',
		desc: '获取项目列表',
		headers: {
			token: [1, 'String', '用户认证id']
		},
		params: {
			parkId: [1, 'String', "乐园_id"]
		},
		response: {},
		resDesc: {}
	},
	saveImage: {
		method: 'POST',
		desc: '获取项目列表',
		headers: {
			token: [1, 'String', '用户认证id']
		},
		params: {
			base64str:[1, 'String', "base64 图片"]
		},
		response: {
			imageUlr:{
				orderImg: "https://dev.pictureair.com.cn/oss/sites/adad/1543456651644/orderCard.png"
			}
		},
		resDesc: {}
	}
}