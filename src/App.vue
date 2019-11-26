<template>
  <div id="app" v-loading="fullLoading">
    <router-view v-if="!fullLoading"></router-view>
  </div>
</template>

<script>
import Storage from '@/utils/storage'

export default {
  name: 'app',
  components: {
  },
  computed: {
    fullLoading () {
      return this.$store.state.fullLoading
    }
  },
  methods: {
    init () {
      // init menuCollapse
      let menuCollapse = Storage.getMenuCollapse()
      if (menuCollapse !== null) {
        // 注意：storage里面存放的是字符串，这里需要转换
        this.$store.commit('setMenuCollapse', menuCollapse === 'true')
      }

      // 模拟加载数据
      // this.$store.commit('setFullLoading', true)
      // setTimeout(() => {
      //   this.$store.commit('setFullLoading', false)
      // }, 3000)

      // 获取数据资源
      // let apis = [
      //   api.listClusters()
      // ]
      // this.$store.commit('setFullLoading', true)
      // Promise.all(apis).then(res => {
      //   let [clusterList] = res
      //   this.dealClusterList(clusterList)
      //   this.$store.commit('setFullLoading', false)
      // }).catch(() => {
      //   // 获取初始资源数据失败
      //   this.$store.commit('setFullLoading', false)
      // })
    }
  },
  created () {
    this.init()
  }
}
</script>
