<template>
  <div class="component-info-card" :style="`background: ${cardData.bgColor}`">
      <div class="item-header">
        <p>{{cardData.title}}</p>
        <span>{{cardData.titleTip}}</span>
      </div>
      <div class="item-body">
        <count-up :value="cardData.count"></count-up>
      </div>
      <div class="item-footer">
        <span>
          <count-up :value="cardData.footerTip"></count-up>
        </span>
        <p>{{cardData.footerText}}</p>
      </div>
      <div class="item-tip">{{cardData.tip}}</div>
    </div>
</template>

<script>
import CountUp from '@/components/countup'
export default {
  name: 'component-info-card',
  props: {
    cardData: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  components: {
    CountUp
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
  },
  created () {
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';
.component-info-card{
  flex: 1;
  box-sizing: border-box;
  position: relative;
  height: 140px;
  margin: 15px;
  padding: 12px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  color: #fff;
  .item-header{
    display: flex;
    justify-content: space-between;
    p{
      font-size: 14px;
    }
    span{
      display: block;
      padding: 2px 8px;
      border-radius: 4px;
      font-size: 12px;
      background: rgba(255, 255, 255, 0.3);
    }
  }
  .item-body{
    height: 60px;
    line-height: 60px;
    font-size: 30px;
  }
  .item-footer{
    span{
      font-size: 10px;
    }
    p{
      font-size: 12px;
      margin-top: 5px;
    }
  }
  .item-tip{
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    top: 10px;
    right: 10px;
    border: 2px solid #fff;
    border-radius: 100%;
    font-size: 48px;
    transform: rotate(-40deg);
    opacity: 0.1;
  }
}
</style>
