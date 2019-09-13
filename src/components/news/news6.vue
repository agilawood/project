<template>
  <div class="main">
    <p style="font-size: 25px;text-align: center;line-height: 70px">普及食品安全知识  强化食品安全管理</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;为进一步贯彻落实我校关于食品安全工作要求，根据后勤关于开展2019年&ldquo;安全生产月&rdquo;活动通知相关要求，结合饮食服务中心工作实际，6月20日，中心邀请杨凌示范区食品药品监督管理局食品科科长夏继明对食堂炊管人员150余人进行了食品安全知识专项培训。</p>
    <p style="text-align: center"><img src="../../assets/images/77.jpg" /></p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;夏继明通过列举大量食品安全事件案例进行了警示教育，普及了食品安全知识，重点围绕如何规范操作，如何规范管理，如何预防食品安全事故作了深入的讲解。并结合2018年发生在身边的实际案例分析了学校食堂食品安全隐患存在的主要因素，从增强食品安全责任、强化食品安全风险意识、加强食品安全学习培训等三个方面，对我校食堂食品安全管理提出了明确要求，希望学校加强原材料卫生监管力度，抓住关键环节，强化精细管理。</p>
    <p style="text-align: center"><img src="../../assets/images/38.jpg" style="height:400px; width:100%;" /></p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;此次活动，进一步加强食品安全宣传教育，强化员工食品安全意识。饮食服务中心将以此活动为契机，对照实际工作规范操作流程、强化制度建设，对于存在的问题要及时总结，及时整改，为我校食堂食品卫生安全筑起坚实的堡垒。</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;活动现场，还发放了食品安全宣传手册、画报，摆放了宣传展板，有效普及了食品安全知识。</p>
    <div class="heartfont" ><div class="heart" @click="show" ></div>{{sum}}人喜欢</div>
  </div>
</template>
<script>
export default {
  name: 'news6',
  data () {
    return {sum: 0
    }
  },
  methods: {
    show () {
      this.sum++
    }
  }
}
</script>

<style scoped>
  .heart{
    margin-top: 150px;
    margin-left: 83%;
    width: 46px !important;
    height:50px;
    vertical-align: bottom;
    display: inline-block;
    position: relative;
    transition: all 0.5s ease-in-out;
  }
  .heart:before,.heart:after{
    content: '';
    position: absolute;
  }
  .heart:hover{
    transform: rotateZ(360deg) scale(1.3);
  }
  .heart:after{
    width: 30px;
    height: 44px;
    background: #0e293f;
    border-radius: 50px 50px 0 0;
    transform: rotate(-45deg);
    top: 0;
    left: -10px;
  }
  .heart:before{
    width: 30px;
    height: 44px;
    background: #e25858;
    border-radius: 50px 50px 0 0;
    transform: rotate(45deg);
    top: 0;
    left: 0;}
  p{
    line-height: 37px;
    margin: 0px;
  }
  .main{
    font-family: '微软雅黑';
    margin-bottom: 5px;
    height: auto;
    font-size: 1.25em;
    padding: 10px 11%;
    text-align: left;

  }
  .main img {
    width: 100%;
    height: 400px;
  }
</style>
