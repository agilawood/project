<template>
  <div class="main">
    <p style="font-size: 25px;text-align: center;line-height: 70px">南校区第二调剂餐厅供电系统改造工程等确定投标入围企业</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;2019年6月12日，基建、修缮项目领导小组工作组召开会议。</p>
    <p><strong>一、确定南校区第二调剂餐厅供电系统改造工程投标入围企业</strong></p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;会议审查了南校区第二调剂餐厅供电系统改造工程报名企业资质，并按程序确定了五个投标入围企业，分别是：咸阳天富建设工程有限公司、陕西盛鑫建筑安装工程有限公司、西安辰瑞建设工程有限公司、陕西银河电气设备有限公司、陕西上进电力科技有限公司。</p>
    <p><strong>二、北校区图书馆南侧环境整治工程人行道维修部分开标</strong></p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;北校区图书馆南侧环境整治工程人行道维修部分概算21.00万元，费用由中央高校改善基本办学条件专项列支。该项目内容为：拆除水泥花砖路面、树坑板、道牙，新做树坑板、透水砖人行道，砍伐树木、草皮等。</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;经过网上公开报名，按程序确定了五家企业参与该项目投标活动，分别是：陕西百翔建设有限公司、陕西卓正建筑工程有限公司、陕西凯盛建筑工程有限公司、陕西绿洲园林建设工程有限公司、陕西双瑞建设工程有限公司。</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;通过对五家投标企业的报价、工期、质量等综合评审，陕西卓正建筑工程有限公司以20.64万元（含预留金1.40万元），工期30天，质量合格，作为该项目第一中标候选人。</p>
    <p><strong>三、理科楼南北广场地面维修工程开标</strong></p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;理科楼南北广场地面维修工程概算75.00万元，费用由中央高校改善基本办学条件专项列支。该项目内容为：拆除广场砖地面及垫层，新做陶砖、石材地面。</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;经过网上公开报名，按程序确定了七家企业参与该项目投标活动，分别是：陕西正康建设工程有限公司、陕西卓正建筑工程有限公司、陕西华亚泰园艺工程有限公司、陕西荣冠建筑安装工程有限公司、陕西保中建设有限公司、陕西祺丰建设有限公司、山东军辉建设集团有限公司。</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;陕西华亚泰园艺工程有限公司因投标文件份数不满足招标文件要求，取消其投标资格。通过对六家投标企业的报价、工期、质量等综合评审，陕西保中建设有限公司以72.70万元（含预留金7.50万元），工期30天，质量合格，作为该项目第一中标候选人。</p>
    <p><strong>四、南校区部分弱电管道维修工程商务谈判</strong></p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;南校区部分弱电管道维修工程概算19.00万元，费用由中央高校改善基本办学条件专项列支。</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;根据基建、修缮项目领导小组会议精神，由基建、修缮项目领导小组工作组与通信服务中心进行商务谈判。</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;经谈判，最终确定该项目结算办法：依据现场收量单、主材认质认价单、2008年工业和信息化部修订的《通信建设工程概算、预算编制办法及费用定额》编制结算。其中：措施费只计取文明施工费1%、工地器材搬运费1.6%、工程点交、场地清理费2%；施工用水电蒸汽费及运土费按实计取。间接费中规费只计取危险作业意外伤害保险费1%，工程排污费、社会保障费及住房公积金根据实际发生项目，按规定费率据实结算。企业管理费、利润及税金按规定计取。其他未明确费用项目不计取。工程优惠比率为总价（不含主材费）的9%。</p>
    <div class="heartfont" ><div class="heart" @click="show" ></div>{{sum}}人喜欢</div>
  </div>
</template>
<script>
export default {
  name: 'news9',
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
