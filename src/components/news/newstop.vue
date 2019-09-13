<template>
  <div class="content10">
    <div class="top">
      <div class="top-l">
        <div class="title">
          &nbsp;&nbsp;<i class="el-icon-eleme"></i>&nbsp;&nbsp;新闻阅读中心
        </div>
      </div>
      <div class="top-r"><div class="con">
        <div class="ig"> <el-image
          style="width: 40px; height: 40px;border-radius: 45px;margin-top: 10px"
          :src="url"
          :fit="fit"></el-image></div>
        <div class="login1" >
          <el-dropdown>
  <span class="el-dropdown-link">
    {{rname}}<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item><el-button type="warning" @click="exit()">安全退出</el-button></el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div></div>
        <div class="second">
          <el-dropdown>
  <span class="el-dropdown-link">
    导航<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item >后勤报修</el-dropdown-item>
              <el-dropdown-item>服务评价</el-dropdown-item>
              <el-dropdown-item>建言献策</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <div class="neew">
        <span style="font-size: 77px; text-indent: 0.01px; box-sizing: border-box; color: #0e293f;;"  class="colorSelect">NEWS</span></div>
      <div class="hirout"></div>
      <div class="hir"></div>
    </div>
    <div class="cent">
      <div class="cent-l">
      <div class="ic"><i class="el-icon-s-management" style="font-size: 77px;color: #FFBC3B;"></i>
        <span style="font-size: 37px; text-indent: 0.01px; box-sizing: border-box; color: #FFBC3B;;"  class="colorSelect">READING</span>
        <div class="imagechange-3d image-hover hover">
          <div class="imagechange-3d-inner">
            <div class="imgchange-1"><span style="font-size: 35px;font-family: '微软雅黑';margin-top: 3px">新闻动态</span>
            <hr/><div class="pcon" style="width: 319px;height: 430px">  &nbsp; &nbsp; &nbsp; &nbsp;这里是校内新闻速递，提供近期校内的大小新闻以及校内的各种服务资讯，足不出户，一步了解校内事，总是比别人快一步。校内新闻是包含海量资讯的新闻服务平台，真实反映每时每刻的新闻热点。您可以搜索新闻事件、热点话题、人物动态、产品资讯等，快速了解它们的最新进展。</div></div>
            <div class="imgchange-2"><span style="font-size: 35px;font-family: '微软雅黑';margin-top: 3px">新闻动态</span><hr/>
              <ul>
              <li><router-link to="/news/news5" class="newsB"><i class=" el-icon-d-arrow-right"></i>&nbsp;&nbsp;岗位练兵强素质 技能大赛展风采</router-link></li>
              <li><router-link to="/news/news6" class="newsB"><i class=" el-icon-d-arrow-right"></i>&nbsp;&nbsp;普及安全知识强化食品安全管理</router-link></li>
              <li><router-link to="/news/news7" class="newsB"><i class=" el-icon-d-arrow-right"></i>&nbsp;&nbsp;肩负重任  奋战正酣</router-link></li>
              <li><router-link to="/news/news8" class="newsB"><i class=" el-icon-d-arrow-right"></i>&nbsp;&nbsp;对19部电梯进行年度检测</router-link></li>
              <li><router-link to="/news/news9" class="newsB"><i class=" el-icon-d-arrow-right"></i>&nbsp;&nbsp;南校区供电系统改造工程投标企业</router-link></li>
              <li><router-link to="/news/news" class="newsB"><i class=" el-icon-d-arrow-right"></i>&nbsp;&nbsp;后勤召开信息化建设专题培训会</router-link></li>
              <li><router-link to="/news/news1" class="newsB"><i class=" el-icon-d-arrow-right"></i>&nbsp;&nbsp;处领导讲党课</router-link></li>
              <li><router-link to="/news/news2" class="newsB"><i class=" el-icon-d-arrow-right"></i>&nbsp;&nbsp;高增刚一行赴西安基地看望学生</router-link></li>
              <li><router-link to="/news/news3" class="newsB"><i class=" el-icon-d-arrow-right"></i>&nbsp;&nbsp;致2019届毕业生 </router-link></li>
              <li><router-link to="/news/news4" class="newsB"><i class=" el-icon-d-arrow-right"></i>&nbsp;&nbsp;我校开展节能宣传周和低碳日活动</router-link></li>
            </ul></div>
          </div>
        </div></div>
       </div>
      <div class="cent-r"><router-view></router-view>
      </div>
      <div class="end">
        <div class="nend">
          <span style="font-size: 77px; text-indent: 0.01px; box-sizing: border-box; color: #FFBC3B;;"  class="colorSelect">END</span></div>
        <div class="hir-out"></div>
        <div class="hi-r"></div></div>
      <div class="bott">
        <div class="bot-l"></div>
        <div class="bot-r"></div>
      </div>
      <div class="bottom">
        Copyright © 2013-2019   <strong> <router-link to="/" class="las">后勤管理系统 </router-link> </strong>   All Rights Reserved.
      </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'newstop',
  data () {
    var rname = sessionStorage.getItem('userName')
    return {
      rname: rname,
      fit: 'contain',
      url: require('../../assets/images/QQ24.jpg')
    }
  },
  methods: {
    exit () {
      sessionStorage.removeItem("userName")
      sessionStorage.removeItem("userNum")
      this.$router.push({path: '/'})
    }
  }
}
</script>

<style scoped>
  .ic{
    position: fixed;
    top: 130px;
    left: 9%;
  }
  .imagechange-3d-inner {
    position: absolute;
    top: 13px;
    left: -47px;}
  .imagechange-3d .imgchange-1 {
    opacity: 1;
  visibility: visible;
  }
  .imagechange-3d:hover .imgchange-1 {
    opacity: 0;
  visibility: hidden;
  }
  .imagechange-3d .imgchange-2 {
    opacity: 0;
  visibility: hidden;
  }
  .imagechange-3d:hover .imgchange-2 {
    opacity: 1;
  visibility: visible;
  }
  .imgchange-1 {position:absolute;top:0px;right:0px;bottom:0px;left:0px;
    background: rgba(255, 255, 255,0.3);
    color: #FFBC3B;
    box-shadow: 0 4px 8px 0 rgba(255,255,255, .7), 0 6px 20px 0 rgba(255,255,255, .65);}
  .imgchange-2 {background: rgb(255, 188, 59);
    color: #0e293f;
    box-shadow: 0 4px 8px 0 rgba(255,255,255, .7), 0 6px 20px 0 rgba(255,255,255, .65);
    position:absolute;top:0px;right:0px;bottom:0px;left:0px;}
  .imagechange-3d div {
    width: 372px;
    height: 421px;
    transition:all 0.45s ease-in-out 0.3s;
  }
  .imagechange-3d {
    perspective:1000px;
  }
  .imagechange-3d-inner {
    transform-style:preserve-3d;
    transition:all 0.5s linear;
  }
  .imagechange-3d:hover .imagechange-3d-inner {
    transform:rotateY(180deg);
  }
  .imgchange-2 {
    transform:rotateY(180deg);
  }
  .end{
    width:100%;
  }
  .bott{
    width: 100%;
    height:90px ;
    display: flex;
  }
  .bot-l{
    width: 65%;
    height: 90px;
    background: rgb(14, 41, 63);
  }
  .bot-r{
    width: 35%;
    height: 90px;
    background-color: rgb(255, 188, 59);
  }
  .bottom{
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 90px;
  }
  .imgchange-2 ul li{
    font-size: 15px;
    line-height: 33px;
    margin-left: 13px;
    list-style-type: none;
    text-align: left;
  }
.pcon{
  color: #FFBC3B;
  font-family: '微软雅黑';
  font-size: 20px;
  margin-left: 27px;
  margin-top: 17px;
  text-align: left;
}
  .newsB:link{
    color:#0e293f;
    text-decoration: none;
  }
  .newsB:visited {color: #2c3e50;}
  .newsB{
    transition: all 0.5s linear;
  }
  .newsB:hover{
    color: #0e293f;
    padding-left: 17px;
    font-size: 17px;
  }
  .las:visited {color:#FFBC3B;
    text-decoration: none}
  .las:link{
    color: #FFBC3B;
    text-decoration: none;
  }
  .bottom {
    text-align: center;
    line-height: 90px;
    color: #FFBC3B;
    font-family: '微软雅黑';
    font-size: 17px;
  }
  .nend{
    position: absolute;
    bottom:57px;
    right: 1377px;
    z-index: 20;
  }
  .hir-out{
    background:rgba(255,255,255,1);
    height: 33px;
    width: 100%;
  }
  .hi-r{
    margin-top: -22px;
    margin-bottom: 9px;
    width: 100%;
    height: 11px;
    background: #FFBC3B;
  }
  .neew{
    position: absolute;
    top:65px;
    right: 17px;z-index: 20;
  }
  .hirout{
    background:rgba(255,255,255,1);
    margin-top: 90px;
    height: 33px;
    width: 100%;
  }
  .hir{
    margin-top: -22px;
    margin-bottom: 7px;
    width: 100%;
    height: 11px;
    background: #0e293f;
  }
.cent{
  width: 100%;
  position: absolute;
  top: 121px;
  display: flex;
  flex-wrap: wrap;
  background: rgb(14, 41, 63);
min-width: 1187px;
}
.cent-l{
  width: 35%;
  position: relative;
}
.cent-r{
  background-color: rgb(255, 188, 59);
  width:65%;
  height: auto;
  z-index:30;
}
  .con{
    display: flex;
    justify-content: space-around ;
    width: 27%;
    min-width: 110px;
    position: absolute;
    right: 5%;
  }
  .content10 {
    position: relative;
    width:100%;
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
  .login1{
    margin-top: 23px;
    display: inline-block;
    width: auto;
    height: 50px;
    line-height: 50px;
    color: #0e293f;
    font-size: 17px;
    text-align: right;
  }
  .ig {
margin-top: 15px;
    display: inline-block;
    margin-right: 10px;
    line-height: 40px;
  }
  .el-dropdown-link {
    cursor: pointer;
    color: #0e293f;
    font-size: 18px;
    line-height: 50px;
  }
  .el-icon-arrow-down {
    font-size: 18px;
  }
  .el-button--warning {
    color: #FFF;
    background-color: #e25858;
    border-color: #cac7c3;
  }
  .second {
    position: absolute;
    width: auto;
    right: 57%;
    display: inline-block;
    top: 0px;
    font-size: 20px;
  }

</style>
