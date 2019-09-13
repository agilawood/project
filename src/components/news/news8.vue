<template>
  <div class="main">
    <p style="font-size: 25px;text-align: center;line-height: 70px">对19部电梯进行年度检测</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;近日，校园管理中心邀请陕西省特种设备检测院专业人员对我校南、北校区到期的19部电梯进行了检测。</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;检测人员首先查看了19部电梯全年维保合同、日常维保记录、安全检查记录等相关资料，随后按照相关规定逐一对楼顶电梯机房、电梯轿厢、电梯钢索、应急照明、电梯限速器、底坑安全开关、对讲系统、曳引系统、轿厢门系统、重量平衡系统、安全保护装置、相关标志等进行了全面安全检测，同时对15部电梯进行了负重检测。经检测，我校19部电梯检验合格，可以正常运行。</p>
    <p style="text-align: center"><img src="../../assets/images/11.jpg" /></p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;针对电梯日常运行，特提醒大家注意以下事项：一是平时要文明乘梯，严禁超载、倚靠厅门、厢内打闹、用利器戳弄按钮、用身体阻挡梯门等不规范乘梯现象；二是发生困人现象是电梯一种自我保护现象，当被困时不要慌张，切勿在轿厢内跳跃、摇晃、四处敲击、硬掰厢门等方式自行脱困，以免发生厢门夹人、轿厢塌陷掉入厢井、电梯爆炸等事故；三是当电梯断电停运时安全装置会自动启动，确保电梯处于安全状态，轿厢有通风口，不存在缺氧问题，此时最安全的方法是保持良好心态，立即按下厢内警铃和对讲解，与外界取得联系，安静地在厢内等待救援；四是电梯的五方通话随时保持畅通，救援人员接到报警后会在30分钟内赶到现场。</p>
    <div class="heartfont" ><div class="heart" @click="show" ></div>{{sum}}人喜欢</div>
  </div>
</template>
<script>
export default {
  name: 'news8',
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
