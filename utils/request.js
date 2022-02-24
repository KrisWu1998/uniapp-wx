import { BASE_API_URL } from '../api/common/index.js';

const request = ((params)=>{
	const {url, method, data, success, error} = params;
	console.log(data)
	uni.request({
		url,
		method,
		data,
		success,
		fial: error
	})
});

const wxLogin = (cb) => {
	const url = `${BASE_API_URL}/wx/login`;
	uni.checkSession({
		success: (res) =>{
			if (res.errMsg === 'checkSession:ok') {
				cb && cb();
			}
		},
		fail: (err) =>{
			console.log('checkIsNo', err)
			uni.login({
				success: function (loginRes) {
					const { code } = loginRes;
					request({
						url,
						method: 'GET',
						data: {code},
						success: (params) =>{
							const { data: res } = params;
							const {code, data} = res;
							if (code == 200) {
								const {session_key} = data;
								uni.setStorage('sessionKey', session_key);
								uni.setStorage('loginfo', data);
							}
							cb && cb()
						},
						error: (error) =>{
							uni.showToast({
								title: '授权失败!'
							})
							cb && cb();
						}
					});
				}
			})
		}
	})
}

module.exports = {
	request,
	wxLogin
};