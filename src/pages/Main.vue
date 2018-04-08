<template>
  <div id="app">
    <!-- Statusbar -->
    <!--<f7-statusbar></f7-statusbar>-->
    <f7-views>
      <f7-view main id="main-view">
        <f7-pages>
          <f7-page name="main" navbar-fixed id="main">
            <f7-navbar>
              <f7-nav-left>
                <f7-link @click="showSetting = true">
                  <i class="iconfont icon-menu"></i>
                </f7-link>
              </f7-nav-left>
              <f7-nav-center>xx商家</f7-nav-center>
              <f7-nav-right>
                <f7-link href="/message">
                  <i class="iconfont icon-message"></i>
                </f7-link>
              </f7-nav-right>
            </f7-navbar>
            <div id="main">
              <div class="main-content">
                <div class="main-content-header">
                  <div class="header-hours">
                    <div class="header-hours-num">128</div>
                    <div class="header-hours-txt">本月累计优免(小时)</div>
                  </div>
                  <f7-link class="header-record" href="/feerecord">查看记录</f7-link>
                </div>
                <div class="main-content-section">
                  <div class="main-content-section-title">
                    <img src="../assets/check.svg" alt="">
                    <span>审批优免</span>
                  </div>
                  <f7-link class="main-content-section-message" href="/audit">
                    <div>
                      <div v-for="item in news" class="message-left" v-if="news.length>0">
                        <span>·</span>
                        <span>{{item.txt}}</span>
                        <span>{{item.time}}</span>
                      </div>
                      <div class="message-left" v-if="news.length==0">暂无申请</div>
                    </div>
                    <i class="iconfont icon-right-arrow"></i>
                  </f7-link>
                </div>
                <div class="main-content-section">
                  <f7-link class="dispense" href="/dispense">
                    <div class="main-content-section-title">
                      <img src="../assets/grant.svg" alt="">
                      <span>发放优免</span>
                    </div>
                    <i class="iconfont icon-right-arrow"></i>
                  </f7-link>
                </div>
              </div>
              <div class="main-footer">xx科技有限公司</div>
              <f7-popup id="settingPopup" :opened="showSetting">
                <div class="setting-header">
                  <i @click="showSetting = false" class="iconfont icon-close"></i>
                </div>
                <div class="setting-user">
                  <img src="../assets/account.svg" alt="">
                  <span>wdyy1231232222212</span>
                </div>
                <div class="setting-overview">
                  <h3>万达影院（万胜广场店）</h3>
                  <div class="overview-content first">
                    <img src="../assets/building.svg" alt="">
                    <span>物业公司：长城物业</span>
                  </div>
                  <div class="overview-content">
                    <img src="../assets/parking.svg" alt="">
                    <span>停车场名：万胜广场停车场</span>
                  </div>
                </div>
                <div class="setting-content">
                  <div class="setting-content-block">
                    <span>消息通知</span>
                    <f7-input type="switch" v-model="isNotice"></f7-input>
                  </div>
                  <f7-link class="setting-content-block" href="/help" @click="closeModal">
                    <span>帮助</span>
                    <i class="iconfont icon-right-arrow"></i>
                  </f7-link>
                  <f7-link class="setting-content-block" href="/feedback" @click="closeModal">
                    <span>意见反馈</span>
                    <i class="iconfont icon-right-arrow"></i>
                  </f7-link>
                  <f7-link class="setting-content-block"  href="/about" @click="closeModal">
                    <span>关于</span>
                    <i class="iconfont icon-right-arrow"></i>
                  </f7-link>
                </div>
                <div class="setting-exit">
                  退出
                </div>
              </f7-popup>
            </div>
          </f7-page>
        </f7-pages>
      </f7-view>
       
    </f7-views>
  </div>

</template>

<script>
    export default{
        name: 'main',
        data () {
            return {
                news: [
                    { txt: '粤A12345发起停车优惠申请', time: '2分钟前' },
                    { txt: '粤A12345发起停车优惠申请', time: '16:30' }
                ],
                showSetting: false,
                isNotice: '',
                mainView: null
            }
        },
        methods: {
            closeModal () {
                this.showSetting = false
            }
        },
        mounted () {
        }
        // beforeRouteEnter(to, from, next){
        //     next(vm => {

        //     })
        // }
    }
</script>

<style rel="stylesheet/scss" lang="scss">
  
  .navbar {
    height: 44px;/*no*/
    .center {
      font-size: 36px;
      color: #101010;
    }
    .left .iconfont, .right .iconfont {
      font-size: 36px;
      color: #2c2a23;
    }
    .right .iconfont {
      font-weight: 800;
    }
  }
  .toolbar .toolbar-inner {
    & .left a{
      font-size: 30px;
      color: #101010;
    }
    & .center{
      font-size: 36px;
      color: #101010;
    }
    & .right a{
      color: #ffc200;
    }
  }
  #main {
    font-size: 28px;
    color: #101010;
    background: #f8f8f8;
    .main-content-header {
      background: #ffd114;
      height: 366px;
      width: 100%;
      border-radius: 12px 12px 0 0;
      display: flex;
      justify-content: space-between;
      .header-hours {
        margin-left: 26px;
        margin-top: 88px;
        .header-hours-num {
          font-size: 80px;
        }
      }
      .header-record {
        width: 160px;
        height: 60px;
        border: 1px solid #957d1b; /*no*/
        border-radius: 8px;
        margin-right: 26px;
        text-align: center;
        line-height: 60px;
        margin-top: 120px;
        color: #101010;
        text-decoration: none;
      }
    }
    .main-content-section {
      width: 702px;
      height: 340px;
      background: #fff;
      z-index: 10;
      margin: -80px auto;
      border-radius: 8px;
      > img {
        margin-left: 40px;
      }
      .dispense {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #101010;
        text-decoration: none;
      }
      .main-content-section-title {
        width: 660px;
        height: 160px;
        border-bottom: 4px solid #f7f7f7;
        display: flex;
        align-items: center;
        font-size: 36px;
        margin-left: 40px;
        span {
          margin-left: 18px;
        }
      }
      .main-content-section-message {
        height: 174px;
        width: 660px;
        margin-left: 40px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        text-decoration: none;
        .message-left {
          margin-bottom: 16px;
          color: #757575;
          &:last-child {
            margin-bottom: 0px;
          }
          span {
            &:nth-child(1) {
              font-size: 32px;
              color: #adadad;
            }
            &:nth-child(2) {
              color: #333;
            }
            &:nth-child(3) {
              color: #757575;
              margin-left: 16px;
            }
          }
        }
        .message-right {
          margin-right: 28px;
        }
      }
      &:last-child {
        margin-top: 112px;
        height: 160px;
        display: flex;
      }
      .icon-right-arrow {
        margin-right: 40px;
        font-size: 32px;
        color: #adadad;
      }
    }
    .main-footer {
      position: fixed;
      bottom: 32px;
      width: 100%;
      text-align: center;
      font-size: 24px;
      color: #888;
    }
  }

  #settingPopup {
    background-color: #f8f8f8;
    .setting-header {
      height: 128px;
      width: 100%;
      background-color: #ffd114;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .icon-close {
        margin-right: 40px;
        font-size: 32px;
        color: #2c2a23;
      }
    }
    .setting-user {
      min-width: 280px;
      width: auto;
      height: 80px;
      border-radius: 80px;
      box-shadow: 2px 5px 5px #f2f2f2;
      display: flex;
      align-items: center;
      position: absolute;
      top: 80px;
      left: 20px;
      background-color: #ffffff;
      font-size: 30px;
      color: #101010;
      span {
        margin-right: 8px;
      }
      img {
        width: 64px;
        margin: 0 8px;
      }
    }
    .setting-overview {
      padding: 0 32px;
      background-color: #ffffff;
      height: 290px;
      h3 {
        font-size: 36px;
        color: #101010;
        padding-top: 80px;
      }
      .overview-content {
        font-size: 30px;
        color: #303030;
        display: flex;
        align-items: center;
        margin-top: 8px;
        &.first {
          margin-top: 16px;
        }
        img {
          width: 34px;
          margin-right: 16px;
        }
      }
    }
    .setting-content {
      padding: 64px 32px;
      .setting-content-block {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 32px;
        background-color: #ffffff;
        margin-bottom: 24px;
        border-radius: 4px; /*no*/
        height: 112px;
        text-decoration: none;
        &:active {
          background-color: #f2f2f2;
        }
        &:first-child:active {
          background-color: #ffffff;
        }
        span {
          font-size: 34px;
          color: #101010;
        }
        .icon-right-arrow {
          color: #adadad;
        }
        .label-switch input[type=checkbox]:checked+.checkbox{
          background: #ffd114;
        }
      }
    }
    .setting-exit {
      position: fixed;
      bottom: 0;
      background-color: #ffffff;
      width: 100%;
      height: 98px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 34px;
    }
  }
  @media (min-height: 630px) and (min-width: 630px){
   .popup:not(.tablet-fullscreen){
      width:100%;
      height:100%;
      left:0;
      top:0;
      margin:0;
    }
  }
  @media (min-device-width : 768px) and (max-device-width : 1024px) and (-webkit-min-device-pixel-ratio : 2){
  /*ipad*/
    .navbar {
      height: 66px;/*no*/
    }
    .page-content{
      padding-top: 88px !important;
    }
  }
</style>
