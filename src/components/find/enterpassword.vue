<template>
  <div class="bok">
    <div class="left"><router-link to="phonenext" style="text-decoration: none;color:#ffe305;line-height: 570px;"><i class="el-icon-back"></i> </router-link></div>
    <div class="in">
      <div class="inner">
        <span style="color: #ffe305;font-size: 40px">找回密码</span>
        <div style="margin: 20px;"></div>
        <el-form :label-position="labelPosition" label-width="80px" :model="ruleForm" :rules="rules">
          <el-form-item label="用户名" prop="loginName" class="item">
            <el-input v-model="ruleForm.loginName" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="新密码" prop="newpassword" class="item">
            <el-input v-model="ruleForm.newpassword" placeholder="请输入新密码 (密码长度至少6位)"></el-input>
          </el-form-item>
           <el-form-item label="确认密码" prop="passw" class="item">
             <el-input v-model="ruleForm.passw" placeholder="请再次输入新密码"></el-input>
           </el-form-item>
          <el-button type="submit" @click="dateNum">提交</el-button>
        </el-form></div></div>
    <div class="right"></div>
  </div>
</template>

<script>
export default {
  data () {
    var checkName = (rule, value, callback) => {
      if (value === '') {
        return callback(new Error('用户名不能为空'))
      } else {
        callback()
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      rules: {
        name: [{validator: checkName, trigger: 'blur'}],
        pass: [{validator: validatePass, trigger: 'blur'}]
      },
      labelPosition: 'right',
      ruleForm: {
        loginName: '',
        newpasswors: '',
        passw: ''
      }
    }
  },
  methods: {
    dateNum () {
      var url = 'http://localhost:82/login/updateNum.php'
      var obj = {
        loginName: this.ruleForm.loginName,
        newpassword: this.ruleForm.newpassword,
        passw: this.ruleForm.passw
      }
      if (obj.newpassword != obj.passw) {
        alert('两次输入密码不一致，请重新输入!')
      } else {
        var obj1 = this.qs.stringify(obj)
        this.axios.post(url, obj1
          , {
            headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'}
          }).then(res => {
          console.log(res)
          var result = res.data
          if (result == '此用户不存在!') {
            alert('此用户不存在!')
          } else {
            this.$router.push({path: 'finish'})
          }
        })
      }
    }
  }
}
</script>

<style scoped>
  .left,.right{
    width: 25%;
    font-size: 77px;
  }
  .in{
    width: 50%;
    margin: auto;
  }
  .bok{
    width:100%;
    height: 527px;
    background: rgba(255,255,255,0.7);
    position: absolute;
    top: 157px;
    display: flex;
    font-family: '微软雅黑';
    justify-content: space-around;
    text-align: center;
  }
</style>
