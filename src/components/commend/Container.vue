<template>
  <div style="overflow-y: hidden">
    <div class="card">
      <div class="top">
        <div class="top-l">
          <div class="title">
            <i class="el-icon-setting"></i>&nbsp;后勤质量服务评价
          </div>
        </div>
        <div class="top-r">
          <i class="return">
            <router-link to="/first/topLead">
              <img src="../../assets/images/返回.png">
            </router-link>
          </i>
        </div>
      </div>
    </div>
    <div class="bg">
      <div class="card2">
        <h3>请选择部门进行评价</h3>
        <router-link to="/commend/Greening">
          <li><img src="../../assets/images/环保绿化.png" alt=""></li>
        </router-link>
        <p>绿化服务中心</p>
        <router-link to="/commend/Diet">
          <li><img src="../../assets/images/饮食.png" alt=""></li>
        </router-link>
        <p>饮食服务中心</p>
        <router-link to="/commend/Manager">
          <li><img src="../../assets/images/学生管理.png" alt=""></li>
        </router-link>
        <p>学生管理服务中心</p>
        <router-link to="/commend/Repair1">
          <li><img src="../../assets/images/维修.png" alt=""></li>
        </router-link>
        <p>维修服务中心</p>
      </div>
      <div class="chart">
        <h2>总体评价结果</h2>
        <div id="chart_example"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Container',
  data () {
    return {
    }
  },
  mounted () {
    console.log(this)
    let myChart = this.$echarts.init(document.getElementById('chart_example'))// 初始化
    let option = {
      color: ['#b8112f'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      toolbox: {
        show: true,
        feature: {
          magicType: {show: true, type: ['line', 'bar']}
        }
      },
      calculable: true,
      xAxis: [
        {
          type: 'category',
          data: ['通信', '运输', '中心区', '绿化', '校园', '物业', '饮食', '社区', '动力'],
          name: '部门'
        }
      ],
        yAxis: [
          {
            type: 'value',
            name: '满意度'
          }
        ],
        series: [
          {
            name: '满意度',
            type: 'bar',
            barWidth: '80%',
            data: [87.79, 89.63, 85.19, 90.81, 79.66, 88.82, 72.19, 92.94, 79.51],
            markLine: {
              data: [{type: 'average', name: '平均值'}]
            },
            markPoint: {
              data: [
                { type: 'max', name: '最大值' },
                { type: 'min', name: '最小值' }
              ]
            }
          }
        ]
      }
      myChart.setOption(option)// 绘制已设定的图表
      window.addEventListener('resize', function () {
        myChart.resize() // 改变窗口图表重新定位
      })
    },
    methods: {

    },
    created () {
    }
  }
</script>
<style scoped>
  *{
    margin: 0;
    padding:0;
  }
  .bg{
    margin: 0;
    padding: 0;
    width: 1580px;
    height: 760px;
    background: url("../../assets/images/bg.jpg") fixed;
    background-repeat: no-repeat;
    /*background-size: cover;*/
    background-size:1580px 760px;
  }
  .top{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    margin: 0 auto;
    width: 100%;
    height: 90px;
    line-height: 90px;
    background: #0e293f;
    color: rgb(255, 188, 59);
    font-size: 30px;
  }
  .top-l{
    position: absolute;
    left: 0;
    top: 0;
    width: 65%;
    height: 100%;
    text-align: left;
  }
  .title {
    margin-left: 100px;
  }
  .top-r{
    position: absolute;
    right: 0;
    top: 0;
    width: 35%;
    height: 100%;
    background-color: rgb(255, 188, 59);
    color: #0e293f;
  }
  .return{
    position: absolute;
    left: 430px;
    top: 10px;
  }
  h1{
    line-height: 220px;
    text-align: center;
    font-size: 48px;
    font-color:black;
  }
  .chart{
    width: 800px;
    position: absolute;
    top: 230px;
    left: 650px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.8);
  }
  #chart_example{
    width: 800px;
    height: 400px;
    margin: 0 auto;
  }
  .card{
    position: relative;
    top: -60px;
  }
  .card2{
    position: absolute;
    top: 120px;
    left: 130px;
    margin: 55px;
    height: 550px;
    width: 300px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.8);
  }
  .card2 li{
    list-style-type: none;
  }
  .card2 h3{
    margin: 40px;
  }
  .card2 img:hover{
    background-color: rgb(255, 188, 59);
  }

</style>
