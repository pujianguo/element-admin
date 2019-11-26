<template>
  <div class="component-table">
    <div class="table-header">
      <div class="table-header-left">
        <slot name="handleUpLeftButtons"></slot>
      </div>
      <div class="table-header-right">
        <slot name="handleUpRightButtons"></slot>
      </div>
    </div>
    <div class="table-content">
      <slot name="table"></slot>
    </div>
    <div class="table-footer">
      <div class="ftable-ooter-left">
        <slot name="handleBottomLeftButtons"></slot>
      </div>
      <div class="table-footer-right">
        <el-pagination
          layout="prev, pager, next"
          :page-size="page.size"
          :current-page.sync="page.current"
          :total="page.total"
          @current-change="handleCurrentChange"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'component-table',
  props: {
    page: {
      type: Object,
      default: () => {
        return {
          total: 100,
          size: 10,
          current: 1
        }
      }
    }
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
    handleCurrentChange () {
      this.$emit('currentChange')
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
.component-table{
  .table-header{
    // margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    &-left{
      .el-form-item{
        margin-bottom: 10px;
      }
    }
    &-right{
      .el-button{
        margin-bottom: 10px;
      }
    }
  }
  .table-content{

  }
  .table-footer{
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    &-left{
    }
    &-right{
    }
  }
}
</style>
