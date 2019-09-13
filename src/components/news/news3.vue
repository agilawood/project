<template>
  <div class="main">
    <p style="font-size: 25px;text-align: center;line-height: 70px">致2019届毕业生</p>
    <p>亲爱的2019届毕业生们：</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;光阴似箭，迎来又一年万木竞秀的西农校园；日月如梭，即将送别又一届意气风发的西农学子。曾经的你们踏歌而来，满怀对未来的美好憧憬；如今的你们学成而去，心存对明天的壮丽希冀。&ldquo;西北农林科技大学&rdquo;这个温暖的名字，饱含着难以磨灭的深情眷恋，传递着永不褪色的美好祝福。当毕业的骊歌悠然响起，我们不诉离殇，只言珍重。在此，校学生会、研究生会向2019届全体毕业生发出以下离校倡议：</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;一、心怀感恩，温情离校。绵延无尽恩师义，似水流长母校情。在即将告别母校之际，向老师们道一声感谢、对后勤人员说一声辛苦、给同窗们送一句祝福、为学弟学妹传一次经验。用双脚再次丈量学校的每一处熟悉角落，用双手再次抚触教室的每一件亲切教具，用双眼再次捕捉每一个温情瞬间。认真参加毕业离校前的最后一次晚会、最后一次聚餐、最后一次座谈，用心留存毕业季里的每一个难忘回忆。</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;二、严守公德，文明离校。自觉遵守校纪校规，不酗酒、不打架、不闹事，不向窗外扔杂物。主动约束自我行为，爱护学校公共财物和教学资源，不乱涂乱画，不占为己有。不断提高个人修养，注意言行体貌，不污言秽语，不穿拖鞋穿梭校园，不光背出入教学场所。尊重每一位办理离校手续的老师，耐心对待每一个毕业离校的程序。</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;三、奉献爱心、绿色离校。捐赠不用的书籍旧物，让物品循环、让爱心传递，用曾经注入感情的旧物传达对他人的浓浓情意。有序组织和参与毕业纪念活动，不因纪念活动影响校园秩序或损害校园公物，及时清理活动留下的杂物和垃圾。及时打扫宿舍内外环境卫生，为学弟学妹们留一间整洁的宿舍。提高个人安全意识，注意防火防盗，保护自己及他人的人身财产安全，避免出现不必要的意外伤害。</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;四、落实要求，诚信离校。按照学校离校工作安排，及时办理离校手续。自觉进行助学贷款毕业确认，主动结清各类欠款，及时归还图书馆的图书资料及借用他人的物品。将宿舍公物完整留存，确保宿舍设施完好无损，及时清理个人物品并归还宿舍钥匙。严格执行请销假制度，按时参加毕业典礼和学位授予仪式，不无故缺席各项毕业离校活动。</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;五、铭记校训，自信离校。牢记&ldquo;诚、朴、勇、毅&rdquo;校训，志存高远、砥砺奋进，以昂扬的精神面貌奔赴祖国的各个岗位，用健康的心态应对社会的各种挑战。彰显&ldquo;扎根杨凌、胸怀社稷;脚踏黄土、情系三农;甘于吃苦、追求卓越&rdquo;的西农精神，用拼搏和努力谱写精彩的人生华章，让盎然青春在实现中华民族伟大复兴中国梦的奋斗中焕发出绚丽光彩。</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;2019届毕业生们，毕业是一段学业的终点，但不是你们与母校感情的终点，未来的旅途不会一帆风顺，但无论何时你们要记得，母校永远都会是你们最坚强的后盾，给予你们持久的鼓励与支持！用力向前奔跑吧同学们，在这个充满希望的新起点上，西农青年要谨记习总书记教导，立鸿鹄志、做奋斗者，让奋斗成为青春最亮丽的底色，自觉将个人理想融入国家和民族伟大事业的发展当中，主动肩负起关乎国家前途和民族希望的时代担当，努力成为报效祖国、荣耀母校的有为新青年！</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;衷心祝福2019届全体毕业生鹏程万里、前程似锦，在未来的日子里，一路乘风破浪、凯歌前行！</p>
    <p style="text-align:right">西北农林科技大学学生会</p>
    <p style="text-align:right">西北农林科技大学研究生会</p>
    <p style="text-align:right">2019年6月20日</p>
    <br />
    <div class="heartfont" ><div class="heart" @click="show" ></div>{{sum}}人喜欢</div>
  </div>
</template>
<script>
export default {
  name: 'news3',
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
