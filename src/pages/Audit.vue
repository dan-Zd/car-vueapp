<template>
  <f7-page id="audit" navbar-fixed>
    <f7-navbar>
      <f7-nav-left>
        <f7-link @click="$router.back()"><i class="iconfont icon-left-arrow"></i></f7-link>
      </f7-nav-left>
      <f7-nav-center>审批</f7-nav-center>
      <f7-nav-right>
        <f7-link @click="$router.load({url:'/auditcomplete'})">已审批</f7-link>
      </f7-nav-right>
    </f7-navbar>
    <f7-link class="searchbar" @click="$router.load({url:'/search'})">
      <div class="searchbar-input"><i class="iconfont icon-search"></i>搜索车牌号</div>
    </f7-link>
    <div class="audit-block" v-for="i in 10">
      <div class="audit-content-block">
        <h3>粤A88888</h3>
        <div>
          <span>消费金额：</span>
          <span>325.00元</span>
        </div>
        <div>
          <span>消费单号：</span>
          <span>2017121156464564555</span>
        </div>
        <div>
          <span>提交时间：</span>
          <span>2017-10-12 16:30</span>
        </div>
      </div>
      <div class="btn-block">
        <button :id="'passBtn'+i" class="pass" @click="openPassModal(i)">通过</button>
        <button :id="'noPassBtn'+i" class="nopass" @click="openNoPassModal(i)">不通过</button>
      </div>
    </div>
  </f7-page>
</template>

<script>
    // import MobileSelect from 'mobile-select'
    export default{
        name: 'Audit',
        data () {
            return {
                value2: '',
                result: [],
                passMoadl: null,
                noPassModal: null,
                pickerDescribe: null,
                passData: [
                    {
                        values: ('0 1 2 3 4 5 6 7').split(' '),
                        displayValues: ('0天 1天 2天 3天 4天 5天 6天 7天').split(' '),
                        textAlign: 'center'
                    },
                    {
                        values: ('0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23').split(' '),
                        displayValues: ('0小时 1小时 2小时 3小时 4小时 5小时 6小时 7小时 8小时 9小时 10小时 11小时 12小时 13小时 14小时 15小时 16小时 17小时 18小时 19小时 20小时 21小时 22小时 23小时').split(' '),
                        textAlign: 'center'
                    }
                ],
                noPassData: [
                    {
                        values: ('1 2 3 4').split(' '),
                        displayValues: ('无消费记录 未提供消费凭据 消费金额错误 其他').split(' '),
                        textAlign: 'center'
                    }
                ]
            }
        },
        methods: {
            getResult (val) {
                if (!val) return []
                return ['Apple', 'Banana', 'Orange', 'Durian', 'Lemon', 'Peach', 'Cherry', 'Berry', 'Core', 'Fig', 'Haw', 'Melon', 'Plum', 'Pear', 'Peanut', 'Other'
                ].filter(value => new RegExp(val, 'i').test(value))
            },
            itemClickHandler (item) {
                this.$dialog.toast({ mes: `搜索：${item}` })
            },
            submitHandler (value) {
                this.$dialog.toast({ mes: `搜索：${value}` })
            },
            openPassModal (id) {
                this.passMoadl = new Framework7().picker({
                    input: '#passBtn' + id,
                    rotateEffect: true,
                    cols: this.passData,
                    toolbarTemplate: '<div class="toolbar">' +
          '<div class="toolbar-inner">' +
          '<div class="left">' +
          '<a href="#" class="link toolbar-randomize-link">取消</a>' +
          '</div>' +
          '<div class="center">选择优免时长</div>' +
          '<div class="right">' +
          '<a href="#" class="link close-picker">确定</a>' +
          '</div>' +
          '</div>' +
          '</div>'
                })
                setTimeout(() => {
                    this.passMoadl.open()
                }, 100)
            },
            openNoPassModal (id) {
                this.noPassModal = new Framework7().picker({
                    input: '#noPassBtn' + id,
                    rotateEffect: true,
                    cols: this.noPassData,
                    toolbarTemplate: '<div class="toolbar">' +
          '<div class="toolbar-inner">' +
          '<div class="left">' +
          '<a href="#" class="link toolbar-randomize-link">取消</a>' +
          '</div>' +
          '<div class="center">选择优免时长</div>' +
          '<div class="right">' +
          '<a href="#" class="link close-picker">确定</a>' +
          '</div>' +
          '</div>' +
          '</div>'
                })
                setTimeout(() => {
                    this.noPassModal.open()
                }, 100)
            }
        },
        watch: {
            value2 (val) {
                this.result = this.getResult(val)
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
  #audit {
    .navbar {
      
      .right {
        a {
          font-size: 30px;
          color: #ffc200;
        }
      }
    }
    .searchbar {
      height: 88px;
      background-color: #f8f8f8;
      font-size: 28px;
      text-decoration: none;
      .searchbar-input {
        height: 56px;
        width: 100%;
        line-height: 56px;
        color: #888;
        background: #fff;
        border: 1px solid #dbdbdb; /*no*/
        .icon-search{
          margin-left:38px;
          margin-right: 25px; 
          font-size: 28px;
        }
      }
    }
    .audit-block {
      background-color: #ffffff;
      display: flex;
      justify-content: space-between;
      padding: 32px 24px 40px;
      border-bottom: 2px solid #f7f7f7; /*no*/
      .audit-content-block {
        h3 {
          font-size: 36px;
          color: #101010;
          margin-bottom: 12px;
        }
        span {
          font-size: 30px;
          color: #313131;
        }
        div {
          margin: 4px 0;
        }
      }
      .btn-block {
        display: flex;
        justify-content: center;
        flex-direction: column;
        button {
          border: none;
          width: 128px;
          height: 64px;
          font-size: 30px;
          border-radius: 4px; /*no*/
          margin: 20px 0;
          background: none;
          &.pass {
            background-color: #ffd114;
            color: #303030;
          }
          &.nopass {
            color: #ff1914;
            border: 1px solid #ff1914; /*no*/
            margin-bottom: 0;
          }
        }
      }
    }
  }
</style>
