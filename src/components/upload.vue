<template>
  <div class="component-upload">
    <el-upload
      class="upload-demo"
      ref="upload"
      action=""
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-upload="handleUpload"
    >
      <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    <div class="file-list">
      <div class="item" v-for="(item, index) in fileList" :key="index">
        <div class="title">{{item.fileName}}</div>
        <div class="percent">
          <el-progress :percentage="item.percent" :status="item.status">
            <span v-if="item.status === 'text'">{{item.percent}}%</span>  <!-- 有status时，不会显示百分比，需要自己写出来 -->
          </el-progress>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getUpToken } from '@/api/api'
import * as qiniu from 'qiniu-js'

export default {
  name: 'component-upload',
  props: {
    initStatus: {
      type: Boolean,
      default: false
    }
  },
  components: {
  },
  data () {
    return {
      file: null,
      fileList: [],
      subscription: null
    }
  },
  computed: {
  },
  watch: {
    initStatus () {
      this.fileList = []
    }
  },
  methods: {
    submitUpload () {
      this.$refs.upload.submit()
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    },
    handleUpload (file) {
      this.file = file
      this.upload()
      return false
    },
    async upload () {
      let file = this.file
      let key = file.name
      this.fileList.push({
        fileName: file.name,
        percent: 0,
        status: 'text'
      })
      let filePercent = this.fileList[this.fileList.length - 1]
      let token = ''
      let tokenRes = await getUpToken()
      console.log('tokenRes', tokenRes)
      if (tokenRes) {
        token = tokenRes.token
      }
      let config = {
        useCdnDomain: true,
        region: qiniu.region.z1
      }
      let putExtra = {
        fname: '',
        params: {},
        mimeType: null
        // mimeType: ["image/png", "image/jpeg", "image/gif"]
      }

      let next = (response) => {
        let total = response.total
        console.log('percent', total.percent)
        filePercent.percent = Math.floor(total.percent)
      }
      let error = (error) => {
        let message = ''
        if (error.isRequestError) {
          message = error.message
          // message: "xhr request failed, code: 403; response: {"error":"key doesn't match with scope"}"
          let reg = /({"error":"(.*)"})/
          let res = message.match(reg)
          message = res[2] ? res[2] : message
        } else { // 前端验证失败,如类型
          message = error.message
        }
        console.log('upload error: ', message)
        filePercent.status = 'exception'
        this.$message.error('上传失败：' + message)
      }
      let complete = (response) => {
        filePercent.percent = 100
        filePercent.status = 'success'
        this.$message.success('上传成功')
      }

      // 调用sdk上传接口获得相应的observable，控制上传和暂停
      let observable = qiniu.upload(file, key, token, putExtra, config)
      this.subscription = observable.subscribe(next, error, complete)
      // subscription.unsubscribe() // 上传取消
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
.component-upload{
  .file-list{
    .item{
      display: flex;
      height: 20px;
      line-height: 20px;
      .title{
        width: 150px;
        padding-right: 10px;
        text-align: right;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .percent{
        flex: 1;
      }
    }
  }
}
</style>
