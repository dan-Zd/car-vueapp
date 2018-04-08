<template>
  <f7-page id="about" name="about" navbar-fixed>
    <f7-navbar>
      <f7-nav-left>
        <f7-link @click="$router.back()"><i class="iconfont icon-left-arrow"></i></f7-link>
      </f7-nav-left>
      <f7-nav-center>关于</f7-nav-center>
      <f7-nav-right></f7-nav-right>
    </f7-navbar>
    <div class="head">
      <img
        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508764321873&di=1a248d80de7c5629e63019f2a2c8c01e&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F7dd98d1001e93901d5b4c7fe72ec54e737d196b8.jpg"
        alt="Logo">
      <p>xx商家</p>
      <span>v1.0</span>
    </div>
    <div class="content">
      <div>
        <span>微信公众号</span>
        <span class="last">pbra停车</span>
      </div>
      <div>
        <span>客服电话</span>
        <span class="last">1234567890</span>
      </div>
      <div>
        <span>公司邮箱</span>
        <span class="last">bd@parking.com</span>
      </div>
      <div>
        <span>官方网站</span>
        <span class="last">www.parking.com</span>
      </div>
    </div>
    <div class="foot"（广州）有限公司</p>
      <p>2017 parking.com All Rights Reserved</p>
    </div>
  </f7-page>
</template>

<script>
  export default{
      name: 'About',
      data () {
          return {}
      },
      methods: {},
      mounted () {
      }
      // beforeRouteEnter(to, from, next){
      //     next( vm => {

      // })
      // }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  #about {
    background-color: #f8f8f8;
    height: 100%;
    .head {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      height: 432px;
      /*background-color: #f8f8f8;*/
      img {
        width: 180px;
        margin-bottom: 32px;
      }
      p {
        font-size: 34px;
        color: #101010;
        margin-bottom: 16px;
      }
      span {
        width: 128px;
        height: 48px;
        border-radius: 48px;
        text-align: center;
        border: 1px solid #e9e9e9; /*no*/
        font-size: 30px;
        color: #303030;
      }
    }
    .content {
      background-color: #ffffff;
      padding: 56px 40px;
      div {
        display: flex;
        justify-content: space-between;
        margin: 24px 0;
        span {
          color: #5f5f5f;
          font-size: 34px;
        }
        span.last {
          color: #101010;
        }
      }
    }
    .foot {
      position: absolute;
      width: 100%;
      bottom: 32px;
      text-align: center;
      font-size: 24px;
      color: #888888;
    }
  }

</style>
