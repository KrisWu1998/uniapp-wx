import { request } from '../../utils/request.js';
import { BASE_API_URL } from '../common/index.js';

// 手机授权
const saveUserPhone = function (data) {
	const url = `${BASE_API_URL}/wx/savePhone`;
	return new Promise((resolve, reject) => {
		request({
			url,
			method: 'POST',
			data,
			success: (res) =>{
				const { data } = res;
				resolve(data);
			},
			error: (error) =>{
				reject(error);
			}
		})
	})
}

// 用户信息授权
const saveUserMsg = function (data) {
	const url = `${BASE_API_URL}/wx/saveUserMsg`;
	return new Promise((resolve, reject) => {
		request({
			url,
			method: 'POST',
			data,
			success: (res) =>{
				const { data } = res;
				resolve(data);
			},
			error: (error) =>{
				reject(error);
			}
		})
	})
}

module.exports = {
	saveUserPhone,
	saveUserMsg
}
