<template>
  <div class="component-flex-full template-pdf-apiall">
     <div class="header">
      <div class="pdf-list">
        <span>切换文件：</span>
        <el-button v-for="(item, index) in pdfList" :key="index" size="small"
          :type="index === currentIndex ? 'primary' : 'default'"
          @click.stop="changePdf(item.pdfUrl, index)"
        >{{item.title}}</el-button>
      </div>
      <div class="handle-btns">
        <el-button type="primary" size="small" @click.stop="clock">顺时针</el-button>
        <el-button type="primary" size="small" @click.stop="counterClock">逆时针</el-button>
        <el-slider class="handle-slider" v-model="width" :min="30"></el-slider>
      </div>
    </div>
    <div class="pdf-content" :style="{'width': `${width}%`, 'overflow': loading ? 'hidden' : 'auto'}" v-loading="loading">
      <pdf
        class="pdf"
        :rotate="pageRotate"
        v-for="i in numPages"
        :key="i"
        :src="pdfUrl"
        :page="i">
      >
      </pdf>
    </div>
  </div>
</template>
<script>
import pdf from 'vue-pdf'

export default {
  name: 'template-pdf-apiall',
  components: {
    pdf
  },
  data () {
    return {
      pdfUrl: null,
      pageRotate: 0,
      numPages: 1,
      width: 50,
      loading: false,
      currentIndex: 0,
      myIndex: 0,
      pdfList: [
        {
          pdfUrl: 'https://dakaname.oss-cn-hangzhou.aliyuncs.com/file/2018-12-29/1546049718768.pdf',
          title: '你好，2019年'
        },
        {
          pdfUrl: 'http://file.gp58.com/file/2018-11-14/111405.pdf',
          title: '中信证券观点'
        },
        {
          pdfUrl: 'https://dakaname.oss-cn-hangzhou.aliyuncs.com/file/2018-12-28/1546003237411.pdf',
          title: '12月投资月刊'
        },
        {
          pdfUrl: 'https://dakaname.oss-cn-hangzhou.aliyuncs.com/file/2018-12-28/1546003282521.pdf',
          title: '丰岭资本观点'
        }
      ]
    }
  },
  methods: {
    initPdf (url = null) {
      if (!url) {
        url = this.pdfList[0].pdfUrl
      }
      let headers = {
      }

      let loadingTask = pdf.createLoadingTask({
        url: url,
        httpHeaders: headers
      })
      this.loading = true
      loadingTask.then(pdf => {
        this.pdfUrl = loadingTask
        this.numPages = pdf.numPages
        this.loading = false
      }).catch(err => {
        console.log('加载失败：', err)
        this.loading = false
      })
    },
    changePdf (pdfUrl, index) {
      if (index === this.currentIndex) {
        return
      }
      this.currentIndex = index
      this.pdfUrl = null
      this.initPdf(pdfUrl)
    },

    clock () {
      this.pageRotate += 90
    },
    counterClock () {
      this.pageRotate -= 90
    }
  },
  mounted: function () {
    this.initPdf()
  }
}
</script>
<style lang="scss">
@import '~styles/mixins.scss';
.template-pdf-apiall{
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  flex-direction: column;
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
  .pdf-content{
    flex: 1;
    margin: 0 auto;
    overflow: auto;
    .pdf{
      padding: 0 10px;
    }
  }
}
</style>
