<template>
  <div class="component-flex-page form-upload">
    <div class="wrapper">
      <upload></upload>
    </div>
  </div>
</template>

<script>
import Upload from '@/components/upload'

export default {
  name: 'form-upload',
  props: {
  },
  components: {
    Upload
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
.form-upload{
  .wrapper{
    width: 500px;
  }
}
</style>
