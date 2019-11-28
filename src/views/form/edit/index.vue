<template>
  <div class="component-flex-page form-edit">
     <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>富文本编辑器</span>
        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
      </div>

      <!-- 图片上传组件辅助-->
      <el-upload
        id="quill-upload"
        class="avatar-uploader"
        :action="serverUrl"
        name="img"
        :headers="header"
        :show-file-list="false"
        :on-success="uploadSuccess"
        :on-error="uploadError"
        :before-upload="beforeUpload">
      </el-upload>
      <!--富文本编辑器组件-->
      <el-row v-loading="quillUpdateImg">
        <quill-editor
          ref="textEditor"
          v-model="content"
          :options="editorOption"
          @blur="onEditorBlur($event)"
          @focus="onEditorFocus($event)"
          @ready="onEditorReady($event)"
          @change="onEditorChange($event)"
        >
        </quill-editor>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import { quillEditor } from 'vue-quill-editor'
// import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'

import { editorToolbarOptions } from '@/utils/const'

export default {
  name: 'form-edit',
  props: {
  },
  components: {
    quillEditor
  },
  data () {
    return {
      quillUpdateImg: false,
      serverUrl: '',
      header: { token: sessionStorage.token },
      content: '<h2>I am Example</h2>',
      editorOption: {
        modules: {
          toolbar: {
            container: editorToolbarOptions, // 工具栏
            handlers: {
              'image': function (value) {
                if (value) {
                  // 触发input框选择图片文件
                  document.querySelector('#quill-upload input').click()
                } else {
                  this.quill.format('image', false)
                }
              }
            }
          }
        }
      }
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
    // upload相关函数
    beforeUpload (file) { // 上传图片前
      // 显示loading动画
      this.quillUpdateImg = true
      console.log('beforeUpload', file)
      // 这里可以参考图片上传组件，手动控制上传，将文件上传的七牛云
    },
    uploadSuccess (res, file) { // 上传图片成功
      // 获取富文本组件实例
      let quill = this.$refs.textEditor.quill
      // 如果上传成功
      if (res.code === '200' && res.info !== null) {
        // 获取光标所在位置
        let length = quill.getSelection().index
        // 插入图片  res.info为服务器返回的图片地址
        quill.insertEmbed(length, 'image', res.info)
        // 调整光标到最后
        quill.setSelection(length + 1)
      } else {
        this.$message.error('图片插入失败')
      }
      this.quillUpdateImg = false
    },
    uploadError (res, file) { // 上传图片失败
      this.quillUpdateImg = false
      this.$message.error('图片插入失败')
    },

    // eidtor相关函数
    onEditorReady (editor) { // 准备编辑器
      console.log('editor ready!')
    },
    onEditorBlur (editor) { // 失去焦点事件
      console.log('editor blur!')
    },
    onEditorFocus (editor) { // 获得焦点事件
      console.log('editor focus!')
    },
    onEditorChange (editor) { // 内容改变事件
      console.log('editor change!')
    }
  },
  created () {
  },
  mounted () {
  }
}
</script>

<style lang="scss">
@import '~styles/mixins.scss';
.form-edit{
  .ql-container{
    min-height: 300px;
  }
}
</style>
