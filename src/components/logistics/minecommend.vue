<template>
  <div>
    <div>
      <div class="label"><i class="el-icon-edit"></i> 我的评论</div>
      <div class="table">
        <el-table
          :data="first"
          stripe
          style="width: 100%">
          <el-table-column
            prop="num"
            label="流水号">
          </el-table-column>
          <el-table-column
            prop="custom"
            label="报修人">
          </el-table-column>
          <el-table-column
            prop="ctime"
            label="评论时间">
          </el-table-column>
          <el-table-column
            prop="ccontent"
            label="评论内容">
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
      activeName: 'first'
    }
  },
  methods: {
    handleClick (tab, event) {
      this.activeName = tab.name
    }
  }
}
</script>

<style scoped>
  .label {
    width: 80%;
    height: 60px;
    font-size: 20px;
    text-align: left;
    padding-left: 10px;
    padding-top: 10px;
  }
</style>
