
<template>
  <div class="outer " >
    <div class="t_outer" >后勤意见中心
      <el-button type="info" icon="el-icon-edit" @click="jump"  round class="t_btn1">我要提议</el-button>
    </div>
    <div class="t_input">
      <el-button @click="exportExcel"  type="warning" plain class="export">导出</el-button>
      <el-input class="input1" type="search" placeholder="请输入内容" v-model="search" >
        <el-button class="t_btn2" slot="prepend" icon="el-icon-search" ></el-button>
      </el-input>
    </div>
    <el-table id="out_table"
              :header-cell-style="{background:'#eef1f6',color:'#606266'}"
              :data="tables.slice((pageIndex-1)*pageSize,pageIndex*pageSize)" row-key="id"
              :expand-row-keys="expands"
              @row-click="rowClick"
              border class="t_table" height="450px" style="width: 1050px">
      <el-table-column type="expand" >
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="日期:">
              <span >{{ props.row.date }}</span>
            </el-form-item>
            <el-form-item label="学号:">
              <span>{{ props.row.id }}</span>
            </el-form-item>
            <el-form-item    label="姓名:">
              <span >{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="学院:">
              <span >{{ props.row.college }}</span>
            </el-form-item>
            <el-form-item label="意见分类:">
              <span  >{{ props.row.type }}</span>
            </el-form-item>
            <el-form-item label="意见内容:">
              <span >{{ props.row.ask }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column >
      <el-table-column  prop="id"  align="center" label="学号" width="150px" >
        <template slot-scope="scope">
          <span   v-html="format(scope.row.id)"></span>
        </template>
      </el-table-column>id
      <el-table-column  prop=""  align="center" label="姓名" width="150px">
        <template slot-scope="scope"  >
          <span  v-html="format(scope.row.name)"></span>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="college" label="学院" width="250px">
        <template slot-scope="scope">
          <span  v-html="format(scope.row.college)"></span>
        </template>
      </el-table-column>
      <el-table-column  align="center" prop="ask" label="意见内容" show-overflow-tooltip width="450px">
        <template slot-scope="scope">
          <span   v-html="format(scope.row.ask)"></span>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageIndex"
      :page-sizes="[2, 4, 6, 8]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
    <div class="t_bottom1"></div>
    <div class="t_bottom2">RSP2.0 -Repair service platform 版本号：2.01 版本时间:2014.5</div>
    <div id="right">
      <vue-particles
        color="#6b7d70"
        :particleOpacity="0.8"
        :particlesNumber="200"
        shapeType="circle"
        :particleSize="3"
        linesColor="#203c77"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="100"
        :moveSpeed="4"
        :hoverEffect="false"
        class="lizi">
      </vue-particles>
    </div>
  </div>
</template>

<script>
import FileSaver from 'file-saver'
import XLSX from 'xlsx'
export default {
  name: '',

  components: {

  },
  data () {
    return {
      pageSize: 8, // 每页大小默认值
      pageIndex: 1,
      search: '',
      // pro: [],
      tableData: [
        {
          id: 2016012924,
          date: '2017-08-13',
          name: '赵湾',
          college: '园林学院',
          type: '其他',
          ask: '学校里面有些地方设计不好，比如水房和宿舍楼离得太远，希望可以有独卫'
        },
        {
          id: '2016012345',
          date: '2017-11-19',
          name: '王康',
          college: '生命学院',
          type: '校园管理',
          ask: '教学楼电梯坏了很久都没人修，希望能够早日修好方便学生们上比较高的楼层'
        },
        {
          id: 2016012545,
          date: '2018-01-09',
          name: '吴爱爱',
          college: '水建学院',
          type: '通讯服务',
          ask: '宿舍网真的特别不好，校园网有时候连接会很不顺畅'
        },
        {
          id: 2017013821,
          date: '2018-04-24',
          name: '陈贺',
          college: '动科学院',
          type: '饮食服务',
          ask: '食堂里面有些饭里面会有苍蝇或者虫子，希望学校加强后期对于食堂卫生的管理'
        },
        {
          id: 2016012981,
          date: '2018-08-13',
          name: '王彪',
          college: '葡萄酒学院',
          type: '其他',
          ask: '学校里面有些地方设计不好，比如水房和宿舍楼离得太远，希望可以有独卫'
        },
        { id: 2016012988,
          date: '2018-08-17',
          name: '王小虎',
          college: '机电学院',
          type: '校园管理',
          ask: '教学楼电梯坏了很久都没人修，希望能够早日修好方便学生们上比较高的楼层'
        },
        { id: 2016024851,
          date: '2018-10-02',
          name: '周强',
          college: '水建学院',
          type: '饮食服务',
          ask: '食堂里面有些饭里面会有苍蝇或者虫子，希望学校加强后期对于食堂卫生的管理'
        }, {
          id: 2017012841,
          date: '2018-11-12',
          name: '苟利',
          college: '机电学院',
          type: '校园管理',
          ask: '教学楼电梯坏了很久都没人修，希望能够早日修好方便学生们上比较高的楼层'
        },
        { id: 2016012984,
          date: '2018-11-24',
          name: '南瓜',
          college: '信息学院',
          type: '其他',
          ask: '学校里面有些地方设计不好，比如水房和宿舍楼离得太远，希望可以有独卫'
        }, {
          id: 2017146554,
          date: '2019-01-02',
          name: '钟爱',
          college: '机电学院',
          type: '校园管理',
          ask: '教学楼电梯坏了很久都没人修，希望能够早日修好方便学生们上比较高的楼层'
        }, {
          id: 2017146546,
          date: '2019-01-03',
          name: '张强',
          college: '机电学院',
          type: '校园管理',
          ask: '教学楼电梯坏了很久都没人修，希望能够早日修好方便学生们上比较高的楼层'
        }, {
          id: 2017146554,
          date: '2019-03-28',
          name: '张静',
          college: '信息学院',
          type: '饮食服务',
          ask: '食堂里面有些饭里面会有苍蝇或者虫子，希望学校加强后期对于食堂卫生的管理'
        }, {

          id: 2015544744,
          date: '2019-05-09',
          name: '邱少青',
          college: '水建学院',
          type: '通讯服务',
          ask: '宿舍网真的特别不好，校园网有时候连接会很不顺畅'
        }, {
          id: 2016012874,
          date: '2019-06-13',
          name: '白塘',
          college: '食品学院',
          type: '其他',
          ask: '学校里面有些地方设计不好，比如水房和宿舍楼离得太远，希望可以有独卫'
        }
      ],
      expands: []
    }
  },

  mounted () {
  },

  methods: {
    exportExcel () {
      /* generate workbook object from table */
      var wb = XLSX.utils.table_to_book(document.querySelector('#out_table'))
      /* get binary string as output */
      var wbout = XLSX.write(wb, {bookType: 'xlsx', bookSST: true, type: 'array'})
      try {
        FileSaver.saveAs(new Blob([wbout], {type: 'application/octet-stream'}), '后勤意见信息表.xlsx')
      } catch (e) {
        if (typeof console !== 'undefined') console.log(e, wbout)
      }
      return wbout
    },
    rowClick (row, event, column) {
      // eslint-disable-next-line no-extend-native
      Array.prototype.remove = function (val) {
        let index = this.indexOf(val)
        if (index > -1) {
          this.splice(index, 1)
        }
      }

      if (this.expands.indexOf(row.id) < 0) {
        this.expands = []// .实现展开当前行的时候，其他行都能收起来在rowClick函数给expands添加之前，先清空这个数组。
        this.expands.push(row.id)
      } else {
        this.expands.remove(row.id)
      }
    },

    // 前端过滤
    format (val) {
      val = val.toString()
      if (val.indexOf(this.search) !== -1 && this.search !== '') {
        return val.replace(this.search, '<font color="red">' + this.search + '</font>')
      } else {
        return val
      }
    },
    jump () {
      this.$router.push({path: '/proposal/proposal'})
    },

    handleSizeChange (val) {
      this.pageSize = val
    },
    handleCurrentChange (val) {
      this.pageIndex = val
    }
  },
  computed: {
    tables () {
      const search = this.search
      if (search) {
        return this.tableData.filter(dataNews => {
          return Object.keys(dataNews).some(key => {
            return String(dataNews[key]).toLowerCase().indexOf(search) > -1
          })
        })
      }
      return this.tableData
    },
    // 总条数
    total () {
      return this.tables.length
    }
  },
  watch: {
    // 检测表格数据过滤变化，自动跳到第一页
    tables () {
      this.pageIndex = 1
    }
  }
}

</script>
<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand>>>label {
    width: 80px;
    color: rgb(64, 138, 188);
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
  #right{
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    z-index:-1;
  }
  .lizi{
    height:800px;

  }
  .outer{
    background-color: rgba(14, 41, 63,.6);
    height: 800px;
  }
  a {
    text-decoration: none;
    color: #9d9d9d;
  }
  a:hover{
    color:rgb(255, 188, 59);
  }
  .t_outer{
    height: 150px;
    background: rgb(255, 188, 59);
    line-height: 150px;
    font-size: 35px;
    font-weight: bold;
    color:rgba(14, 41, 63,.8);
    position: relative;
    bottom: 10px;
  }
  .t_btn1{
    position: relative;
    left: 100px;
  }
  .t_input{
    background:rgb(14, 41, 63);
    position: relative;
    bottom: 10px;
  }
  .input1{
    border-radius: 20px;
    position: relative;
    left: 380px;
    width:200px;
  }
  .t_table{
    margin: 40px auto;
    position: relative;
  }
  .t_bottom1{
    width:100%;
    height: 30px;
    background: rgb(255, 188, 59);
    position: relative;
    bottom: -50px;
  }
  .t_bottom2{
    background: rgba(0,0,0,.7);
    height: 20px;
    width: 100%;
    position: relative;
    bottom: -50px;
    font-weight: bold;
    font-size: 10px;
    color: #fff;
  }
  .export{
    height:35px;
    width: 80px;
    position: relative;
    left: 370px;
  }
</style>
