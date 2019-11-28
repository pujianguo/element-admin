<template>
  <div class="component-flex-page template-scroll">
    <p>
      文档：<a href="http://ustbhuangyi.github.io/better-scroll/doc/zh-hans" target="_blank">http://ustbhuangyi.github.io/better-scroll/doc/zh-hans</a>
    </p>
    <el-row :gutter="20">
      <el-col :span="8">
        <div ref="wrapper" class="bs-wrapper">
          <div>
            <div v-for="n in 100" :key="n" class="bs-item" :id="`bs-item-${n}`">n : {{n}}</div>
          </div>
        </div>
      </el-col>
      <el-col :span="16">
        <div >
          <p>滚动时间 ms</p>
          <el-slider v-model="time" :min="100" :max="3000"></el-slider>
        </div>
        <div >
          <el-button-group>
            <el-button @click="handleScrollTo(100)">滚动到100像素位置</el-button>
            <el-button @click="handleScrollTo(300)">滚动到300像素位置</el-button>
          </el-button-group>
        </div>
        <div >
          <el-button-group>
            <el-button @click="handleScrollBy(50)">向下滚动50像素</el-button>
            <el-button @click="handleScrollBy(-50)">向上滚动50像素</el-button>
          </el-button-group>
        </div>
        <div >
          <el-button-group>
            <el-button @click="handleScrollToElement(4)">滚动到第四个</el-button>
            <el-button @click="handleScrollToElement(14)">滚动到第十四个</el-button>
            <el-button @click="handleScrollToElement(24)">滚动到第二十四个</el-button>
          </el-button-group>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'template-scroll',
  props: {
  },
  components: {
  },
  data () {
    return {
      time: 300,
      BS: null
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
    handleScrollTo (y) {
      this.BS.scrollTo(0, -y, this.time)
    },
    handleScrollBy (y) {
      this.BS.scrollBy(0, -y, this.time)
    },
    handleScrollToElement (n) {
      this.BS.scrollToElement(`#bs-item-${n}`, this.time)
    },
    scrollInit () {
      this.BS = new BScroll(this.$refs.wrapper, {
        mouseWheel: true, // 允许鼠标滚动
        scrollbar: { // 显示滚动条
          fade: false,
          interactive: false
        }
      })
    },
    scrollDestroy () {
      if (this.BS) {
        this.BS.destroy()
      }
    }
  },
  created () {
  },
  mounted () {
    this.$nextTick(() => {
      this.scrollInit()
    })
  },
  destroyed () {
    this.scrollDestroy()
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';
.template-scroll{
  .bs-wrapper {
    height: 400px;
    position: relative;
    margin: 10px;
    overflow: hidden;
    border: 1px solid #666;
    border-radius: 4px;
    .bs-item {
      line-height: 40px;
      padding-left: 30px;
      border-bottom: 1px solid #eee;
      &:last-child {
        border-bottom: none;
      }
    }
  }
}
</style>
