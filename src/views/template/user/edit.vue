<template>
  <div class="component-flex-page template-user-edit" v-loading="loading">
    <el-form class="user-eidt-form" ref="editForm" :model="editForm" :rules="editFormRule" size="small" label-width="100px">
      <el-form-item label="姓名：" prop="name">
        <el-input v-model.trim="editForm.name" placeholder="请填写姓名"></el-input>
      </el-form-item>
      <el-form-item label="性别：" prop="sex">
        <el-radio-group v-model="editForm.sex">
          <el-radio :label="1">男</el-radio>
          <el-radio :label="0">女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="年龄：" prop="age">
        <el-input-number v-model.trim="editForm.age" :min="1" :max="120" controls-position="right"></el-input-number>
      </el-form-item>
      <el-form-item label="生日：" prop="birth">
        <el-date-picker v-model="editForm.birth" value-format="yyyy-MM-dd" type="date" placeholder="选择日期"></el-date-picker>
      </el-form-item>
      <el-form-item label="地址：" prop="addr">
        <el-input v-model.trim="editForm.addr" placeholder="请填写地址"></el-input>
      </el-form-item>
      <el-form-item class="form-item-footer">
        <el-button @click="resetForm" size="small">重 置</el-button>
        <el-button type="primary" @click="submitEditForm" :loading="editSubmitBtnLoading" size="small">确 定</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getUser, addUser, updateUser } from '@/api/api'

let defaultForm = {
  name: '',
  sex: 1,
  age: 23,
  birth: '',
  addr: ''
}
let editFormRule = {
  name: [
    { required: true, type: 'string', message: '请填写姓名', trigger: 'change' }
  ],
  sex: [
    { required: true, type: 'number', message: '请选择性别', trigger: 'change' }
  ],
  age: [
    { required: true, type: 'number', message: '请填写年龄', trigger: 'blur' }
  ],
  birth: [
    { required: true, type: 'string', message: '请选择生日', trigger: 'blur' }
  ],
  addr: [
    { required: true, type: 'string', message: '请填写地址', trigger: 'blur' }
  ]
}

export default {
  name: 'template-user-edit',
  props: {
  },
  components: {
  },
  data () {
    return {
      loading: false,
      editSubmitBtnLoading: false,
      defaultForm: this.func.copy(defaultForm),
      editForm: this.func.copy(defaultForm),
      editFormRule: editFormRule
    }
  },
  computed: {
    id () {
      return this.$route.params.id
    },
    routerName () {
      return this.$route.name
    },
    isUpdate () {
      return this.routerName === 'User_Update'
    }
  },
  watch: {
  },
  methods: {
    initData () {
      if (this.isUpdate) {
        this.getData()
      } else {
        this.editForm = this.func.copy(this.defaultForm)
      }
    },
    getData () {
      this.loading = true
      getUser(this.id).then(res => {
        if (res && res.data) {
          this.defaultForm = res.data
          this.editForm = this.func.copy(res.data)
        } else {
          this.$message({ type: 'warning', message: '获取数据失败' })
        }
        this.loading = false
      }).catch(() => {
        this.loading = false
      })
    },
    resetForm (formName) {
      this.$refs['editForm'].resetFields()
      if (this.isUpdate) {
        this.editForm = this.func.copy(this.defaultForm)
      }
    },
    submitEditForm () {
      this.$refs['editForm'].validate((valid) => {
        if (valid) {
          if (this.isUpdate) {
            this.updateData()
          } else {
            this.addData()
          }
        } else {
          this.$message({ type: 'error', message: '表单校验失败' })
        }
      })
    },
    addData () {
      let data = this.func.copy(this.editForm)
      this.editSubmitBtnLoading = true
      addUser(data).then(res => {
        this.$message({ type: 'success', message: '添加成功' })
        this.goListPage()
        this.editSubmitBtnLoading = false
      }).catch(() => {
        this.editSubmitBtnLoading = false
      })
    },
    updateData () {
      let data = this.func.copy(this.editForm)
      this.editSubmitBtnLoading = true
      updateUser(this.id, data).then(res => {
        this.$message({ type: 'success', message: '修改成功' })
        this.goListPage()
        this.editSubmitBtnLoading = false
      }).catch(() => {
        this.editSubmitBtnLoading = false
      })
    },

    goListPage () {
      this.$router.push({
        name: 'User'
      })
    }
  },
  created () {
  },
  mounted () {
    this.initData()
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';
.template-user-edit{
  .user-eidt-form{
    width: 600px;
  }
}
</style>
