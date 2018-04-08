<template>
  <f7-page id="login">
     <div class="login-content">
       <div class="login-content-flexbox">
          <div class="form">
            <div class="form-input" :style="accountFocusStyle">
              <div class="label">账 &nbsp;&nbsp;号<span class="blank"></span></div>
              <input name="username" type="text" placeholder="输入账号" @focus="inputFocus(1)" @blur="inputBlur(1)" v-model="account" />
              <i class="iconfont icon-close" v-if="account" @click="inputClear(1)"></i>
            </div>
            <div class="form-input" :style="passwordFocusStyle">
              <div class="label">密 &nbsp;&nbsp;码<span class="blank"></span></div>
              <input name="password" type="password"  placeholder="输入密码" @focus="inputFocus(2)" @blur="inputBlur(2)" v-model="password" />
              <i class="iconfont icon-close" v-if="password" @click="inputClear(2)"></i>
            </div>
            <div class="form-input-code">
              <div class="form-input code-input" :style="codeFocusStyle">
                <div class="label">验证码<span class="blank"></span></div>
                <input  type="text"  placeholder="输入验证码" @focus="inputFocus(3)" @blur="inputBlur(3)" v-model="code" />
              </div>
              <div class="code"></div>
            </div>
          </div>
          <div class="list-block-btn">
            <f7-link href="/">登陆</f7-link>
          </div>
        </div>
     </div>
  </f7-page>
  
</template>

<script>
    export default{
        name: 'login',
        data () {
            return {
                account: '',
                accountFocusStyle: {
                    borderColor: '#969592'
                },
                password: '',
                passwordFocusStyle: {
                    borderColor: '#969592'
                },
                code: '',
                codeFocusStyle: {
                    borderColor: '#969592'
                }
            }
        },
        methods: {
            inputFocus (val) {
                if (val === 1) {
                    this.accountFocusStyle = { borderColor: '#ffe98a' }
                } else if (val === 2) {
                    this.passwordFocusStyle = { borderColor: '#ffe98a' }
                } else if (val === 3) {
                    this.codeFocusStyle = { borderColor: '#ffe98a' }
                }
            },
            inputBlur (val) {
                if (val === 1) {
                    this.accountFocusStyle = { borderColor: '#969592' }
                } else if (val === 2) {
                    this.passwordFocusStyle = { borderColor: '#969592' }
                } else if (val === 3) {
                    this.codeFocusStyle = { borderColor: '#969592' }
                }
            },
            inputClear (val) {
                if (val === 1) {
                    this.account = ''
                } else if (val === 2) {
                    this.password = ''
                }
            },
            loginClick () {
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
#login{
  width:100%;
  height:100vh;
  padding-top: 254px;
  display: flex;
  justify-content: center;
  background: #ffd114 url(../assets/img_user.svg)no-repeat;
  background-position: 50% 154px;
  background-size:200px;
  .login-content{
    width: 670px;
    height: 518px;
    padding-top: 144px;
    padding-bottom: 64px;
    border-radius: 8px ;
    z-index: 10;
    background: #fff url(../assets/img_user.svg)no-repeat;
    background-position: 50% -100px;
    background-size:200px;
    display: flex;
    justify-content: center;
    .form{
      margin-top: 0;
      position: relative;
      width: 670px;
      input::-webkit-input-placeholder { /* WebKit browsers */
          color:    #888;
          font-size: 30px;
      }
      input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
          color:    #888;
          font-size: 30px;
      }
      input::-moz-placeholder { /* Mozilla Firefox 19+ */
          color:    #888;
          font-size: 30px;
      }
      input:-ms-input-placeholder { /* Internet Explorer 10+ */
          color:    #888;
          font-size: 30px;
      }
      .form-input{
        display: flex;
        align-items: center;
        height: 98px;
        border:1px solid #969592;/*no*/
        border-radius: 8px;
        width: 526px;
        padding:0 32px;
        margin:0 auto;
        margin-bottom: 32px;
        .label{
          font-size: 30px;
          width:130px;
          display: flex;
          align-items: center;
          .blank{
              height:24px;
              width: 4px;
              display: inline-block;
              background: #cbcbc9;
              margin-left: 16px;
          }
        }
        input{
          width: 350px;
          font-size: 30px;
          border:none;
        }
        &.code-input{
          width: 308px;
          margin:0 ;
          padding-right: 10px;
          border:1px solid #969592;/*no*/
          input{
            width: 150px;
          }
        }
      }
      .form-input-code{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin:0 auto;
        width: 590px;
      }
      .code{
        width: 190px;
        height: 98px;
        background-image: linear-gradient(90deg);
        border-radius: 8px 8px 8px 8px;
        border: solid 1px #969592;/*no*/
      }
    } 
    .list-block-btn{
      position: static;
      display: flex;
      justify-content: center;
      margin-top: 64px;
      .link{
        display: block;
        width: 560px;
        height: 88px;
        line-height: 88px;
        text-align: center;
        background-color: #ffd114;
        box-shadow: 0px 5px 10px 0px 
          rgba(255, 227, 135, 1);
        border-radius: 8px;
        font-size: 34px;
        color:#101010;
      }
    }   
  }
}
</style>
