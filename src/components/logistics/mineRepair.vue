<template>
  <div>
    <div>
      <!--      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">-->
      <!--        <el-tab-pane disabled="false">-->
      <!--          <span slot="label"><i class="el-icon-setting"></i>我的报修</span>-->
      <!--        </el-tab-pane>-->
      <!--        <el-tab-pane class="tab" label="全部" name="first"></el-tab-pane>-->
      <!--        <el-tab-pane class="tab" label="待审核" name="second"></el-tab-pane>-->
      <!--        <el-tab-pane class="tab" label="待受理" name="third"></el-tab-pane>-->
      <!--        <el-tab-pane class="tab" label="待派单" name="fourth"></el-tab-pane>-->
      <!--        <el-tab-pane class="tab" label="待完工" name="fifth"></el-tab-pane>-->
      <!--        <el-tab-pane class="tab" label="维修中" name="sixth"></el-tab-pane>-->
      <!--        <el-tab-pane class="tab" label="已完工" name="sevth"></el-tab-pane>-->
      <!--        <el-tab-pane class="tab" label="已回访" name="eith"></el-tab-pane>-->
      <!--        <el-tab-pane class="tab" label="已维修" name="ninth"></el-tab-pane>-->
      <!--        <el-tab-pane class="tab" label="未验收" name="tenth"></el-tab-pane>-->
      <!--        <el-tab-pane class="tab" label="已驳回" name="tweth"></el-tab-pane>-->
      <!--        <el-tab-pane class="tab" label="已返修" name="tthird"></el-tab-pane>-->
      <!--        <el-tab-pane class="tab" label="已暂停" name="tfourth"></el-tab-pane>-->
      <!--        <el-tab-pane class="tab" label="已评价" name="tfifth"></el-tab-pane>-->
      <!--      </el-tabs>-->
      <div class="table">
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="id"
            label="流水号">
          </el-table-column>
          <el-table-column
            prop="access"
            label="区域">
          </el-table-column>
          <el-table-column
            prop="region"
            label="项目">
          </el-table-column>
          <el-table-column
            prop="description"
            label="内容">
          </el-table-column>
          <el-table-column
            prop="unit"
            label="承修单位">
          </el-table-column>
          <el-table-column
            prop="name"
            label="报修人">
          </el-table-column>
          <el-table-column
            prop="state"
            label="状态">
          </el-table-column>
          <el-table-column
            prop="data"
            label="报修时间">
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: []
    }
  },
  methods: {
    handleClick (tab, event) {
      this.activeName = tab.name
    },
    submit () {
      var url = 'http://localhost:82/login/mineRepair.php'
      var rname = sessionStorage.getItem('userName')
      var obj = {
        rname: rname
      }
      this.axios.get(url, {
        params: obj
      }).then(res => {
        console.log(res)
        this.tableData = res.data
      })
    }

  },
  mounted: function () {
    this.submit()
  }
}
</script>

<style scoped>
  .tab {
    width: 60px;
  }
  .el-tabs__item {
    padding: 0 11px;
    height: 40px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    line-height: 40px;
    display: inline-block;
    list-style: none;
    font-size: 14px;
    font-weight: 500;
    color: #303133;
    position: relative;
  }
  .el-table td, .el-table th {
    padding: 0 0;
    min-width: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-overflow: ellipsis;
    vertical-align: middle;
    position: relative;
    text-align: left;
  }
</style>
