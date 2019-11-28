<template>
  <div class="login">
    <div class="login-left">
      <div class="login-header">
        <img src='images/logo.png' />
      </div>
      <div class="login-content">
        <el-tabs class="login-container">
            <el-tab-pane label="手机登录">
                <el-form ref="loginForm" :model="loginForm">
                  <el-form-item>
                    <el-input v-model.trim="loginForm.phone" placeholder="请输入手机号" @keyup.enter.native="getCode"></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-input v-model.trim="loginForm.code" placeholder="验证码" @keyup.enter.native="loginHandle">
                      <template slot="suffix">
                        <span class="validate-text validate-text-get" @click="getCode()" v-show="!isSendCode">{{msgText}}</span>
                        <span class="validate-text " v-show="isSendCode"> {{ msgTime }}s后重新发送</span>
                      </template>
                    </el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="loginHandle" class="submit-btn" size="small" :disabled="isClickSub">
                      <span class="submit-btn-text">登录</span>
                    </el-button>
                  </el-form-item>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="微信登录">
              <div id="qrcode"></div>
            </el-tab-pane>
        </el-tabs>
      </div>
      <div class="login-footer">
        <span>粤ICP备16020717号-2    <a href="http://funxdata.com">Power by FunXdata</a></span>
      </div>
    </div>
    <div class="login-right">
    </div>
  </div>
</template>

<script>
import storage from '@/utils/storage'
// import api from '@/api/api'
import { validatePhone } from '@/utils/validate'

export default {
  name: 'login',
  props: {
  },
  components: {
  },
  data () {
    return {
      loginForm: {
        phone: '18709456105',
        code: ''
      },
      msgTime: 60,
      msgText: '获取验证码',
      isSendCode: false
    }
  },
  computed: {
    isClickSub () {
      if (this.msgText === '获取验证码' || !this.loginForm.phone || !this.loginForm.code) {
        return true
      }
      return false
    }
  },
  watch: {
  },
  methods: {
    loginHandle () {
      if (this.msgText === '获取验证码') {
        return
      }
      if (!this.checkoutPhone()) {
        return
      }
      if (!this.checkoutCode()) {
        return
      }
      let data = {
        phone: this.loginForm.phone,
        code: this.loginForm.code
      }
      console.log(data)
      this.$message.info('登录信息已提交')
      storage.setToken('aaa')
      this.$router.push({
        name: 'Home'
      })
      // pLogin(para).then(res => {
      //   if (res) {
      //     let employeeInfo = {
      //       employee_id: res.ID,
      //       company_id: res.company_id
      //     }
      //     sessionStorage.setItem('token', res.token)
      //     sessionStorage.setItem('info', JSON.stringify(employeeInfo))
      //     this.$router.push({ path: '/dataanalysis' })
      //   }
      // }).catch(() => {
      //   console.log(err)
      // })
    },
    /* 微信登录 */
    wxLogin () {
      // let para = {
      //   code: this.urlCode
      // }
      // wxLogin(para).then(res => {
      //   if (res) {
      //     let employeeInfo = {
      //       employee_id: res.ID,
      //       company_id: res.company_id
      //     }
      //     sessionStorage.setItem('token', res.token)
      //     sessionStorage.setItem('info', JSON.stringify(employeeInfo))
      //     this.$router.push({ path: '/dataanalysis' })
      //   }
      // }).catch(err => {
      //   console.log(err)
      // })
    },

    getCode () {
      if (!this.checkoutPhone()) {
        return
      }
      let data = {
        type: 'phone',
        phone: this.loginForm.phone
      }
      console.log(data)
      this.$message.success('验证码已发送请注意查收')
      this.msgText = '重新发送'

      this.msgTime = 5
      this.isSendCode = true
      let timer = setInterval(() => {
        this.msgTime--
        if (this.msgTime <= 0) {
          this.isSendCode = false
          clearInterval(timer)
        }
      }, 1000)
    },

    checkoutPhone () {
      if (!this.loginForm.phone) {
        this.$message.warning('请输入手机号')
        return false
      }
      if (!validatePhone(this.loginForm.phone)) {
        this.$message.warning('请检查手机号码格式')
        return false
      }
      return true
    },
    checkoutCode () {
      if (!this.loginForm.code) {
        this.$message.warning('请输入验证码')
        return false
      }
      let reg = /^\d{4}$/
      if (!reg.test(this.loginForm.code)) {
        this.$message.warning('验证码为4位数字')
        return false
      }
      return true
    }
  },
  created () {
  },
  mounted () {
  }
}
</script>

<style lang="scss">
.login{
  width: 100%;
  height: 100%;
  min-height: 460px;
  display: flex;
  &-left{
    width: 50%;
    display: flex;
    flex-direction: column;
  }
  &-right{
    width: 50%;
    height: 100%;
    overflow: hidden;
    position: relative;
    &::before {
      z-index: -999;
      content: ' ';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-image: url("/images/login.png");
      background-size: cover;
    }
  }
  &-header{
    height: 60px;
    padding: 5px 0 5px 20px;
    background: #fff;
    @include flex-center();
    justify-content: flex-start;
    img{
      height: 48px;
    }
  }
  &-footer{
    height: 50px;
    line-height: 50px;
    padding-left: 30px;
    color: #606266;
  }
  &-content{
    flex: 1;
    @include flex-center();
    .login-container{
      width: 330px;
      height: 300px;
      .el-tabs__item{
        font-size: 16px;
        font-weight: bold;
      }
      .el-form{
        margin-top: 20px;
      }
      .validate-text{
        margin-right: 15px;
        cursor: default;
      }
      .validate-text-get{
        color: $color-primary;
        cursor: pointer;
        &:hover{
          font-weight: bold;
        }
      }
      .submit-btn{
        width: 100%;
        .submit-btn-text{
          font-size: 14px;
        }
      }
    }

  }
}
</style>
