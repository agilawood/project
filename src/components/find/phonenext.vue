<template>
  <div class="bok">
    <div class="left"><router-link to="phone" style="text-decoration: none;color:#ffe305;line-height: 570px;"><i class="el-icon-back"></i> </router-link></div>
    <div class="in">
      <div class="inner">
        <span style="color: #ffe305;font-size: 40px">根据手机号找回密码</span>
        <el-radio-group v-model="labelPosition" size="small">
        </el-radio-group>
        <div style="margin: 20px;"></div>
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
          <span style="color: rgba(27,14,75,0.7);font-size: 23px">验证码已发送，请输入您收到的验证码！</span>
          <el-form-item label="验证码：" class="item">
            <el-input v-model="formLabelAlign.name" placeholder="请输入用户名"></el-input>
          </el-form-item>
        </el-form></div></div>
    <div class="right"><router-link to="enterpassword" style="text-decoration: none;color:#ffe305;line-height: 570px;"><i class="el-icon-right"></i></router-link></div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      labelPosition: 'right',
      formLabelAlign: {
        name: '',
        region: '',
        type: ''
      }
    }
  }
}
</script>phone

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
