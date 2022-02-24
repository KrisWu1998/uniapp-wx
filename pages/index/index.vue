<template>
	<view class="content" @click="handleLogin" v-if="!isLogin">
		点击登录
	</view>
	<view v-else>
		已登录;
		<img src="userData.avator"/>
		名称：{{ userData.name || '未授权'}}
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isLogin: false,
				userData: {
					avator: '',
					name: ''
				}
			}
		},
		onLoad() {
			this.validateLogin()
		},
		methods: {
			validateLogin () {
				const sessionKey = uni.getStorageSync('sessionKey');
				this.isLogin = !!sessionKey;
			},
			handleLogin () {
				uni.navigateTo({
					url: '/pages/login/login'
				})
			}
		}
	}
</script>

<style>

</style>
