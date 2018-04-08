<template>
  <f7-page id="search" navbar-fixed>
  	<f7-navbar>
      <div class="searchbar" @click="$router.load({url:'/search'})">
        <div class="search-icon" @click="searchClick"><i class="iconfont icon-search"></i></div>
	      <f7-input class="searchbar-input" placeholder="搜索车牌号" type="text"></f7-input>
	    </div>
      <f7-nav-right>
        <f7-link @click="$router.back()">取消</f7-link>
      </f7-nav-right>
    </f7-navbar>
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
    name: 'Search',
    data () {
        return {
            news: [
                { card: '粤A88888', audit: '已通过', time: '2017-12-10 16:37', result: '优免2小时', money: '325.00', count: '201700125658635665', times: '2017-10-12 16:30' },
                { card: '粤A88888', audit: '不通过', time: '2017-12-10 16:37', result: '优免2小时', money: '325.00', count: '201700125658635665', times: '2017-10-12 16:30' }
            ]
        }
    },
    methods: {
        searchClick () {
        }
    },
    mounted () {

    }
    // beforeRouteEnter(to, from, next){
    // 	next(vm => {
    // 	})
    // }
}
</script>

<style rel="stylesheet/scss" lang="scss">
  #search {
  	background:#fff;
  	height: 100vh;
  	.navbar{
  		height: 88px;
  		position: static;
	    .searchbar {
	      /*height: 88px;*/
	      background-color: #f8f8f8;
	      position: relative;
	      .searchbar-input {
	        height: 56px;
	        width: 100%;
	        padding-left: 75px;
	        display: flex;
	        align-items: center;
	        background: #fff;
	        border: 1px solid #dbdbdb; /*no*/
	        input{
	        	font-size: 28px;
	        	height:50px;
	        }
	      }
	      .search-icon{
	        position: absolute;
	        left: 56px;
	        z-index: 10;
	        .icon-search{
	        	color: #888;
	        	font-size: 28px;
	        }
	      }
	    }
	    .searchbar:after{
	    	background-color: transparent;
	    }
	    .right{
	      	a{
	      		color: #303030;
	      		font-size: 28px;
	      		text-decoration: none;
	      	}
	    }
	  }
	  .page-content{
	  	padding-top: 0;
	  }
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
  }
  @media (min-device-width : 768px) and (max-device-width : 1024px) and (-webkit-min-device-pixel-ratio : 2){
  /*ipad*/
    #search{
      .page-content{
	      padding-top: 0px !important;
	    }
    }
  }
</style>
