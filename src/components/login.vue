<template>
  <div class="container">
    <div class="header">
      <div class="logo">logo</div>
      <div class="search">
        <el-input
        placeholder="请输入内容"
        v-model="input4">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </div>
        <div class="nologin1" @click="go"><div class="i"><i class="iconfont iconicon_zhanghao"></i></div>登录</div>
    </div>
    <div>
      <full-page :options="options" ref="fullpage" >
        <div class="section section1">
          <div class="box1">
            <div class="loginContainer">
              <transition  leave-active-class="animated fadeOutDownBig">
                <div class="loginHeader" ref="loginHeader" v-show="show1">高校综合信息管理平台</div>
              </transition>
              <div class="noLogin2" @click="go">登录</div>
            </div>
            <div class="descripe">
              <span>为你提供更优质的服务</span>
              <div><i class="el-icon-d-caret"></i></div>
            </div>
          </div>
        </div>
        <div class="section section2">
<!--          <div class="zhezhao"></div>-->
          <div class="box2">
            <transition  enter-active-class="animated bounceInDown">
              <div class="loginHeader1" ref="loginHeader1" v-show="!show1">高校综合信息管理平台</div>
            </transition>
            <div class="reference">
              <div class="referenceTitle">推荐服务</div>
              <div class="referenceContent" ref="referenceContent">
                <ul class="referenceList" ref="referenceContent">
                  <li v-for="(item,key) in referList" @mouseenter="enter(key)" @mouseleave="leave(key)" ref="li" >
                      <div class="referenceListdetil1" ref="referenceListdetil1" :style="obj1">
                        <div class="referenceListdetilcontent">
                          <img :src=item.url alt="" >
                          <div class="referenceListdetilcontentdes">
                            <span>{{item.title}}</span>
                          </div>
                        </div>
                      </div>
                      <div class="referenceListdetil1big" ref="referenceListdetil1big" :style="obj2"  @click="showcontent(key)">
                        <div class="referenceListdetil1bigtitle">
                          <span>{{item.title}}</span>
                        </div>
                        <div class="referenceListdetil1bigcontent">
                          <img :src=item.url alt="" >
                          <div class="referenceListdetilcontentbigdes">
                            <el-rate
                              v-model="value"
                              disabled
                              show-score
                              text-color="#ff9900"
                              score-template="{value}">
                            </el-rate>
                            <div>{{item.des}}</div>
                            <div>{{item.num}}收藏</div>
                          </div>
                        </div>
                      </div>
<!--                      <div class="box3" ref="contentshow" v-for="(item,key) in referList" :style="obj3">-->
<!--                      <div class="box3content">-->
<!--                        <div class="box3title">{{item.title}}</div>-->
<!--                        <div class="box3des">description</div>-->
<!--                        <button class="goin">进入服务-></button>-->
<!--                      </div>-->
<!--                    </div>-->
                  </li>
                </ul>
                </div>
              </div>
            </div>
          <div class="box3" ref="contentshow" v-for="(item,key) in referList" :style="obj3">
            <div class="box3content">
              <div class="closecontent" @click="closecontent(key)">×</div>
              <div class="box3title">{{item.title}}</div>
              <div class="box3des">{{item.description}}</div>
              <button class="goin" @click="go" >进入服务</button>
            </div>
          </div>
        </div>
      </full-page>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show1: true,
      obj1: {
        display: 'block'
      },
      obj2: {
        display: 'none'
      },
      obj3: {
        display: 'none'
      },
      referList: [
        { url: 'https://ehall.nwafu.edu.cn/resources/app/4671873484017906/MYYKTZD_V1.1.13_TR2/icon_72.png?_=1523159992000',
          title: '新闻动态',
          des: '生活服务',
          num: 100,
          description: '这里是校内新闻速递，提供近期校内的大小新闻以及校内的各种服务资讯，足不出户，一步了解校内事，总是比别人快一步。校内新闻是包含海量资讯的新闻服务平台，真实反映每时每刻的新闻热点。您可以搜索新闻事件、热点话题、人物动态、产品资讯等，快速了解它们的最新进展。'
        },
        { url: 'https://ehall.nwafu.edu.cn/resources/app/4671873484017906/MYYKTZD_V1.1.13_TR2/icon_72.png?_=1523159992000',
          title: '后勤维修',
          des: '生活服务',
          num: 100,
          description: '这里是校内的后勤维修服务，在这里你可以通过向后勤维修部门报修，解决后勤相关问题'
        },
        { url: 'https://ehall.nwafu.edu.cn/resources/app/4671873484017906/MYYKTZD_V1.1.13_TR2/icon_72.png?_=1523159992000',
          title: '建言献策',
          des: '生活服务',
          num: 100,
          description: '这里是校内的建言献策服务，在这里你可以通过此服务提出您宝贵的建议，我们也会虚心接受优化我们的服务，让我们共同进步，携手共建未来'
        }
      ],
      k: '',
      value: 3.7,
      options: {
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        afterLoad: this.afterLoad,
        scrollOverflow: true,
        scrollBar: true,
        menu: '#menu',
        navigation: true,
        navigationColor: '#000',
        slidesNavigation: true,
        loopBottom: true,
        // anchors: ['page1', 'page2'],
        sectionsColor: ['#a5e5ff', '#efc6c7'],
        onLeave: this.onLeave
      }

    }
  },
  mounted () {
    this.k = document.body.clientHeight
    console.log(this.k)
  },
  methods: {
    onLeave () {
      console.log(this)
      this.show1 = !this.show1
    },
    go () {
      this.$router.push('/userLogin')
    },
    enter (key) {
      var r1 = this.$refs.referenceListdetil1
      var r2 = this.$refs.referenceListdetil1big
      r1[key].style.display = 'none'
      r2[key].style.display = 'block'
    },
    leave (key) {
      var r1 = this.$refs.referenceListdetil1
      var r2 = this.$refs.referenceListdetil1big
      r1[key].style.display = 'block'
      r2[key].style.display = 'none'
    },
    showcontent (key) {
      var content = this.$refs.contentshow
      content[key].style.display = 'block'
    },
    closecontent (key) {
      var content = this.$refs.contentshow
      content[key].style.display = 'none'
    }
  }
}

</script>

<style scoped>
  .v-enter-active,
  .v-leave-active {
    transition: all 2.6s;
  }
  .container {
    width: 100%;
  }
  .section1 {
    background: url('../assets/first/1.jpg') 50%;
  }
  .section2 {
    background: url('../assets/first/1.jpg') 50%;
    position: relative;
  }
  .zhezhao {
    position: absolute;
    left: 0px;
    width: 1048px;
    height: 660px;
    background-color: rgba(255,255,255,.2);
  }
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    z-index: 999999999999;
    background-color: rgba(14,41,63,.9);
    box-shadow: 0 1px 15px -5px rgba(255,255,255,.9);
  }
  .logo {
    position: absolute;
    left: 0;
    top: 5px;
    display: inline-block;
    width: 100px;
    height: 50px;
    line-height: 50px;
    font-size: 40px;
    color: rgb(255, 188, 59);
    /*background-color: #fff;*/
  }
  .search {
    position: absolute;
    margin: 9px;
    left: 650px;
    width: 240px;
    height: 35px;
  }
  .nologin1 {
    position: absolute;
    right: 0;
    top: 5px;
    display: inline-block;
    width: 80px;
    height: 50px;
    line-height: 50px;
    color: rgb(255, 188, 59);
    font-size: 14px;
    padding-right: 10px;
    /*background-color: #fff;*/
    text-align: right;
  }
  .i {
    position: absolute;
    top:10px;
    left: 10px;
    margin-right: 10px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    border: 1px solid black;
    border-radius: 50%;
    text-align: center;
    color: black;
    background-color: rgb(255,255,255);
  }
  .box1 {
    position: absolute;
    left: 263px;
    top: -50px;
    width: 1048px;
    height: 660px;
  }
  .box2 {
    position: absolute;
    left: 263px;
    width: 1048px;
    height: 660px;
  }
  /*遮罩层*/
  .box3 {
    display: none;
    position: absolute;
    top: 100px;
    left: 0;
    width: 100%;
    height: 85%;
    background-color: rgba(0,0,0,.6);
  }
  .box3content {
    position: relative;
    width: 60%;
    height: 450px;
    margin: 55px auto;
    border-radius: 10px;
    box-sizing: border-box;
    background-color: white;
    box-shadow: 0 10px 10px 5px rgba(0,0,0,0.7);
  }
  .closecontent {
    position: absolute;
    right: 10px;
    top: 10px;
    width: 20px;
    height: 20px;
    line-height: 20px;
    border-radius: 50%;
    background-color: #ccc;
    cursor: pointer;
  }
  .box3title {
    width: 100%;
    height: 50px;
    line-height: 50px;
    font-size: 28px;
    font-weight: 600;
    color: #0e293f;
    border-bottom: 1px solid black;
  }
  .box3des {
    width: 600px;
    height: 300px;
    line-height: 25px;
    padding: 50px;
    color: #0e293f;
    font-size: 16px;
    text-align: left;
    border-bottom: 1px solid #0e293f;
    margin-bottom: 20px;
  }
  .goin {
    border: 3px solid #0e293f;
    width: 120px;
    height: 40px;
    line-height: 32px;
    font-size: 18px;
    font-weight: 600;
    color: #0e293f;
    background-color: #fff;
  }
  /*第一屏开始*/
  .loginContainer {
    position: relative;
    width: 100%;
    height: 400px;
    margin: 200px auto;
    /*background-color: #fff;*/
  }
  .loginHeader {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    line-height: 60px;
    padding-top: 115px;
    /*background-color: pink;*/
    /*border: 1px solid black;*/
    font: normal 800 40px "Times New Roman";
    color: white;
    letter-spacing: 10px;
  }
  .noLogin2 {
    position: absolute;
    top: 285px;
    left: 410px;
    width: 240px;
    height: 48px;
    line-height: 48px;
    font-size: 20px;
    color: white;
    background-color: rgba(14,41,63,0.7);
    border: 3px solid rgba(14,41,63,0.5);
    border-radius: 10px;
    cursor: pointer;
  }
  .noLogin2:hover {
    color: rgb(255, 188, 59);
  }
  .descripe {
    position: absolute;
    left: 238px;
    bottom: -179px;
    width: 600px;
    height: 100px;
    /*background-color: pink;*/
    font: normal 500 24px "Times New Roman";
    color: rgba(255,255,255,.8);
  }
  /*第一屏结束*/
  /*************************************************************************************/
  /*第二屏开始*/
  .box2 {
    position: relative;
  }
  .loginHeader1 {
    position: absolute;
    top: 160px;
    left: 0;
    width: 100%;
    height: 60px;
    line-height: 60px;
    padding-top: 115px;
    /*background-color: pink;*/
    /*border: 1px solid black;*/
    font: normal 800 40px "Times New Roman";
    color: white;
    letter-spacing: 10px;
  }
  .reference {
    position: absolute;
    top: 452px;
    left: 193px;
    width: 100%;
    height: 400px;
    /* background-color: #fff; */
  }
  .referenceTitle {
    margin: 20px 478px 33px 103px;
    color: white;
    font-size: 20px;
    font-family: Tahoma,Arial,"Hiragino Sans GB",simsun,sans-serif;
  }
  .referenceContent {
    width: 100%;
    height: 300px;
    /*border: 1px solid black;*/
  }
  .referenceList {
    width: 100%;
    height:100px;
    margin: 0;
    padding: 0;
    list-style: none;
    /*border: 1px solid blue;*/
    box-sizing: border-box;
  }
  .referenceListdetil1 {
    float: left;
    margin: 0 10px 0 10px;
    width: 202px;
    height: 100px;
    background-color: rgba(255,255,255,.8);
    /*border: 1px solid #55a532;*/
    border-radius: 3px;
    box-shadow: 0 0 3px 2px rgba(0,0,0,0.4);
    transition: box-shadow 0.5s ease 0s;
    box-sizing: border-box;
  }
  .referenceListdetilcontent {
    position: relative;
    width: 200px;
    height: 90px;
    margin: 3px auto;
    vertical-align: center;
    /*background-color: pink;*/
  }
  .referenceListdetilcontent img {
    position: absolute;
    left: 15px;
    top: 20px;
    width: 50px;
    height: 50px;
  }
  .referenceListdetilcontentdes {
    position: absolute;
    left: 80px;
    top: 10px;
    width: 100px;
    height: 70px;
    border: 1px solid rgba(14,41,63,0.5);
    border-radius: 6px;
    /*background-color: #a5e5ff;*/
  }
  .referenceListdetil1big {
    position: relative;
    float: left;
    width: 220px;
    height: 120px;
    background-color: #fff;
    /*border: 1px solid #55a532;*/
    border-radius: 4px;
    box-shadow: 0 0 5px 2px rgba(0,0,0,0.4);
    box-sizing: border-box;
  }
  .referenceListdetil1bigcontent img {
    position: absolute;
    left: 5px;
    top: 40px;
    width: 50px;
    height: 50px;
  }
  .referenceListdetil1bigtitle {
    width: 100%;
    hieght: 40px;
    border-bottom: 1px solid #2c3e50;
  }
  .referenceListdetilcontentbigdes {
    position: absolute;
    left: 60px;
    top: 30px;
    width: 150px;
    height: 80px;
    background-color: #a5e5ff;
  }
 .referenceListdetilcontentbigdes div {
   width: 100%;
   height: 16px;
   line-height: 16px;
   margin-top: 6px;
   font-size: 12px;
 }
  /*第二屏结束*/
</style>
