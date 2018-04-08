<template>
  <f7-page id="dispenseRecord" navbar-fixed>
    <f7-navbar>
      <f7-nav-left>
        <f7-link @click="$router.back()"><i class="iconfont icon-left-arrow"></i></f7-link>
      </f7-nav-left>
      <f7-nav-center>发放记录</f7-nav-center>
      <f7-nav-right>
        <f7-link @click="$router.load({url:'/search'})"><i class="iconfont icon-search"></i></f7-link>
        <f7-link @click="filterClick"><i class="iconfont icon-classify"></i></f7-link>
      </f7-nav-right>
    </f7-navbar>
    <div class="audit-filter" v-if="boardShow" >
      <div class="audit-filter-back" :class='{animationDown:isDown,animationUp:isUp}'>
        <div class='fee-hours'>
          <div class="fee-hours-title">按时间</div>
          <div class="fee-hours-content">
            <div class="fee-hours-num" @click="feeHourClick('one')" v-bind:class="{isFeeHour: isOne }">3天内</div>
            <div class="fee-hours-num" @click="feeHourClick('two')" v-bind:class="{isFeeHour: isTwo }">3个月内</div>
            <div class="fee-hours-num" @click="feeHourClick('three')" v-bind:class="{isFeeHour: isThree}">半年内</div>
            <div class="fee-hours-num" @click="feeHourClick('four')" v-bind:class="{isFeeHour: isFour }">1年内</div>
          </div>
        </div>
        <div class="audit-filter-btn">
          <f7-button type="primary" @click="boardShow=false">取消</f7-button>
          <f7-button type="primary" @click="filterComplete">确定</f7-button>
        </div>
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
        </div>
      </div>
    </div>
  </f7-page>
</template>

<script>
    export default{
        name: 'DispenseRecord',
        data () {
            return {
                isOne: false,
                isTwo: false,
                isThree: false,
                isFour: false,
                isDown: false,
                isUp: false,
                boardShow: false,
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
        methods: {
            goDetail () {
                this.$router.push({
                    path: '/historyrecorddetail'
                })
            },
            filterClick () {
                this.isUp = false
                this.isDown = true
                this.boardShow = true
            },
            filterClose () {
                // this.isDown = false
                // this.isUp = true
                // this.boardShow = false
            },
            filterComplete () {
                // this.isDown = false
                // this.isUp = true
                this.boardShow = false
            },
            feeHourClick (val) {
                if (val === 'one') {
                    this.isOne = true
                    this.isTwo = false
                    this.isThree = false
                    this.isFour = false
                } else if (val === 'two') {
                    this.isTwo = true
                    this.isOne = false
                    this.isThree = false
                    this.isFour = false
                } else if (val === 'three') {
                    this.isThree = true
                    this.isTwo = false
                    this.isOne = false
                    this.isFour = false
                } else if (val === 'four') {
                    this.isFour = true
                    this.isTwo = false
                    this.isThree = false
                    this.isOne = false
                }
            }
        },
        mounted () {

        }
        // beforeRouteEnter(to,from,next){
        //  next(vm=>{

        //     })
        // }
    }
</script>

<style rel="stylesheet/scss" lang="scss">
#dispenseRecord{
  .cell-item {
    padding:24px 24px 32px;
    border-bottom: 1px solid #f7f7f7;
    background-color: #ffffff;
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
  .audit-filter{
    background: rgba(0,0,0,0.5);
    z-index: 10;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 90px;
    .audit-filter-back{
      background: #fff;
      padding:40px 0 0;
      /*position: absolute;
      top:0;*/
      &.animationDown {
        animation: slide_dowm .5s ease-out;
        animation-fill-mode: forwards;
      }
      &.animationUp {
        animation: slide_up .5s ease-out;
        animation-fill-mode: forwards;
      }
    }
    .fee-hours {
      padding:0 32px;
      margin-bottom: 40px;
      .fee-hours-title{
        margin-bottom: 16px;
        font-size: 34px;
      }
      .fee-hours-content{
        display: flex;
        justify-content: space-between;
        margin-bottom: 32px;
        .fee-hours-num{
          width: 152px;
          height: 64px;
          border:1px solid #979693;/*no*/
          border-radius: 8px;
          text-align: center;
          line-height: 64px;
          font-size: 28px;
          &.fee-hours-num-none{
            visibility: hidden;
          }
        }
      }
      .isFeeHour{
        background: #ffeeb1;
        border:none !important;
      }
    }
    .audit-filter-btn{
      margin-top: 80px;
      display: flex;
      .button{
        width: 50%;
        border-radius: 0;
        height:88px;
        line-height: 88px;
        border:none;
        background:#ececec;
        color: #101010;
        font-size: 34px;
        text-decoration: none;
        &:last-child{
          background:#ffd114;
        }
      }
    }
  }
  @keyframes slide_up {
    from {
      top: 0x;
    }
    to {
      top: -100vh;
    }
  }
  @keyframes slide_dowm {
    from {
      top: -100vh;
    }
    to {
      top:0;
    }
  }
}
</style>
