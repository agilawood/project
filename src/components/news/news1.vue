<template>
  <div class="main">
    <p style="font-size: 25px;text-align: center;line-height: 70px">处领导讲党课</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;6月13日，后勤召开信息化建设专题培训会，来自各部门信息化联络员近20人参加会议。后勤服务中心副主任周东晓出席会议。</p>
    <p><img src="../../assets/images/04.jpg" style=" width: 100%;height: 400px;"/></p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;6月19日下午，后勤服务中心党委书记高增刚赴西安教学基地为基地党员上了一堂精彩的党课。高书记结合个人体会，为党员们解读了今年5月22日发布的《中国共产党党员教育管理工作条例》。</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;高书记指出，每一位党员都应该对制定《条例》的意义有充分的认识。《条例》的制定是学习贯彻习近平新时代中国特色社会主义思想的必然要求，是新时代提高党员队伍建设质量的必然要求，是新时代纵深推进全面从严治党，保持党员先进性和纯洁性的必然要求，是新时代夯实党长期执政基础，实现伟大使命的必然要求。</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;《条例》共十章，四十六条。高书记带领大家学习了主要内容及要点，从党员教育管理遵循的原则、学习贯彻习近平新时代中国特色社会主义思想、党员教育基本任务、党员日常教育管理主要方式、党籍和党员组织关系管理、党员监督和组织处置、流动党员管理、党员教育管理信息化、组织领导和工作保障等方面，深入浅出地为大家作以讲解，使每名党员更加深刻地了解到参与学习教育、服从党组织管理的重要性。</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;高书记强调，每个党员不论职务高低，都必须按照党章要求和《条例》规定，接受党组织的教育管理。要自觉学懂弄通做实，并将其贯穿落实到实际工作中去。</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;最后，高书记对如何成为一名优秀的后勤党员，提出了几点要求：一是忠诚、干净、有担当，热爱自己的岗位，履职尽责，争创优异。二是注重科学管理，精细管理，节约成本，精打细算，完成各项工作目标。三是规范服务，用心服务，甘于奉献，培养优良工作作风。四是能够在安全生产工作中起带头作用。五是做一名合格党员，以积极的行动迎接建党98周年和建国70周年。</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;后勤服务中心副主任周东晓一同前往。</p>
    <div class="heartfont" ><div class="heart" @click="show" ></div>{{sum}}人喜欢</div>
  </div>
</template>
<script>
export default {
  name: 'news1',
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
    margin:0px;
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
