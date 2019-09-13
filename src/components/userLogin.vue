<template>
  <div class="container">
    <div class="header">
      <div class="logo">logo</div>
      <div class="line"></div>
      <h3>统一身份认证</h3>
    </div>
    <div class="main">
      <div class="playl">
        <el-carousel :interval="5000" arrow="always">
          <el-carousel-item v-for="(item,index) in img" :key="index" >
            <img v-bind:src="item.url">
          </el-carousel-item>
        </el-carousel>
      </div>
<!--      <div class="swiper" >-->
<!--&lt;!&ndash;        <el-carousel indicator-position="outside">&ndash;&gt;-->
<!--&lt;!&ndash;          <el-carousel-item v-for="(item,index) in list" :key="index">&ndash;&gt;-->
<!--&lt;!&ndash;            <img :src="item.img" alt="">&ndash;&gt;-->
<!--&lt;!&ndash;          </el-carousel-item>&ndash;&gt;-->
<!--&lt;!&ndash;        </el-carousel>&ndash;&gt;-->
<!--        <el-carousel trigger="click" :height="bannerH +'px'">-->
<!--          <el-carousel-item v-for="(item,index) in list" :key="index">-->
<!--            <img :src="item.img" class="bannerImg"/>-->
<!--          </el-carousel-item>-->
<!--        </el-carousel>-->
<!--      </div>-->
      <div class="login">
        <div class="des">使用用户名密码登录</div>
        <div class="fir1">
          <div class="fir">
            <el-form :model="ruleForm" status-icon :rules="rules" label-width="100px" class="demo-ruleForm" >
              <el-form-item label="用户名" prop="name"  >
                <el-input type="text" name="name"  v-model="ruleForm.name" auto-complete="off" class="input" aria-placeholder="用户名为您
的学号或别名"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="pass">
                <el-input type="password" name="passwd"  v-model.number="ruleForm.pass" auto-complete="off" class="input"></el-input>
              </el-form-item>
              <el-button type="submit" @click="submit">登录</el-button>
            </el-form>
          </div>
        </div>
        <div class="jh"><router-link to="./register">账号注册</router-link></div>
        <div class="forget"><router-link to="../find/hea">忘记密码</router-link></div>
        <div class="other">
          <span>其他方式登录</span>
          <img src="../assets/first/qq-icon.png" alt="">
          <img src="../assets/first/wx-icon.png" alt="">
        </div>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
export default {
  name: 'userLogin',
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
      ruleForm: {
        name: '',
        pass: '',
        users: []
      },
      rules: {
        name: [{validator: checkName, trigger: 'blur'}],
        pass: [{validator: validatePass, trigger: 'blur'}]
      },
      bannerH: 475,
      img: [{url: require('../assets/images/x9.jpg')}, {url: require('../assets/images/x3.jpg')}, {url: require('../assets/images/x5.jpg')}, {url: require('../assets/images/x6.jpg')}, {url: require('../assets/images/x1.jpg')}],
      list: [
        {
          img: 'http://img.hb.aicdn.com/adbde61e4343dedd21e97ea7f22666825a8db7d077ffe-qn8Pjn_fw658'
        },
        {
          img: 'http://img.hb.aicdn.com/adeed7d28df6e776c2fa6032579c697381d1a82b7fe00-fwRqgn_fw658'
        },
        {
          img: 'http://img.hb.aicdn.com/ab7f48509b3c0353017d9a85ef1d12400c9b2724540d4-p3zouo_fw658'
        },
        {
          img: 'http://img.hb.aicdn.com/60f788fc2a846192f224b9e6d4904b30e54926211d3d67-ACFJ9G_fw658'
        },
        {
          img: 'http://img.hb.aicdn.com/22ded455284aab361b8d2056e82f74a891a019704296a-PSraEB_fw658'
        }
      ]
    }
  },
  mounted () {
    this.k = document.body.clientWidth
    console.log(this.k)
    this.setBannerH()
    window.addEventListener('resize', () => {
      this.setBannerH()
    }, false)
  },
  methods: {
    setBannerH () {
      this.bannerH = document.body.clientWidth / 4
    },
    submit () {
      var rname = sessionStorage.getItem('userName')
      if (!rname) {
        var url = 'http://localhost:82/login/login.php'
        var obj = {
          name: this.ruleForm.name,
          password: this.ruleForm.pass
        }
        this.axios.get(url, {
          params: obj
        }).then(res => {
          // console.log(res);
          var result = res.data
          console.log(result)
          if (result === '此用户不存在') {
            alert('此用户不存在')
          } else if (result === '密码错误') {
            alert('您的密码有误,请重新输入')
          } else {
            alert('欢迎你' + result.loginName)
            this.$router.push({path: './first/topLead'})
            sessionStorage.setItem('userName', result.loginName)
            sessionStorage.setItem('userNum', result.num)
            this.$store.dispatch('setUser', result.loginName)
            this.$store.dispatch('setUser', result.num)
          }
        })
      } else {
        this.$router.push({path: './first/topLead'})
      }
    }
  }
}
</script>

<style scoped>
  .container {
    /*position: relative;*/
    width: 100%;
    height: 100vh;
    /*background-color: #bac1a1;*/
    overflow: hidden;
  }
  .header {
    position: relative;
    width: 100%;
    height: 120px;
    background: url('../assets/first/top-bg.png') center;
  }
  .logo {
    position: absolute;
    display: inline-block;
    top: 0;
    left: 50px;
    width: 230px;
    height: 120px;
    line-height: 120px;
    font-size: 50px;
    font-weight: 600;
    /*background-color: cadetblue;*/
  }
  .line {
    position: absolute;
    display: inline-block;
    left: 300px;
    top: 10px;
    width: 2px;
    height: 100px;
    background-color: #000;
  }
  .header h3 {
    position: absolute;
    display: inline-block;
    font-size: 30px;
    left: 320px;
    top: 10px;
  }
  .main {
    position: relative;
    width: 100%;
    height: 475px;
    /*background: #d5efff;*/
  }
  .playl{
    margin: 5px auto 15px;
    width: 100%;
    height: 500px ;
  }
  .el-carousel__container {
    position: relative;
    height: 533px;
  }
  .el-carousel__indicators--horizontal {
    top: 470px;
  }
  .swiper {
    width: 100%;
    height: 475px;
  }
  .swiper img {
    width: 100%;
    height: 475px;
  }
  .el-carousel {
    width: 100%;
    height: 475px;
  }
  .el-carousel__container {
    width: 100%;
    height: 445px;
  }
  .el-carousel__item{
    width: 100%;
    height: 475px;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .login {
    position: absolute;
    top: 30px;
    right: 30px;
    background-color: rgba(255,255,255,0.9);
    box-shadow: 0 0 10px 3px rgba(0,0,0,.1);
    /*border: 1px solid black;*/
    border-radius: 4px;
    width: 340px;
    height: 415px;
    z-index: 99;
  }
  .fir1 {
    position: relative;
    width: 100%;
    height: 200px;
    padding: 20px 14px 20px 14px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .fir {
    position: absolute;
    top: 0;
    left: -20px;
  }
  .el-button {
    position: relative;
    left: 30px;
    padding: 12px 86px;
    font-size: 14px;
    border-radius: 4px;
    background-color: #598dff;
    color: white;
    font-weight: 600;
  }
  .el-button:hover {
    color: rgb(255, 188, 59)
  }
  .el-form-item__label {
    width: 60px !important;
    padding: 0 14px 0 0;
  }
  .el-input__inner {
    width: 227px;
  }
  .des {
    width: 100%;
    height: 35px;
    line-height: 35px;
    margin-top: 20px;
    font-size: 14px;
    /*background-color: #ccc;*/
  }
  .fir {
    width: 100%;
    padding: 20px 30px 20px 0;
    box-sizing: border-box;
  }
  /*.el-form-item__label {*/
  /*  width: 80px;*/
  /*}*/
  /*.el-form-item__content {*/
  /*  margin-left: 80px;*/
  /*  margin-right: 30px;*/
  /*}*/
  .login input {
    width: 80%;
    height: 35px;
    margin-top: 20px;
    padding: 5px;
    border-radius: 5px;
  }
  .login a {
    text-decoration: none;
    color: #2c3e50;
    font-size: 14px;
  }
  .jh,
  .forget {
    position: absolute;
    top: 255px;
    width: 64px;
    height: 21px;
  }
  .jh {
    left: 30px;
  }
  .forget {
    right: 30px;
  }
  .other {
    position: relative;
    width: 100%;
    text-align: left;
    padding-left: 32px;
    height: 40px;
    line-height: 40px;
    margin-top: 45px;
    font-size: 14px;
  }
  .other img:nth-child(2) {
    position: absolute;
    right: 70px;
  }
  .other img:nth-child(3) {
    position: absolute;
    right: 130px;
  }
</style>
