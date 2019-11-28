<template>
  <div class="component-flex-page form-codemirror">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>Codemirror</span>
        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
      </div>
      <codemirror v-model="content" :options="editorOption"></codemirror>

    </el-card>
  </div>
</template>

<script>
import { codemirror } from 'vue-codemirror'
// require styles
import 'codemirror/lib/codemirror.css'
// language js
import 'codemirror/mode/nginx/nginx.js'
// theme css
import 'codemirror/theme/solarized.css'
// 绑定sublime
import 'codemirror/keymap/sublime.js'
// more codemirror resources
// import 'codemirror/some-resource...'
// 全屏显示需要引入的文件
// require('codemirror/addon/display/fullscreen.css')
// require('codemirror/addon/display/fullscreen.js')

import { codemirrorEditorOption } from '@/utils/const'

export default {
  name: 'form-codemirror',
  props: {
  },
  components: {
    codemirror
  },
  data () {
    return {
      content: content,
      editorOption: codemirrorEditorOption
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
let content = `
user  nginx;
worker_processes  1;

error_log  /var/log/nginx/error.log warn;
pid        /var/run/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    keepalive_timeout  65;

    gzip  on;

    server {
        listen       80;
        server_name  _;

        location / {
            root   /var/www/html;
            try_files $uri $uri/ /index.html =404;
        }
    }
}
`
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';
.form-codemirror{
  .CodeMirror {
    height: 360px;
  }
  .CodeMirror-fullscreen {
    z-index: 9999;
  }
}
</style>
