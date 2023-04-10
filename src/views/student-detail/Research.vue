<template>
  <div class="descriptions__title">学习情况</div>
  <div class="study">
    <el-row :gutter="12">
      <el-col :span="8">
        <el-card shadow="never">
          <div>已修学分</div>
          <div>82</div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="never">
          <div>课程通过率</div>
          <div>100%</div>
          <div>已修课程10门，通过课程10门</div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="never">
          <div>平均绩点<el-tooltip
              effect="dark"
              content="Top Center prompts info"
              placement="top"
            >
              <el-icon><QuestionFilled /></el-icon>
            </el-tooltip>
          </div>
          <div>3.8</div>
        </el-card>
      </el-col>
    </el-row>
    <div class="lineBlock"></div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="学年学期" />
      <el-table-column prop="name" label="课程名称" />
      <el-table-column prop="address" label="学分" />
      <el-table-column prop="address" label="成绩" />
      <el-table-column prop="name" label="是否重修" />
    </el-table>
  </div>
  <div class="descriptions__title">科研创新</div>
  <div class="scientific">
    <el-row :gutter="5">
      <el-col :span="6">
        <el-card shadow="never">
          <el-icon size="60px"><Memo /></el-icon>
          <div class="content">
            <div>论文</div>
            <div><span>2</span>篇</div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="never">
          <el-icon size="60px"><Memo /></el-icon>
          <div class="content">
            <div>论文</div>
            <div><span>2</span>篇</div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="never">
          <el-icon size="60px"><Memo /></el-icon>
          <div class="content">
            <div>论文</div>
            <div><span>2</span>篇</div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="never">
          <el-icon size="60px"><Memo /></el-icon>
          <div class="content">
            <div>论文</div>
            <div><span>2</span>篇</div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <div class="lineBlock"></div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="成果名称" />
      <el-table-column prop="name" label="成果类别" />
      <el-table-column prop="address" label="取得时间" />
    </el-table>
  </div>
</template>
<script setup>
import {QuestionFilled, Memo} from '@element-plus/icons-vue'
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]


</script>
<style lang="scss" scoped>
.study {
  .el-card {
    height: 120px;
  }
}
.scientific {
  .el-card {
    :deep(.el-card__body) {
      display: flex;
      align-items: center;
      justify-content: center;
      .content {
        margin-left: 15px;
      }
    }
  }
}
</style>