<template>
  <div class="container">
    <div class="schedule">
      <div class="time">
        <el-timeline>
          <el-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            :icon="activity.icon"
            :type="activity.type"
            :color="activity.color"
            :size="activity.size"
            :timestamp="activity.timestamp">
            {{activity.content}}
          </el-timeline-item>
        </el-timeline>
      </div>
    </div>

    <div id="commend" label-width="80px">
      <el-form>
        <el-form-item label="评价">
          <el-input type="textarea" v-model="mycommend" placeholder="请输入评价"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="sub">提交</el-button>
        </el-form-item>
      </el-form>
      <div>
        <p v-for="item in arr" :key="item" >
          您的评论是：{{item}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    sub () {
      this.arr.push(this.mycommend)
    }
  },
  data () {
    return {
      arr: [],
      mycommend: '',
      activities: [{
        content: '评价 请报修本人评价',
        size: 'large',
        type: 'primary',
        icon: 'el-icon-more'
      }, {
        content: '回访 请客服人员进行登录后回访',
        size: 'large',
        color: '#30bd75',
        icon: 'el-icon-phone-outline'

      }, {
        content: '完工',
        timestamp: '2019-06-27 9:54',
        icon: 'el-icon-check',
        color: '#30bd75',
        size: 'large'
      }, {
        content: '派工',
        size: 'large',
        timestamp: '2019-06-27 8:40',
        color: '#30bd75',
        icon: 'el-icon-edit'
      },
      {
        content: '审核',
        timestamp: '2019-06-26 20:46',
        size: 'large',
        color: '#30bd75',
        icon: 'el-icon-loading'
      },
      {
        content: '申报',
        timestamp: '2019-06-26 20:46',
        size: 'large',
        color: '#30bd75',
        icon: 'el-icon-user'

      }]
    }
  }
}
</script>

<style scoped>
  .container{
    position:relative
  }
  .schedule{
    display: block;
    left:30%;
    top:10vh;
    width:600px;
    height: 340px;
    position: absolute;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
  }
  .time{
    position: absolute;
    left: 50%;
  }
  #commend{
    display: block;
    top: 52vh;
    left: 30%;
    width: 600px;
    height: 300px;
    position: absolute;
  }
</style>
