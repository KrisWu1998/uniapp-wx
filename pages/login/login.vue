<template>
	<view>
		<view>欢迎来到授权页</view>
		<button open-type="getPhoneNumber" @getphonenumber="getphonenumber">点击授权</button>
	</view>
</template>

<script>
import { wxLogin } from '@/utils/request.js';
import { saveUserPhone } from '@/api/login/index.js';
export default {
	data() {
		return {
			
		}
	},
	methods: {
		getphonenumber (e) {
			wxLogin(()=>{
				const {encryptedData, iv, cloudID, code} = e.detail;
				console.log('phonenumber----', e)
				const params = {
					encryptedData,
					iv,
				}
				saveUserPhone(params).then(res=>{
					if (res.code == 200) {
						uni.setStorageSync('sessionKey', res.value.sessionKey);
						uni.setStorageSync('loginInfo', res.value);
						uni.showToast({
							title: res.message
						})
						let pages = getCurrentPages(); // 当前页面
						let beforePage = pages[pages.length - 2]; // 上一页
						uni.navigateBack({
						  success: function() {
						    beforePage.onLoad(); // 执行上一页的onLoad方法
						  }
						});
					}
				}).catch(err=>{
					console.log('catch---', err)
				})
			})
		},
	}
}
</script>

<style>

</style>
