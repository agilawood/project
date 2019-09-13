<template>
  <div class="main">
    <p style="font-size: 25px;text-align: center;line-height: 70px">肩负重任  奋战正酣</p>
    <p><strong>&nbsp;&nbsp;担当是一种责任&nbsp;&nbsp;</strong>200余个教室，近两万套固定桌椅，400余块黑板、讲台、家具、设施&hellip;&hellip;三天时间，北校8号教学楼内所有设施全部拆除、清理出来，怎么可能完成。面对艰巨任务，维修中心没有推诿，迎难而上，迅速行动起来，组织班组长，技术骨干数次召开专题会、现场会、协调会、反复研究，论证进度节点、措施、技术、人力、质量、安全及成本等每个环节，计划到天、落实到人，制定详细的工作方案，使施工进度始终掌握在可控范围内。</p>
    <p style="text-align: center"><img src="../../assets/images/76.jpg" /></p>
    <p><strong>&nbsp;&nbsp;担当是一种态度&nbsp;&nbsp;</strong>清晨，随着一缕阳光透过树叶露出她的笑容，八号教学楼门前每个脸庞逐渐变得清晰起来，在充满仪式感与责任感的氛围里，中心负责人每天都会在进场前多次强调安全：</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;安全无小事，我们每时每刻都要打起12万分的精神，注意施工安全，虽然工期紧、任务重，我们要抢时间，抢进度，但安全永远是前提，充分发挥吃苦在前的精神，保质保量完成拆除任务&hellip;&hellip;&rdquo;</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;一份担当，意味着一份坚守。远远望去，教学楼内外一派繁忙。吊车挥舞着长臂，气势如虹；角磨机、手电钻火花四溅；手中的扳手、螺丝刀飞转不停；人们挥汗如雨，到处都是搬运人员被汗水浸湿的脸庞和身影。有序的人员管理，快速的拆除进度，每天连续奋战15小时以上，因为大家都深知:这是一场硬仗，完不成任务决不收兵。</p>
    <p style="text-align: center"><img src="../../assets/images/14.jpg" style="height:400px; width:100%;" /></p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;夜晚，繁星点点，教学楼内外灯火通明。一个个疲惫的身影，一个个忘我的工作状态，一幕幕感人的画面，激情满怀，用勇于拼搏的精神头，展示着后勤人的风采。</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;夜深了，负责人还在楼内逐层巡视把关，各班组长汇报进度和当天任务完成情况，对于某个节点工期延误，及时分析原因，在下一个节点调整部署。</p>
    <p><strong>&nbsp;&nbsp;担当更是一种精神&nbsp;&nbsp;</strong>一群人、一个目标、一起拼、一定赢。维修人高质量，高水准，高速度如期完成8号教学楼设施拆除任务，奉献出自己的热情和艰辛。在敢担当中前行，在能担当中辉煌，担当出后勤人的勇气，担当出后勤人的智慧和力量。</p>
    <div class="heartfont" ><div class="heart" @click="show" ></div>{{sum}}人喜欢</div>
  </div>
</template>
<script>
export default {
  name: 'news7',
  data () {
    return {sum: 0
    }
  },
  methods: {
    show () {
      this.sum++
    }
  }}
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
