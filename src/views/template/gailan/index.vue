<template>
  <div class="component-flex-page template-gailan">
    <el-card class="box-card">
      <div slot="header">
        <span>概览统计1</span>
      </div>
      <div class="info-card1">
        <info-card v-for="(item, index) in cardData" :key="index" :cardData="item" class="card-item"></info-card>
      </div>
    </el-card>

    <el-card class="box-card">
      <div slot="header">
        <span>概览统计2</span>
      </div>
      <div class="info-card2">
        <info-card2  :items="cardData2" class="card-item"></info-card2>
      </div>
    </el-card>
  </div>
</template>

<script>
import InfoCard from '@/components/card/infoCard'
import InfoCard2 from '@/components/card/infoCard2'

export default {
  name: 'template-gailan',
  props: {
  },
  components: {
    InfoCard,
    InfoCard2
  },
  data () {
    return {
      cardData: [
        {
          title: '分类统计',
          titleTip: '实时',
          count: 1234,
          footerTip: 21230,
          footerText: '当前分类总记录数',
          tip: '类',
          bgColor: 'rgb(49, 180, 141)'
        },
        {
          title: '附件统计',
          titleTip: '实时',
          count: 2456,
          footerTip: 23454,
          footerText: '当前上传的附件数',
          tip: '附',
          bgColor: 'rgb(56, 161, 242)'
        },
        {
          title: '文章统计',
          titleTip: '实时',
          count: 4522,
          footerTip: 51230,
          footerText: '评论次数',
          tip: '评',
          bgColor: 'rgb(117, 56, 199)'
        },
        {
          title: '新闻统计',
          titleTip: '实时',
          count: 4234,
          footerTip: 11230,
          footerText: '评论次数',
          tip: '新',
          bgColor: 'rgb(59, 103, 164)'
        }
      ],
      cardData2: [
        {
          title: '新增用户',
          count: 531,
          icon: 'el-icon-circle-plus-outline',
          color: 'rgb(45, 140, 240)'
        },
        {
          title: '累计点击',
          count: 2343,
          icon: 'el-icon-view',
          color: 'rgb(25, 190, 107)'
        },
        {
          title: '新增问答',
          count: 3234,
          icon: 'el-icon-edit-outline',
          color: 'rgb(255, 153, 0)'
        },
        {
          title: '分享统计',
          count: 2654,
          icon: 'el-icon-share',
          color: 'rgb(237, 63, 20)'
        },
        {
          title: '新增互动',
          count: 234,
          icon: 'el-icon-phone-outline',
          color: 'rgb(228, 108, 187)'
        },
        {
          title: '新增页面',
          count: 32,
          icon: 'el-icon-document',
          color: 'rgb(154, 102, 228)'
        }
      ]
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
.template-gailan{
  padding: 20px;
  .box-card{
    margin-bottom: 20px;
  }
  .info-card1{
    width: 100%;
    display: flex;
    justify-content: space-around;
    // flex-basis: auto;
  }
  .info-card2{
    width: 100%;
    display: flex;
    justify-content: space-around;
    background-color: #eee;
    // flex-basis: auto;
  }
}
</style>
