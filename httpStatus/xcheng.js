module.exports = {
	xcLogin: {
		method: 'POST',
		desc: '注销用户',
		headers: {},
		params: {
			authcode: [1, 'String', '通过携程端获取的 authcode']
		},
		response: {},
		resDesc: {}
	},
	doneOrder: {
		method: 'POST',
		desc: "携程订单",
		headers: {},
		params: {
			// body: [1, 'String', '携程端的body数据信息'],
			// header: [1, 'String', '携程端的header数据信息']
		},
		response: {}
	},
	queryXcSites: {
		method: 'POST',
		desc: "根据sited和protype返回携程对应的spotid和tid",
		headers: {},
		params: {
			siteId: [1, 'String', 'pa端的siteId'],
			proType: [1, 'String', 'pa端的产品类型']
		},
		response: {
			xcSites: {
				"spotid": "17246269",
				"tid": "2016672"
			}
		}
	}
}