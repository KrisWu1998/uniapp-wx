<template>
  <view class="userLogin-box">
    <view @tap="mpGetUserInfo" class="user-avatar">
      <img :src="isLogin && loginInfo.avatarUrl ? loginInfo.avatarUrl : avatar" class="avatar-img"/>
      <view class="user-name">
        {{ isLogin && loginInfo.nickName ? loginInfo.nickName : '点击登录' }}
      </view>
    </view>
  </view>
</template>

<script>
import { saveUserMsg } from '@/api/login/index.js'
export default {
  props: {
    isLogin: {
      type: Boolean,
      default: false
    },
    loginInfo: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      // 默认为登录时头像
      avatar: 'http://www.kriswuzz.com/img/avatar.png'
    }
  },
  methods: {
    mpGetUserInfo () {
      if (this.isLogin) return;
      uni.getUserProfile({
				desc: 'weixin',
				success: res => {
					const params = {
						encryptedData: res.encryptedData,
						iv: res.iv,
						rawData: res.rawData
					}
					saveUserMsg(params).then(res=>{
						if (res.code === 200) {
              uni.navigateTo({
                url: '/pages/login/login'
              });
            }
					}).catch(err=>{
						console.log('userinfo-err---', err)
					})
				},
				fail: err => {
					console.log(err)
				}
			})
    }
  }
}
</script>

<style lang="scss">
.userLogin-box {
  .user-avatar {
    display: inline-flex;
    align-items: center;
    .avatar-img {
      width: 100rpx;
      height: 100rpx;
      border-radius: 50%;
    }
    .user-name {
      margin-left: 20rpx;
      color: #FFF;
    }
  }
}
</style>