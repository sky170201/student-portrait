<template>
  <Header></Header>
  <Detail></Detail>
  <el-tabs v-model="activeName" stretch @tab-change="handleClick">
    <el-tab-pane label="个人信息" name="A"></el-tab-pane>
    <el-tab-pane label="学习科研" name="B"></el-tab-pane>
    <el-tab-pane label="奖惩助贷" name="C"></el-tab-pane>
    <el-tab-pane label="第二课堂" name="D"></el-tab-pane>
    <el-tab-pane label="书院信息" name="E"></el-tab-pane>
  </el-tabs>
  <div class="container">
    <PersonInfo v-if="activeName === 'A'"></PersonInfo>
    <Research v-if="activeName === 'B'"></Research>
    <div v-if="activeName === 'C'"></div>
    <div v-if="activeName === 'D'"></div>
    <div v-if="activeName === 'E'"></div>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import { getStudentInfo } from '@/api/student'
import Header from '@/components/Header.vue'
import Detail from './Detail.vue'
import PersonInfo from './PersonInfo.vue'
import Research from './Research.vue'

const studentInfo = reactive({

})

const getStudentInfoImpl = async () => {
  const res = await getStudentInfo(123)
  console.log('res', res);
}


const activeName = ref('A')
const handleClick = (tab) => {
  activeName.value = tabName
}

onMounted(() => {
  getStudentInfoImpl()
})

</script>
<style lang="scss" scoped>
.el-tabs {
  height: 60px;
  :deep(.el-tabs__header) {
    height: 100%;
    /* background: #BFC8D7; */
    .el-tabs__nav-wrap {
      height: 100%;
      .el-tabs__nav-scroll {
        height: 100%;
        .el-tabs__nav {
          height: 100%;
          .el-tabs__item {
            height: 100%;
            font-size: 18px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .is-active {
            background: #2C5999;
            color: #fff;
          }
        }
      }
    }
  }
}
.container {
  width: 80%;
  margin: auto;
  padding-bottom: 100px;
}
</style>