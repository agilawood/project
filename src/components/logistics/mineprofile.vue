<template>
  <div class="profile">
    <div class="label"><i class="el-icon-edit"></i> 我的资料</div>
    <div class="input" ref="form1">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="昵称" prop="name">
          <el-input ref="name" type="name" v-model="ruleForm.name" autocomplete="off" placeholder="昵称最大长度10个字符。"></el-input>
        </el-form-item>
        <el-form-item label="手机号码" prop="tel">
          <el-input  ref='tel' type="tel" v-model="ruleForm.tel" autocomplete="off" placeholder="为了便于和您的沟通和短信提醒请如实填写手机号码。"></el-input>
        </el-form-item>
        <el-form-item label="现住址" prop="address">
          <el-input ref="address" type="address" v-model="ruleForm.address" placeholder="您现在住所详细地址。"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    var checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('昵称不能为空'))
      }
      callback()
    }
    var checkTel = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('电话号码不能为空'))
      } else {
        if (value) {
          var reg = /^1[3456789]\d{9}$/
          if (!reg.test(value)) {
            callback(new Error('电话号码格式不正确'))
          }
        }
      }
      callback()
    }
    var validateAddress = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('地址不能为空'))
      }
      callback()
    }
    return {
      ruleForm: {
        name: '',
        tel: '',
        adress: ''
      },
      rules: {
        name: [
          { validator: checkName, trigger: 'blur' }
        ],
        tel: [
          { validator: checkTel, trigger: 'blur' }
        ],
        address: [
          { validator: validateAddress, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('您的资料提交成功!')
          this.$refs.name.disabled = true
          this.$refs.tel.disabled = true
          this.$refs.address.disabled = true
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }

}
</script>

<style scoped>
  .profile {
    margin: 20px;
    border: 1px solid #b5c1be;
    border-radius: 4px;
  }
  .label {
    width: 80%;
    height: 60px;
    font-size: 20px;
    text-align: left;
    padding-left: 10px;
    padding-top: 10px;
  }
  .input {
    width: 60%;
  }
</style>
