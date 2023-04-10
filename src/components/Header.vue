<template>
  <div class="header">
    <div class="container">
      <div class="left">
        <div class="logo"></div>
        <div class="title">学生画像</div>
      </div>
    </div>
  </div>
</template>
<script setup>

</script>

<style lang="scss" scoped>
.header {
  height: 120px;
  line-height: 120px;
  background-color: #1A5798;
  .container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
      height: 100%;
      font-size: 32px;
      color: #fff;
      display: flex;
      align-items: center;
      .logo {
        width: 500px;
        height: 100%;
        position: relative;
        &:after {
          content: '';
          position: absolute;
          top: 30px;
          bottom: 30px;
          right: 0;
          width: 1px;
          background-color: #fff;
        }
      }
      .title {
        margin-left: 20px;
      }
    }
  }
}
</style>