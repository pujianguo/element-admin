<template>
  <div class="component-flex-page template-user-detail" v-loading="loading">
    <el-form class="detail-form" v-if="detailData" ref="detailData" :model="detailData" size="small" label-width="100px">
      <el-form-item label="姓名：">
        <span>{{ detailData.name }}</span>
      </el-form-item>
      <el-form-item label="性别：">
        <span>{{ detailData.sex }}</span>
      </el-form-item>
      <el-form-item label="年龄：">
        <span>{{ detailData.age }}</span>
      </el-form-item>
      <el-form-item label="生日：">
        <span>{{ detailData.birth }}</span>
      </el-form-item>
      <el-form-item label="地址：" prop="addr">
        <span>{{ detailData.addr }}</span>
      </el-form-item>
    </el-form>
    <div class="empty-page" v-else>
      暂无数据
    </div>
  </div>
</template>

<script>
import { getUser } from '@/api/api'
export default {
  name: 'template-user-detail',
  props: {
  },
  components: {
  },
  data () {
    return {
      loading: false,
      detailData: null
    }
  },
  computed: {
    id () {
      return this.$route.params.id
    }
  },
  watch: {
    id () {
      this.getData()
    }
  },
  methods: {
    getData () {
      this.loading = true
      getUser(this.id).then(res => {
        if (res && res.data) {
          this.detailData = res.data
        } else {
          this.$message({
            type: 'warning',
            message: '获取用户信息失败！'
          })
        }
        this.loading = false
      }).catch(() => {
        this.loading = false
        this.$message({
          type: 'warning',
          message: '获取用户信息失败！'
        })
      })
    }
  },
  created () {
  },
  mounted () {
    this.getData()
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';
.template-user-detail{
}
</style>
