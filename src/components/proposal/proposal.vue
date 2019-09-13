<template>
  <div id="outer">
    <div class="header"><p>后勤意见中心</p>
      <img src="../../assets/proposal/topimg.png" alt=""></div>
    <div id="t_local">&nbsp;&nbsp;&nbsp;您所在的位置:<span @click="jump">后勤意见中心</span>>>新建</div>
  <div id="pro">
<el-form :model="ruleForm" :rules="rules" action="insert.php" method="post"  ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="学号" prop="id">
    <el-input v-model="ruleForm.id" style="width:300px" ></el-input>
  </el-form-item>
  <el-form-item label="姓名" prop="name">
    <el-input v-model="ruleForm.name" style="width:300px" ></el-input>
  </el-form-item>
  <el-form-item label="学院" prop="college">
    <el-input v-model="ruleForm.college" style="width:500px"></el-input>
  </el-form-item>
  <el-form-item label="联系方式" prop="tel">
    <el-input v-model="ruleForm.tel" style="width:300px"></el-input>（此信息只留作管理员联系、回复使用，不予公开。）
  </el-form-item>
  <el-form-item label="邮箱" prop="email">
    <el-input v-model="ruleForm.email" style="width:300px" ></el-input>（此信息只留作管理员联系、回复使用，不予公开。）
  </el-form-item>
  <el-form-item label="意见分类" prop="type">
    <el-checkbox-group v-model="ruleForm.type">
      <el-checkbox label="校园管理" name="type"></el-checkbox>
      <el-checkbox label="饮食服务" name="type"></el-checkbox>
      <el-checkbox label="绿化中心" name="type"></el-checkbox>
      <el-checkbox label="通讯服务" name="type"></el-checkbox>
      <el-checkbox label="其他" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>
    <el-form-item label="意见内容" prop="ask" class="t_ask">
     (此部分原则上会全部公开，请使用文明用语）<br> <el-input type="textarea" v-model="ruleForm.ask" class="idea" style="width: 830px"   rows="7"></el-input>
    </el-form-item>
  <el-button type="warning" class="t_btn"  @click="submitForm('ruleForm')">提交内容</el-button>
</el-form>
  </div>
    <div class="i_bottom">
      <hr align="center">
      <br>
      开发管理：<font color="red">后勤管理部门</font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;联系电话：029-87082816</div>
    <div id="bg">
      <vue-particles
      color="#6b7d70"
      :particleOpacity="0.8"
      :particlesNumber="150"
      shapeType="circle"
      :particleSize="3"
      linesColor="#203c77"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="100"
      :moveSpeed="2"
      :hoverEffect="false"
      class="lizi"
      ></vue-particles>
    </div>
  </div>
</template>
<!--<script type="text/javascript" src="../assets/jquery-1.11.2.js"></script>-->
<script>
// import qs from 'qs'
export default {
  data () {
    var id = sessionStorage.getItem('userNum')
    var name = sessionStorage.getItem('userName')
    return {
      ruleForm: {
        id: id,
        name: name,
        college: '',
        tel: '',
        email: '',
        type: [],
        ask: ''
      },
      rules: {
        id: [
          { required: true, message: '请输入学号', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
        ],
        college: [
          { required: true, message: '请输入学院', trigger: 'blur' }
        ],
        tel: [
          { required: true, message: '请输入联系方式', trigger: 'blur' }
        ],
        email: [
          {required: true, message: '请输入邮箱', trigger: 'blur'}
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个意见分类', trigger: 'change' }
        ],
        ask: [
          { required: true, message: '请输入意见内容', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      var url='http://localhost:82/login/xxdwlogin.php'
      var obj = {
        id: this.ruleForm.id,
        name:this.ruleForm.name,
        college: this.ruleForm.college,
        tel:this.ruleForm.tel,
        email: this.ruleForm.email,
        type:this.ruleForm.type,
        ask:this.ruleForm.ask,
      }
      var obj1=this.qs.stringify(obj);
      this.axios.post(url,obj1
        ,{
          headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',}
        }).then(res => {
        console.log(res);
        //var data=res.data;
        /*if(data=='SUCCESS'){
          alert("报修成功");
          //this.$router.push('mineRepair');
        }*/
      })
      var reg=11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
      var regEmail= /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
      this.$refs[formName].validate((valid) => {
        if(!valid){
          console.log(valid)
        }else
        if(!reg.test(this.ruleForm.tel)){
          alert('手机号格式不正确')}
        else if(!regEmail.test(this.ruleForm.email)){
          alert('邮箱格式不正确')}
        else{
          alert('提交成功!')
        }
      })
    },
    jump () {
      this.$router.push({path: '/proposal/proposal1'})
    }
  }
}
</script>
<style>
  #outer{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    position: relative;
    bottom: 30px;
  }
  #bg{
    position: absolute;
    top: 0;
    width: 930px;
    z-index: -1;
    left: 320px;
  }
  .lizi{
    height:950px;
  }
  #pro {
    height: 690px;
    width: 950px;
    background-color: rgba(14, 41, 63,.2);
    margin: 0 auto;
  }
  .header{
    background: rgb(255, 188, 59);
    height: 150px;
    width: 950px;
    margin: 0 auto;
    font-size: 35px;
    font-weight: bold;
    color:rgba(14, 41, 63,.8);
    line-height: 120px;
  }
  .header img{
    transform: rotate(90deg);
    position: relative;
    bottom: 160px;
    left: 240px;
  }
  #t_local{
    height: 30px;
    width: 950px;
    margin: 0 auto;
    text-align: left;
    color: #c6c9cb;
    font-family:KaiTi;
    font-weight: bold;
    font-size: 19px;
    background:rgb(14, 41, 63);
  }

  #t_local span:hover{
  color:rgb(255, 188, 59);text-decoration: none;
    cursor:pointer
  }
  .i_bottom{
    font-family: '楷体',serif;
    font-weight: bold;
    font-size:18px;
  }
  .i_bottom hr{
    width:950px;
    border-top:2px solid #245269;
  }
 .demo-ruleForm{
   padding: 50px 0;
   text-align: left;
 }
  .t_btn{
    position: relative;
    left:830px;
    bottom: 10px;
  }
</style>
