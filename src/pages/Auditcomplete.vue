<template>
  <f7-page id="auditcomplete" navbar-fixed>
    <f7-navbar>
      <f7-nav-left>
        <f7-link @click="$router.back()"><i class="iconfont icon-left-arrow"></i></f7-link>
      </f7-nav-left>
      <f7-nav-center>已审批</f7-nav-center>
      <f7-nav-right>
        <f7-link @click="$router.load({url:'/search'})"><i class="iconfont icon-search"></i></f7-link>
        <f7-link @click="filterClick"><i class="iconfont icon-classify"></i></f7-link>
      </f7-nav-right>
    </f7-navbar>
    <div class="audit-filter" v-if="boardShow">
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
        <div class='fee-hours'>
          <div class="fee-hours-title">按结果</div>
          <div class="fee-hours-content">
            <div class="fee-hours-num" @click="auditClick('one')" v-bind:class="{isFeeHour: isTrue }">通过</div>
            <div class="fee-hours-num" @click="auditClick('two')" v-bind:class="{isFeeHour: isFalse }">不通过</div>
            <div class="fee-hours-num fee-hours-num-none"></div>
            <div class="fee-hours-num fee-hours-num-none"></div>
          </div>
        </div>
        <div class="audit-filter-btn">
          <f7-button type="primary" @click="boardShow=false">取消</f7-button>
          <f7-button type="primary" @click="filterComplete">确定</f7-button>
        </div>
      </div>
    </div>
    <div class="auditcomplete-content" v-for="item in news">
      <div class="auditcomplete-content-title">
        <div class="title-one">
          <div class="title-one-left">
            <span>{{item.card}}</span>
            <span class="span-audit" v-if="item.audit == '已通过'">{{item.audit}}</span>
            <span class="span-noaudit" v-if="item.audit == '不通过'">{{item.audit}}</span>
          </div>
          <div class="title-one-right">{{item.time}}</div>
        </div>
        <div class="title-two">审批意见：{{item.result}}</div>
      </div>
      <div class="auditcomplete-content-message">
        <div>消费金额：{{item.money}}元</div>
        <div>消费单号：{{item.count}}</div>
        <div>提交时间：{{item.times}}</div>
      </div>
    </div>
  </f7-page>
</template>

<script>
  export default{
      name: 'Auditcomplete',
      data () {
          return {
              isOne: false,
              isTwo: false,
              isThree: false,
              isFour: false,
              isTrue: false,
              isFalse: false,
              isDown: false,
              isUp: false,
              boardShow: false,
              news: [
                  { card: '粤A88888', audit: '已通过', time: '2017-12-10 16:37', result: '优免2小时', money: '325.00', count: '201700125658635665', times: '2017-10-12 16:30'
                  }, { card: '粤A88888', audit: '不通过', time: '2017-12-10 16:37', result: '优免2小时', money: '325.00', count: '201700125658635665', times: '2017-10-12 16:30'
                  }, { card: '粤A88888', audit: '已通过', time: '2017-12-10 16:37', result: '优免2小时', money: '325.00', count: '201700125658635665', times: '2017-10-12 16:30'
                  }, { card: '粤A88888', audit: '不通过', time: '2017-12-10 16:37', result: '优免2小时', money: '325.00', count: '201700125658635665', times: '2017-10-12 16:30'
                  }, { card: '粤A88888', audit: '已通过', time: '2017-12-10 16:37', result: '优免2小时', money: '325.00', count: '201700125658635665', times: '2017-10-12 16:30'
                  }
              ]
          }
      },
      methods: {
          submitHandler () {
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
          },
          auditClick (val) {
              if (val === 'one') {
                  this.isTrue = true
                  this.isFalse = false
              } else if (val === 'two') {
                  this.isFalse = true
                  this.isTrue = false
              }
          }
      },
      mounted () {

      }
      // beforeRouteEnter(to,from,next){
      //     next(vm=>{

      //     })
      // }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
#auditcomplete{
  height: 100vh;
  .auditcomplete-content{
    .auditcomplete-content-title{
      background: #fff;
      padding: 32px 24px 12px;
      .title-one{
        display: flex;
        align-items: center;
        justify-content: space-between;
        .title-one-left{
           font-size: 36px;
           display: flex;
           align-items: center;
           .span-audit{
              font-size:28px;
              display: inline-block;
              width: 132px;
              height: 48px;
              line-height: 48px;
              text-align: center;
              background: #ffeeb1;
              border-radius: 24px;
              margin-left: 20px;
           }
           .span-noaudit{
              font-size:28px;
              display: inline-block;
              width: 132px;
              height: 48px;
              line-height: 48px;
              text-align: center;
              background: #ffbfad;
              border-radius: 24px;
              margin-left: 20px;
           }
        }
        .title-one-right{
          color: #313131;
          font-size: 28px;
        }
      }
      .title-two{
         font-size: 30px;
         margin-top: 12px;
      }
    }
    .auditcomplete-content-message{
      padding: 32px 24px ;
      font-size: 30px;
      color: #606060;
      background: #f8f8f8;
      div{
        margin-bottom: 8px;
        &:last-child{
          margin-bottom: 0px;
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
        border:1px solid #ffeeb1 !important;/*no*/
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

