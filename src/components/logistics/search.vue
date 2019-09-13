<template>
  <div>
    <div>
      <el-form ref="form" :model="select" label-width="80px" size="mini">
        <el-form-item label="维修状态">
          <el-radio-group v-model="select.first" size="mini" id="radio">
            <el-radio border label="全部" >全部</el-radio>
            <el-radio border label="待审核">待审核</el-radio>
            <el-radio border label="待受理">待受理</el-radio>
            <el-radio border label="待派单">待派单</el-radio>
            <el-radio border label="维修中">维修中</el-radio>
            <el-radio border label="已完工">已完工</el-radio>
            <el-radio border label="未验收">未验收</el-radio>
            <el-radio border label="已验收">已验收</el-radio>
            <el-radio border label="已评价">已评价</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="维修区域">
<!--          <el-cascader class="area" :options="options" clearable v-model="vals" filterable @change="handleItemChange"></el-cascader>-->
          <el-cascader
            class="area"
            placeholder="试试搜索：指南"
            :options="options"
            v-model="vals"
            :show-all-levels="false"
            filterable>
          </el-cascader>
        </el-form-item>
      </el-form>
<!--        <el-form-item label="维修日期">-->
<!--          <el-col :span="11" class="date">-->
<!--            <el-date-picker type="date" placeholder="报修日期" v-model="select.date1" style="width: 100%;"></el-date-picker>-->
<!--          </el-col>-->
<!--        </el-form-item>-->
<!--      </el-form>-->
<!--      <button @click="test">获取选中的值</button>-->
<!--      <div v-for="i in vals">-->
<!--        label:{{i.label}} - value{{i.value}}-->
<!--      </div>-->
<!--    </div>-->
    <div class="table">
      <el-button @click="clearFilter">全部维修信息</el-button>
      <el-table
        :data="search(select.first,vals)"
        ref="filterTable"
        stripe
        style="width: 100%">
        <el-table-column
          prop="num"
          label="编号">
        </el-table-column>
        <el-table-column
          prop="area"
          label="区域"
          :filters="[{text: '教学楼',value: '教学楼'},{text: '公寓',value: '公寓'},{text: '食堂',value: '食堂'},{text: '浴室和开水房',value: '浴室和开水房'},{text: '体育场',value: '体育场'},{text: '其他地点',value: '其他地点'}]"
          :filter-method="filterTag1"
          filter-placement="bottom-end"
        >
          <template slot-scope="scope">
            <el-tag
              :type="scope.row.area === '教学楼' ? 'primary' : 'success'"
              disable-transitions>{{scope.row.area}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          prop="items"
          label="项目">
        </el-table-column>
        <el-table-column
          prop="contant"
          label="内容">
        </el-table-column>
        <el-table-column
          prop="custom"
          label="报修人">
        </el-table-column>
        <el-table-column
          prop="time"
          label="报修时间">
        </el-table-column>
        <el-table-column
          prop="unit"
          label="承修单位">
        </el-table-column>
        <el-table-column
          prop="worker"
          label="受理人">
        </el-table-column>
        <el-table-column
          prop="hour"
          label="受理用时">
        </el-table-column>
        <el-table-column
          prop="state"
          label="受理状态"
          :filters="[{text: '待审核',value: '待审核'},{text: '待受理',value: '待受理'},{text: '待派单',value: '待派单'},
          {text: '维修中',value: '维修中'},{text: '已完工',value: '已完工'},
          {text: '未验收',value: '未验收'},{text: '已验收',value: '已验收'},{text: '已评价',value: '已评价'}]"
          :filter-method="filterTag2"
          filter-placement="bottom-end"
        >
          <template slot-scope="scope">
            <el-tag
              :type="scope.row.state === '教学楼' ? 'primary' : 'success'"
              disable-transitions>{{scope.row.state}}</el-tag>
          </template>
        </el-table-column>
      </el-table>
    </div>
    </div>
  </div>
</template>

<script>
// function getCascaderObj (val, opt) {
//   return val.map(function (value, index, array) {
//     for (var itm of opt) {
//       if (itm.value === value) { opt = itm.children; return itm }
//     }
//     return null
//   })
// }
export default {
  data () {
    return {
      checkedValue: '',
      vals: '',
      val: [],
      select: {
        date1: '',
        first: ''
      },
      first: [{
        num: '2019070322',
        area: '教学楼',
        items: '电灯维修',
        contant: '灯泡损坏',
        custom: '王晓明',
        time: '20190703',
        unit: '西区维修部',
        worker: '张伟',
        hour: '1',
        state: '待审核'
      },
      {
        num: '2019070322',
        area: '西区1号学生公寓',
        items: '电灯维修',
        contant: '灯泡损坏',
        custom: '王晓明',
        time: '20190703',
        unit: '西区维修部',
        worker: '张伟',
        hour: '1',
        state: '待受理'
      },
      {
        num: '2019070322',
        area: '西区2号学生公寓',
        items: '电灯维修',
        contant: '灯泡损坏',
        custom: '王晓明',
        time: '20190703',
        unit: '西区维修部',
        worker: '张伟',
        hour: '1',
        state: '待派单'
      },
      {
        num: '2019070322',
        area: '东区1号学生公寓',
        items: '电灯维修',
        contant: '灯泡损坏',
        custom: '王晓明',
        time: '20190703',
        unit: '西区维修部',
        worker: '张伟',
        hour: '1',
        state: '维修中'
      },
      {
        num: '2019070322',
        area: '教职工1号公寓',
        items: '电灯维修',
        contant: '灯泡损坏',
        custom: '王晓明',
        time: '20190703',
        unit: '西区维修部',
        worker: '张伟',
        hour: '1',
        state: '已完工'
      },
      {
        num: '2019070322',
        area: '教职工2号公寓',
        items: '电灯维修',
        contant: '灯泡损坏',
        custom: '王晓明',
        time: '20190703',
        unit: '西区维修部',
        worker: '张伟',
        hour: '1',
        state: '已完工'
      },
      {
        num: '2019070322',
        area: '教职工1号公寓',
        items: '电灯维修',
        contant: '灯泡损坏',
        custom: '王晓明',
        time: '20190703',
        unit: '西区维修部',
        worker: '张伟',
        hour: '1',
        state: '已完工'
      },
      {
        num: '2019070322',
        area: '教职工2号公寓',
        items: '电灯维修',
        contant: '灯泡损坏',
        custom: '王晓明',
        time: '20190703',
        unit: '西区维修部',
        worker: '张伟',
        hour: '1',
        state: '待审核'
      },
      {
        num: '2019070322',
        area: '其他地点',
        items: '电灯维修',
        contant: '灯泡损坏',
        custom: '王晓明',
        time: '20190703',
        unit: '西区维修部',
        worker: '张伟',
        hour: '1',
        state: '已验收'
      }],
      options: [
        {
          value: '教学楼',
          label: '教学楼'
          // children: [
          //   {
          //     value: '1_Teaching_Building',
          //     label: '1号教学楼'
          //   },
          //   {
          //     value: '2_Teaching_Building',
          //     label: '2号教学楼'
          //   }
          // ]
        },
        {
          value: '公寓',
          label: '公寓',
          children: [
            {
              value: '西区学生公寓',
              label: '西区学生公寓',
              children: [
                {
                  value: '西区1号学生公寓',
                  label: '西区1号学生公寓'
                },
                {
                  value: '西区2号学生公寓',
                  label: '西区2号学生公寓'
                }
              ]
            },
            {
              value: '东区学生公寓',
              label: '东区学生公寓',
              children: [
                {
                  value: '东区1号学生公寓',
                  label: '东区1号学生公寓'
                },
                {
                  value: '东区2号学生公寓',
                  label: '东区2号学生公寓'
                }
              ]
            },
            {
              value: '教职工公寓',
              label: '教职工公寓',
              children: [
                {
                  value: '教职工1号公寓',
                  label: '教职工1号公寓'
                },
                {
                  value: '教职工2号公寓',
                  label: '教职工2号公寓'
                }
              ]
            }
          ]
        },
        {
          value: '食堂',
          label: '食堂',
          children: [
            {
              value: '西区食堂',
              label: '西区食堂',
              children: [
                {
                  value: '八号调剂餐厅',
                  label: '八号调剂餐厅'
                },
                {
                  value: '六号学生餐厅',
                  label: '六号学生餐厅'
                }
              ]
            },
            {
              value: '东区食堂',
              label: '东区食堂',
              children: [
                {
                  value: '东区三号餐厅',
                  label: '东区三号餐厅'
                },
                {
                  value: '东区四号餐厅',
                  label: '东区四号餐厅'
                }
              ]
            }
          ]
        },
        {
          value: '浴室和开水房',
          label: '浴室和开水房',
          children: [
            {
              value: '东区浴室',
              label: '东区浴室'
            },
            {
              value: '东区开水房',
              label: '东区开水房'
            }
          ]
        },
        {
          value: '体育场',
          label: '体育场',
          children: [
            {
              value: '田径场',
              label: '田径场'
            },
            {
              value: '篮球场',
              label: '篮球场'
            }
          ]
        },
        {
          value: '其他地点',
          label: '其他地点'
        }
      ]
    }
  },
  methods: {
    search (val1, val2) {
      if (val1 === '全部') {
        return this.first
      }
      var arr = []
      var newVal2 = val2
      if (val2.length > 0) {
        newVal2 = Array.prototype.pop.call(val2)
      }
      console.log(newVal2)
      this.first.forEach(item => {
        if (item.state.indexOf(val1) !== -1 && item.area.indexOf(newVal2) !== -1) {
          arr.push(item)
        }
      })
      return arr
    },
    test () {
      console.log(this.checkedValue)
    },
    // onSubmit () {
    //   console.log('submit!')
    // },
    // getRadioVal (event) {
    //   var radioVal = event.target.value
    //   console.log(radioVal)
    // },
    // handleItemChange () {
    //   this.vals = getCascaderObj(this.val, this.options)
    // },
    clearFilter () {
      this.$refs.filterTable.clearFilter()
    },
    filterTag1 (value, row) {
      return row.area === value
    },
    filterTag2 (value, row) {
      return row.state === value
    }
  }
}
</script>

<style scoped>
  #radio {
    position: relative;
    left: -224px;
  }
  .el-form-item__content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
    padding-top: 5px;
    text-align: left;
  }
  .el-radio.is-bordered+.el-radio.is-bordered {
    margin-left: -24px;
  }
  .el-radio--mini.is-bordered {
    padding: 6px 5px 0 5px;
    border-radius: 3px;
    height: 28px;
  }
  .area {
    position: absolute;
    left: 36px;
    width: 180px;
  }
  .date {
    position: absolute;
    left: 36px;
    width: 280px;
  }
</style>
