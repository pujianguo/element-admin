<template>
  <div class="template-transition-b">
    <h1>B页面</h1>
    <pre>
* 查看所有标签： git tag
* 创建标签：git tab $name
* 指定提示信息：git tag -a $name -m "comment"
* 删除标签：git tag -d $name
* 标签发布： git push origin $name
    </pre>
  </div>
</template>

<script>
export default {
  name: 'template-transition-b',
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
.template-transition-b{
  width: 100%;
  padding: 10px;
  height: 300px;
  background: #bddfbd;
  overflow: hidden;
}
</style>
