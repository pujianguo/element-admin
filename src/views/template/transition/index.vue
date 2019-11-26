<template>
  <div class="component-flex-page templage-animation">
    <div class="page">
      <transition :name="animationType">
        <router-view></router-view>
      </transition>
    </div>
    <div class="page-buttons">
      <el-button :type="page === 'A' ? 'primary' : 'default'" @click="changePage('A')">A页面</el-button>
      <el-button :type="page === 'B' ? 'primary' : 'default'" @click="changePage('B')">B页面</el-button>
    </div>
    <div class="type-buttons-div" v-for="(x, i) in animationList" :key="i">
        <span class="type-button-title"> {{x.title}} </span>
        <el-button size="small" v-for="(item, index) in x.list" :key="index" :type="animationType === item.value ? 'primary' : 'default'" @click="changeType(item.value)">{{item.name}}</el-button>
    </div>
  </div>
</template>

<script>
import './style/transition.css'

let animationList = [
  {
    title: 'move',
    list: [
      { name: 'move-bottom-to-top', value: 'move-bottom-to-top' },
      { name: 'move-top-to-bottom', value: 'move-top-to-bottom' },
      { name: 'move-left-to-right', value: 'move-left-to-right' },
      { name: 'move-right-to-left', value: 'move-right-to-left' }
    ]
  },
  {
    title: 'move-fade',
    list: [
      { name: 'move-fade-bottom-to-top', value: 'move-fade-bottom-to-top' },
      { name: 'move-fade-top-to-bottom', value: 'move-fade-top-to-bottom' },
      { name: 'move-fade-left-to-right', value: 'move-fade-left-to-right' },
      { name: 'move-fade-right-to-left', value: 'move-fade-right-to-left' }
    ]
  },
  {
    title: 'move-different',
    list: [
      { name: 'move-different-bottom-to-top', value: 'move-different-bottom-to-top' },
      { name: 'move-different-top-to-bottom', value: 'move-different-top-to-bottom' },
      { name: 'move-different-left-to-right', value: 'move-different-left-to-right' },
      { name: 'move-different-right-to-left', value: 'move-different-right-to-left' }
    ]
  },
  {
    title: 'rotate-push',
    list: [
      { name: 'rotate-push-bottom-to-top', value: 'rotate-push-bottom-to-top' },
      { name: 'rotate-push-top-to-bottom', value: 'rotate-push-top-to-bottom' },
      { name: 'rotate-push-left-to-right', value: 'rotate-push-left-to-right' },
      { name: 'rotate-push-right-to-left', value: 'rotate-push-right-to-left' }
    ]
  },
  {
    title: 'scale',
    list: [
      { name: 'scale-down-to-down', value: 'scale-down-to-down' },
      { name: 'scale-up-to-up', value: 'scale-up-to-up' },
      { name: 'cale-down-to-up', value: 'cale-down-to-up' }
    ]
  },
  {
    title: 'rotate-glue',
    list: [
      { name: 'rotate-glue-bottom-to-top', value: 'rotate-glue-bottom-to-top' },
      { name: 'rotate-glue-top-to-bottom', value: 'rotate-glue-top-to-bottom' },
      { name: 'rotate-glue-left-to-right', value: 'rotate-glue-left-to-right' },
      { name: 'rotate-glue-right-to-left', value: 'rotate-glue-right-to-left' }
    ]
  },
  {
    title: 'rotate-flip',
    list: [
      { name: 'rotate-flip-top', value: 'rotate-flip-top' },
      { name: 'rotate-flip-bottom', value: 'rotate-flip-bottom' },
      { name: 'rotate-flip-left', value: 'rotate-flip-left' },
      { name: 'rotate-flip-right', value: 'rotate-flip-right' }
    ]
  },
  {
    title: 'rotate-fold',
    list: [
      { name: 'rotate-fold-bottom-to-top', value: 'rotate-fold-bottom-to-top' },
      { name: 'rotate-fold-top-to-bottom', value: 'rotate-fold-top-to-bottom' },
      { name: 'rotate-fold-left-to-right', value: 'rotate-fold-left-to-right' },
      { name: 'rotate-fold-right-to-left', value: 'rotate-fold-right-to-left' }
    ]
  },
  {
    title: 'rotate-carousel',
    list: [
      { name: 'rotate-carousel-top', value: 'rotate-carousel-top' },
      { name: 'rotate-carousel-bottom', value: 'rotate-carousel-bottom' },
      { name: 'rotate-carousel-left', value: 'rotate-carousel-left' },
      { name: 'rotate-carousel-right', value: 'rotate-carousel-right' }
    ]
  },
  {
    title: 'other',
    list: [
      { name: 'rotate-fall', value: 'rotate-fall' },
      { name: 'rotate-sides', value: 'rotate-sides' }
    ]
  }
]
export default {
  name: 'templage-animation',
  props: {
  },
  components: {
  },
  data () {
    return {
      page: 'A',
      animationType: 'rotate-fall',
      animationList: animationList
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
    changePage (page) {
      this.page = page
      this.$router.push({
        name: 'Transition_' + page
      })
    },
    changeType (type) {
      this.animationType = type
      if (this.page === 'A') {
        this.changePage('B')
      } else {
        this.changePage('A')
      }
    }
  },
  created () {
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';
.templage-animation{
  .page{
    margin: 20px;
    width: 100%;
    height: 300px;
    overflow: hidden;
  }
  .type-buttons-div{
    margin-bottom: 10px;
    .type-button-title{
      display: inline-block;
      width: 100px;
      margin-right: 10px;
      text-align: right;
    }
  }
  .page-buttons{
    margin: 10px 20px 30px;
  }
}
</style>
