<template>
  <div class="bot">
    <div class="news">
      <div class="news-top">新闻中心</div>
      <div class="news-left">
        <ul>
          <li><router-link to="/newstop/news" class="newsA"><i class=" el-icon-d-arrow-right"></i>&nbsp;&nbsp;后勤召开信息化建设专题培训会</router-link></li>
          <li><router-link to="/newstop/news1" class="newsA"><i class=" el-icon-d-arrow-right"></i>&nbsp;&nbsp;处领导讲党课</router-link></li>
          <li><router-link to="/newstop/news2" class="newsA"><i class=" el-icon-d-arrow-right"></i>&nbsp;&nbsp;高增刚一行赴西安基地看望学生</router-link></li>
          <li><router-link to="/newstop/news3" class="newsA"><i class=" el-icon-d-arrow-right"></i>&nbsp;&nbsp;致2019届毕业生 </router-link></li>
          <li><router-link to="/newstop/news4" class="newsA"><i class=" el-icon-d-arrow-right"></i>&nbsp;&nbsp;我校开展节能宣传周和低碳日活动</router-link></li>
        </ul></div>
      <div class="news-right">
        <ul>
          <li><router-link to="/newstop/news5" class="newsA"><i class=" el-icon-d-arrow-right"></i>&nbsp;&nbsp;岗位练兵强素质 技能大赛展风采</router-link></li>
          <li><router-link to="/newstop/news6" class="newsA"><i class=" el-icon-d-arrow-right"></i>&nbsp;&nbsp;普及安全知识强化食品安全管理</router-link></li>
          <li><router-link to="/newstop/news7" class="newsA"><i class=" el-icon-d-arrow-right"></i>&nbsp;&nbsp;肩负重任  奋战正酣</router-link></li>
          <li><router-link to="/newstop/news8" class="newsA"><i class=" el-icon-d-arrow-right"></i>&nbsp;&nbsp;对19部电梯进行年度检测</router-link></li>
          <li><router-link to="/newstop/news9" class="newsA"><i class=" el-icon-d-arrow-right"></i>&nbsp;&nbsp;南校区供电系统改造工程投标企业</router-link></li>
        </ul></div>
    </div>
    <div class="cent">
      <div class="news-top">应用中心<i class="el-icon-arrow-down" ></i></div>
      <div class="cont-lefttop"><i class="el-icon-magic-stick" style="margin-top: 7px;font-size:100px ;"></i><div class="com1"><router-link to="/Ycenter" class="contA">后勤维修</router-link> </div></div>
      <div class="cont-righttop"><i class="el-icon-edit" style="margin-top: 7px;color: white;font-size:100px ;"></i><div class="com1"><router-link to="/" class="contA">服务评价</router-link></div></div>
      <div class="cont-left"><i class="el-icon-s-promotion" style="margin-top: 7px;font-size:100px ;color: white"></i><div class="com1"><router-link to="/" class="contA">建言献策</router-link></div></div>
      <div class="cont-right"><i class="el-icon-loading" style="margin-top: 7px;color: white;font-size:100px ;"></i></div>
    </div>
    <div class="bottom">
      Copyright © 2013-2019   <strong> <router-link to="/" class="las">后勤管理系统 </router-link> </strong>   All Rights Reserved.
    </div></div>
</template>

<script>
export default {
  name: 'bot'
}
</script>

<style scoped>
  .hide{
    display: none;
  }
  .bot{
    width: 1300px;
  }
  .news{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    height: 258px;
    margin-top: 4px;
    background: rgba(0,0,0,.5);
    border-radius: 10px;
  }
  .cent{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    height: 298px;
    margin-top: 4px;
    background: rgba(0,0,0,.5);
    border-radius: 10px;
  }
  .news-left,.news-right{
    background:rgba(0,0,0,.3);
    border-radius: 10px;
    width: 630px;
    height: 200px;
    margin-top: 4px;
  }
  .cont-righttop,.cont-lefttop,.cont-left,.cont-right{
    background:rgba(0,0,0,.3);
    border-radius: 10px;
    width: 630px;
    height: 117px;
    margin-top: 4px;
    display: flex;
    justify-content: space-around;
  }
  .cont-lefttop{
    color: white;
    font-family: '微软雅黑';
    font-size: 35px;
  }
  .news-top{
    width: 1170px;
    height: 35px;
    color: white;
    font-family: '微软雅黑';
    font-size: 29px;

  }
  .com1{
    color: white;
    font-size: 35px;
    height: 70px;
    width: 200px;
    border-radius: 45px;
    background: rgba(255,255,255,.5);
    text-align: center;
    line-height: 70px;
    margin-top: 20px;
    cursor: pointer;
  }
  .com1:hover{
    width: 300px;
    height: 100px;
    font-size: 50px;
    margin-top: 7px;
    line-height: 100px;
  }
  .bottom{
    background:rgba(0,0,0,.3);
    border-radius: 10px;
    width: 1300px;
    height: 70px;
    margin-top: 4px;
  }
  .bottom {

    text-align: center;
    line-height: 70px;
  }
  .news ul li{
    color: white;
    font-size: 17px;
    line-height: 40px;
    margin-left: 20px;
    list-style-type: none;
  }
  .newsA:link{
    color: white;
    text-decoration: none;
  }
  .newsA:visited {color:white;}
  .newsA:hover{
    color: white;
    font-size: 27px}
  .contA:link{
    color: white;
    text-decoration: none;
  }
  .contA:visited,.las:visited {color:white;
    text-decoration: none}
  .las:link{
    color: black;
    text-decoration: none;
  }
</style>
