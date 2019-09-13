<template>
  <div class="container">
    <div class="top">
      <div class="top-l">
        <div class="title">
          &nbsp;&nbsp;<i class="el-icon-setting"></i>&nbsp;&nbsp;后勤报修服务
        </div>
      </div>
      <div class="top-r">
        <div class="login" ><div class="i"><i class="iconfont iconicon_zhanghao"></i></div>
          <el-dropdown>
  <span class="el-dropdown-link">
    {{rname}}<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item><el-button type="warning" @click="exit()">安全退出</el-button></el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="second">
          <el-dropdown>
  <span class="el-dropdown-link">
    导航<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
            <el-dropdown-menu slot="dropdown">
              <el-button >后勤报修</el-button>
              <el-button @click="returnFirst2 ">服务评价</el-button>
              <el-button @click="returnFirst3 ">建言献策</el-button>
              <el-button @click="returnFirst ">返回首页</el-button>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="bg"></div>
      <div class="bg1"></div>
      <div class="nav-one">
        <el-menu :default-active="$router.path" class="el-menu-demo" mode="horizontal" @select="handleSelect" router>
          <el-menu-item index="content">平台首页</el-menu-item>
          <el-menu-item index="search">数据查询</el-menu-item>
          <el-submenu index="3">
            <template slot="title">服务指南</template>
            <el-menu-item index="help">报修须知</el-menu-item>
          </el-submenu>
          <el-menu-item index="Repair">我的报修</el-menu-item>
          <el-menu-item>
            <div class="demo-input-suffix">
              <el-input
                placeholder="请输入报修内容进行检索"
                prefix-icon="el-icon-search"
                v-model="input2">
              </el-input>
            </div>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
export default {
  data () {
    var rname = sessionStorage.getItem('userName')
    return {
      rname: rname,
      input2: ''
    }
  },
  methods: {
    handleSelect (key, keyPath) {
    },
    returnFirst () {
      this.$router.push({name: 'topLead'})
    },
    returnFirst3 () {
      this.$router.push({name: 'proposal1'})
    },
    returnFirst2 () {
      this.$router.push({path: '/commend'})
    },
    exit () {
      sessionStorage.removeItem('userName')
      sessionStorage.removeItem('userNum')
    }
  }
}
</script>

<style scoped>
  .container {
    position: relative;
    width: 100%;
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
  .login{
    position: absolute;
    right: 35px;
    top: 20px;
    display: inline-block;
    width: 90px;
    height: 50px;
    line-height: 50px;
    color: #0e293f;
    font-size: 17px;
    padding-right: 10px;
    text-align: right;
  }
  .i {
    position: absolute;
    top: 5px;
    left: -15px;
    margin-right: 10px;
    width: 40px;
    height: 40px;
    line-height: 40px;
    border: 1px solid #0e293f;
    border-radius: 50%;
    text-align: center;
    color: #5a5a5a;
    background-color: #ccc;
  }
  .el-dropdown-link {
    cursor: pointer;
    color: #0e293f;
    font-size: 18px;
  }
  .el-icon-arrow-down {
    font-size: 18px;
  }
  .el-button--warning {
    color: #FFF;
    background-color: #e25858;
    border-color: #cac7c3;
  }
  .second {
    width: 200px;
    position: absolute;
    right: 120px;
    top: 0px;
    font-size: 20px;
  }
  /*.header {*/
  /*  width: 100%;*/
  /*  height: 34px;*/
  /*  background-color: #234c50;*/
  /*}*/
  .main {
    position: relative;
    top: 90px;
    width: 100%;
    height: auto;
    min-height: 671px;
  }
  .bg {
    width: 80%;
    height: 160px;
    margin: 0 auto;
    background: url('../../assets/images/x1.jpg') no-repeat center center;
  }
  .bg1 {
    position: absolute;
    top: 0;
    left: 157px;
    width: 80%;
    height: 160px;
    background-color: rgba(0,0,0,0.3);
  }
  .nav-one {
    position: absolute;
    left: 197px;
    top: 109px;
    width: 75%;
    height: 50px;
    color: black;
  }
  .el-tabs__nav-scroll {
    overflow: hidden;
    padding-left: 20px;
  }
  .el-menu {
    border-right: solid 1px #e6e6e6;
    list-style: none;
    position: relative;
    margin: 0;
    height: 50px;
    padding-left: 0;
    background-color: #f9f9f9ad;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
  }
  .el-menu--horizontal>.el-menu-item:not(.is-disabled):focus, .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover, .el-menu--horizontal>.el-submenu .el-submenu__title:hover {
    background-color: #f9f9f9ad;
  }
  .demo-input-suffix {
    height: 40px;
    line-height: 40px;
    padding-top: 5px;
  }
  .el-input__inner {
    -webkit-appearance: none;
    background-color: #FFF;
    border-radius: 4px;
    border: 1px solid #DCDFE6;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: 18px;
    height: 34px;
    line-height: 34px;
    outline: 0;
    padding: 0 15px;
    -webkit-transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
    transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
    width: 100%;
  }
  .content {
    width: 80%;
    height: auto;
    min-height: 480px;
    margin: 10px auto 0;
    border: 1px solid #e0dada;
    border-radius: 7px;
  }
  .footer {
    position: relative;
    top: 90px;
    width: 100%;
    height: 60px;
    background-color: #2c3e50;
  }
</style>
