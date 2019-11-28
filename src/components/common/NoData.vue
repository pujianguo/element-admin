<template>
  <div class="no-data">
   <img class="no-data-img" :style="`width: ${width}px`" src="/images/nodata.png" v-if="!noImage">
   <div class="no-data-text">
     <slot>暂无数据</slot>
   </div>
  </div>
</template>
<script>
export default {
  name: 'no-data',
  props: {
    noImage: {
      type: Boolean,
      default: false
    },
    width: Number
  }
}
</script>

<style lang="scss">
.no-data{
  flex: 1;
  width: 100%;
  height: 100%;
  @include flex-center(column);
  padding: 20px;
  box-sizing: border-box;
  &-img{
    width: 100px;
    margin-bottom: 10px;
  }
  &-text{
    color: #a3a3a3;
    font-size: 14px;
    line-height: 2em;
  }
}
</style>
