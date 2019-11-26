<template>
  <div class="component-flex-page template-user-list">
    <el-alert style="margin-bottom: 20px;"
      title="提示的文案"
      type="info"
      :closable="false"
      show-icon>
    </el-alert>

    <c-table :page="page" @currentChange="currentChange">
      <div slot="handleUpLeftButtons">
        <el-form :inline="true" :model="search" class="demo-form-inline" size="mini">
            <el-form-item label="年龄">
              <el-input v-model.trim="search.age" placeholder="年龄"></el-input>
            </el-form-item>
            <el-form-item label="城市">
              <el-select v-model="search.city" placeholder="城市">
                <el-option v-for="item in cityList" :key="item" :label="item" :value="item"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button size="mini" type="primary" @click="searchHandle">查询</el-button>
            </el-form-item>
        </el-form>
      </div>
      <div slot="handleUpRightButtons">
        <el-button size="mini" type="success" @click="openAddDialog">添加用户</el-button>
        <el-button size="mini" type="success" @click="goAddPage">添加用户（page）</el-button>
        <el-tooltip effect="light" content="刷新" placement="top">
          <el-button size="mini" type="info" icon="el-icon-refresh" @click="refresh" :loading="tableLoading"></el-button>
        </el-tooltip>
        <el-tooltip effect="light" content="导出资源列表" placement="top">
          <el-button size="mini" type="info" icon="el-icon-download" @click="download"></el-button>
        </el-tooltip>
        <el-tooltip effect="light" content="自定义列表项" placement="top">
          <el-button size="mini" type="info" icon="el-icon-setting" @click="settingField"></el-button>
        </el-tooltip>
      </div>
      <div slot="table">
        <el-table
        v-loading="tableLoading"
        :data="userList"
        border
        @selection-change="handleSelectionChange"
        style="width: 100%">
          <el-table-column
            align="center" header-align="center"
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column prop="name" label="用户名" width="180"></el-table-column>
          <el-table-column prop="sex" label="性别" width="80">
            <template slot-scope="scope">{{ scope.row.sex | sex }}</template>
          </el-table-column>
          <el-table-column prop="age" label="年龄" width="80"></el-table-column>
          <el-table-column prop="birth" label="生日" width="180"></el-table-column>
          <el-table-column prop="addr" label="地址" min-width="180" show-overflow-tooltip></el-table-column>
          <el-table-column label="操作" width="180">
            <template slot-scope="scope">
              <el-button type="text" @click="showDetail(scope.row)">查看</el-button>
              <el-button type="text" @click="goDetailPage(scope.row)">查看2</el-button>
              <el-button type="text" @click="openUpdateDialog(scope.row)">编辑</el-button>
              <el-button type="text" @click="goUpdatePage(scope.row)">编辑2</el-button>
              <el-button type="text" @click="confirmDelete(scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div slot="handleBottomLeftButtons">
        <el-button size="mini" type="danger" @click="confirmBatchDelete" :disabled="!batchEnabled">删除</el-button>
      </div>
    </c-table>

    <!-- 用户信息编辑框 -->
    <el-dialog :title="editForm.action === 'eidt' ? '修改用户' : '添加用户'" :visible.sync="editDialogVisible" width="600px">
      <el-form ref="editForm" :model="editForm" :rules="editFormRule" size="small" label-width="100px">
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
          <el-input v-focus v-model.trim="editForm.addr" placeholder="请填写地址"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeEditDialog" size="small">取 消</el-button>
        <el-button type="primary" @click="submitEditForm" :loading="editSubmitBtnLoading" size="small">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 详情展示框 -->
    <el-dialog title="用户信息" :visible.sync="infoDialogVisible" width="600px">
      <el-form class="detail-form" ref="detailData" :model="detailData" size="small" label-width="100px">
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
    </el-dialog>
  </div>
</template>

<script>
import CTable from 'components/table'
import { listUsers, addUser, updateUser, deleteUser } from '@/api/api'

let defaultForm = {
  action: 'add',
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
  name: 'template-user-list',
  props: {
  },
  components: {
    CTable
  },
  data () {
    return {
      editDialogVisible: false,
      editSubmitBtnLoading: false,
      editForm: this.func.copy(defaultForm),
      editFormRule: editFormRule,

      infoDialogVisible: false,
      detailData: {},

      search: {
        age: '',
        city: ''
      },
      page: {
        current: 1,
        size: 10,
        total: 0
      },
      cityList: ['北京', '上海', '广州'],
      userList: [],
      tableLoading: false,
      selectedTable: []
    }
  },
  computed: {
    batchEnabled () {
      return this.selectedTable.length > 0
    }
  },
  watch: {
  },
  methods: {
    handleSelectionChange (vals) {
      this.selectedTable = vals
    },
    refresh () {
      this.getData()
    },
    currentChange () {
      this.getData()
    },
    searchHandle () {
      this.page.current = 1
      this.getData()
    },
    getData () {
      this.tableLoading = true
      let query = {
        limit: this.page.size,
        offset: (this.page.current - 1) * this.page.size,
        age: this.search.age,
        city: this.search.city
      }
      listUsers(query).then(res => {
        this.userList = res.items || []
        this.page.total = res.total
        this.tableLoading = false
      }).catch(() => {
        this.userList = []
        this.tableLoading = false
      })
    },

    showDetail (row) {
      this.detailData = this.func.copy(row)
      this.infoDialogVisible = true
    },

    // eidt
    resetForm (formName) {
      if (this.$refs[formName]) {
        this.$refs[formName].resetFields()
      }
    },
    closeEditDialog () {
      this.editDialogVisible = false
      this.resetForm('editForm')
    },
    openAddDialog () {
      this.resetForm('editForm')
      this.editSubmitBtnLoading = false
      this.editForm = this.func.copy(defaultForm)
      this.editDialogVisible = true
    },
    openUpdateDialog (row) {
      this.resetForm('editForm')
      this.editSubmitBtnLoading = false
      this.editForm = this.func.copy(row)
      this.editForm.action = 'update'
      this.editDialogVisible = true
    },
    submitEditForm () {
      this.$refs['editForm'].validate((valid) => {
        if (valid) {
          if (this.editForm.action === 'update') {
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
      delete data.action
      this.editSubmitBtnLoading = true
      addUser(data).then(res => {
        this.$message({ type: 'success', message: '添加成功' })
        this.refresh()
        this.closeEditDialog()
        this.editSubmitBtnLoading = false
      }).catch(() => {
        this.editSubmitBtnLoading = false
      })
    },
    updateData () {
      let data = this.func.copy(this.editForm)
      delete data.action
      this.editSubmitBtnLoading = true
      updateUser(data.id, data).then(res => {
        this.$message({ type: 'success', message: '修改成功' })
        this.refresh()
        this.closeEditDialog()
        this.editSubmitBtnLoading = false
      }).catch(() => {
        this.editSubmitBtnLoading = false
      })
    },

    // delete
    confirmDelete (row) {
      this.$confirm(`此操作将永久删除用户 ${row.name}, 是否继续?`, '提示', {
        // confirmButtonText: '确定',
        // cancelButtonText: '取消',
        type: 'warning',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            instance.confirmButtonLoading = true
            instance.confirmButtonText = '执行中...'
            instance.showClose = false
            instance.closeOnClickModal = false
            instance.closeOnPressEscape = false
            instance.showCancelButton = false
            deleteUser(row.id).then(res => {
              this.refresh()
              this.$message({
                type: 'success',
                message: '删除成功'
              })
            }).finally(() => {
              done()
              setTimeout(() => {
                instance.confirmButtonLoading = false
              }, 300)
            })
          } else {
            done()
            this.$message({
              type: 'info',
              message: '已取消删除'
            })
          }
        }
      }).then(() => { // 在 beforeClose 中已经做了处理， 省略catch会提示错误
      }).catch(() => {
      })
    },
    confirmBatchDelete () {
      console.log('批量删除数据', this.selectedTable)
    },

    goDetailPage (row) {
      this.$router.push({
        name: 'User_Detail',
        params: {
          id: row.id
        }
      })
    },
    goUpdatePage (row) {
      this.$router.push({
        name: 'User_Update',
        params: {
          id: row.id
        }
      })
    },
    goAddPage () {
      this.$router.push({
        name: 'User_Add'
      })
    },

    download () {
      this.$message({
        type: 'info',
        message: '该功能尚未开通'
      })
    },
    settingField () {
      this.$message({
        type: 'info',
        message: '该功能尚未开通'
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
.template-user-list{
}
</style>
