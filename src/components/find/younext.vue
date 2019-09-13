<template>
    <div class="bok">
     <div style="color: #ffe305;font-size: 40px;text-align: center;line-height: 570px">根据邮箱找回密码</div>
   <div style="line-height: 570px;font-size: 25px;color:rgba(27,14,75,0.7);position: relative">密码找回成功，请到邮件中点击找回密码链接进行修改密码
     <div style="position: absolute;bottom: -137px;right: 17px"><router-link to="/find/hea" style="color: #ffe305;text-decoration: none;">BACK</router-link></div></div>
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
    top: 157px;
    display: flex;
    justify-content: space-around;
    font-family: '微软雅黑';
    text-align: center;
  }
  .left,.right{
    width: 25%;
    font-size: 77px;
  }
  .in{
    width: 50%;
    margin: auto;
  }
</style>
