<template>
  <f7-page id="feedback" navbar-fixed>
    <f7-navbar>
      <f7-nav-left>
        <f7-link @click="$router.back()"><i class="iconfont icon-left-arrow"></i></f7-link>
      </f7-nav-left>
      <f7-nav-center>意见反馈</f7-nav-center>
      <f7-nav-right></f7-nav-right>
    </f7-navbar>
    <f7-input class="content" type="textarea" placeholder="有话不说憋着难受"></f7-input>
    <div class="btn-block">
      <button class="commit">提交</button>
    </div>
  </f7-page>
</template>

<script>
  export default{
      name: 'Feedback',
      data () {
          return {

          }
      },
      methods: {

      },
      mounted () {

      }
      //  beforeRouteEnter(to,from,next){
      //  next(vm=>{

      //   })
      //   }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
#feedback{
  background-color: #ffffff;
  .content{
    margin: 32px;
    display: flex;
    textarea{
      background-color: #f8f8f8;
      padding: 24px;
      color: #101010;
      font-size: 30px;
      height:348px;
      width:100%;
      border:1px solid #eaeaea;/*no*/
      resize: none;
    }
  }
  .btn-block{
    padding: 32px 32px;
    .commit{
      background-color: #ffd114;
      width: 100%;
      outline: none;
      border:none;
      display: block;
      padding: 20px 0;
      font-size: 34px;
      border-radius: 4px;/*no*/
      box-shadow: 0px 6px 6px #ffeeb5;/*no*/
    }
  }
}
</style>
