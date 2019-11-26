<template>
  <div class="component-info-card2">
     <!-- <el-row :gutter="10">
      <el-col :xs="24" :sm="12" :md="8" :lg="4" v-for="(item, index) in items" :key="index">
        <div class="card-panel" @click="clickPanel(item.title)">
          <div class="icon-wrapper" :style="`color: ${item.color};`" @mouseover="over">
            <i :class="item.icon"></i>
          </div>
          <div class="message-wrapper">
            <div class="message-count">
              <count-up :value="item.count"></count-up>
            </div>
            <div class="message-text">{{item.title}}</div>
          </div>
        </div>
      </el-col>
    </el-row> -->
    <el-row :gutter="10">
      <el-col :xs="24" :sm="12" :md="8" :lg="4">
        <div class="card-panel" @click="clickPanel(1)">
          <div class="icon-wrapper icon-1">
            <i class="el-icon-circle-plus-outline"></i>
          </div>
          <div class="message-wrapper">
            <div class="message-count">
              <count-up :value="531"></count-up>
            </div>
            <div class="message-text">新增用户</div>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="8" :lg="4">
        <div class="card-panel" @click="clickPanel(2)">
          <div class="icon-wrapper icon-2">
            <i class="el-icon-view"></i>
          </div>
          <div class="message-wrapper">
            <div class="message-count">
              <count-up :value="2343"></count-up>
            </div>
            <div class="message-text">累计点击</div>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="8" :lg="4">
        <div class="card-panel" @click="clickPanel(3)">
          <div class="icon-wrapper icon-3">
            <i class="el-icon-edit-outline"></i>
          </div>
          <div class="message-wrapper">
            <div class="message-count">
              <count-up :value="3234"></count-up>
            </div>
            <div class="message-text">新增问答</div>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="8" :lg="4">
        <div class="card-panel" @click="clickPanel(4)">
          <div class="icon-wrapper icon-4">
            <i class="el-icon-share"></i>
          </div>
          <div class="message-wrapper">
            <div class="message-count">
              <count-up :value="2654"></count-up>
            </div>
            <div class="message-text">分享统计</div>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="8" :lg="4">
        <div class="card-panel" @click="clickPanel(5)">
          <div class="icon-wrapper icon-5">
            <i class="el-icon-phone-outline"></i>
          </div>
          <div class="message-wrapper">
            <div class="message-count">
              <count-up :value="234"></count-up>
            </div>
            <div class="message-text">新增互动</div>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="8" :lg="4">
        <div class="card-panel" @click="clickPanel(6)">
          <div class="icon-wrapper icon-6">
            <i class="el-icon-document"></i>
          </div>
          <div class="message-wrapper">
            <div class="message-count">
              <count-up :value="32"></count-up>
            </div>
            <div class="message-text">新增页面</div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import CountUp from '@/components/countup'
export default {
  name: 'component-info-card2',
  props: {
    items: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  components: {
    CountUp
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
    clickPanel (title) {
      console.log(title)
      // this.$emit('click', type)
    },
    over ($event) {
      console.log($event)
    }
  },
  created () {
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';
.component-info-card2{
  width: 100%;
  .card-panel{
    margin: 10px;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
    border-color: rgba(0, 0, 0, 0.05);
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    transition: all 1s;
    .icon-wrapper{
      border-radius: 5px;
      width: 80px;
      height: 80px;
      margin: 10px;
      @include flex-center();
      transition: all .3s;
      i{
        font-size: 48px;
        transition: all .3s;
      }
      &.icon-1{
        color: rgb(45, 140, 240);
      }
      &.icon-2{
        color: rgb(25, 190, 107);
      }
      &.icon-3{
        color: rgb(255, 153, 0);
      }
      &.icon-4{
        color: rgb(237, 63, 20);
      }
      &.icon-5{
        color: rgb(228, 108, 187);
      }
      &.icon-6{
        color: rgb(154, 102, 228);
      }
    }
    .message-wrapper{
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .message-count{
        font-size: 30px;
        color: #666;
        font-weight: bold;
        text-align: center;
        width: 100px;
      }
      .message-text{
        margin-top: 10px;
        text-align: center;
        font-size: 14px ;
        width: 100px;
      }
    }
    &:hover{
      .icon-wrapper{
        i{
          color: #fff;
        }
        &.icon-1{
          background-color: rgb(45, 140, 240);
        }
        &.icon-2{
          background-color: rgb(25, 190, 107);
        }
        &.icon-3{
          background-color: rgb(255, 153, 0);
        }
        &.icon-4{
          background-color: rgb(237, 63, 20);
        }
        &.icon-5{
          background-color: rgb(228, 108, 187);
        }
        &.icon-6{
          background-color: rgb(154, 102, 228);
        }
      }
    }
  }
}
</style>
