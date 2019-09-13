<template>
  <div>
    <div>
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="最新申报" name="head"></el-tab-pane>
        <el-tab-pane label="全部" name="first">
          <div class="table">
            <el-table
              :data="first"
              stripe
              style="width: 100%">
              <el-table-column
                prop="num"
                label="编号">
              </el-table-column>
              <el-table-column
                prop="area"
                label="区域">
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
                label="受理状态">
              </el-table-column>
            </el-table>
          </div>
        </el-tab-pane>
        <el-tab-pane label="待审核" name="second">
          <div class="table">
            <el-table
              :data="second"
              stripe
              style="width: 100%">
              <el-table-column
                prop="num"
                label="编号">
              </el-table-column>
              <el-table-column
                prop="area"
                label="区域">
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
                label="受理状态">
              </el-table-column>
            </el-table>
          </div>
        </el-tab-pane>
        <el-tab-pane label="待受理" name="third"></el-tab-pane>
        <el-tab-pane label="待派单" name="fourth"></el-tab-pane>
        <el-tab-pane label="待完工" name="fifth"></el-tab-pane>
        <el-tab-pane label="维修中" name="sixth"></el-tab-pane>
        <el-tab-pane label="已完工" name="sevth"></el-tab-pane>
        <el-tab-pane label="已回访" name="eith"></el-tab-pane>
        <el-tab-pane label="已维修" name="ninth"></el-tab-pane>
        <el-tab-pane label="未验收" name="tenth"></el-tab-pane>
        <el-tab-pane label="已驳回" name="tweth"></el-tab-pane>
        <el-tab-pane label="已返修" name="tthird"></el-tab-pane>
        <el-tab-pane label="已暂停" name="tfourth"></el-tab-pane>
        <el-tab-pane label="已评价" name="tfifth"></el-tab-pane>
      </el-tabs>
<!--      <div class="table">-->
<!--        <el-table-->
<!--          :data="first"-->
<!--          stripe-->
<!--          style="width: 100%">-->
<!--          <el-table-column-->
<!--            prop="num"-->
<!--            label="编号">-->
<!--          </el-table-column>-->
<!--          <el-table-column-->
<!--            prop="area"-->
<!--            label="区域">-->
<!--          </el-table-column>-->
<!--          <el-table-column-->
<!--            prop="items"-->
<!--            label="项目">-->
<!--          </el-table-column>-->
<!--          <el-table-column-->
<!--            prop="contant"-->
<!--            label="内容">-->
<!--          </el-table-column>-->
<!--          <el-table-column-->
<!--            prop="custom"-->
<!--            label="报修人">-->
<!--          </el-table-column>-->
<!--          <el-table-column-->
<!--            prop="time"-->
<!--            label="报修时间">-->
<!--          </el-table-column>-->
<!--          <el-table-column-->
<!--            prop="unit"-->
<!--            label="承修单位">-->
<!--          </el-table-column>-->
<!--          <el-table-column-->
<!--            prop="worker"-->
<!--            label="受理人">-->
<!--          </el-table-column>-->
<!--          <el-table-column-->
<!--            prop="hour"-->
<!--            label="受理用时">-->
<!--          </el-table-column>-->
<!--          <el-table-column-->
<!--            prop="state"-->
<!--            label="受理状态">-->
<!--          </el-table-column>-->
<!--        </el-table>-->
<!--      </div>-->
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'first',
      first: [{
        num: '2019070322',
        area: '1号教学楼',
        items: '电灯维修',
        contant: '灯泡损坏',
        custom: '王晓明',
        time: '20190703',
        unit: '西区维修部',
        worker: '张伟',
        hour: '1',
        state: '已审批'
      }],
      second: [{
        num: '2019070199',
        area: '2号教学楼',
        items: '水管维修',
        contant: '水管破损',
        custom: '张晓明',
        time: '20190703',
        unit: '西区维修部',
        worker: '张伟',
        hour: '0.5',
        state: '已返修'
      }]
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

</style>
