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
      <full-screen class="full-screen-btn" v-model="isFullscreen" @on-change="fullscreenChange"></full-screen>
      <el-dropdown @command="clickDropdown">
        <div class="userinfo">
          <div class="userinfo-name">{{name}}</div>
          <div class="userinfo-avatar">
            <img :src='userImg'/>
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
import FullScreen from '@/components/layout/fullscreen.vue'
import Storage from '@/utils/storage'
export default {
  name: 'layout-header',
  props: {
  },
  components: {
    FullScreen
  },
  data () {
    return {
      name: '王大锤',
      isFullscreen: false,
      userImg: this.config.defaultAvatar
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
    console.log('config', this.config)
  }
}
</script>

<style lang="scss" scoped>

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
    .full-screen-btn{
      width: 40px;
    }
    .userinfo{
      padding: 0 20px;
      display: flex;
      align-items: center;
      cursor: pointer;
      .userinfo-avatar{
        margin-left: 5px;
        width: 32px;
        height: 32px;
        border-radius: 16px;
        overflow: hidden;
        img{
          width: 32px;
          height: 32px;
        }
      }
    }

  }
}
</style>
