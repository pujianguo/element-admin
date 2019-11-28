<template>
  <div class="navbar-message" @mouseover="messageIsBlock = true" @mouseout="messageIsBlock = false">
    <div class="message">
      <i class="fa fa-bell-o" aria-hidden="true"></i>
      <div class="count" v-show="messageList.length"></div>
    </div>
    <div :class="['message-panel', {'message-panel_show': messageIsBlock}]">
      <div class="message-panel-header fx-flex-between" @click.stop="goMessageList()">
        <span class="left">
          <span v-if="messageList.length">共有{{messageList.length}}条未读消息</span>
        </span>
        <span class="fx-link">查看全部</span>
      </div>
      <div class="message-panel-list">
        <ul>
          <template v-for="(mess, i) in messageList" >
            <li :key="i" @click.stop="goMessageDetail(mess.id)">
                <div class="title"> {{mess.msg}}</div>
                <div class="date">{{mess.created | date}}</div>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      messageIsBlock: false,
      messageList: []
    }
  },
  computed: {
    // messageList () {
    //   return this.$store.state.common.messageList
    // },
  },
  methods: {
    goMessageList () {
      this.$message('给功能尚未开发')
    },
    goMessageDetail (id) {
      this.$message('给功能尚未开发')
    }
  },
  created () {
    let list = []
    for (let i = 1; i < 20; i++) {
      list.push({ id: i, msg: `我是第${i}条数据` })
    }
    this.messageList = list
  }
}
</script>
<style lang="scss">
.navbar-message{
  position: relative;
  .message{
    height: 50px;
    @include flex-center();
    .count{
      position: absolute;
      top: 16px;
      right: -1px;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: red;
    }
  }
  .message-panel{
    height: 0;
    position: absolute;
    right: 0;
    top: 58px;
    width: 300px;
    z-index: 500;
    transition: all 1s;
    opacity: 0;
    margin: 5px 0;
    background-color: #fff;
    border: 1px solid #EBEEF5;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    &:before{
      content: ' ';
      position: absolute;
      top: 58px;
      right: 3px;
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-bottom: 6px solid #fff;
    }
    .message-panel-header{
      height: 40px;
      // background-color: #eaedf1;
      padding: 0 10px;
      line-height: 40px;
      color: #333;
      border-bottom: 1px solid #eaedf1;
      .left{
        font-weight: bold;
      }
    }
    .message-panel-list{
      max-height: 300px;
      overflow-y: auto;
      background: #fff;
      font-size: 12px;
      li{
        width: 298px;
        height: 50px;
        padding: 8px;
        display: block;
        // border-bottom: 1px solid #eaedf1;
        .title{
          width: 290px;
          height: 25px;
          line-height: 25px;
          display: block;
          font-size: 14px;
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
        }
        .date{
          width: 290px;
          height: 15px;
          line-height: 15px;
          font-size: 11px;
          color: #333;
          display: block;
        }
      }
      li:hover{
        background: #e4ebf1;
      }
      a:hover{
        text-decoration: none;
      }
    }
  }
  .message-panel_show{
    height: auto;
    opacity: 1;
  }
}
</style>
