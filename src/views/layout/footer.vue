<template>
  <div class="layout-footer">
    {{config.footerText}}
  </div>
</template>

<script>
export default {
  name: 'layout-footer',
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

<style lang="scss">
@import '~styles/mixins.scss';
.layout-footer{
  font-size: 12px;
  text-align: center;
}
</style>
