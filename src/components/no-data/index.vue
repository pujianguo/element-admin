<template>
  <div class="no-data">
   <img class="no-data-img" src="./nodata.png">
   <span class="no-data-text">{{text}}</span>
  </div>
</template>
<script>
export default {
  name: 'no-data',
  props: {
    text: {
      type: String,
      default: '暂无数据'
    }
  }
}
</script>

<style lang="scss">
.no-data{
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100px;
  &-img{
    width: 100%;
  }
  &-text{
    margin-top: 10px;
    text-align: center;
    color: #a3a3a3;
  }
}
</style>
