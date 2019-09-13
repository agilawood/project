<template>
  <div class="main">
    <p style="font-size: 25px;text-align: center;line-height: 70px">我校开展节能宣传周和全国低碳日活动</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;为深入推进全校师生节能低碳宣传教育，大力倡导勤俭节约的良好风尚，营造节能降碳的浓厚氛围，加快推进节约型校园和绿色校园建设。6月17日起，学校节能办公室组织开展为期一周，形式多样、内容丰富的节能宣传周与低碳日活动。</p>
    <p style="text-align: center"><img src="../../assets/images/45.jpg"/></p>
    <p style="text-align: center"><strong>提高认识&nbsp;坚定信念</strong></p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;静以修身，俭以养德&rdquo;，节俭是中华民族的传统美德，节能减排是我们的历史使命和义不容辞的责任。节约能源、提高能源利用效率，是实现我国经济社会可持续发展的需要，是推进我校节约型校园和绿色大学建设需要，也是我校培养合格人才的需要。在2019年全国节能宣传周和低碳日来临之际，为了进一步加强节能宣传工作，提高师生员工的节能意识，增强广大师生员工的能源资源忧患意识和节约能源资源的紧迫感、责任感，让全体师生员工积极行动起来，从身边点滴小事做起，为建设我们美丽的校园做出应有贡献。为此，学校节能办多举措开展节能教育宣传活动。</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;一是学校节能办公室制定了《关于开展2019年节能宣传周活动的通知》及节能倡议书，要求各学院、部门要提高认识抓落实，要充分认识开展节能宣传活动的重要意义，厉行节约，反对浪费，创新性地开展形式多样的节能宣传活动，让节能深入师生人心，确保活动取得良好的效果。要充分发挥群团组织作用。学生会、学生社团、学生志愿者等要充分发挥组织协调作用，围绕主题，切实组织宣传教育活动，利用新媒体进行宣传，发动广大学生参与节能、节俭、低碳的主题活动中，力求取得实效。</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;二是节能办公室联系园艺学院学生会，在南北校区人流密集的学生区、浴室等区域，悬挂宣传横幅，展示宣传展板，发放倡议书，吸引了不少师生员工及过往群众。通过精心制作的10多块宣传展板，编印简明清晰的1000余册&ldquo;节能倡议书&rdquo;，向广大师生宣传节能减排知识，营造绿色发展、低碳创新的校园节能减排氛围。</p>
    <p style="text-align: center"><img src="../../assets/images/92.jpg" style="height:400px; width:100%;" /></p>
    <p style="text-align: center"><strong>厉行节约&nbsp;&nbsp;从我做起</strong></p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;节能，是一种美德；低碳，是一种品质。让我们携起手来，共同创建我们的节约型校园，为学校的发展做出应有贡献，让我们在今后的生活中做到：</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;1.节约用水用电。尽量使用节能电器;空调温度设定夏天不低于26℃，冬天不高于20℃，避免空调设备室内无人空转;充分利用自然光照，做到随手关灯，杜绝长明灯;下班时随手关掉饮水机、电脑及显示器，并关闭插座开关，以免长时间电线老化引起火灾;随手关闭无人办公区的照明灯;多走楼梯，少乘电梯，既强身健体又节能;办公室的供水请按人按需接取;打扫卫生时，随手关好水龙头，避免跑、冒、滴、漏现象发生。</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;2.节约粮食。爱惜粮食，不随便丢弃剩菜剩饭，倡导&ldquo;光盘&rdquo;行动，做到舌尖文明；减少使用餐巾纸、纸杯、一次性筷子、不可降解塑料袋等，真正做到绿色环保，勤俭节约。</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;3.节约办公用品。提倡双面打印，减少纸张消耗;充分利用网络优势，实现无纸化办公，倡导视频会议，减少人员往返和车、油损耗;尽量使用电子邮件、手机短信、微信等方式传递信息，接打电话时尽量压缩通话时间;开会时请尽量自带水杯，倡导使用钢笔、圆珠笔等可多次使用的文具;促进垃圾分类回收，减少一次性用品使用。</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;学校节能办公室号召全体师生，将节能工作作为建设节约型校园作为一项长效工作，常抓不懈。把学校节能措施落实好、监督好，经常性提醒师生节能，并落实到行动上，养成良好节约习惯。</p>
    <p style="text-align: center"><img src="../../assets/images/94.jpg" style="height:400px; width:100%;" /></p>
    <div class="heartfont" ><div class="heart" @click="show" ></div>{{sum}}人喜欢</div>
  </div>

</template>
<script>
export default {
  name: 'news4',
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
    width: 400px;
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
