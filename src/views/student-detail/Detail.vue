<template>
  <div class="detail">
    <div class="container">
      <el-avatar :size="150" :src="detail.circleUrl" />
      <ul class="right">
        <li class="right-item">
          <span class="title">{{ username.name }}</span>
          <el-tag
            v-for="item in username.statusList"
            :key="item.label"
            :type="item.type"
            effect="dark"
            size="large"
          >
            {{ item.label }}
          </el-tag>
        </li>
        <li class="right-item">
          <div class="a-item"><span>学院：</span><span>{{ otherInfo.college }}</span></div>
          <div class="a-item"><span>班级：</span><span>{{ otherInfo.class }}</span></div>
          <div class="a-item"><span>学号：</span><span>{{ otherInfo.stuNum }}</span></div>
          <div class="a-item"><span>电话：</span><span>{{ otherInfo.phone }}</span></div>
        </li>
        <li class="right-item">
          <span>学籍状态：</span>
          <el-tag type="warning" size="large" effect="dark"> {{ otherInfo.schStatus }}</el-tag>
        </li>
        <li class="right-item">
          <div class="a-item"><span>辅导员：</span><span>{{ otherInfo.teacher }}</span></div>
          <div class="a-item"><span>班主任：</span><span>{{ otherInfo.headTeacher }}</span></div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue'

const detail = reactive({
  circleUrl:
    'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
})

const username = reactive({
  name: 'zhangsan',
  statusList: [
    { type: 'info', label: '在校' },
    { type: 'danger', label: '归寝预警' },
    { type: 'danger', label: '学业预警' },
  ]
})
const otherInfo = reactive({
  college: '计算机学院',
  class: '通信工程3班',
  stuNum: 123123,
  phone: 12333123,
  schStatus: '保留学籍',
  teacher: 'lisi',
  headTeacher: 'wangwu'
})

</script>
<style lang="scss" scoped>
.detail {
  height: 200px;
  width: 100%;
  background-color: #031F4F;
  .container {
    width: 80%;
    height: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    .right {
      height: 100%;
      margin-left: 30px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 18px 0;
      &-item {
        display: flex;
        align-items: center;
        font-size: 16px;
        color: #fff;
        .title {
          margin-right: 30px;
        }
        .el-tag {
          margin-right: 30px;
          font-size: 14px;
        }
        .a-item {
          margin-right: 50px;
        }
      }
    }
  }
}
</style>
