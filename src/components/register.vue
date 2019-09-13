<template>
  <div class="flex-container" id="login" :style="{height: screenHeight+'px'}">
    <div id="over">
      <div id="register">
        <el-form label-width="70px" status-icon :model="ruleForm" >
          <el-form-item  prop="name" id="label" label="登录别名" class="item">
            <el-input type="text"  autocomplete="off" v-model="ruleForm.name" placeholder="输入别名后，可用作用户名登录"></el-input>
          </el-form-item>
          <el-form-item label="昵称" prop="nickName"  class="item" >
            <span><el-input type="text"  autocomplete="off" v-model="ruleForm.nickName"></el-input></span>
          </el-form-item>
          <el-form-item label="提示问题" class="item">
            <el-select placeholder="提示问题" v-model="ruleForm.question" id="sel">
              <el-option value="我就读的第一所学校"></el-option>
              <el-option value="我最喜欢的休闲运动是什么？"></el-option>
              <el-option value="我最喜欢的运动员是谁？"></el-option>
              <el-option value="我最喜欢的物品名称？"></el-option>
              <el-option value="我妈妈的生日？"></el-option>
              <el-option value="我最爱的人的名字？"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="答案" prop="result" class="item">
            <el-input type="text" auto-complete="off" v-model="ruleForm.result"></el-input>
          </el-form-item>
          <el-form-item label="生日" prop="birthday" class="item">
            <el-date-picker type="date" placeholder="选择日期"  style="width: 100%;" v-model="ruleForm.birthday"></el-date-picker>
          </el-form-item>
          <el-form-item label="手机号" prop="tel" class="item">
            <el-input type="text" auto-complete="off" t
                      placeholder="绑定手机，可以用手机号作为用户账号登陆"
                      v-model="ruleForm.tel "></el-input>
          </el-form-item>
          <el-form-item label="">
            <el-button type="primary" id="btn" @click="save">保存</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <canvas id="canvas" :style="{height: screenHeight+'px'}">
    </canvas>
  </div>
</template>

<script>
export default {
  name: 'register',
  data () {
    var rname=sessionStorage.getItem('userName')
    return {
      ruleForm: {
        name: rname,
        nickName: '',
        birthday: '',
        question: '',
        result: '',
        tel: ''
      },
      screenHeight: window.innerHeight // 屏幕高度
    }
  },
  watch: {
    'screenHeight': function (val) { // 监听屏幕高度变化
      var oIframe = document.getElementById('login')
      oIframe.style.height = Number(val) + 'px' // '120'是页面布局调整，可去除
    }
  },
  mounted () {
    var _this = this
    window.onresize = function () { // 定义窗口大小变更通知事件
      _this.screenHeight = document.documentElement.clientHeight // 窗口高度
    }
    var canvas = document.getElementById('canvas')
    var ctx = canvas.getContext('2d')
    var w = canvas.width = window.innerWidth
    var h = canvas.height = window.innerHeight
    var hue = 45
    var stars = []
    var count = 0
    var maxStars = 1300 // 星星数量

    var canvas2 = document.createElement('canvas')
    var ctx2 = canvas2.getContext('2d')
    canvas2.width = 100
    canvas2.height = 100
    var half = canvas2.width / 2
    var gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half)
    gradient2.addColorStop(0.025, '#cccccc')
    gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)')
    gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)')
    gradient2.addColorStop(1, 'transparent')

    ctx2.fillStyle = gradient2
    ctx2.beginPath()
    ctx2.arc(half, half, half, 0, Math.PI * 2)
    ctx2.fill()

    // End cache

    function random (min, max) {
      if (arguments.length < 2) {
        max = min
        min = 0
      }

      if (min > max) {
        var hold = max
        max = min
        min = hold
      }

      return Math.floor(Math.random() * (max - min + 1)) + min
    }

    function maxOrbit (x, y) {
      var max = Math.max(x, y)
      var diameter = Math.round(Math.sqrt(max * max + max * max))
      return diameter / 2
      // 星星移动范围，值越大范围越小，
    }

    var Star = function () {
      this.orbitRadius = random(maxOrbit(w, h))
      this.radius = random(60, this.orbitRadius) / 8
      // 星星大小
      this.orbitX = w / 2
      this.orbitY = h / 2
      this.timePassed = random(0, maxStars)
      this.speed = random(this.orbitRadius) / 50000
      // 星星移动速度
      this.alpha = random(2, 10) / 10

      count++
      stars[count] = this
    }
    Star.prototype.draw = function () {
      var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX
      var y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY
      var twinkle = random(10)

      if (twinkle === 1 && this.alpha > 0) {
        this.alpha -= 0.05
      } else if (twinkle === 2 && this.alpha < 1) {
        this.alpha += 0.05
      }

      ctx.globalAlpha = this.alpha
      ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius)
      this.timePassed += this.speed
    }

    for (var i = 0; i < maxStars; i++) {
      /* eslint-disable no-new */
      new Star()
    }

    function animation () {
      ctx.globalCompositeOperation = 'source-over'
      ctx.globalAlpha = 0.5 // 尾巴
      ctx.fillStyle = 'hsla(255, 64%, 6%, 2)'
      ctx.fillRect(0, 0, w, h)

      ctx.globalCompositeOperation = 'lighter'
      for (var i = 1, l = stars.length; i < l; i++) {
        stars[i].draw()
      };

      window.requestAnimationFrame(animation)
    }

    animation()
  },
  methods: {
    addClass (val) {
      document.getElementById(val).style.color = 'black'
      // document.getElementById('register').style.color = 'black';
    },
    deleteClass (val) {
      document.getElementById(val).style.color = ''
    },
    save () {
      var url = 'http://localhost:82/login/mineCenter.php'
      var rnum = sessionStorage.getItem('userNum')
      var obj = {
        rnum: rnum,
        loginName: this.ruleForm.name,
        nickName: this.ruleForm.nickName,
        question: this.ruleForm.question,
        birthday: this.ruleForm.birthday,
        result: this.ruleForm.result,
        tel: this.ruleForm.tel
      }
      var obj1 = this.qs.stringify(obj)
      this.axios.post(url, obj1
        , {
          headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'}
        }).then(res => {
          this.$router.push({name:'topLead'})
        console.log(res)
      })
    }
  }
}
</script>

<style >

  #over{
    display: flex;
    justify-content: center;
    align-items: center;

  }
  #register {
    margin-top:5%;
    width: 29%;
    height: 30%;
    padding: 4% 3% 4% 0%;
    background-color: rgba(255, 255, 255, .2);
    border-radius: 30px;
    box-shadow:0px 0px 50px #ccc;
  }
  .item .el-form-item__label{
    color: white;
    font-size: 0.8em;
  }
  #btn{
    width:100%;
  }
  #sel{
    width:100%;
  }
  canvas {
    width: 100%;
    height: auto/*默认全屏显示 可自己设置高度640px*/;
    display: inline-block;
    position: absolute;
    top:0px;
    vertical-align: baseline;
    left:0px;
    z-index: -1;
  }

</style>
