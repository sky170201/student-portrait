<template>
  <div class="person">
    <div class="descriptions__title">基本信息</div>
    <el-descriptions :column="4">
      <el-descriptions-item v-for="item in baseConfig" :key="item.name" :label="item.label">{{ baseInfo[item.key]
      }}</el-descriptions-item>
    </el-descriptions>
    <div class="descriptions__title">在校信息</div>
    <el-descriptions :column="4">
      <el-descriptions-item v-for="item in baseConfig" :key="item.name" :label="item.label">{{ baseInfo[item.key]
      }}</el-descriptions-item>
    </el-descriptions>
    <div class="descriptions__title">家长信息</div>
    <div class="container">
      <div v-for="item in parentInfo" :key="item.name" class="container-item">
        <div class="role">{{ item.role }}</div>
        <div class="detail">
          <div class="left">
            <el-avatar :size="150" :src="item.avatar" />
            <span class="name">{{ item.name }}</span>
          </div>
          <div class="right">
            <div><span class="info__label">工作单位</span><span class="info__content">{{ item.workUnit }}</span></div>
            <div><span class="info__label">职业</span><span class="info__content">{{ item.job }}</span></div>
            <div><span class="info__label">电话</span><span class="info__content">{{ item.phone }}</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";

const baseConfig = ref([
  { key: 'name', label: '姓名' },
  { key: 'gender', label: '性别' },
  { key: 'birthday', label: '出生日期' },
  { key: 'idNumber', label: '身份证号' },
  { key: 'nation', label: '民族' },
  { key: 'native', label: '籍贯' },
  { key: 'register', label: '户口' },
  { key: 'maritalStatus', label: '婚姻状况' },
  { key: 'phone', label: '手机' },
  { key: 'politicsStatus', label: '政治面貌' },
  { key: 'branch', label: '所属党支部' },
])

const baseInfo = reactive({
  name: 'zhangsan',
  gender: '男',
  birthday: '2001年5月1日',
  idNumber: '123123123123',
  nation: '汉',
  native: '山东威海',
  register: '山东威海',
  maritalStatus: '未婚',
  phone: '12312332',
  politicsStatus: '政治面貌',
  branch: '所属党支部',
})

// 家长信息
const parentInfo = ref([
  {
    avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
    name: 'zhangba',
    role: '父亲',
    workUnit: 'A单位',
    job: 'A工作',
    phone: 15551232333
  },
  {
    avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
    name: 'zhangma',
    role: '母亲',
    workUnit: 'B单位',
    job: 'B工作',
    phone: 15231232333
  }
])

</script>
<style lang="scss" scoped>
.person {
  .el-descriptions {
    :deep(.el-descriptions__header) {
      height: 80px;
      line-height: 80px;

      .el-descriptions__title {
        width: 100%;
        text-align: center;
        font-size: 20px;
        color: #000;
      }
    }

    :deep(.el-descriptions__body) {
      .el-descriptions__table {
        tbody {
          tr:nth-child(2n-1) {
            background-color: #D1DFEC;

            .el-descriptions__cell {
              padding: 10px 0;
            }
          }

          tr:nth-child(2n) {
            .el-descriptions__cell {
              padding: 20px 0;
            }
          }

          .el-descriptions__cell {
            font-size: 16px;
            padding-left: 20px !important;
          }
        }
      }
    }
  }

  .container {
    display: flex;

    &-item {
      flex: 1;
      position: relative;

      .role {
        font-size: 18px;
        font-weight: 700;
        position: relative;

        &::after {
          content: '';
          height: 3px;
          width: 40px;
          position: absolute;
          bottom: -5px;
          left: 0;
          background: #94B4DB;
        }
      }

      .detail {
        display: flex;
        padding-left: 80px;
        align-items: center;
        margin-top: 20px;

        .left {
          display: flex;
          flex-direction: column;
          align-content: center;
          justify-content: center;

          .name {
            text-align: center;
            margin-top: 20px;
          }
        }

        .right {
          display: flex;
          flex-direction: column;
          padding-left: 60px;

          &>div {
            margin-bottom: 20px;
            font-size: 16px;

            .info__label {
              display: inline-block;
              width: 100px;
            }
          }
        }
      }
    }

    .container-item:nth-child(1) {
      &::after {
        content: '';
        position: absolute;
        right: 20px;
        top: 0;
        height: 100%;
        width: 1px;
        background: #eee;
      }
    }
  }
}
</style>