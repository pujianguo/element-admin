<template>
  <div class="layout">
    <main-menu></main-menu>
    <div class="layout-right">
      <main-header></main-header>
      <main-breadcrumb></main-breadcrumb>
      <div class="layout-content">
        <router-view></router-view>
      </div>
      <main-footer></main-footer>
    </div>
  </div>
</template>

<script>
import MainHeader from './header'
import MainMenu from './menu'
import MainBreadcrumb from './breadcrumb'
import MainFooter from './footer'

export default {
  name: 'layout',
  props: {
  },
  components: {
    MainHeader,
    MainMenu,
    MainFooter,
    MainBreadcrumb
  },
  data () {
    return {
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
    init () {
      // 获取初始数据
    }
  },
  created () {
  },
  mounted () {
    this.init()
  }
}
</script>

<style lang="scss">
</style>
