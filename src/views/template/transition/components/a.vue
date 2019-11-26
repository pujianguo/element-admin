<template>
  <div class="template-transition-a">
    <h1>A页面</h1>
    <pre>
      使用页面切换动画效果
      1.安装vue-transition.css组件
        <code>npm install vue-transition.css --save</code>
      2.在页面引入文件，一般在app.vue中引入
        <code>import 'vue-transition.css'</code>
      3.在 router-view 标签外加上标签 transition, 并指定过度方法名称
      4.各过度效果及方法名称如下所示

      5. 可以将npm 组件库中的vue-transition.css组件的transition.css文件保存到本地，直接引入transition.css文件，就不用安装组建了。
      如本例中就引入当前文件夹下的transition.css文件，就不用安装组建了。如本例中就引入当前文件夹下的transition
        <code>import './transition.css'</code>
    </pre>
  </div>
</template>

<script>
export default {
  name: 'template-transition-a',
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
.template-transition-a{
  width: 100%;
  height: 300px;
  padding: 10px;
  background: #e5d1d1;
  overflow: hidden;
}
</style>
