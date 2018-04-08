<template>
  <f7-page id="dispense" navbar-fixed>
    <f7-navbar>
      <f7-nav-left>
        <f7-link @click="$router.back()"><i class="iconfont icon-left-arrow"></i></f7-link>
      </f7-nav-left>
      <f7-nav-center>发放</f7-nav-center>
      <f7-nav-right>
        <f7-link @click="$router.load({url:'/dispenserecord'})">发放记录</f7-link>
      </f7-nav-right>
    </f7-navbar>
    <div class="content-car-number">
      <div class="car-content-title">
        <span>车牌号</span>
        <label class="ze-checkbox"><input type="checkbox" v-model="checkbox" @change="carTypeChange">
          <span class="ze-checkbox-icon" style="width: 20px;height: 20px;color: rgb(76, 216, 100);">
            <i style="width: 6px;height: 12px;"></i>
          </span>
          <span class="ze-checkbox-text">新能源</span>
        </label>
      </div>
      <div class="content-section">
        <div class="content-section-flex flex-card">
          <div class="content-section-flex flex-card-border">
            <button id="font" class="flex-btn" @click="btnClickYue" v-bind:class="{isClick: isYue }">
              {{areaName}}
            </button>
            <span class="blank-border blank-border-first"></span>
            <button id='letter' class="flex-btn" @click="btnClickA" v-bind:class="{isClick: isA}">
              {{areaLetter}}
            </button>
            <div class="flex-mid"><span></span></div>
            <div class="flex-btns">
              <button id='numOne' @click="btnClickNum('one')" v-bind:class="{isNumClick: isNumOne }">{{numOne}}</button>
              <span class="blank-border"></span>
              <button id='numTwo' @click="btnClickNum('two')" v-bind:class="{isNumClick: isNumTwo }">{{numTwo}}</button>
              <span class="blank-border"></span>
              <button id='numThree' @click="btnClickNum('three')" v-bind:class="{isNumClick: isNumThree }">{{numThree}}
              </button>
              <span class="blank-border"></span>
              <button id='numFour' @click="btnClickNum('four')" v-bind:class="{isNumClick: isNumFour }">{{numFour}}
              </button>
              <span class="blank-border"></span>
              <button id='numFive' @click="btnClickNum('five')" v-bind:class="{isNumClick: isNumFive }">{{numFive}}
              </button>
              <span class="blank-border" v-if="checkbox"></span>
              <button v-if="checkbox" id='numSix' @click="btnClickNum('six')"
                      v-bind:class="{isNumClick: isNumSix }">{{numSix}}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="fee-hours">
      <div class="fee-hours-title">优免时长</div>
      <div class="fee-hours-content">
        <div class="fee-hours-num" @click="feeHourClick('one')" v-bind:class="{isFeeHour: isOne }">1小时</div>
        <div class="fee-hours-num" @click="feeHourClick('two')" v-bind:class="{isFeeHour: isTwo }">2小时</div>
        <div class="fee-hours-num" @click="feeHourClick('three')" v-bind:class="{isFeeHour: isThree}">3小时</div>
        <div class="fee-hours-num" @click="feeHourClick('four')" v-bind:class="{isFeeHour: isFour }">4小时</div>
      </div>
      <div class="fee-hours-content">
        <div class="fee-hours-num" @click="feeHourClick('five')" v-bind:class="{isFeeHour: isFive }">5小时</div>
        <div class="fee-hours-num" @click="feeHourClick('six')" v-bind:class="{isFeeHour: isSix }">6小时</div>
        <div class="fee-hours-num" @click="feeHourClick('seven')" v-bind:class="{isFeeHour: isSeven }">7小时</div>
        <div class="fee-hours-num" @click="feeHourClick('eight')" v-bind:class="{isFeeHour: isEight }">8小时</div>
      </div>
      <div class="fee-hours-content fee-hours-num" @click="feeHourClick('other')" v-bind:class="{isFeeHour: isOther }">
        自定义
      </div>
    </div>
    <div class="searchPay-btn">
      <button v-if="!isFeeHourClick">发放</button>
      <button class="searchPay-btn-click" v-if="isFeeHourClick" @click="addCar">发放</button>
    </div>
    <div class="keyboard" v-if="keyboardShow" :class='{animationDown:isDown,animationUp:isUp}'>
      <button class="btn-complete" @click="completeClick"><span>完成</span></button>
      <div v-if="keyboard == 'txt'">
        <div class="keyboard-row" v-for="(item,rows) in carTxt">
          <button class="keyboard-row-item" v-for="(i,index) in item.name" @click="btnWordClick(rows,index,i)">{{i}}
          </button>
        </div>
        <div class="keyboard-row">
          <!-- <div class="keyboard-row-items"> -->
          <button class="keyboard-row-item bottom" @click="btnBottomClick('新')">新</button>
          <button class="keyboard-row-item bottom" @click="btnBottomClick('临')">临</button>
          <button v-for="j in noneBottomtxt" class="none-botton">{{j}}</button>
          <div class="keyboard-row-item clear" @click="clearClick">
            <img src="../assets/icon_input_delete.png" alt="删除">
          </div>
          <!-- </div> -->
        </div>
      </div>
      <div v-if="keyboard == 'num'">
        <div class="keyboard-row" v-for="(item,rows) in carNum">
          <button :disabled="!isSelectl?isDisable && i<10 :isDisable&& rows!=0 " class="keyboard-row-item"
                  v-for="(i,index) in item.name" @click="btnWordClick(rows,index,i)">{{i}}
          </button>
        </div>
        <div class="keyboard-row">
          <!-- <div class="keyboard-row-bottom"> -->
          <button :disabled="isSelectl" v-for="item in carNumBottom" class="keyboard-row-item bottom"
                  @click="btnBottomNumClick(item)">{{item}}
          </button>
          <button v-for="j in noneBottom" class="none-botton">{{j}}</button>
          <div class="keyboard-row-item clear" @click="clearClick">
            <img src="../assets/icon_input_delete.png" alt="删除">
          </div>
          <!-- </div> -->

        </div>
      </div>
    </div>
  </f7-page>
</template>

<script>
    // import {ADD_VEHICLE} from '../url'
    export default{
        name: 'Dispense',
        data () {
            return {
                isFeeHourClick: false,
                checkbox: false,
                isDown: false,
                isUp: false,
                selected: null,
                isSelectx: false,
                isSelectl: false,
                key: 1,
                areaName: '',
                areaLetter: '',
                numOne: '',
                numTwo: '',
                numThree: '',
                numFour: '',
                numFive: '',
                numSix: '',
                isYue: false,
                keyboardShow: false,
                keyboard: false,
                isA: false,
                isNumOne: false,
                isNumTwo: false,
                isNumThree: false,
                isNumFour: false,
                isNumFive: false,
                isNumSix: false,
                isDisable: false,
                isOne: false,
                isTwo: false,
                isThree: false,
                isFour: false,
                isFive: false,
                isSix: false,
                isSeven: false,
                isEight: false,
                isOther: false,
                carTxt: [
                    { name: ['粤', '京', '冀', '沪', '津', '晋', '蒙', '辽', '吉', '黑'] },
                    { name: ['苏', '浙', '皖', '闽', '赣', '鲁', '豫', '鄂', '湘', '桂'] },
                    { name: ['琼', '渝', '川', '贵', '云', '藏', '陕', '甘', '青', '宁'] }
                ],
                carNumBottom: ['W', 'X', 'Y', 'Z'],
                noneBottom: ['', '', '', ''],
                noneBottomtxt: ['', '', '', '', '', ''],
                carNum: [
                    { name: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'] },
                    { name: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K'] },
                    { name: ['L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V'] }
                ],
                addedCarNum: ''
            }
        },
        watch: {
            checkbox: function (val) {
                this.isNumOne = false
                this.isNumTwo = false
                this.isNumThree = false
                this.isNumFour = false
                this.isNumFive = false
                this.isNumSix = false
                const vm = this
                if (!val) { // 切换到普通车牌
                    if (vm.numFour) {
                        vm.isNumFive = true
                        vm.key = 7
                        console.log(4, val)
                    }
                } else { // 切换到新能源车牌
                    if (vm.numFive) {
                        vm.isNumSix = true
                        vm.key = 8
                        console.log(3, val)
                    }
                }
            }
        },
        methods: {
            feeHourClick (val) {
                if (this.areaName && this.areaLetter && this.numOne && this.numTwo && this.numThree && this.numFour && this.numFive) {
                    if (this.checkbox && this.numSix) {
                        this.isFeeHourClick = true
                    } else if (!this.checkbox) {
                        this.isFeeHourClick = true
                    }
                }
                this.keyboardShow = false
                if (val === 'one') {
                    this.isOne = true
                    this.isTwo = false
                    this.isThree = false
                    this.isFour = false
                    this.isFive = false
                    this.isSix = false
                    this.isSeven = false
                    this.isEight = false
                    this.isOther = false
                } else if (val === 'two') {
                    this.isTwo = true
                    this.isOne = false
                    this.isThree = false
                    this.isFour = false
                    this.isFive = false
                    this.isSix = false
                    this.isSeven = false
                    this.isEight = false
                    this.isOther = false
                } else if (val === 'three') {
                    this.isThree = true
                    this.isTwo = false
                    this.isOne = false
                    this.isFour = false
                    this.isFive = false
                    this.isSix = false
                    this.isSeven = false
                    this.isEight = false
                    this.isOther = false
                } else if (val === 'four') {
                    this.isFour = true
                    this.isTwo = false
                    this.isThree = false
                    this.isOne = false
                    this.isFive = false
                    this.isSix = false
                    this.isSeven = false
                    this.isEight = false
                    this.isOther = false
                } else if (val === 'five') {
                    this.isFive = true
                    this.isTwo = false
                    this.isThree = false
                    this.isFour = false
                    this.isOne = false
                    this.isSix = false
                    this.isSeven = false
                    this.isEight = false
                    this.isOther = false
                } else if (val === 'six') {
                    this.isSix = true
                    this.isTwo = false
                    this.isThree = false
                    this.isFour = false
                    this.isFive = false
                    this.isOne = false
                    this.isSeven = false
                    this.isEight = false
                    this.isOther = false
                } else if (val === 'seven') {
                    this.isSeven = true
                    this.isTwo = false
                    this.isThree = false
                    this.isFour = false
                    this.isFive = false
                    this.isSix = false
                    this.isOne = false
                    this.isEight = false
                    this.isOther = false
                } else if (val === 'eight') {
                    this.isEight = true
                    this.isTwo = false
                    this.isThree = false
                    this.isFour = false
                    this.isFive = false
                    this.isSix = false
                    this.isSeven = false
                    this.isOne = false
                    this.isOther = false
                } else if (val === 'other') {
                    this.isOther = true
                    this.isTwo = false
                    this.isThree = false
                    this.isFour = false
                    this.isFive = false
                    this.isSix = false
                    this.isSeven = false
                    this.isEight = false
                    this.isOne = false
                }
            },
            carTypeChange (val) {
                this.isNumOne = false
                this.isNumTwo = false
                this.isNumThree = false
                this.isNumFour = false
                this.isNumFive = false
                this.isNumSix = false
                if (!val) { // 切换到普通车牌
                    if (this.numFour) {
                        this.isNumFive = true
                        this.key = 7
                    }
                } else { // 切换到新能源车牌
                    if (this.numFive) {
                        this.isNumSix = true
                        this.key = 8
                    }
                }
            },
            btnClickYue () {
                this.isYue = true
                this.isA = false
                this.isUp = true
                this.isNumOne = false
                this.isNumTwo = false
                this.isNumThree = false
                this.isNumFour = false
                this.isNumFive = false
                this.isNumSix = false
                this.keyboardShow = true
                this.keyboard = 'txt'
                this.key = 1
            },
            btnWordClick (rows, index, i) {
                this.selected = i
                if (this.key === 1) {
                    if (this.areaName === '临') {
                        this.areaLetter = ''
                        this.numOne = ''
                        this.numTwo = ''
                        this.numThree = ''
                        this.numFour = ''
                        this.numFive = ''
                        this.numSix = ''
                    }
                    this.areaName = i
                    this.isSelectl = false
                    document.getElementById('letter').click()
                } else if (this.key === 2) {
                    this.areaLetter = i
                    document.getElementById('numOne').click()
                } else if (this.key === 3) {
                    this.numOne = i
                    document.getElementById('numTwo').click()
                } else if (this.key === 4) {
                    this.numTwo = i
                    document.getElementById('numThree').click()
                } else if (this.key === 5) {
                    this.numThree = i
                    document.getElementById('numFour').click()
                } else if (this.key === 6) {
                    this.numFour = i
                    document.getElementById('numFive').click()
                } else if (this.key === 7) {
                    this.numFive = i
                    if (this.checkbox) {
                        document.getElementById('numSix').click()
                    }
                } else if (this.key === 8) {
                    this.numSix = i
                }
                if (this.key === 7 || this.key === 8) {
                    this.carNumBottom = ['W', 'X', 'Y', 'Z', '港', '澳', '学']
                    this.noneBottom = ['']
                } else if (this.key === 3 || this.key === 4 || this.key === 5 || this.key === 6) {
                    this.carNumBottom = ['W', 'X', 'Y', 'Z']
                    this.noneBottom = ['', '', '', '']
                }
            },
            btnBottomClick (val) {
                if (val === '新') {
                    if (this.areaName === '临') {
                        this.areaLetter = ''
                        this.numOne = ''
                        this.numTwo = ''
                        this.numThree = ''
                        this.numFour = ''
                        this.numFive = ''
                        this.numSix = ''
                    }
                    this.areaName = '新'
                    this.isSelectx = true
                    this.isSelectl = false
                    document.getElementById('letter').click()
                } else if (val === '临') {
                    this.areaName = '临'
                    this.isSelectl = true
                    this.isSelectx = false
                    this.isDisable = true
                    this.areaLetter = ''
                    this.numOne = ''
                    this.numTwo = ''
                    this.numThree = ''
                    this.numFour = ''
                    this.numFive = ''
                    this.numSix = ''
                    document.getElementById('letter').click('isLin')
                }
            },
            btnBottomNumClick (i) {
                this.selected = i
                if (this.key === 2) {
                    this.areaLetter = i
                    document.getElementById('numOne').click()
                } else if (this.key === 3) {
                    this.numOne = i
                    document.getElementById('numTwo').click()
                } else if (this.key === 4) {
                    this.numTwo = i
                    document.getElementById('numThree').click()
                } else if (this.key === 5) {
                    this.numThree = i
                    document.getElementById('numFour').click()
                } else if (this.key === 6) {
                    this.numFour = i
                    document.getElementById('numFive').click()
                } else if (this.key === 7) {
                    this.numFive = i
                    if (this.checkbox) {
                        document.getElementById('numSix').click()
                    }
                } else if (this.key === 8) {
                    this.numSix = i
                }
            },
            btnClickA () {
                this.isDisable = true
                this.isA = true
                this.isYue = false
                this.isUp = true
                this.isNumOne = false
                this.isNumTwo = false
                this.isNumThree = false
                this.isNumFour = false
                this.isNumFive = false
                this.isNumSix = false
                this.keyboardShow = true
                this.keyboard = 'num'
                this.key = 2
            },
            btnClickNum (name) {
                if (this.isSelectl) {
                    this.isDisable = true
                } else {
                    this.isDisable = false
                }
                this.keyboard = 'num'
                this.keyboardShow = true
                this.isYue = false
                this.isA = false
                this.isNumOne = false
                this.isNumTwo = false
                this.isNumThree = false
                this.isNumFour = false
                this.isNumFive = false
                this.isNumSix = false
                this.isUp = true
                if (name === 'one') {
                    this.isNumOne = true
                    this.key = 3
                } else if (name === 'two') {
                    this.isNumTwo = true
                    this.key = 4
                } else if (name === 'three') {
                    this.isNumThree = true
                    this.key = 5
                } else if (name === 'four') {
                    this.isNumFour = true
                    this.key = 6
                } else if (name === 'five') {
                    this.isNumFive = true
                    this.key = 7
                } else if (name === 'six') {
                    this.isNumSix = true
                    this.key = 8
                }
                if (name === 'five' || name === 'six') {
                    this.carNumBottom = ['W', 'X', 'Y', 'Z', '港', '澳', '学']
                    this.noneBottom = ['']
                } else {
                    this.carNumBottom = ['W', 'X', 'Y', 'Z']
                    this.noneBottom = ['', '', '', '']
                }
            },
            completeClick () {
                this.isYue = false
                this.isA = false
                this.isNumOne = false
                this.isNumTwo = false
                this.isNumThree = false
                this.isNumFour = false
                this.isNumFive = false
                this.isNumSix = false
                this.isUp = false
                this.isDown = true
                this.keyboardShow = false
            },
            clearClick () {
                if (this.key === 1) {
                    this.areaName = ''
                } else if (this.key === 2) {
                    document.getElementById('font').click()
                    this.areaLetter = ''
                } else if (this.key === 3) {
                    document.getElementById('letter').click()
                    this.numOne = ''
                } else if (this.key === 4) {
                    document.getElementById('numOne').click()
                    this.numTwo = ''
                } else if (this.key === 5) {
                    document.getElementById('numTwo').click()
                    this.numThree = ''
                } else if (this.key === 6) {
                    document.getElementById('numThree').click()
                    this.numFour = ''
                } else if (this.key === 7) {
                    document.getElementById('numFour').click()
                    this.numFive = ''
                } else if (this.key === 8) {
                    document.getElementById('numFive').click()
                    this.numSix = ''
                }
            },
            addCar () {
                var num
                if (!this.checkbox) {
                    num = this.areaName + this.areaLetter + this.numOne + this.numTwo + this.numThree + this.numFour + this.numFive
                } else if (this.checkbox) {
                    num = this.areaName + this.areaLetter + this.numOne + this.numTwo + this.numThree + this.numFour + this.numFive + this.numSix
                }
                if (num === '') {
                    this.$dialog.toast({ mes: '请输入车牌', timeout: 1000 })
                } else if (!this.checkbox && (this.areaName === '' || this.areaLetter === '' || this.numOne === '' || this.numTwo === '' || this.numThree === '' || this.numFour === '' || this.numFive === '')) {
                    this.$dialog.toast({ mes: '请输入完整车牌', timeout: 1000 })
                } else if (this.checkbox && (this.areaName === '' || this.areaLetter === '' || this.numOne === '' || this.numTwo === '' || this.numThree === '' || this.numFour === '' || this.numFive === '' || this.numSix === '')) {
                    this.$dialog.toast({ mes: '请输入完整车牌', timeout: 1000 })
                } else {
                    // let data = {
                    //     vehiclenum: num
                    // }
                    // this.$http.post(ADD_VEHICLE, data).then(res => {
                    //   if (res.data.ret === 0) {
                    //     this.addedCarNum = num
                    //     this.$router.push({name: 'AddSuccess', params: {addedCarNum: this.addedCarNum}})
                    //   } else {
                    //     this.$dialog.toast({mes:res.data.message,timeout:1200})
                    //   }
                    // })
                }
            }
        },
        mounted () {
            this.btnClickYue()
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                vm.areaName = ''
                vm.areaLetter = ''
                vm.numOne = ''
                vm.numTwo = ''
                vm.numThree = ''
                vm.numFour = ''
                vm.numFive = ''
                vm.numSix = ''
            })
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss">
  #dispense {
    .navbar {
      .right{
        a{
          font-size: 30px;
          color: #ffc200;
        }
      }
    }
    .ze-checkbox > input[type=checkbox] {
      position: absolute;
      left: -9999em;
    }

    .ze-checkbox > input[type=checkbox]:checked + .ze-checkbox-icon {
      background-color: currentColor;
      border-color: #ffC400;
    }

    .ze-checkbox-icon {
      border: 1px solid #ccc; /*no*/
      border-radius: 2px;
      display: inline-block;
      position: relative;
      z-index: 10;
      vertical-align: bottom;
      pointer-events: none;
      > i {
        content: "";
        position: absolute;
        top: 45%;
        left: 50%;
        border: 3px solid #ffC400; /*no*/
        border-top: 0;
        border-left: 0;
        -webkit-transform: translate(-50%, -50%) rotate(45deg) scale(0);
        transform: translate(-50%, -50%) rotate(45deg) scale(0);
      }
    }

    .ze-checkbox > input[type=checkbox]:checked + .ze-checkbox-icon > i {
      -webkit-transform: translate(-50%, -50%) rotate(45deg) scale(1);
      transform: translate(-50%, -50%) rotate(45deg) scale(1);
      -webkit-transition: all .2s ease-in-out;
      transition: all .2s ease-in-out;
    }
    background-color: #fff;
    .content-car-number {
      padding: 64px 0 0;
      .car-content-title {
        display: flex;
        justify-content: space-between;
        padding: 0 32px;
        margin-bottom: 16px;
        span {
          font-size: 34px;
        }
        .ze-checkbox {
          display: flex;
          align-items: center;
        }
        .ze-radio-text {
          font-size: 28px;
        }
        .ze-checkbox-icon {
          color: #FFEDB1 !important;
          margin-right: 8px;
        }
      }
      .content-section {
        .content-section-flex {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 40px;
          margin-bottom: 35px;
          .blank-border {
            height: 44px;
            width: 1px; /*no*/
            border-right: 1px solid #ddd; /*no*/
            margin-top: 27px;
            float: left;
            margin-left: -15px;
            z-index: 1;
            &.blank-border-first {
              margin-top: 0px;
            }
          }
          &.flex-card {
            color: #000;
            .flex-btn {
              width: 98px;
              height: 98px;
              border: none;
              text-align: center;
              background: #fff;
              font-size: 40px;
              color: #000;

            }
            .flex-btns {
              text-align: center;
              background: #fff;
              width: fit-content;
              position: relative;
              height: 98px;
              button {
                width: 98px;
                height: 98px;
                border: none;
                font-size: 40px;
                color: #000;
                border-radius: 50%;
                background: transparent;
                float: left;
                margin-left: -20px;
                z-index: 2;
                position: relative;
                &:first-child {
                  margin-left: 0;
                }
              }
            }
            .flex-mid {
              margin: 0 0.1rem;
              span {
                display: block;
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background: #ddd;
              }
            }
            .isClick {
              border: 1px solid #ffc200; /*no*/
              z-index: 50;
              border-radius: 8px;
            }
            .isNumClick {
              border-radius: 8px !important;
              border: 1px solid #ffc200 !important; /*no*/
              z-index: 10;
              background-color: #fff !important;
            }
          }
          .flex-card-border {
            border: 1px solid #ddd; /*no*/
            border-radius: 8px;
          }
        }
      }
    }
    .fee-hours {
      padding: 0 32px;
      margin-bottom: 80px;
      .fee-hours-title {
        margin-bottom: 16px;
        font-size: 34px;
      }
      .fee-hours-content {
        display: flex;
        justify-content: space-between;
        margin-bottom: 32px;
        &.fee-hours-num {
          display: block;
        }
      }
      .fee-hours-num {
        width: 152px;
        height: 64px;
        font-size: 28px;
        background: #ececec;
        border-radius: 8px;
        text-align: center;
        line-height: 64px;
      }
      .isFeeHour {
        background: #ffeeb1;
      }
    }
    .searchPay-btn {
      text-align: center;
      /*background-color: #f6f6f6;*/
      margin: 0 32px 0;
      button {
        width: 686px;
        height: 88px;
        color: #ffffff;
        font-size: 32px;
        background: #ececec;
        border: none;
        border-radius: 8px;
        &.searchPay-btn-click {
          box-shadow: 0px 5px 10px 0px rgba(255, 227, 135, 1);
          background: #ffc200;
          color: #101010;
        }
      }
    }
    .keyboard {
      width: 100%;
      height: 502px;
      position: fixed;
      bottom: -502px;
      background: #eeeeee;
      z-index: 10;
      &.animationDown {
        animation: slide_dowms 0.3s ease-out;
        animation-fill-mode: forwards;
      }
      &.animationUp {
        animation: slide_ups 0.3s ease-out;
        animation-fill-mode: forwards;
      }
      .btn-complete {
        height: 72px;
        text-align: right;
        color: #ffc200;
        font-size: 30px;
        width: 100%;
        background: #fff;
        border: none;
        border-top: 1px solid #eee;
        margin-bottom: 30px;
        span {
          margin-right: 30px;
        }
      }
      .keyboard-row {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        padding: 0 8px;
        color: #333;
        &:first-child {
          margin-top: 0;
        }
        .keyboard-row-items {
          display: flex;
          justify-content: left;
        }
        .keyboard-row-bottom {
          display: flex;
          justify-content: space-between;
        }
        .keyboard-row-item {
          width: 66px;
          height: 80px;
          background: #fff;
          font-size: 34px;
          text-align: center;
          border: 1px solid #ccc; /*no*/
          border-radius: 10px;
          color: #333;
          &.bottom {
            height: 80px;
            width: 66px;
            line-height: 80px;
            background: #fff;
            color: #333;
            /*margin-right: 0.08rem;*/
          }
          &.clear {
            width: 140px;
            height: 80px;
            display: flex;
            align-items: center;
            justify-content: center;
            img {
              width: 62px;
            }
          }
        }
        .none-botton {
          border: none;
          height: 80px;
          width: 66px;
          visibility: hidden;
        }
      }
      button {
        &:active {
          background: #f4f4f4 !important;
          color: #999 !important;
        }
      }
    }
    @keyframes slide_ups {
      from {
        bottom: -502px;
      }
      to {
        bottom: 0px;
      }
    }
    @keyframes slide_dowms {
      from {
        bottom: 0px;
      }
      to {
        bottom: -502px;
      }
    }
    button:disabled {
      background: #f4f4f4 !important;
      color: #8f8f8f !important;
    }
    .active {
      &:active {
        background: #f4f4f4 !important;
        color: #999 !important;
      }
    }
  }
</style>
