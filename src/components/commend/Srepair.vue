<template>
  <div>
    <h1>维修服务中心总体评价</h1>
    <div id="chart_example"></div>
  </div>
</template>

<script>
export default {
  name: 'Srepair',
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
      var url = 'http://localhost:82/Evaluation/Repair.php'
      this.axios.get(url).then(res => {
        var result = res.data
        for (var i = 0; i < result.length; i++) {
          this.sum1 += parseInt(result[i].Rtime)
          this.sum2 += parseInt(result[i].Rquality)
          this.sum3 += parseInt(result[i].Rservice)
          this.sum4 += parseInt(result[i].Rkind)
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
            data: ['维系时间', '维修质量', '维修种类', '服务态度'],
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
