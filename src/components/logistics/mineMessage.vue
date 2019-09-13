<template>
    <div class="containerthird">
      <div class="title"><i class="el-icon-chat-dot-round"></i>我的消息</div>
      <div class="table">
        <el-table
          :data="tableData"
          height="250"
          border
          style="width: 100%">
          <router-link to="/logistics/minedetail">
            <el-table-column
              prop="date"
              label="日期"
              width="180">
            </el-table-column>
          </router-link>
          <el-table-column
            prop="num"
            label="编号"
            width="180">
          </el-table-column>
          <el-table-column
            prop="state"
            label="状态">
          </el-table-column>
        </el-table>
      </div>
    </div>
</template>

<script>
export default {
  name: 'mineMessage',
  data () {
    return {
      tableData: [
        {
          date: '2019-07-01',
          num: '2019070101',
          state: '已审批'
        },
        {
          date: '2019-07-02',
          num: '2019070229',
          state: '待受理'
        },
        {
          date: '2019-06-29',
          num: '2019062903',
          state: '已返修'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .title {
    width: 80%;
    height: 60px;
    font-size: 20px;
    text-align: left;
    padding-left: 10px;
    padding-top: 10px;
  }
  .table {
    width: 90%;
    margin: 0 auto;
  }
</style>
