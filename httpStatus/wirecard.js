module.exports = {
	wireCardChanel: {
		method: 'POST',
		desc: "wireCardChanel",
		headers: {
			token: [1, 'String', "标识用户身份"]
		},
		params: {
			transCode: [1, 'String', "交易单号"]
		},
		response: {}
	}
}