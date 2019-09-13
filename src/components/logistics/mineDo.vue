<template>
  <div>
    <div class="sub-title">
      <span slot="label"><i class="el-icon-setting"></i> 我要报修</span>
    </div>
    <div class="contentsecond">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
        <el-form-item label="故障区域" prop="access">
          <el-cascader class="area" :options="options" v-model="ruleForm.access" clearable></el-cascader>
        </el-form-item>
        <el-form-item label="故障地址" prop="region">
          <el-input v-model="ruleForm.region" placeholder="输入故障的详细地址" type="text"></el-input>
        </el-form-item>
        <el-form-item label="故障描述" prop="description">
          <el-input type="textarea" v-model="ruleForm.description"></el-input>
        </el-form-item>
        <el-form-item label="故障图片">
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
        </el-form-item>
        <el-form-item label="联系电话" prop="tel">
          <el-input placeholder="输入联系电话" v-model="ruleForm.tel"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
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
    return {
      ruleForm: {
        access: '',
        region: '',
        description: '',
        tel: ''
      },
      rules: {
        access: [
          {required: true, message: '请选择故障区域', trigger: 'change'}
        ],
        region: [
          {required: true, message: '请输入故障地址', trigger: 'blur'}
        ],
        description: [
          {required: true, message: '请输入故障描述', trigger: 'blur'}
        ],
        tel: [
          {required: true, validator: checkTel, trigger: 'blur'}
        ]
      },
      dialogImageUrl: '',
      dialogVisible: false,
      options: [
        {
          value: 'Teaching_Building',
          label: '教学楼',
          children: [
            {
              value: '1_Teaching_Building',
              label: '1号教学楼'
            },
            {
              value: '2_Teaching_Building',
              label: '2号教学楼'
            },
            {
              value: '3_Teaching_Building',
              label: '3号教学楼'
            },
            {
              value: '4_Teaching_Building',
              label: '4号教学楼'
            },
            {
              value: '5_Teaching_Building',
              label: '5号教学楼'
            },
            {
              value: '6_Teaching_Building',
              label: '6号教学楼'
            },
            {
              value: '7_Teaching_Building',
              label: '7号教学楼'
            },
            {
              value: '8_Teaching_Building',
              label: '8号教学楼'
            }
          ]
        },
        {
          value: 'Apartment',
          label: '公寓',
          children: [
            {
              value: 'WestApartment',
              label: '西区学生公寓',
              children: [
                {
                  value: '1wa',
                  label: '西区1号学生公寓'
                },
                {
                  value: '2wa',
                  label: '西区2号学生公寓'
                },
                {
                  value: '3wa',
                  label: '西区3号学生公寓'
                },
                {
                  value: '4wa',
                  label: '西区4号学生公寓'
                },
                {
                  value: '5wa',
                  label: '西区5号学生公寓'
                },
                {
                  value: '6wa',
                  label: '西区6号学生公寓'
                },
                {
                  value: '7wa',
                  label: '西区7号学生公寓'
                },
                {
                  value: '8wa',
                  label: '西区8号学生公寓'
                },
                {
                  value: '9wa',
                  label: '西区9号学生公寓'
                },
                {
                  value: '10wa',
                  label: '西区10号学生公寓'
                },
                {
                  value: '11wa',
                  label: '西区1号学生公寓'
                },
                {
                  value: '12wa',
                  label: '西区12号学生公寓'
                },
                {
                  value: '13wa',
                  label: '西区13号学生公寓'
                },
                {
                  value: '14wa',
                  label: '西区14号学生公寓'
                },
                {
                  value: '15wa',
                  label: '西区15号学生公寓'
                },
                {
                  value: '16wa',
                  label: '西区16号学生公寓'
                },
                {
                  value: '17wa',
                  label: '西区17号学生公寓'
                },
                {
                  value: '18wa',
                  label: '西区18号学生公寓'
                }
              ]
            },
            {
              value: 'EastApartment',
              label: '东区学生公寓',
              children: [
                {
                  value: '1ea',
                  label: '东区1号学生公寓'
                },
                {
                  value: '2ea',
                  label: '东区2号学生公寓'
                },
                {
                  value: '3ea',
                  label: '东区3号学生公寓'
                },
                {
                  value: '4ea',
                  label: '东区4号学生公寓'
                },
                {
                  value: '5ea',
                  label: '东区5号学生公寓'
                },
                {
                  value: '6ea',
                  label: '东区6号学生公寓'
                },
                {
                  value: '7ea',
                  label: '东区7号学生公寓'
                },
                {
                  value: '8ea',
                  label: '东区8号学生公寓'
                }
              ]
            },
            {
              value: 'TeacherApartment',
              label: '教职工公寓',
              children: [
                {
                  value: '1ta',
                  label: '教职工1号公寓'
                },
                {
                  value: '2ta',
                  label: '教职工2号公寓'
                },
                {
                  value: '3ta',
                  label: '教职工3号公寓'
                },
                {
                  value: '4ta',
                  label: '教职工4号公寓'
                },
                {
                  value: '5ta',
                  label: '教职工5号公寓'
                }
              ]
            }
          ]
        },
        {
          value: 'Canteen',
          label: '食堂',
          children: [
            {
              value: 'EastCanteen',
              label: '西区食堂',
              children: [
                {
                  value: '8ec',
                  label: '八号调剂餐厅'
                },
                {
                  value: '6ec',
                  label: '六号学生餐厅'
                },
                {
                  value: '5ec',
                  label: '五号学生餐厅'
                },
                {
                  value: '1ec',
                  label: '清真餐厅'
                }
              ]
            },
            {
              value: 'WestCanteen',
              label: '东区食堂',
              children: [
                {
                  value: '3wc',
                  label: '东区三号餐厅'
                },
                {
                  value: '4wc',
                  label: '东区四号餐厅'
                }
              ]
            }
          ]
        },
        {
          value: 'Bathroom',
          label: '浴室和开水房',
          children: [
            {
              value: 'westbathroom',
              label: '东区浴室'
            },
            {
              value: 'westhot',
              label: '东区开水房'
            },
            {
              value: 'eastbathroom',
              label: '西区浴室'
            },
            {
              value: 'easthot',
              label: '西区开水房'
            }
          ]
        },
        {
          value: 'GYM',
          label: '体育场',
          children: [
            {
              value: 'ball1',
              label: '田径场'
            },
            {
              value: 'ball2',
              label: '篮球场'
            },
            {
              value: 'ball3',
              label: '篮球馆'
            },
            {
              value: 'ball4',
              label: '游泳池'
            },
            {
              value: 'ball5',
              label: '小球馆'
            },
            {
              value: 'Other',
              label: '其他'
            }
          ]
        },
        {
          value: 'Others',
          label: '其他地点'
        }
      ]
    }
  },
  methods: {
    submitForm (formName) {
      var url = 'http://localhost:82/login/mineDo.php'
      var rname = sessionStorage.getItem('userName')
      var obj = {
        access: this.ruleForm.access,
        region: this.ruleForm.region,
        description: this.ruleForm.description,
        tel: this.ruleForm.tel,
        rname: rname
      }
      var obj1 = this.qs.stringify(obj)
      console.log(obj1)
      this.axios.post(url, obj1
        , {
          headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'}
        }).then(res => {
        console.log(res)
        var data = res.data
        if (data === 'SUCCESS') {
          alert('报修成功')
          this.$router.push({path: '/logistics/mineRepair'})
        }
      })
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    }
  }
}
</script>

<style scoped>
  .sub-title {
    width: 80%;
    height: 60px;
    font-size: 20px;
    text-align: left;
    padding-left: 10px;
    padding-top: 10px;
  }
  .contentsecond {
    margin-left: 20px;
    padding: 20px;
    width: 80%;
    height: auto;
    min-height: 330px;
    border: 1px solid #b5c1be;
    overflow: auto;
  }
  .area {
    position: absolute;
    left: 0;
    width: 250px;
  }
</style>
