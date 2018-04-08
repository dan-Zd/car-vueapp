<template>
  <f7-page id="help" navbar-fixed>
    <f7-navbar>
      <f7-nav-left>
        <f7-link @click="$router.back()"><i class="iconfont icon-left-arrow"></i></f7-link>
      </f7-nav-left>
      <f7-nav-center>帮助</f7-nav-center>
      <f7-nav-right></f7-nav-right>
    </f7-navbar>

    <f7-list accordion>
      <f7-list-item accordion-item title="如何审批优免？">
        <div class="title-radio"></div>
        <f7-accordion-content>
          <f7-block>
            <p>每次加载之前被调用。它可以在服务端或路由更新之前被调用。 在这个方法被调用的时候，第一个参数被设定为当前页面的每次加载之前被调用。它可以在服务端或路由更新之前被调用。 在这个方法被调用的时候，第一个参数被设定为当前页面的每次加载之前被调用。它可以在服务端或路由更新之前被调用。 在这个方法被调用的时候，第一个参数被设定为当前页面的每次加载之前被调用。它可以在服务端或路由更新之前被调用。 在这个方法被调用的时候，第一个参数被设定为当前页面的。</p>
          </f7-block>
        </f7-accordion-content>
      </f7-list-item>
      <f7-list-item accordion-item title="如何查看优免记录？">
        <div class="title-radio"></div>
        <f7-accordion-content>
          <f7-block>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu felis volutpat, rutrum ex quis, lobortis ex. Curabitur quis mattis lorem. Nullam magna lacus, interdum vel maximus nec, vestibulum non quam. Phasellus ornare efficitur porttitor. Quisque neque diam, imperdiet in fermentum nec, congue vitae ante. Nullam imperdiet maximus commodo. Morbi pharetra id purus ac ultrices. Duis non posuere libero.</p>
          </f7-block>
        </f7-accordion-content>
      </f7-list-item>
      <f7-list-item accordion-item title="忘记密码怎么办？">
        <div class="title-radio"></div>
        <f7-accordion-content>
          <f7-block>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu felis volutpat, rutrum ex quis, lobortis ex. Curabitur quis mattis lorem. Nullam magna lacus, interdum vel maximus nec, vestibulum non quam. Phasellus ornare efficitur porttitor. Quisque neque diam, imperdiet in fermentum nec, congue vitae ante. Nullam imperdiet maximus commodo. Morbi pharetra id purus ac ultrices. Duis non posuere libero.</p>
          </f7-block>
        </f7-accordion-content>
      </f7-list-item>
      <f7-list-item accordion-item title="忘记密码怎么办？">
        <div class="title-radio"></div>
        <f7-accordion-content>
          <f7-block>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu felis volutpat, rutrum ex quis, lobortis ex. Curabitur quis mattis lorem. Nullam magna lacus, interdum vel maximus nec, vestibulum non quam. Phasellus ornare efficitur porttitor. Quisque neque diam, imperdiet in fermentum nec, congue vitae ante. Nullam imperdiet maximus commodo. Morbi pharetra id purus ac ultrices. Duis non posuere libero.</p>
          </f7-block>
        </f7-accordion-content>
      </f7-list-item>
    </f7-list>
  </f7-page>
</template>

<script>
    export default{
        name: 'Help',
        data () {
            return {

            }
        },
        methods: {

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
  #help{
    background: #fff;
    .page-content{
      padding:0;
      .list-block{
        margin-top: 90px;
        position: relative;
        .title-radio{
          background:#ffd114;
          width:12px;
          height: 12px;
          border-radius: 6px;
          position: absolute;
          top: 53px;
          left: 32px;
        }
        ul:before{
          background:none;
        }
        ul:after{
          background: none;
        }
        .item-link{
          .item-content{
            padding-left: 30px;
            margin-left: 30px;
            height: 120px;
            border-bottom: 1px solid #f7f7f7;
          }
         
        }
        .item-inner{
          background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%2060%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Cpath%20d%3D'm60%2061.5-38.25%2038.25-9.75-9.75%2029.25-28.5-29.25-28.5%209.75-9.75z'%20transform%3D'translate(115%2C%2030)%20rotate(90)'%20fill%3D'%23c7c7cc'%2F%3E%3C%2Fsvg%3E");
          background-position:calc(100% - 40px) center;
          background-size: 40px 40px;
          &:after{
            background-color: #fff !important;
          }
          .item-title{
            font-size: 34px;
          }
        }
        .accordion-item-content{
          padding:0;
          background-color: #f8f8f8;
          color: #303030;
          .content-block{
            padding:0 40px 0 60px;
            p{
              text-align: justify;
              text-justify: inter-ideograph;/*IE*/
              font-size: 28px;
              color: #303030;
            }
          }
        }
      }
      .list-block:not(.media-list){
        .accordion-item-expanded:not(.media-item)>.item-link .item-inner {
          background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%2060%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Cpath%20d%3D'm60%2061.5-38.25%2038.25-9.75-9.75%2029.25-28.5-29.25-28.5%209.75-9.75z'%20transform%3D'translate(-10%2C%20100)%20rotate(-90)'%20fill%3D'%23c7c7cc'%2F%3E%3C%2Fsvg%3E"); 
          background-size: 40px 40px; 
          background-position:calc(100% - 40px) center;
          z-index: 100;
          ;              
        }
      }
      a:hover{
        text-decoration: none;
      }
    }
  }
  @media (min-device-width : 768px) and (max-device-width : 1024px) and (-webkit-min-device-pixel-ratio : 2){
  /*ipad*/
    #help{
      .page-content{
        padding-top: 0px !important;
      }
    }
  }
</style>
