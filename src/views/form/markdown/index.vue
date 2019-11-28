<template>
  <div class="component-flex-page form-markdown">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>MarkDown编辑器</span>
        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
      </div>
      <el-alert style="margin: 20px 0;">
          <p>mavonEditor：
          <a href="https://github.com/hinesboy/mavonEditor" target="_blank">Git</a>
          </p>
      </el-alert>

      <mavonEditor ref="md" v-model="value" @imgAdd="imgAdd" @imgDel="imgDel"></mavonEditor>
    </el-card>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>MarkDown展示</span>
        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
      </div>

      <div style="border: 1px solid #e5e8ee; padding: 20px;margin-top: 30px;">
        <mavonEditor ref="mdShow" v-model="value" :toolbarsFlag="false" :subfield="false" defaultOpen="preview"></mavonEditor>
      </div>
    </el-card>
  </div>
</template>

<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

export default {
  name: 'form-markdown',
  props: {
  },
  components: {
    mavonEditor
  },
  data () {
    return {
      value: ''
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
    // 上传图片功能可参考富文本编辑器中的上传方式
    imgAdd (pos, $file) {
      // 第一步.将图片上传到服务器.
      let formdata = new FormData()
      formdata.append('image', $file)
      console.log(formdata)
      // api.uploadImg(formdata).then(url => {
      //   // 第二步.将返回的url替换到文本原位置![...](./0) -> ![...](url)
      //   this.$refs.md.$img2Url(pos, url)
      // }).catch(err => {
      //   console.log('err: ', err)
      //   this.$message.warning('上传图片失败')
      // })
    },
    imgDel (file) {
      console.log('del', file)
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
.form-markdown{
  .box-card{
    margin-bottom: 20px;
  }
  .v-note-wrapper.fullscreen{
    z-index: 3000;
  }
}
</style>
