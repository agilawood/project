<template>
  <div class="containerfirst">
    <div class="personal">
    <h3>个人中心</h3>
    <hr>
    <el-menu
      :default-active="$router.path"
      mode="vertical"
      @select="handleSelect"
      router
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-menu-item index="/logistics/mineDo">
        <i class="el-icon-setting"></i>
        <span slot="title">我要报修</span>
      </el-menu-item>
      <el-menu-item index="/logistics/mineRepair">
        <i class="el-icon-office-building"></i>
        <span slot="title">我的报修</span>
      </el-menu-item>
      <el-menu-item index="/logistics/minedetail">
        <i class="el-icon-edit"></i>
        <span slot="title">我的评论</span>
      </el-menu-item>
      <el-menu-item index="/logistics/mineMessage">
        <i class="el-icon-chat-dot-round"></i>
        <span slot="title">我的消息</span>
      </el-menu-item>
      <el-menu-item index="/logistics/mineprofile">
        <i class="el-icon-user"></i>
        <span slot="title">我的资料</span>
      </el-menu-item>
    </el-menu>
  </div>
    <div class="contentfirst">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Repair',
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    handleSelect () {
    }
  }
}
</script>

<style scoped>
  .containerfirst {
    position: relative;
    width: 100%;
    height: auto;
    max-height: 650px;
  }
  .personal {
    width: 150px;
    margin-top: 15px;
    margin-left: 15px;
    padding: 10px 0;
    border-radius: 4px;
    -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  hr {
    width: 80%;
    height: 3px;
    background-color: #ccc;
  }
  .el-menu {
    border: 0;
    list-style: none;
    position: relative;
    margin: 0;
    padding-left: 0;
    background-color: #FFF;
  }
  .contentfirst {
    position: relative;
    left: 185px;
    top: -375px;
    width: 1065px;
    height: auto;
    min-height: 450px;
    border-radius: 4px;
    -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
</style>
