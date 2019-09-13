<template>
  <div class="bok">
    <div class="bok1"><router-link to="/find/you" class="ljl1">邮箱找回</router-link></div>
    <div class="bok1"> <router-link to="/find/phone" class="ljl1">手机找回</router-link></div>
    <div class="bok1"><router-link to="/find/ques" class="ljl1">问题找回</router-link></div>
  </div>
</template>

<script>
export default {
  name: 'hea'
}
</script>

<style scoped>
  .bok1{
    margin-top: 357px;
    width: 20%;
    height: 67px;
    line-height: 67px;
    background:rgba(255,188,59,1);
    border-radius: 15px;
    box-shadow: 0 4px 8px 0 rgba(255,255,255, .7), 0 6px 20px 0 rgba(255,255,255, .65);
  }
  .bok{
    width:100%;
    height: 527px;
    background: url("../../assets/find/l7.jpg")  center center no-repeat;
    opacity: 0.7;
    position: absolute;
    top: 157px;
    display: flex;
    font-family: '微软雅黑';
    justify-content: space-around;
    text-align: center;
  }
  .ljl1:link{
    color: #ffffff;
    font-size: 37px;
    text-decoration: none;
  }
  .ljl1:visited {color: #FFFFFF;
    font-size: 37px;}
  .bok1{
    transition: all 0.5s linear;
  }
  .bok1:hover{
    transform: rotate3d(1,1,1,35deg);
  }
</style>
