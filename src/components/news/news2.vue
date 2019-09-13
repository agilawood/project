<template>
  <div class="main">
    <p style="font-size: 25px;text-align: center;line-height: 70px">高增刚一行赴西安基地看望学生</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;6月19日下午，后勤服务中心党委书记高增刚一行专程到西安教学基地服务中心看望近期在西安实习的同学们。后勤服务中心副主任周东晓陪同前往。</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;高增刚先是对西安教学基地的情况进行了详细实地走访和查看，听取了基地负责人的情况汇报，对学生的吃住行等保障服务做了了解掌握。随后，走进学生宿舍，与学生亲切交谈，详细了解同学们在西安的实习情况，特别询问同学们住在西安基地，对后勤保障方面还有什么需求，并耐心仔细倾听同学们提出的意见建议，边听取边叮嘱基地工作人员一定要积极采纳同学们的建议。</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;高增刚指出，尽管校外点的综合条件比不上学校本部，但基地工作人员一定会竭尽所能为学生提供周到、便捷的后勤保障服务。同时，他也叮嘱同学在外实习期间，一定要注意安全，确保实习顺利进行。</p>
    <p><img src="../../assets/images/88.jpg"/></p>
    <div class="heartfont" ><div class="heart" @click="show" ></div>{{sum}}人喜欢</div>
  </div>
</template>
<script>
export default {
  name: 'news2',
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
