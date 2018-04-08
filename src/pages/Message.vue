<template>
  <f7-page id="message" navbar-fixed >
    <f7-navbar>
      <f7-nav-left>
        <f7-link back>
          <i class="iconfont icon-left-arrow"></i>
        </f7-link>
      </f7-nav-left>
      <f7-nav-center>消息中心</f7-nav-center>
      <f7-nav-right></f7-nav-right>
    </f7-navbar>
    <div class="list-block message-block">
      <ul>
        <li class="swipeout" v-for="i in 10">
          <div class="swipeout-content">
            <img src="../assets/message_property.svg" alt="">
            <div class="message-content" @click="goToPage('/messageDetail')">
              <p class="title">9月停车优免结算通知</p>
              <p class="time">10-15 16:30</p>
              <hr>
              <p class="content">9月停车优免账单已发送，请核对并阿萨德或所所所所是是是</p>
            </div>
            <img class="delete" src="../assets/message_delete.svg" alt="">
          </div>
          <div class="swipeout-actions-left">

          </div>
          <div class="swipeout-actions-right">
            <a href="#"></a>
          </div>
        </li>
      </ul>
    </div>
  </f7-page>
</template>


<script>
    export default{
        name: 'Sessage',
        data () {
            return {}
        },
        methods: {
            goToPage (page) {
                this.$router.load({
                    url: page
                })
            }
        },
        mounted () {
            console.log(this.$router)
        }
        // beforeRouteEnter(to, from, next){
        //     next(vm => {

        //     })
        // }
    }
</script>

<style rel="stylesheet/scss" lang="scss">
  #message {
    .list-block ul:before, .list-block ul:after {
      display: none;
    }
    .list-block ul{
      background: transparent;
    }
    .list-block .swipeout-actions-left a, .list-block .swipeout-actions-right a{
      background: transparent;
      padding: 0 32px;/*no*/
    }
    .message-block {
      display: flex;
      align-items: flex-start;
      margin: 0px 32px 0;
      position: relative;
      -webkit-transform: translateX(0px);
      .swipeout {
        margin-top: 40px;
      }
      .swipeout-content {
        display: flex;
        align-items: flex-start;
      }
      img {
        width: 80px;
      }
      .message-content {
        background-color: #ffffff;
        width: 100%;
        margin-left: 18px;
        position: relative;
        padding: 0 32px;
        &::before {
          content: '';
          width: 0;
          height: 0;
          border-top: 0px solid transparent; /*no*/
          border-right: 12px solid #ffffff; /*no*/
          border-bottom: 12px solid transparent; /*no*/
          position: absolute;
          left: -12px; /*no*/
        }
        .title {
          font-size: 34px;
          color: #101010;
          margin-top: 32px;
        }
        .time {
          font-size: 28px;
          color: #888888;
        }
        .content {
          font-size: 30px;
          color: #303030;
          margin: 24px 0 32px;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          overflow: hidden;
        }
        hr {
          margin-top: 12px;
          height: 1px; /*no*/
          border: 1px solid #f7f7f7; /*no*/
        }
      }
      .delete {
        position: absolute;
        top: 90px;
        right: -120px;
        width: 80px;
      }
    }
  }
</style>
