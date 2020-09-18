<template>
  <div class="component-flex-full template-pdf-apione">
    <div class="header">
      <div class="handle-btns">
        <el-button type="primary" size="small" @click.stop="prePage">上一页</el-button>
        <el-button type="primary" size="small" @click.stop="nextPage">下一页</el-button>
        <el-button type="primary" size="small" @click.stop="clock">顺时针</el-button>
        <el-button type="primary" size="small" @click.stop="counterClock">逆时针</el-button>
        <el-button type="primary" size="small" @click.stop="pdfPrintAll">全部打印</el-button>
        <el-button type="primary" size="small" @click.stop="pdfPrint">部分打印</el-button>
        <el-slider class="handle-slider" v-model="width" :min="30"></el-slider>
      </div>
      <div class="status">
        <el-button type="text" size="small">{{pageNum}}/{{pageNums}}</el-button>
        <el-button type="text" size="small">进度：{{loadedRatio}}</el-button>
        <el-button type="text" size="small">页面加载成功: {{curPageNum}}</el-button>
      </div>
    </div>
    <div class="content" :style="{'width': `${width}%`, 'overflow': loading ? 'hidden' : 'auto'}" v-loading="loading">
      <pdf
        ref="pdf"
        :src="pdfUrl"
        :page="pageNum"
        :rotate="pageRotate"
        @num-pages="pageNums=$event"
        @link-clicked="page = $event"
        @progress="pdfProgress($event)"
        @page-loaded="pdfPageLoaded($event)"
        @password="pdfPassword($event)"
        @error="pdfError($event)">
      </pdf>
    </div>
  </div>
</template>
<script>
import pdf from 'vue-pdf'
export default {
  name: 'template-pdf-apione',
  components: {
    pdf
  },
  data () {
    return {
      pdfUrl: 'http://file.gp58.com/file/2018-11-14/111405.pdf',
      pageNum: 1,
      pageNums: 1,
      pageRotate: 0,
      loadedRatio: 0, // 加载进度
      curPageNum: 0,
      width: 50,
      loading: true
    }
  },
  mounted: function () {
  },
  methods: {
    // 页面上改变属性的按钮
    prePage () {
      let p = this.pageNum
      p = p > 1 ? p - 1 : this.pageNums
      this.pageNum = p
    },
    nextPage () {
      let p = this.pageNum
      p = p < this.pageNums ? p + 1 : 1
      this.pageNum = p
    },
    clock () {
      this.pageRotate += 90
    },
    counterClock () {
      this.pageRotate -= 90
    },
    pdfPrintAll () {
      this.$refs.pdf.print()
    },
    pdfPrint () {
      this.$refs.pdf.print(100, [1, 2])
    },

    // pdf 事件
    pdfProgress (e) { // 加载完成的回调，参数为加载进度，0：未加载，1：加载完成
      if (e === 1) {
        this.loading = false
      }
      this.loadedRatio = e
    },
    pdfPassword (updatePassword, reason) {
      updatePassword(prompt('password is "test"'))
    },
    pdfPageLoaded (e) {
      console.log(`第${e}页加载完毕`)
      this.curPageNum = e
    },
    pdfError (error) {
      this.$message.error(error.message)
      console.error('pdf文件加在失败', error)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~styles/mixins.scss';
.template-pdf-apione{
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 20px;
  .header{
    height: 50px;
    display: flex;
    justify-content: space-between;
    .handle-btns{
      .handle-slider{
        display: inline-block;
        vertical-align: top;
        height: 32px;
        line-height: 32px;
        width: 200px;
        white-space: nowrap;
        text-align: center;
        box-sizing: border-box;
        padding: 0 20px;
        .el-slider__runway{
          margin: 13px 0;
        }
        .el-slider__button-wrapper{
          width: 32px;
          height: 32px;
          top: -13px;
        }
      }
    }
    .status{
    }
  }
  .content{
    flex: 1;
    margin: 0 auto;
    overflow: auto;
  }
}
</style>
