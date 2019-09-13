<template>
  <div>
    <div>
      <p>后勤质量服务评价</p>
      <router-link to="/commend">
        <el-button type="primary">总体评价</el-button>
      </router-link>
      <router-link to="/commend/Sdiet">
        <el-button type="primary">评价结果</el-button>
      </router-link>
    </div>
    <div id="card1" align="center">
      <h1>饮食中心总体评价</h1>
      <div id="card2">
        <el-form :model="form">
          <table>
            <tr>
              <th>项目</th>
              <th>满意</th>
              <th>基本满意</th>
              <th>不满意</th>
            </tr>
            <tr class="change">
              <td>服务态度</td>
              <td>
                <label>
                  <input type="radio" name="item_id[1]" value="90" v-model="form.check1">
                </label>
              </td>
              <td>
                <label>
                  <input type="radio" name="item_id[1]" value="60" v-model="form.check1">
                </label>
              </td>
              <td>
                <label>
                  <input type="radio" name="item_id[1]" value="30" v-model="form.check1">
                </label>
              </td>
            </tr>
            <tr class="change">
              <td>卫生安全</td>
              <td>
                <label>
                  <input type="radio" name="item_id[2]" value="90" v-model="form.check2">
                </label>
              </td>
              <td>
                <label>
                  <input type="radio" name="item_id[2]" value="60" v-model="form.check2">
                </label>
              </td>
              <td>
                <label>
                  <input type="radio" name="item_id[2]" value="30" v-model="form.check2">
                </label>
              </td>
            </tr>
            <tr class="change">
              <td>质量价格</td>
              <td>
                <label>
                  <input type="radio" name="item_id[3]" value="90" v-model="form.check3">
                </label>
              </td>
              <td>
                <label>
                  <input type="radio" name="item_id[3]" value="60" v-model="form.check3">
                </label>
              </td>
              <td>
                <label>
                  <input type="radio" name="item_id[3]" value="30" v-model="form.check3">
                </label>
              </td>
            </tr>
            <tr class="change">
              <td>种类花色</td>
              <td>
                <label>
                  <input type="radio" name="item_id[4]" value="90" v-model="form.check4">
                </label>
              </td>
              <td>
                <label>
                  <input type="radio" name="item_id[4]" value="60" v-model="form.check4">
                </label>
              </td>
              <td>
                <label>
                  <input type="radio" name="item_id[4]" value="30" v-model="form.check4">
                </label>
              </td>
            </tr>
          </table>
        </el-form>
      </div>
      <el-button plain type="submit" @click="submit" >提交结果</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Diet',
  data () {
    return {
      form: {
        check1: '',
        check2: '',
        check3: '',
        check4: ''
      }
    }
  },
  methods: {
    submit () {
      this.$notify({
        title: '提示',
        message: '提交结果成功！',
        duration: 0
      })
      var url = 'http://localhost:82/Evaluation/EvaluationDiet.php'
      var obj = {
        check1: this.form.check1,
        check2: this.form.check2,
        check3: this.form.check3,
        check4: this.form.check4
      }
      this.axios.get(url, {
        params: obj
      }).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style scoped>
  p{
    font-size: 3.3em;
    margin: 5px;
  }
  h1{
    margin: 20px;
  }
  #card1{
    align-content: center;
    height: 470px;
    background-color: rgba(0, 0, 0, 0.12);
    margin: 50px;
    padding: 10px;
  }
  #card2{
    margin: 15px;
  }
  table{
    width:900px;
    height: 250px;
    border-collapse: collapse;
    text-align:center;
    table-layout: fixed;
    background-color: white;
  }
  table,th,td{
    border: 1px solid rgba(0, 0, 0, 0.26);
  }
  tr.change:hover{
    background-color: rgba(117, 117, 117, 0.11);
  }
</style>
