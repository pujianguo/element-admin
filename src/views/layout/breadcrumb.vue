<template>
  <div class="layout-breadcrumb" v-if="menuList.length">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <template v-for="(item, index) in menuList">
        <el-breadcrumb-item v-if="item.disabled" :key="index" :class="{'is-last': item.isLast}">{{item.title}}</el-breadcrumb-item>
        <el-breadcrumb-item v-else :to="{ name: item.name }" :key="index">{{item.title}}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'layout-breadcrumb',
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
    menu () {
      return this.$route.matched
    }
  },
  watch: {
    menu () {
      this.changeMenu()
    }
  },
  methods: {
    changeMenu () {
      let menu = []
      console.log('this.menu', this.menu)

      this.menu.forEach((x, i) => {
        if (x.path && x.path !== '/' && !x.meta.isfirstPage) {
          let name = x.name
          if (x.meta.firstPageName) {
            name = x.meta.firstPageName
          }
          menu.push({
            name: name,
            title: x.meta.title,
            disabled: x.name
          })
        }
      })
      if (menu.length) {
        menu[menu.length - 1].isLast = true
        menu[menu.length - 1].disabled = true
      }
      console.log('menu', menu)
      this.menuList = menu
    }
  },
  created () {
  },
  mounted () {
    this.changeMenu()
  }
}
</script>

<style lang="scss">
.layout-breadcrumb{
  .is-last{
    background-color: $color-primary;
    padding: 0 20px;
    .el-breadcrumb__inner{
      color: #fff !important;
    }
  }
}
</style>
