<template>
  <div class="bonus">
    <div class="descriptions__title">奖学金</div>
    <el-row class="count-row" :gutter="12">
      <el-col :span="12">
        <el-card shadow="hover">
          <el-icon size="60px">
            <Memo />
          </el-icon>
          <span>获奖学金（次）</span>
          <span class="count">6</span>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card shadow="hover">
          <el-icon size="60px">
            <Memo />
          </el-icon>
          <span>累计获奖学金（元）</span>
          <span class="count">25200</span>
        </el-card>
      </el-col>
    </el-row>
    <div class="lineBlock"></div>
    <el-row class="name-row" :gutter="12">
      <el-col v-for="(item, i) in bonusList" :key="i" :span="8">
        <el-card shadow="hover">
          <div class="up">
            <div class="left">
              <div>{{ item.name }}</div>
              <div>金额：<span class="amount">{{ item.amount }}</span> 元</div>
            </div>
            <el-icon size="60px">
              <Memo />
            </el-icon>
          </div>
          <div class="down">{{ item.type }}</div>
        </el-card>
      </el-col>
    </el-row>
  </div>
  <div class="award">
    <div class="descriptions__title">竞赛获奖</div>
    <el-row class="count-row" :gutter="12">
      <el-col :span="12">
        <el-card shadow="hover">
          <el-icon size="60px">
            <Memo />
          </el-icon>
          <span>获奖次数（次）</span>
          <span class="count">3</span>
        </el-card>
      </el-col>
    </el-row>
    <div class="lineBlock"></div>
    <el-row class="name-row" :gutter="12">
      <el-col v-for="(item, i) in awardList" :key="i" :span="8">
        <el-card shadow="hover">
          <div class="up">
            <div class="left">
              <span class="left-name">{{ item.name }}</span>
              <!-- <div>金额：<span class="amount">{{ item.amount }}</span> 元</div> -->
            </div>
            <div class="right">{{ item.date }}</div>
          </div>
          <div class="down">
            <span>{{ item.type }}</span>
            <span>{{ item.school }}</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
  <div class="bursary">
    <div class="descriptions__title">助学金</div>
    <el-row class="count-row" :gutter="12">
      <el-col v-for="(item, i) in bursaryList" :key="i" :span="12">
        <el-card shadow="hover">
          <el-icon size="60px">
            <Memo />
          </el-icon>
          <span>{{ item.name }}</span>
          <span class="count">{{ item.count }}</span>
        </el-card>
      </el-col>
    </el-row>
    <div class="lineBlock"></div>
    <el-table :data="tableData" border stripe style="width: 100%">
      <el-table-column prop="date" label="助学金名称" />
      <el-table-column prop="name" label="获得时间" />
      <el-table-column prop="address" label="等级" />
      <el-table-column prop="name" label="金额" />
    </el-table>
  </div>
  <div class="studentLoan">
    <div class="descriptions__title">助学贷</div>
    <el-row class="count-row" :gutter="12">
      <el-col v-for="(item, i) in studentLoanList" :key="i" :span="8">
        <el-card shadow="hover">
          <el-icon size="60px">
            <Memo />
          </el-icon>
          <div class="loan-item">
            <span>{{ item.name }}</span>
            <span class="count">{{ item.count }}</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <div class="lineBlock"></div>
    <el-table :data="studentLoanData" border stripe style="width: 100%">
      <el-table-column prop="date" label="贷款发放日期" />
      <el-table-column prop="name" label="金额" />
    </el-table>
  </div>
  <div class="punishment">
    <div class="descriptions__title">惩处信息</div>
    <el-row class="count-row" :gutter="12">
      <el-col v-for="(item, i) in punishmentList" :key="i" :span="6">
        <el-card shadow="hover">
          <div class="punishment-item">
            <span>{{ item.type }}</span>
            <span><span :style="{ color: item.color }" class="count">{{ item.count }}</span>次</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <div class="lineBlock"></div>
    <el-table :data="punishmentData" border stripe style="width: 100%">
      <el-table-column prop="date" label="惩处时间" />
      <el-table-column prop="type" label="类型" />
      <el-table-column prop="reason" label="原因" />
    </el-table>
  </div>
</template>
<script setup>
import { Memo } from '@element-plus/icons-vue'
import { ref } from 'vue'

const bonusList = ref([
  { name: '2020国际级一等奖学金', amount: 6000, date: '2020-04-01', type: '国家奖学金' },
  { name: '2020国际级一等奖学金', amount: 6000, date: '2020-04-01', type: '国家奖学金' },
  { name: '2020国际级一等奖学金', amount: 6000, date: '2020-04-01', type: '国家奖学金' },
  { name: '2020国际级一等奖学金', amount: 6000, date: '2020-04-01', type: '国家奖学金' },
  { name: '2020国际级一等奖学金', amount: 6000, date: '2020-04-01', type: '国家奖学金' },
  { name: '2020国际级一等奖学金', amount: 6000, date: '2020-04-01', type: '国家奖学金' },
])

const awardList = ref([
  { name: 'c语言编程竞赛', date: '2023-04-11', type: '国家奖学金', school: '华南理工大学' },
  { name: 'c语言编程竞赛', date: '2023-04-11', type: '国家奖学金', school: '华南理工大学' },
  { name: 'c语言编程竞赛', date: '2023-04-11', type: '国家奖学金', school: '华南理工大学' },
])

const bursaryList = ref([
  { name: '获助学金(次)', count: 5 },
  { name: '累计助学金(元)', count: 27000 },
])

const tableData = ref([
  { date: '2016-05-03', name: 'Tom', address: 'No. 189, Grove St, Los Angeles' },
  { date: '2016-06-03', name: 'Tom', address: 'No. 189, Grove St, Los Angeles' },
  { date: '2016-07-03', name: 'Tom', address: 'No. 189, Grove St, Los Angeles' },
  { date: '2016-08-03', name: 'Tom', address: 'No. 189, Grove St, Los Angeles' },
])

const studentLoanList = ref([
  { name: '贷款金额(次)', count: 42000 },
  { name: '已发放金额(元)', count: 34000 },
  { name: '已还金额(元)', count: 5000 },
])

const studentLoanData = ref([
  { date: '2016-05-03', name: 'Tom' },
  { date: '2016-05-03', name: 'Tom' },
  { date: '2016-05-03', name: 'Tom' },
])

const punishmentList = ref([
  { type: '警告', count: 2, color: '#E5AF73' },
  { type: '记过', count: 2, color: '#94B27E' },
  { type: '严重警告', count: 2, color: '#B790D2' },
  { type: '留校察看', count: 2, color: '#5F9ACC' },
])

const punishmentData = ref([
  { date: '2016-05-03', type: '警告', reason: '不知道为啥' },
  { date: '2016-05-03', type: '记过', reason: '不知道为啥' },
  { date: '2016-05-03', type: '留校察看', reason: '不知道为啥' },
])

</script>
<style lang="scss" scoped>
.bonus,
.award,
.bursary {
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
        .up {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 20px;

          .left {
            .amount {
              color: #999;
            }
          }
        }

        .down {
          font-size: 16px;
          font-weight: 500;
          display: flex;
          align-items: center;
          justify-content: space-between;
          text-align: center;
          margin: 0 -20px;
          padding: 20px 20px 0;
          border-top: 1px solid #e4e7ed;
        }
      }
    }
  }
}

.bonus {}

.award {
  .count-row {
    .el-card {
      background: #F7FBFE;


    }
  }

  .name-row {
    :deep(.el-card__body) {
      .up {
        .left {
          &-name {
            position: relative;

            &:after {
              content: '';
              position: absolute;
              bottom: -10px;
              left: 0;
              right: 0;
              height: 2px;
              background-color: #80A2C6;
            }
          }
        }

        .right {
          background-color: #5A9FE9;
          padding: 5px;
          border-radius: 5px;
        }
      }
    }
  }
}

.studentLoan {
  .count-row {
    :deep(.el-card__body) {
      display: flex;
      align-items: center;

      .loan-item {
        margin-left: 10px;
        display: flex;
        flex-direction: column;

        .count {
          font-weight: 700;
          font-size: 28px;
        }
      }
    }
  }
}

.punishment {
  .el-card {
    :deep(.el-card__body) {
      .punishment-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .count {
          font-weight: 700;
          font-size: 20px;
          margin-right: 5px;
        }
      }
    }
  }
}
</style>