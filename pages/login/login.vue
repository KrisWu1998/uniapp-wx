<template>
	<view>
		<view>欢迎来到授权页</view>
		<button open-type="getPhoneNumber" @getphonenumber="getphonenumber">点击授权</button>
		<button class="user-info-btn" open-type="getUserInfo" @getuserinfo="mpGetUserInfo" withCredentials="true">
			用户头像授权
			</button>
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
				const {encryptedData, iv} = e.detail;
				console.log(e)
				const params = {
					encryptedData,
					iv
				}
				saveUserPhone(params).then(res=>{

				}).catch(err=>{
					console.log('catch---', err)
				})
			})
		},
			
		mpGetUserInfo () {
			uni.getUserInfo({
				success: res => {
					console.log(res);
				}
			})
		}
	}
}
</script>

<style>

</style>
