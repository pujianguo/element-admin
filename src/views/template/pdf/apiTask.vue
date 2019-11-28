<template>
  <!-- pdf流文件加载，使用createLoadingTask创建资源 -->
  <div class="component-flex-full template-pdf-apitask">
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
        <el-button type="text" size="small">页面加载成功: {{curPageNum}}</el-button>
      </div>
    </div>
    <div class="content" :style="{'width': `${width}%`, 'overflow': loading ? 'hidden' : 'auto'}" v-loading="loading">
      <pdf
        class="pdf"
        ref="pdf"
        :src="pdfUrl"
        :page="pageNum"
        :rotate="pageRotate"
        @loaded="docLoaded($event)"
        @link-clicked="page = $event"
        @page-loaded="pdfPageLoaded($event)"
      >
      </pdf>
    </div>
  </div>
</template>
<script>
import pdf from 'vue-pdf'
export default {
  name: 'template-pdf-apitask',
  components: {
    pdf
  },
  data () {
    return {
      pdfUrl: null,
      url: 'https://cdn.qlippie.com/pdf/Egame_Brandbook.pdf',
      pageNum: 1,
      pageNums: 1,
      pageRotate: 0,
      loadedRatio: 0, // 加载进度
      curPageNum: 0,
      width: 50,
      loading: false
    }
  },
  methods: {
    initPdf () {
      // 可以将认证信息放在请求头
      let headers = {
      }
      let loadingTask = pdf.createLoadingTask({
        url: this.url,
        httpHeaders: headers
      })
      this.loading = true
      loadingTask.then(pdf => {
        this.pdfUrl = loadingTask
        this.pageNums = pdf.numPages
        this.loading = false
      }).catch(err => {
        console.log('加载失败：', err)
        this.loading = false
      })
    },

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
    docLoaded () {
      console.log('文件加载完成')
    },
    pdfPageLoaded (e) {
      console.log(`第${e}页加载完毕`)
      this.curPageNum = e
    }
  },
  mounted () {
    this.initPdf()
  }
}
</script>
<style lang="scss">
@import '~styles/mixins.scss';
.template-pdf-apitask{
  box-sizing: border-box;
  flex-direction: column;
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
    .pdf{
      padding: 0 10px;
    }
  }
}
</style>
