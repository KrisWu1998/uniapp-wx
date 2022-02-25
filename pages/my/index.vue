<template>
	<!-- <view class="content" @click="handleLogin" v-if="!isLogin">
		点击登录
	</view>
	<view v-else>
		已登录;
		<img :src="userData.avator"/>
		名称：{{ userData.name || '未授权'}}
		<button class="user-info-btn" open-type="getUserInfo" @getuserinfo="mpGetUserInfo" withCredentials="true" v-if="!userData.name">
			用户头像授权
		</button>
		<view @tap="mpGetUserInfo">用户头像授权</view>
	</view> -->
	<view class="page-box">
		<view class="page-header">
			<UserLogin :isLogin="isLogin" :loginInfo="loginInfo"/>
		</view>
	</view>
</template>

<script>
import { saveUserMsg } from '@/api/login/index.js'
import UserLogin from '@/components/my/UserLogin'
export default {
	components: {
		UserLogin
	},
	data() {
		return {
			isLogin: false,
			loginInfo: {
        avatarUrl: '',
        nickName: ''
      }
		}
	},
	onLoad() {
		this.validateLogin()
	},
	methods: {
		validateLogin () {
			const sessionKey = uni.getStorageSync('sessionKey');
			const loginInfo = uni.getStorageSync('loginInfo');
			this.isLogin = !!sessionKey;
			if (loginInfo) this.loginInfo = loginInfo;
		},
	}
}
</script>

<style lang="scss">
.page-box {
	.page-header {
		box-sizing: border-box;
		width: 100%;
		height: 250rpx;
		padding: 40rpx 40rpx 0 40rpx;
		background: #39618E;
	}
}
</style>
