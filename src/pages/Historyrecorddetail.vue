<template>
  <f7-page id="historyRecordDetail" navbar-fixed>
    <f7-navbar>
      <f7-nav-left>
        <f7-link @click="$router.back()"><i class="iconfont icon-left-arrow"></i></f7-link>
      </f7-nav-left>
      <f7-nav-center>2017年1月优免记录</f7-nav-center>
      <f7-nav-right>

      </f7-nav-right>
    </f7-navbar>

    <div class="month-fee">
      <div class="month-fee-content">
        <div class="month-fee-content-num">256</div>
        <div class="month-fee-content-txt">2017年1月累计优免(小时)</div>
      </div>
    </div>
    <div class="cell-item" v-for="item in news">
      <div class="cell-top">
        <div class=licence-number>{{item.licence}}</div>
        <span>{{item.time}}</span>
      </div>
      <div class="cell-bottom">
        <div class="fee-message">
          <span>优免时长：{{item.hours}}小时</span>
          <span> </span>
          <span>{{item.txt}}</span>
        </div>
      </div>
    </div>
  </f7-page>
</template>

<script>
    export default{
        name: 'HistoryRecordDetail',
        data () {
            return {
                news: [
                    { licence: '粤A88888', hours: '2', txt: '商家发放', time: '16:30' },
                    { licence: '粤A88888', hours: '2', txt: '车主申请', time: '2017-10-14 16:30' },
                    { licence: '粤A88888', hours: '2', txt: '商家发放', time: '2017-10-14 16:30' },
                    { licence: '粤A88888', hours: '2', txt: '商家发放', time: '2017-10-14 16:30' },
                    { licence: '粤A88888', hours: '2', txt: '商家发放', time: '16:30' },
                    { licence: '粤A88888', hours: '2', txt: '车主申请', time: '2017-10-14 16:30' },
                    { licence: '粤A88888', hours: '2', txt: '商家发放', time: '2017-10-14 16:30' },
                    { licence: '粤A88888', hours: '2', txt: '商家发放', time: '2017-10-14 16:30' },
                    { licence: '粤A88888', hours: '2', txt: '商家发放', time: '2017-10-14 16:30' }
                ]

            }
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
  #historyRecordDetail {
    background-color: #ffffff;
    .month-fee {
      width: 100%;
      height: 280px;
      background: #ffd114;
      display: flex;
      justify-content: center;
      align-items: center;
      .month-fee-content {
        text-align: center;
        div:first-child {
          font-size: 80px;
        }
        .month-fee-content-txt{
          font-size: 28px;
        }
      }
    }
    .cell-item {
      padding: 24px 24px 32px;
      border-bottom: 1px solid #f7f7f7;
      .cell-top {
        display: flex;
        justify-content: space-between;
        .licence-number {
          font-size: 36px;
        }
        span{
          font-size: 28px;
          color: #888;
        }
      }
      .cell-bottom {
        display: flex;
        justify-content: flex-start;
        color: #888;
        padding-top: 5px;
        .fee-message {
          font-size: 30px;
          color: #313131;
          margin-top: 6px;
          span:nth-child(2) {
            margin-left: 36px;
            margin-right: 36px;
            height: 20px;
            width: 2px;
            display: inline-block;
            background: #eee;
          }
        }
      }
    }
  }
</style>
