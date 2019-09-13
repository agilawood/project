<template>
  <div class="bok">
    <div style="color: #ffe305;font-size: 40px;text-align: center;line-height: 570px">找回密码</div>
    <div style="line-height: 570px;font-size: 25px;color:rgba(27,14,75,0.7);position: relative">密码找回成功，您需要重新登录！
      <div style="position: absolute;bottom: -137px;right: 17px"><router-link to="/userLogin" style="color: #ffe305;text-decoration: none;">重新登陆</router-link></div></div>
  </div>
</template>

<script>
export default {
  name: 'you'
}
</script>

<style scoped>
  .bok{
    width:100%;
    height: 527px;
    background: rgba(255,255,255,0.7);
    position: absolute;
    display: flex;
    justify-content: space-around;
    top: 157px;
    font-family: '微软雅黑';
    text-align: center;
  }
</style>
