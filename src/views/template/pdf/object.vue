<template>
  <div class="component-flex-page template-pdf-object">
    <div class="pdf-wrapper">
      <object class="resources" id="resources-pdf" type="application/pdf" internalinstanceid="291" :data="pdfUrl" title="">
        <p>抱歉，您的浏览器不支持PDF预览，请点击链接下载PDF文件：<a :href="pdfUrl">{{pdfUrl}}</a></p>
      </object>
    </div>
  </div>
</template>

<script>

export default {
  name: 'template-pdf',
  props: {
  },
  components: {
  },
  data () {
    return {
      pdfUrl: 'https://cdn.qlippie.com/pdf/Egame_Brandbook.pdf'
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
.template-pdf-object{
  .pdf-wrapper{
    width: 100%;
    height: 100%;
    .resources {
      width: 100%;
      height: 100%;
      transition: all .8s cubic-bezier(0.165, 0.84, 0.44, 1) .1s;
      animation-fill-mode: forwards;
      animation-direction: alternate;
    }
    object{
      animation-duration: .001s;
      animation-name: playerInserted;
    }
  }

}
</style>
