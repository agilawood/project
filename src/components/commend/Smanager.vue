<template>
  <div>
    <h1>学生社区中心总体评价</h1>
    <div id="chart_example"></div>
  </div>
</template>

<script>
export default {
  name: 'Smanager',
  data () {
    return {
      sum1: 0,
      sum2: 0,
      sum3: 0,
      sum4: 0,
      a: 0,
      b: 0,
      c: 0,
      d: 0
    }
  },
  methods: {
    getInfo () {
      var url = 'http://localhost:82/Evaluation/Manager.php'
      this.axios.get(url).then(res => {
        var result = res.data
        for (var i = 0; i < result.length; i++) {
          this.sum1 += parseInt(result[i].Mhygiene)
          this.sum2 += parseInt(result[i].Mdormitory)
          this.sum3 += parseInt(result[i].Mrepair)
          this.sum4 += parseInt(result[i].Mculture)
        }
        this.a = parseInt(this.sum1 / result.length)
        this.b = parseInt(this.sum2 / result.length)
        this.c = parseInt(this.sum3 / result.length)
        this.d = parseInt(this.sum4 / result.length)
        this.draw()
      })
    },
    draw () {
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
            magicType: {show: true, type: ['bar']}
          }
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            data: ['管理卫生', '宿舍管理', '管理维修', '社区文化'],
            name: '维修中心项目'
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
            barWidth: '60%',
            data: [this.a, this.b, this.c, this.d]
          }
        ]
      }
      myChart.setOption(option)// 绘制已设定的图表
      window.addEventListener('resize', function () {
        myChart.resize() // 改变窗口图表重新定位
      })
    }
  },
  mounted () {
    this.getInfo() // 调用数据请求方法
    console.log(this)
  }
}
</script>

<style scoped>
  #chart_example{
    position: absolute;
    left:370px;
    top: 150px;
    width: 850px;
    height: 500px;
    margin: 0 auto;
  }
</style>
