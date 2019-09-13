<template>
    <div class="main">
      <p style="font-size: 25px;text-align: center;line-height: 70px">后勤召开信息化建设专题培训会</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;6月13日，后勤召开信息化建设专题培训会，来自各部门信息化联络员近20人参加会议。后勤服务中心副主任周东晓出席会议。</p>
      <p><img src="../../assets/images/56.jpg" style="height:400px; width:100%;" /></p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;培训主要以校园&ldquo;百事通&rdquo;后勤服务数据录入、各部门服务类小程序征集与西北农林科技大学&ldquo;企业微信&rdquo;应用推介三项内容进行了详细培训。百事通&rdquo;是我校面向师生倾力打造的一款内容交付型服务应用系统，是以解决师生校内日常事务咨询为目的的智能助手。目前，该系统已开始数据录入并同步模拟试运行，本次培训内容主要围绕&ldquo;百事通&rdquo;系统中，后勤面向师生的提供的各项日常服务咨询进行完善、归纳，对需要各部门信息化联络员汇总整理师生在服务内容、服务流程、服务项目等方面的常见咨询诉求，一 一对应列出相应的解决办法、服务内容介绍、服务流程引导、人工受理联系方式等。</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;培训最后还以扬州大学为例现场演示、解读如何依据师生实际需求和服务中存在问题，依据服务特点、性质录入&ldquo;百事通&rdquo;后勤服务数据，详细讲解了&ldquo;企业微信&rdquo;使用推介的步骤与注意事项，明晰了各部门服务类小程序需求与信息化建设思路征集要求、标准，并一一解答了联络员提出的问题。</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;周东晓指出，信息化建设是后勤的重点工作任务，各部门要高度重视此项工作，要全力配合、推进后勤信息化建设稳步发展。</p>
      <div class="heartfont" ><div class="heart" @click="show" ></div>{{sum}}人喜欢</div></div>
</template>
<script>
export default {
  name: 'news',
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
    width: 50px !important;
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

</style>
