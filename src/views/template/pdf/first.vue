<template>
  <div class="component-flex-page template-pdf-first">
    <router-link :to="{name: 'Pdf_Object'}">
      <el-button>object</el-button>
    </router-link>
    <div class="desc">
      <el-alert type="info" show-icon :closable="false"
        title="使用<object>标签来展示pdf文件"></el-alert>
    </div>
    <hr>
    <router-link class="page-tab" :to="{name: 'Pdf_Apione'}">
      <el-button>api实现分页展示</el-button>
    </router-link>
    <router-link class="page-tab" :to="{name: 'Pdf_Apitask'}">
      <el-button>createLoadingTask</el-button>
    </router-link>
    <router-link class="page-tab" :to="{name: 'Pdf_Apiall'}">
      <el-button>api实现全部展示</el-button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'template-pdf-first',
  props: {
  },
  components: {
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
.template-pdf-first{
  .page-tab{
    margin: 0 10px;
  }
}
</style>
