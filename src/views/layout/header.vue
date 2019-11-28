<template>
  <div class="layout-header">
    <div class="header-left">
      <div class="tools" @click.prevent="collapse">
        <div :class="['icon', {'icon-collapse': menuCollapse}]">
          <i class="iconfont icon-menu"></i>
        </div>
      </div>
    </div>
    <div class="header-right">
      <full-screen class="nav-item" v-model="isFullscreen" @on-change="fullscreenChange"></full-screen>
      <message class="nav-item"></message>
      <!-- <el-dropdown class="nav-item" @command="clickDropdown">
        <div class="message">
          <i class="fa fa-bell-o" aria-hidden="true"></i>
          <div class="count" v-show="messageList.length"></div>
        </div>
        <el-dropdown-menu class="my-dropdown" slot="dropdown">
          <div class="message-dropdown-title"></div>
          <div class="message-dropdown-list">
            <div class="message-dropdown-item" v-for="(item, index) in messageList" :key="index">{{item.msg}}</div>
          </div>
        </el-dropdown-menu>
      </el-dropdown> -->

      <el-dropdown class="nav-item" @command="clickDropdown">
        <div class="userinfo">
          <div class="userinfo-name">{{userInfo.name}}</div>
          <div class="userinfo-avatar">
            <img :src="userInfo.avatar" />
          </div>
          <div class="userinfo-icon"><i class="el-icon-arrow-down el-icon--right"></i></div>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="profile">个人中心</el-dropdown-item>
          <el-dropdown-item command="logout" divided>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import FullScreen from '@/components/layout/fullscreen'
import Message from 'components/layout/message'
import Storage from '@/utils/storage'
export default {
  name: 'layout-header',
  props: {
  },
  components: { FullScreen, Message },
  data () {
    return {
      isFullscreen: false,
      userInfo: {
        name: '王大锤',
        avatar: this.config.defaultAvatar
      },
      messageList: []
    }
  },
  computed: {
    menuCollapse () {
      return this.$store.state.menuCollapse
    }
  },
  watch: {
  },
  methods: {
    // 折叠导航栏
    collapse () {
      this.$store.commit('setMenuCollapse', !this.menuCollapse)
    },
    fullscreenChange () {
    },
    clickDropdown (command) {
      if (command === 'profile') {
        this.goProfile()
      } else if (command === 'logout') {
        this.logout()
      }
    },
    goProfile () {
      console.log('aaa')
      this.$message.info('该功能尚未开通')
    },
    logout () {
      this.$confirm('确认退出吗?', '提示', {
        type: 'warning'
      }).then(() => {
        Storage.rmToken()
        this.$router.push({
          name: 'Login'
        })
      }).catch(() => {
      })
    }
  },
  created () {
  },
  mounted () {
    let list = []
    for (let i = 1; i < 20; i++) {
      list.push({ id: i, msg: `我是第${i}条数据` })
    }
    this.messageList = list
  }
}
</script>

<style lang="scss">

.layout-header {
  display: flex;
  justify-content: space-between;

  .header-left {
    .tools {
      width: 50px;
      height: 50px;
      text-align: center;
      cursor: pointer;
      transition: transform .5s;
      &:hover{
        background: #eee;
        .iconfont{
          color: $--color-primary;
        }
      }
      .icon{
        transition: transform .5s;
      }
      .icon-collapse{
        transform: rotateZ(90deg);
      }
      .iconfont{
        color: #5c6b77;
      }
    }
  }
  .header-right{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .nav-item{
      padding: 0 10px;
      height: 50px;
      @include flex-center();
      cursor: pointer;
      &:hover{
        color: $--color-primary;
      }
    }
    .userinfo{
      display: flex;
      align-items: center;
      cursor: pointer;
      &-name{
        max-width: 100px;
        @include ellipsis();
      }
      .userinfo-avatar{
        margin-left: 5px;
        // width: 28px;
        // height: 28px;
        // border-radius: 14px;
        // overflow: hidden;
        @include circle(28px);
        img{
          width: 28px;
          height: 28px;
        }
      }
    }
    .message{
      height: 50px;
      @include flex-center();
      position: relative;
      .count{
        position: absolute;
        top: 16px;
        right: -1px;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: red;
      }
    }
    .my-dropdown{
      top: 50px !important;
    }
    .dropdown-message{
      // position: absolute;
      // top: 40px;
      // left: -50px;
      // width: 300px;
      // height: 500px;
      // background: #333;
    }

  }
}
</style>
