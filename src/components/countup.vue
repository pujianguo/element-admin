<template>
  <span ref='countup'></span>
</template>

<script>
import CountUp from 'countup'
let options = {
  useEasing: true,
  useGrouping: true,
  separator: ',',
  decimal: '.'
}
export default {
  name: 'countup-demo',
  data () {
    return {
      numAnim: null
    }
  },
  props: {
    value: {
      type: Number,
      default: 0
    },
    decimal: {
      type: Number,
      default: 0
    },
    start: {
      type: Number,
      default: 0
    },
    duration: {
      type: Number,
      default: 2
    },
    options: {
      type: Object
    }
  },
  watch: {
    value (value) {
      if (this.numAnim) {
        this.numAnim.update(value)
      } else {
        this.initCountUp()
      }
    }
  },
  mounted () {
    this.initCountUp()
  },
  methods: {
    initCountUp () {
      // 元素, startValue, endValue, 小数位数, 动画延迟秒数, options
      this.numAnim = new CountUp(this.$refs.countup, this.start, this.value, this.decimal, this.duration, options)
      this.numAnim.start()
      if (!this.numAnim.error) {
        this.numAnim.start()
      } else {
        console.error('countup error: ', this.numAnim.error)
      }
    }
  }
}
</script>
