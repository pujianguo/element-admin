<template>
  <div :class="['layout-menu', {'menu-collapse': menuCollapse}]">
    <div class="logo">
      <img src='/images/mini-logo.png' v-if="menuCollapse" />
      <img src='/images/logo.png' v-else />
    </div>

    <div class="nav">
      <el-menu :default-active="activeMenu" unique-opened :collapse="menuCollapse" @select="selectMenu">
        <template v-for="(item, i) in menuList">
          <el-menu-item class="menu-item-level1" :key="i" :index="item.name" v-if="!item.children">
            <span class="icon-wrapper"><i :class="item.icon"></i></span>
            <span class="text" slot="title">{{item.title}}</span>
          </el-menu-item>
          <el-submenu :key="i" :index="item.name" v-else>
            <template slot="title">
              <span class="icon-wrapper"><i :class="item.icon"></i></span>
              <span slot="title">{{item.title}}</span>
            </template>
            <el-menu-item v-for="(item2, ii) in item.children" :key="ii" :index="item2.name">
              <span class="icon-wrapper"><i class="iconfont icon-dian1" aria-hidden="true"></i></span>
              <span class="text">{{item2.title}}</span>
            </el-menu-item>
          </el-submenu>
        </template>
      </el-menu>
    </div>

    <div class="help" @click="education">
        <span class="iconfont icon-wenhao"></span>
        <span class="text">&nbsp;教程</span>
    </div>
  </div>
</template>

<script>
import menu from '@/libs/data/menu'

export default {
  name: 'layout-menu',
  props: {
  },
  components: {
  },
  data () {
    return {
      menuList: []
    }
  },
  computed: {
    menuCollapse () {
      return this.$store.state.menuCollapse
    },
    activeMenu () {
      let name = this.$route.name.split('_')[0]
      return name || 'Home'
    }
  },
  watch: {
  },
  methods: {
    initMenu () {
      let data = this.func.copy(menu)
      this.menuList = data.map(x => {
        let isOpened = false
        if (x.children) {
          if (x.children.find(xx => xx.name === this.menuActive)) {
            isOpened = true
          }
        }
        x.isOpened = isOpened
        return {
          name: x.name,
          title: x.title,
          icon: x.icon,
          children: x.children,
          isOpened: isOpened
        }
      })
    },
    selectMenu (name) {
      this.$router.push({
        name: name
      })
    },

    // 教程
    education () {
      window.open('http://www.baidu.com')
    }
  },
  created () {
    this.initMenu()
  },
  mounted () {
  }
}
</script>

<style lang="scss">
@import '~styles/mixins.scss';
// 弹出的二级菜单
.el-menu--vertical{
  .el-menu{
    background-color: $menu-level-2-bgc;
    min-width: 160px;
    padding: 0;
    .el-menu-item{
      color: $menu-c;
      height: 45px;
      line-height: 45px;
      padding-left: 0 !important;
      .icon-wrapper{
        display: inline-block;
        vertical-align: top;
        width: 40px;
        height: 45px;
        line-height: 45px;
        text-align: center;
        i{
          font-size: 20px;
          color: $menu-c;
        }
      }
      &:hover{
        background-color: $menu-level-1-bgc;
        font-weight: bold;
        .icon-wrapper i{
          color: $--color-primary;
        }
        .text{
          color: $--color-primary;
        }
      }
      &.is-active{
        background-color: $--color-primary;
        .icon-wrapper i{
          color: $menu-level-2-active-c ;
        }
        .text{
          color: $menu-c;
        }
      }
    }
  }
}

.layout-menu{
  display: flex;
  flex-direction: column;
  .logo{
    box-sizing: border-box;
    width: 200px;
    height: 50px;
    // background: $menu-logo-bgc;
    background-color: #fff;
    transition: all .3s;
    @include flex-center();
    img {
      width: 150px;
    }
  }
  .nav{
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
    &::-webkit-scrollbar {display:none}
    .el-menu{
      &.el-menu--collapse{
        width: 50px;
      }
      border-right: 0;
      color: $menu-c;
      background-color: $menu-bgc;
      .el-submenu__title{
        height: 50px;
        line-height: 50px;
        color: $menu-c;
        background-color: $menu-level-1-bgc;
        padding: 0 !important;
        .icon-wrapper{
          display: inline-block;
          vertical-align: top;
          visibility: visible;
          width: 50px;
          height: 50px;
          line-height: 50px;
          text-align: center;
          margin: 0;
          i{
            color: $menu-c;
            font-size: 16px;
            margin: 0;
          }
        }
      }
      .el-menu-item{
        height: 45px;
        line-height: 45px;
        color: $menu-c;
        background: $menu-level-2-bgc;
        padding: 0 20px !important;
        .icon-wrapper{
          display: inline-block;
          vertical-align: top;
          width: 40px;
          text-align: center;
          i{
            color: $menu-c;
            font-size: 20px;
            margin: 0;
          }
        }
        &:hover{
          font-weight: bold;
          .icon-wrapper i{
            color: $--color-primary;
          }
          .text{
            color: $--color-primary;
          }
        }
        &.is-active{
          background-color: $--color-primary;
          .icon-wrapper i{
            color: $menu-level-2-active-c ;
          }
          .text{
            color: $menu-c;
          }
        }
      }
      .menu-item-level1{
        height: 50px;
        line-height: 50px;
        padding: 0 !important;
        .icon-wrapper{
          width: 50px;
          height: 50px;
          line-height: 50px;
          visibility: visible;
          i{
            color: $menu-c;
            font-size: 16px;
            margin: 0;
          }
        }
        &:hover{
          font-weight: bold;
          .icon-wrapper i{
            color: $--color-primary;
          }
          .text{
            color: $--color-primary;
          }
        }
        &.is-active{
          background-color: $--color-primary;
          .icon-wrapper i{
            color: $menu-level-2-active-c ;
          }
          .text{
            color: $menu-c;
          }
        }
        .el-tooltip{
          padding: 0 !important;
        }
      }
    }
  }
  .help{
    box-sizing: border-box;
    height: 30px;
    line-height: 30px;
    padding: 5px;
    text-align: center;
    cursor: pointer;
    color: $menu-help-c;
    box-shadow: $menu-help-sc -3px -3px 11px;
    background-color: $menu-help-bgc;
    span{
      display: inline-block;
      vertical-align: top;
      height: 20px;
      line-height: 20px;
    }
  }
}

.menu-collapse{
  width: 50px !important;
  .logo{
    width: 50px;
    img {
      width: 21px;
      height: 21px;
    }
  }
  .help{
    .text{
      display: none;
    }
  }
}
</style>
