<template>
  <div class="main">
    <p style="font-size: 25px;text-align: center;line-height: 70px">岗位练兵强素质 技能大赛展风采</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;为了深入贯彻落实《幼儿园教育指导纲要》《3&mdash;6岁儿童学习与发展指南》，进一步更新教育理念，规范幼儿园办园行为，全面提高幼儿教师的专业能力和综合素养，不断提升我校幼儿园科学保教水平，促进幼儿身心和谐健康发展，6月18日，幼儿园举办了2019年教师专业技能大赛。</p>
    <p style="text-align: center"><img src="../../assets/images/504.jpg" /></p>
    <p style="text-align: justify">&nbsp;&nbsp;&nbsp;&nbsp;大赛严格按照&ldquo;陕西省幼儿教师专业技能大赛&rdquo;相关要求进行。共设置了半日活动设计、儿童行为观察与评价、环境创设、看图创编、弹唱、舞蹈等考核项目，从专业理念、专业知识、专业能力等维度对教师的综合能力进行考察。经过前期的层层选拔、推荐，11名教师参加了决赛。</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;参赛教师高度重视，认真对待，比赛过程中充分展示了个人娴熟的专业技能，并灵活有效地将学前教育理论和艺术审美以及教育实践相结合，为幼儿的发展提供支持。</p>
    <p style="text-align: center"><img src="../../assets/images/46.jpg"/></p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;赛后，评委们秉持着公开、公平、公正的原则进行了紧张的评审、打分。最终彭文文、刘晶、王喆等三名教师脱颖而出。她们将代表我园参加杨陵区幼儿教师专业技能大赛。</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;本次大赛，是对我校幼儿园幼儿教师综合素质的一次大检阅，同时也为她们提供了一个锻炼、学习的平台。通过比赛达到了以赛促学、以赛促练，以赛促改，全面提高教师专业技能水平的目的。</p>
    <p style="text-align: center"><img src="../../assets/images/99.jpg" style="height:400px; width:100%;" /></p>
    <div class="heartfont" ><div class="heart" @click="show" ></div>{{sum}}人喜欢</div>
  </div>
</template>
<script>
export default {
  name: 'news5',
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
