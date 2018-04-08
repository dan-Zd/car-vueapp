<template>
  <f7-page id="messageDetail" navbar-fixed>
    <f7-navbar>
      <f7-nav-left>
        <f7-link back>
          <i class="iconfont icon-left-arrow"></i>
        </f7-link>
      </f7-nav-left>
      <f7-nav-center>物业通知</f7-nav-center>
      <f7-nav-right></f7-nav-right>
    </f7-navbar>
    <div class="message-content">
      <p class="title">9月停车优免结算通知</p>
      <p class="time">10-15 16:30</p>
      <hr>
      <p class="content">9月停车优免账单已发送，请核对并于10月15日前到物业管理处缴费。
        <br>优免小时：256小时
        <br>金额：500元
      </p>
    </div>
  </f7-page>
</template>

<script>
    export default{
        name: 'MessageDetail',
        data () {
            return {}
        },
        methods: {},
        mounted () {

        }
        // beforeRouteEnter(to, from, next){
        //     next(vm => {

        //     })
        // }
    }
</script>

<style rel="stylesheet/scss" lang="scss">
  #messageDetail {
    background-color: #ffffff;
    min-height: 100vh;
    .message-content {
      position: relative;
      padding: 0 32px;
      .title {
        font-size: 34px;
        color: #101010;
        margin-top: 40px;
      }
      .time {
        margin-top: 4px;
        font-size: 28px;
        color: #888888;
      }
      .content {
        font-size: 30px;
        color: #303030;
        margin: 32px 0 16px;
      }
      hr {
        margin-top: 24px;
        height: 1px; /*no*/
        border: 1px solid #f7f7f7; /*no*/
      }
    }
  }
</style>
