<template>
  <f7-page id="historyRecord" navbar-fixed>
    <f7-navbar>
      <f7-nav-left>
        <f7-link @click="$router.back()"><i class="iconfont icon-left-arrow"></i></f7-link>
      </f7-nav-left>
      <f7-nav-center>历史记录</f7-nav-center>
      <f7-nav-right></f7-nav-right>
    </f7-navbar>
    <div class="year-record" v-for='item in news'>
      <f7-list>
        <f7-list-group>
          <f7-list-item group-title>{{item.year}}年</f7-list-item>
          <f7-list-item v-for="i in item.message" link="/historyrecorddetail">
            <span>{{i.month}}月优免时长</span>
            <span>{{i.hours}}小时</span>
          </f7-list-item>
        </f7-list-group>
      </f7-list>
    </div>
  </f7-page>
</template>

<script>
    export default{
        name: 'HistoryRecord',
        data () {
            return {
                news: [
                    { year: '2017', message: [{ month: 10, hours: 256 }, { month: 8, hours: 256 }, { month: 7, hours: 256 }, { month: 6, hours: 256 }, { month: 5, hours: 256 }, { month: 4, hours: 256 }, { month: 3, hours: 256 }, { month: 2, hours: 256 }, { month: 1, hours: 256 }] },
                    { year: '2016', message: [{ month: 12, hours: 256 }, { month: 1, hours: 256 }, { month: 10, hours: 256 }] }
                ]

            }
        },
        methods: {
            goDetail () {
                this.$router.push({
                    path: '/historyrecorddetail'
                })
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
#historyRecord{
  background-color: #f8f8f8;
  .list-block{
    margin: 0;
    .list-group-title{
      font-size: 28px;
       padding-top: 15px;
       padding-bottom: 15px;
    }
    ul:after{
      background-color: #fff;
    }
    .item-inner{
      padding-top: 32px;
      padding-bottom: 32px;
      color: #101010;
      font-size: 34px;
      &:after{
        background-color: #f7f7f7;
        height: 4px;
      }
    }
  }
  .list-group-title{
    background: #f8f8f8;
  }
  a:hover{
    text-decoration: none;
  }
}
</style>
