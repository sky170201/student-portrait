<template>
  <div class="award">
    <div class="descriptions__title">奖学金</div>
    <el-row class="count-row" :gutter="12">
      <el-col :span="12">
        <el-card shadow="never">
          <el-icon size="60px"><Memo /></el-icon>
          <span>获奖学金（次）</span>
          <span class="count">6</span>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card shadow="never">
          <el-icon size="60px"><Memo /></el-icon>
          <span>累计获奖学金（元）</span>
          <span class="count">25200</span>
        </el-card>
      </el-col>
    </el-row>
    <div class="lineBlock"></div>
    <el-row class="name-row" :gutter="12">
      <el-col v-for="(item, i) in awardList" :key="i" :span="8">
        <el-card shadow="never">
          <div class="up">
            <div class="left">
              <div>{{ item.name }}</div>
              <div>金额：{{ item.amount }}元</div>
            </div>
            <el-icon size="60px"><Memo /></el-icon>
          </div>
          <div class="down">{{item.type}}</div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script setup>
import {Memo} from '@element-plus/icons-vue'
import { ref } from 'vue'

const awardList = ref([
  {name: '2020国际级一等奖学金', amount: 6000, date: '2020-04-01', type: '国家奖学金'},
  {name: '2020国际级一等奖学金', amount: 6000, date: '2020-04-01', type: '国家奖学金'},
  {name: '2020国际级一等奖学金', amount: 6000, date: '2020-04-01', type: '国家奖学金'},
  {name: '2020国际级一等奖学金', amount: 6000, date: '2020-04-01', type: '国家奖学金'},
  {name: '2020国际级一等奖学金', amount: 6000, date: '2020-04-01', type: '国家奖学金'},
])

</script>
<style lang="scss" scoped>
.award {
  .count-row {
    .el-card {
      :deep(.el-card__body) {
        display: flex;
        align-items: center;
        .count {
          font-weight: 700;
          font-size: 28px;
          margin-left: 20px;
        }
      }
    }
  }
  .name-row {
    .el-col {
      margin-bottom: 12px;
    }
    .el-card {
      :deep(.el-card__body) {
        
      }
    }
  }
}
</style>