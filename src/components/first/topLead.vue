<template>
  <div class="content">
    <div class="top">
      <div class="top-l">
        <div class="title">
          &nbsp;&nbsp;<i class="el-icon-setting"></i>&nbsp;&nbsp;后勤服务管理系统
        </div>
      </div>
      <div class="top-r">
        <div class="login" ><div class="i"><i class="iconfont iconicon_zhanghao"></i></div>
          <el-dropdown>
  <span class="el-dropdown-link">
    {{rname}}<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item><el-button type="success" plain @click="setted">个人资料</el-button></el-dropdown-item>
              <el-dropdown-item><el-button type="warning" plain @click="exit">安全退出</el-button></el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
      </div>
      <div class="second">
        <el-dropdown>
  <span class="el-dropdown-link">
    导航<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
          <el-dropdown-menu slot="dropdown">
            <router-link to="../logistics/content"><el-dropdown-item >后勤报修</el-dropdown-item></router-link>
            <router-link to="../commend"><el-dropdown-item>服务评价</el-dropdown-item></router-link>
            <router-link to="../proposal/proposal1"><el-dropdown-item>建言献策</el-dropdown-item></router-link>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      </div>
    </div>
    <div class="middle">
      <div class="playl">
        <el-carousel :interval="5000" arrow="always" >
          <el-carousel-item v-for="(item,index) in img" :key="index" style="height: 500px;">
            <img v-bind:src="item.url">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="bg1"></div>
      <transition enter-active-class="bounceInRight">
        <div v-show="show" class="animated title1">
          <div style="position: absolute; width: 55px; height: 46px; left: 336px; top: 32px; transform: rotate(0deg); display: block;"><div data-v-b2b3d752="" class="zm-component-img-main pointer" style="border-style: solid; border-color: rgb(0, 0, 0); border-width: 0px; box-shadow: none; border-radius: 0px;"><div data-v-b2b3d752="" class="zm-component-img-content hoverType1 isTransition" style="width: 100%; height: 100%;"></div></div></div>
          <span style="font-size: 80px; text-indent: 0.01px; box-sizing: border-box; font-weight: 700;" ><span  class="myZuMaEditor" style="color: #0e293f; text-indent: 0.01px; box-sizing: border-box; background-color: rgba(0, 0, 0, 0);">News</span><span style="box-sizing: border-box;"><span style="background-color: rgba(0, 0, 0, 0); box-sizing: border-box;"> </span>
      <span  style="box-sizing: border-box; color: rgb(255, 188, 59); text-indent: 0.01px;" class="">channel</span></span></span>
        </div>
      </transition>
      <div class="news">
        <div class="new1">
          <div class="newstitle">
            <span style="font-size: 20px; text-indent: 0.01px; box-sizing: border-box; font-family: 华文宋体; color: rgb(27, 27, 27); background-color: rgba(0, 0, 0, 0);"  class="">新闻公告</span>
            <span style="font-size: 16px; text-indent: 0.01px; box-sizing: border-box; color: rgb(134, 134, 134); background-color: rgba(0, 0, 0, 0);"  class="colorSelect">NEWS</span>
          </div>
          <div class="line">
            <div style="position: absolute; width: 170px; height: 25px; left: 167px; top: 37px; transform: rotate(0deg);"><div data-v-5e89450d="" class="zm-component-shape-main"><svg  style="stroke: rgb(241, 241, 241); stroke-width: 5; height: 5px;"><g data-v-5e89450d=""><path data-v-5e89450d="" stroke-dasharray="0,0" d="M0 2.5 170  2.5" class="horizontalLine"></path></g></svg></div></div>
            <div style="position: absolute; width: 14px; height: 25px; left: 167px; top: 37px; transform: rotate(0deg);"><div data-v-5e89450d="" class="zm-component-shape-main"><svg style="stroke: rgb(255, 33, 33); stroke-width: 5; height: 5px;"><g data-v-5e89450d=""><path data-v-5e89450d="" stroke-dasharray="0,0" d="M0 2.5 14  2.5" class="horizontalLine"></path></g></svg></div></div>
          </div>
          <ul>
            <li @click="go4"><i class=" el-icon-d-arrow-right"></i>&nbsp;&nbsp;致2019届毕业生</li>
            <li @click="go5"><i class=" el-icon-d-arrow-right"></i>&nbsp;&nbsp;我校开展节能宣传周和低碳日活动</li>
            <li @click="go6"><i class=" el-icon-d-arrow-right"></i>&nbsp;&nbsp;岗位练兵强素质 技能大赛展风采</li>
            <li @click="go7"><i class=" el-icon-d-arrow-right"></i>&nbsp;&nbsp;普及安全知识强化食品安全管理</li>
            <li @click="go8"><i class=" el-icon-d-arrow-right"></i>&nbsp;&nbsp;肩负重任  奋战正酣</li>
            <li @click="go9"><i class=" el-icon-d-arrow-right"></i>&nbsp;&nbsp;对19部电梯进行年度检测</li>
            <li @click="go10"><i class=" el-icon-d-arrow-right"></i>&nbsp;&nbsp;南校区供电系统改造工程投标企业</li>
          </ul>
        </div>
        <div class="new2">
          <div class="newstitle">
            <span style="font-size: 20px; text-indent: 0.01px; box-sizing: border-box; font-family: 华文宋体; color: rgb(27, 27, 27); background-color: rgba(0, 0, 0, 0);"  class="">服务动态</span>
            <span style="font-size: 16px; text-indent: 0.01px; box-sizing: border-box; color: rgb(134, 134, 134); background-color: rgba(0, 0, 0, 0);"  class="colorSelect">NEWS</span>
          </div>
          <div class="line">
            <div style="position: absolute; width: 170px; height: 25px; left: 167px; top: 37px; transform: rotate(0deg);"><div data-v-5e89450d="" class="zm-component-shape-main"><svg data-v-5e89450d="" style="stroke: rgb(241, 241, 241); stroke-width: 5; height: 5px;"><g data-v-5e89450d=""><path data-v-5e89450d="" stroke-dasharray="0,0" d="M0 2.5 170  2.5" class="horizontalLine"></path></g></svg></div></div>
            <div data-v-5e89450d="" data-v-626ea1ea=""  class="zm-component-mains" style="position: absolute; width: 14px; height: 25px; left: 167px; top: 37px; transform: rotate(0deg);"><div data-v-5e89450d="" class="zm-component-shape-main"><svg data-v-5e89450d="" style="stroke: rgb(255, 33, 33); stroke-width: 5; height: 5px;"><g data-v-5e89450d=""><path data-v-5e89450d="" stroke-dasharray="0,0" d="M0 2.5 14  2.5" class="horizontalLine"></path></g></svg></div></div>
          </div>
          <ul>
            <li @click="go1"><img src="../../assets/images/56.jpg" alt=""><div>后勤召开信息化建设专题培训会</div></li>
            <li @click="go2"><img src="../../assets/images/04.jpg" alt=""><div>处领导讲党课</div></li>
            <li @click="go3"><img src="../../assets/images/88.jpg" alt=""><div>高增刚一行赴西安基地看望学生</div></li>
          </ul>
        </div>
      </div>
      <div class="content2">
        <transition enter-active-class="fadeInLeftBig">
          <div v-show="show1" class="animated title2">
      <span style="font-size: 80px; text-indent: 0.01px; box-sizing: border-box; font-weight: 700;"><span  class="myZuMaEditor" style="color: #ffffff; text-indent: 0.01px; box-sizing: border-box; background-color: rgba(0, 0, 0, 0);">APPLICATION</span><span style="box-sizing: border-box;"><span style="background-color: rgba(0, 0, 0, 0); box-sizing: border-box;"> </span>
      <span  style="box-sizing: border-box; color: rgb(255, 188, 59); text-indent: 0.01px;" class="">CENTER</span></span></span>
        </div>
        </transition>
        <div class="app1">
          <div class="apptitle">
            <h1>应用中心</h1>
            <div class="line1"></div>
            <div class="des">点亮你的校园生活</div>
            <div class="des1">这里是校园应用中心，在这里点击您所需要的服务，我们将竭诚为您献上优质的服务，点亮您精彩的校园生活......</div>
          </div>
          <!--        <div class="appcontent">-->
          <!--          <div class="appstyle">-->
          <!--            <div class="iconimg"></div>-->
          <!--            <div class="appbox"></div>-->
          <!--          </div>-->
          <!--        </div>-->
          <div id="main">
            <ul>
              <li> <img src="../../assets/first/g1.jpg" alt="Iron Man 1" width="300" height="450" />
                <div class="info">
                  <h2>后勤维修</h2>
                  <p>生活服务： 及时报修，竭诚为您提供优质服务.</p>
                  <router-link to="../logistics/content">进入服务</router-link>
                </div>
              </li>
              <li> <img src="../../assets/first/g3.jpg" alt="Iron Man 2" width="300" height="450" />
                <div class="info">
                  <h2>服务评价</h2>
                  <p>生活服务： 为校园生活服务评分</p>
                  <router-link to="../commend">进入服务</router-link>
                </div>
              </li>
              <li> <img src="../../assets/first/g5.jpg" alt="Iron Man 3" width="300" height="450" />
                <div class="info">
                  <h2>建言献策</h2>
                  <p>生活服务： 为使校园生活更加和谐，请提出您宝贵的建议</p>
                  <router-link to="../proposal/proposal1">进入服务</router-link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="visit">
      <div class="visit1">校园风采</div>
      <div class="pic">
        <ul>
          <li><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1562635219&di=7fb7e583f18feeda9e5c8c1463244298&src=http://img.pconline.com.cn/images/upload/upc/tx/itbbs/1611/16/c8/30005709_1479260220647_mthumb.jpg" alt="" style="width: 270px;height: 200px;"></li>
          <li><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1562635295&di=8981221c9b03770a44bc84e632d052dd&src=http://www.gdwlxy.cn/UpFiles/Picture/zmstuxw2/201503/2015032715303756727.jpg" alt="" style="width: 270px;height: 200px;"></li>
          <li><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1562635313&di=3b3aba562c02d662fa35ca1ba6f9c328&src=http://photos.tuchong.com/59076/f/6241974.jpg" alt="" style="width: 270px;height: 200px;"></li>
          <li><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562645333181&di=64ceb0dc3b421a62116b7ff8aa51a36a&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F9vo3dSag_xI4khGko9WTAnF6hhy%2Flvpics%2Fh%3D800%2Fsign%3Da12b574dc0fdfc03fa78eeb8e43e87a9%2Fb64543a98226cffc77c01e01ba014a90f703ea9f.jpg" alt="" style="width: 270px;height: 200px;"></li>
        </ul>
      </div>
    </div>
    <div class="title3">
      <span style="font-size: 80px; text-indent: 0.01px; box-sizing: border-box; font-weight: 700;"><span  class="myZuMaEditor" style="color: #0e293f; text-indent: 0.01px; box-sizing: border-box; background-color: rgba(0, 0, 0, 0);">CONTACT</span><span style="box-sizing: border-box;"><span style="background-color: rgba(0, 0, 0, 0); box-sizing: border-box;"> </span>
      <span  style="box-sizing: border-box; color: rgb(255, 188, 59); text-indent: 0.01px;" class="">US</span></span></span>
    </div>
    <div class="footerbg"></div>
    <div class="footer">
      <transition enter-active-class="fadeInUp">
        <div v-show="show2">
          <div class="formDataTk">
            <div>
              <div class="inputTextContainer">
                <input type="text" placeholder="姓名 ( 必填 )" ismust="1" isref="searchKeyword" datareg="LEN" class="" style="font-size: 14px; border-width: 1px; font-weight: normal; font-family: 黑体; font-style: normal; color: rgb(134, 134, 134); height: 40px; border-radius: 0px; background-color: rgb(255, 255, 255); border-color: rgb(188, 188, 188);" />
              </div>
            </div>
            <div>
              <div class="inputTextContainer">
                <input type="text" placeholder="邮箱 ( 必填 )" ismust="1" isref="searchKeyword" datareg="/%5E%5Ba-zA-Z0-9_.-%5D+@%5Ba-zA-Z0-9-%5D+%28%5C.%5Ba-zA-Z0-9-%5D+%29*%5C.%5Ba-zA-Z0-9%5D%7B2%2C%7D%24/" class="" style="font-size: 14px; border-width: 1px; font-weight: normal; font-family: 黑体; font-style: normal; color: rgb(134, 134, 134); height: 40px; border-radius: 0px; background-color: rgb(255, 255, 255); border-color: rgb(188, 188, 188);" />
              </div>
            </div>
            <div>
              <div class="inputTextContainer">
                <input type="text" placeholder="手机号码 ( 必填 )" ismust="1" isref="searchKeyword" datareg="/%5E1%5B3456789%5D%5Cd%7B9%7D%24/" class="" style="font-size: 14px; border-width: 1px; font-weight: normal; font-family: 黑体; font-style: normal; color: rgb(134, 134, 134); height: 40px; border-radius: 0px; background-color: rgb(255, 255, 255); border-color: rgb(188, 188, 188);" />
              </div>
            </div>
            <div>
              <div class="inputTextContainer">
                <textarea type="text" placeholder="请留言 ( 选填 )" ismust="2" datareg="LEN" class="threeLines" style="height: 120px; border-width: 1px; font-size: 14px; font-weight: normal; font-family: 黑体; font-style: normal; color: rgb(134, 134, 134); border-radius: 0px; background-color: rgb(255, 255, 255); border-color: rgb(188, 188, 188);"></textarea>
              </div>
            </div>
            <div class="commitBtn" style="text-align: left; width: 328px; margin-top: 20px;">
              <button type="button" style="width: 100%; border-style: solid; border-width: 1px; border-color: rgb(255, 222, 95); font-size: 14px; font-weight: normal; font-family: 黑体; font-style: normal; color: rgb(255, 255, 255); height: 40px; line-height: 38px; border-radius: 0px; background-color: #0e293f; cursor: pointer;">提交</button>
            </div>
          </div>
          <div class="qsmotal-content" style="width: 100%; height: 100%; position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; display: none;"></div>
        </div>
      </transition>
      <div class="copy">
        <div class="copy1">联系我们</div>
        <div class="copy2">
          <div>地址：陕西省咸阳市西北农林科技大学</div>
          <div>邮编：040000</div>
          <div>传真：800-820-8820</div>
          <div>邮箱：777XXXXX@163.com</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'topLead',
  data () {
    var rname = sessionStorage.getItem('userName')
    window.onscroll = function () {
      var t = document.documentElement.scrollTop || document.body.scrollTop
      if (t >= 300) {
        console.log(this)
        this.show = true
      }
      if (t >= 700) {
        console.log(this)
        this.show1 = true
      }
      if (t >= 1900) {
        console.log(this)
        console.log(t)
        this.show2 = true
      }
    }.bind(this)
    return {
      rname: rname,
      show: false,
      show1: false,
      show2: false,
      fit: 'contain',
      url: require('../../assets/images/QQ24.jpg'),
      img: [{url: require('../../assets/images/x9.jpg')}, {url: require('../../assets/images/x3.jpg')}, {url: require('../../assets/images/x5.jpg')}, {url: require('../../assets/images/x6.jpg')}, {url: require('../../assets/images/x1.jpg')}]
    }
  },
  methods: {
    setted () {
      this.$router.push('/register')
    },
    go1 () {
      this.$router.push('/news/news')
    },
    go2 () {
      this.$router.push('/news/news1')
    },
    go3 () {
      this.$router.push('/news/news2')
    },
    go4 () {
      this.$router.push('/news/news3')
    },
    go5 () {
      this.$router.push('/news/news4')
    },
    go6 () {
      this.$router.push('/news/news5')
    },
    go7 () {
      this.$router.push('/news/news6')
    },
    go8 () {
      this.$router.push('/news/news7')
    },
    go9 () {
      this.$router.push('/news/news8')
    },
    go10 () {
      this.$router.push('/news/news9')
    },
    exit () {
      sessionStorage.removeItem("userName")
      sessionStorage.removeItem("userNum")
      this.$router.push({path: '/'})
    }
  }
}
</script>

<style scoped>
  .v-enter-active,
  .v-leave-avtive {
    transition: all 5s;
  }

  .content {
    position: relative;
    width: 100%;
  }
  .top{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    margin: 0 auto;
    width: 100%;
    height: 90px;
    line-height: 90px;
    background: #0e293f;
    color: rgb(255, 188, 59);
    font-size: 30px;
  }
  .top-l{
    position: absolute;
    left: 0;
    top: 0;
    width: 65%;
    height: 100%;
    text-align: left;
  }
  .title {
    margin-left: 100px;
  }
  .top-r{
    position: absolute;
    right: 0;
    top: 0;
    width: 35%;
    height: 100%;
    background-color: rgb(255, 188, 59);
    color: #0e293f;
  }
  .login{
    position: absolute;
    right: 35px;
    top: 20px;
    display: inline-block;
    width: 90px;
    height: 50px;
    line-height: 50px;
    color: #0e293f;
    font-size: 17px;
    padding-right: 10px;
    text-align: right;
  }
  .i {
    position: absolute;
    top: 5px;
    left: -15px;
    margin-right: 10px;
    width: 40px;
    height: 40px;
    line-height: 40px;
    border: 1px solid #0e293f;
    border-radius: 50%;
    text-align: center;
    color: #5a5a5a;
    background-color: #ccc;
  }
  .el-dropdown-link {
    cursor: pointer;
    color: #0e293f;
    font-size: 18px;
  }
  .el-icon-arrow-down {
    font-size: 18px;
  }
 /* .el-button--warning {
    color: #FFF;
    background-color: #e25858;
    border-color: #cac7c3;
  }*/
  .second {
    width: 200px;
    position: absolute;
    right: 120px;
    top: 0px;
    font-size: 20px;
  }
  .middle {
    position: absolute;
    top: 90px;
    left: 0;
    width: 100%;
  }
  .playl{
    margin: 5px auto 15px;
    width: 100%;
    height: 500px ;
  }

  .el-carousel__indicators--horizontal {
    top: 470px;
  }
  img{
    position: absolute;
    top: 0px;
    right: 0px;
    height: 500px;
    width: 100%;
  }
  .bg1 {
    /*position:absolute;*/
    margin-top: 220px;
    width: 100%;
    height: 756px;
    background: url('../../assets/first/news.jpg') no-repeat center center fixed;
    -webkit-background-size: 100%;
    background-size: 100%;
    /*top: 840px;*/
    /*left: 0;*/
  }
  .title1 {
    position: absolute;
    top: 653px;
    right: 25px;
    width: 700px;
    height: 200px;
    /*border: 1px solid black;*/
  }
  .news {
    position: absolute;
    top: 570px;
    left: 100px;
    /*margin-left: 100px;*/
    /*margin-top: 110px;*/
    width: 48%;
    /* height: 520px; */
    display: -webkit-box;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    border: 4px solid rgb(255, 188, 59);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 10px;
    /*z-index: 99;*/
  }
  .new1,
  .new2 {
    position: relative;
    width: 360px;
    height: 520px;
    background-color: #fff;
    /*border: 1px solid rgb(255, 188, 59);*/
    border-radius: 4px;
    box-shadow: 0 2px 4px #0e293f, 0 0 6px rgba(0, 0, 0, .04)
  }
  .newstitle {
    position: absolute;
    left: 30px;
    top: 32px;
  }
  .line {
    position: absolute;
    left: 8px;
    top: 0px;
  }
  ul {
    position: absolute;
    top: 70px;
    left: 0px;
    list-style: none;
  }
  .new1 ul li {
    height: 60px;
    line-height: 36px;
    text-align: left;
    color: #0e293f;
    transition: all 0.6s ease;
  }
  ul li:hover {
    color: rgb(255, 188, 59);
    font-size: 16px;
  }
  .new2 ul li {
    position: relative;
    width: 305px;
    height: 125px;
    line-height: 100px;
    text-align: left;
    margin-bottom: 15px;
    /*border: 1px solid black;*/
  }
  .new2 ul li img {
    position: absolute;
    width: 160px;
    height: 120px;
    top: 0;
    left: -10px;
  }
  .new2 ul li div {
    position: absolute;
    top: 0;
    left: 157px;
    width: 144px;
    height: 100px;
    line-height: 30px;
    font-size: 14px;
  }
  .content2 {
    position: absolute;
    top: 1250px;
    width: 100%;
    background-color: #fff;
  }
  .title2 {
    position: absolute;
    top: -74px;
    left: 10px;
    width: 900px;
    /*background-color: #fff;*/
  }
  .app1 {
    position: relative;
    background-color: rgba(27,27,27,0.8);
    width: 100%;
    height: 550px;
  }
  .apptitle {
    position: absolute;
    top: 216px;
    left: 28px;
    border-radius: 8px;
    width: 530px;
    height: 350px;
    background-color: #ccc;
    z-index: 10;
  }
  .apptitle h1 {
    position: absolute;
    top: 30px;
    left: 48px;
    color: white;
  }
  .apptitle .line1 {
    position: absolute;
    top: 100px;
    left: 47px;
    width: 275px;
    height: 5px;
    background-color: #0e293f;
  }
  .apptitle .des {
    position: absolute;
    top: -47px;
    left: 10px;
    color: rgb(255, 188, 59);
    font-size: 40px;
    font-weight: 600;
  }
  .apptitle .des1 {
    position: absolute;
    top: 149px;
    left: 145px;
    width: 300px;
    height: 150px;
    color: rgb(35, 76, 80);
    font-size: 16px;
    font-weight: 500;
    /*border: 1px solid rgb(255, 188, 59);*/
  }
  #main{position: absolute;top: 50px;left: 500px;width:1000px;height:473px;background-color: rgb(255, 188, 59);border-radius: 6px;}
  #main ul {
    list-style:none;
    position: absolute;
    top: 20px;
    left: -80px;
    list-style: none;
  }
  #main ul li {
    width: 320px;
    height: 470px;
    float: left;
    position: relative;
  }
  #main ul li img {
    border: 2px solid #F5F5F5;
    border-radius: 4px;
    -webkit-transition: 1s ease;
    -moz-transition: 1s ease;
    position: absolute;
    top: 0px;
    right: -60px;
    height: 100px;
    /* width: 200px; */
    width: 60%;
  }
  #main .info {
    width: 200px;
    height: 250px;
    border: 1px solid #F5F5F5;
    border-radius: 10px;
    box-shadow: 0 2px 4px #0e293f, 0 0 6px rgba(0, 0, 0, .04);
    background: #ffffff;
    position: absolute;
    bottom: 160px;
    right: -60px;
    -webkit-transition: 1s ease;
    -moz-transition: 1s ease;
    -moz-transform: rotatey(30deg);
    -webkit-transform: rotatey(30deg);
  }
  #main .info h2 {
    text-align: center;
    line-height: 10px;
    color: #0e293f;
    font-weight: normal;
    font-size: 20px;
  }

  #main .info p {
    padding: 0 20px;
    font-size: 14px;
  }

  #main .info a {
    display: block;
    width: 100px;
    height: 30px;
    background: rgb(255, 188, 59);
    color: #FFF;
    border-radius: 5px;
    text-decoration: none;
    text-align: center;
    line-height: 30px;
    margin: 10px auto;
  }

  #main ul li:hover .info {
    -webkit-transform: rotatey(0deg);
    -moz-transform: rotatey(0deg);
    right: 5px;
    bottom: 80px;
  }

  #main ul li:hover img {
    -webkit-transform: rotatey(360deg);
    -moz-transform: rotatey(360deg);
  }
  .visit {
    position: absolute;
    top: 1876px;
    left: 0;
    width: 100%;
    height: 315px;
    background-color: #fff;
    border-bottom: 10px solid rgb(14, 41, 63);
  }
  .visit1 {
    position: absolute;
    width: 210px;
    height: 70px;
    line-height: 70px;
    font-size: 50px;
    color: rgb(14, 41, 63);
    top: 120px;
    left: 50px;
  }
  .pic {
    position: relative;
    width: 100%;
    height: 300px;
  }
  .pic ul {
    position: absolute;
    top: 50px;
    left: 390px;
    /*margin-left: 390px;*/
    width: 71%;
    height: 200px;
    /*border: 1px solid black;*/
    list-style: none;
  }
  .pic ul li {
    position: relative;
    float: left;
    width: 270px;
    height: 200px;
    margin-left: 10px;
    overflow: hidden;
  }
  .pic ul li img {
    transition: all 0.5s ease;
  }
  .pic ul li:hover img {
    transform: scale(1.1);
  }
  .pic ul li img {
    position: absolute;
    top: 0;
    left: 0;
  }
  .title3 {
    position: absolute;
    top: 2186px;
    left: 300px;
    width: 900px;
    /*background-color: #fff;*/
  }
  .footerbg {
    position: absolute;
    top: 2260px;
    left: 0;
    width: 100%;
    height: 450px;
    background: url('../../assets/images/x1.jpg') no-repeat center center;
  }
  .footer {
    position: absolute;
    top: 2260px;
    left: 0;
    width: 100%;
    height: 450px;
    background-color: rgba(14, 41, 63,.6);
  }
  .formDataTk {
    position: absolute;
    right: 20px;
    top: 50px;
    width: 336px;
    height: 400px;
    border: 4px solid #0e293f;
    box-sizing: border-box;
  }
  .inputTextContainer {
    width: 300px;
    margin: 10px auto 0;
  }
  .inputTextContainer input,
  .inputTextContainer textarea {
    width: 100%;
  }
  .copy{
    position: absolute;
    top: 45px;
    left: 125px;
    width: 500px;
    height: 340px;
    line-height: 340px;
    padding: 30px;
    border: 3px solid white;
  }
  .copy1 {
    width: 100%;
    height: 24px;
    line-height: 24px;
    font-size: 24px;
    text-align: left;
    color: rgb(255, 188, 59);
  }
  .copy2 {
    width: 100%;
    margin-top: 40px;
  }
  .copy2 div {
    width: 100%;
    font-size: 16px;
    text-align: left;
    color: white;
    height: 40px;
    line-height: 24px;
    margin-top: 10px;
  }
  </style>
