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
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
        <el-form-item label="评价" prop="commit">
          <el-input v-model="ruleForm.commit" placeholder="请输入评价"></el-input>
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
import vm from '@/event.js'
export default {
  methods: {
    sub () {
      if (this.ruleForm.commit !== '') {
        this.$alert('评论已提交', '提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `评论已提交`
            })
          }
        })
        this.arr.push(this.ruleForm.commit)
        vm.$emit('ssend', this.ruleForm.commit)
      } else {
        this.$alert('评论无法提交', '提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `请重新填写评论`
            })
          }
        })
      }
    },
    sendData: function () {
    }
  },
  data () {
    return {
      ruleForm: {
        commit: ''
      },
      rules: {
        commit: [
          { required: true, message: '请输入评论内容', trigger: 'blur' },
          { min: 1, max: 50, message: '长度在 1 到 50 个字符', trigger: 'blur' }
        ]
      },
      arr: [],
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
        timestamp: '2019-07-2 8:40',
        color: '#30bd75',
        icon: 'el-icon-edit'
      },
      {
        content: '审核',
        timestamp: '2019-07-1 20:46',
        size: 'large',
        color: '#30bd75',
        icon: 'el-icon-loading'
      },
      {
        content: '申报',
        timestamp: '2019-07-1 20:46',
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
    position:relative;
  }
  .schedule {
    /* display: block; */
    left: 0;
    top: 0;
    width: 100%;
    height: 330px;
    position: absolute;
  }
  .el-timeline {
    position: absolute;
    top: 20px;
    left: -480px;
    width: 300px;
    margin: 0;
    font-size: 14px;
    list-style: none;
  }
  .time{
    position: absolute;
    left: 50%;
  }
  #commend {
    display: block;
    top: 45vh;
    left: 85px;
    width: 600px;
    height: 148px;
    position: absolute;
  }
  .el-button {
    position: absolute;
    top: -63px;
    left: 620px;
  }
</style>
