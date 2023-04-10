<template>
  <div class="select-wrapper">
    <div class="nav">
      <div class="left">
        <ul>
          <li>校区</li>
          <li>学生画像</li>
        </ul>
      </div>
      <div class="right"></div>
    </div>
    <div class="select-center">
      <div class="select">
        <div class="select-input">
          <label for="">姓名</label>
          <input type="text" v-model="stu_name" />
          <label for="">学号</label>
          <input type="text" v-model="stu_id" />
          <label for="">班级</label>
          <input type="text" v-model="class_num" />
          <label for="">专业</label>
          <input type="text" v-model="type" />
        </div>
        <div class="select-btn">
          <button @click="select">搜索</button>
        </div>
      </div>
      <div class="table" v-if="isShow">
        <table v-if="studentInfo?.length">
          <thead>
            <tr>
              <th>姓名</th>
              <th>学号</th>
              <th>班级</th>
              <th>专业</th>
              <th>类型</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(student, index) in studentInfo" :key="index">
              <td>{{ student.stuName }}</td>
              <td>{{ student.stuId }}</td>
              <td>{{ student.classNum }}</td>
              <td>{{ student.major }}</td>
              <td>{{ student.type }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      studentInfo: [],
      isShow: false,
      stu_name: "",
      stu_id: "",
      class_num: "",
      type: "",
    }
  },
  methods: {
    gotoHeight() {
      this.$router.push("/dashboard")
    },
    select() {
      this.isShow = true
      this.$http
        .get(
          `http://localhost:8088/student/search?stuName=${this.stu_name
          }&stuId=${Number(this.stu_id)}&major=${this.type}&classNum=${this.class_num
          }`
        )
        .then(
          response => {
            const { data: res } = response
            if (res.code == 200) {
              this.studentInfo = res.data
            }
          },
          err => {
            return err
          }
        )
    },
  },
}
</script>

<style lang="scss" scoped>
.select-wrapper {
  background-image: url("../assets/bg.jpg");
  background-size: cover;
  height: 100vh;

  .nav {
    width: 100%;
    height: 120px;
    display: flex;

    .left {
      width: 70%;

      ul {
        display: flex;
        list-style: none;
        align-items: center;

        li {
          height: 120px;
          width: 30%;
          font-size: 25px;
          line-height: 120px;
          color: #fff;
          text-align: center;
        }

        :nth-child(2) {
          border-left: 1px solid #fff;
        }
      }
    }

    .right {
      width: 30%;
    }
  }

  .select-center {
    width: 100%;
    background-color: #fff;
    width: 80%;
    margin: 0 auto;
    padding: 20px;
    border-radius: 10px;
    margin-top: 35px;

    .select {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;

      .select-input {
        label {
          margin-left: 5px;
        }

        input {
          width: 140px;
          height: 50px;
          border-radius: 8px;
          font-size: 15px;
          margin-left: 10px;
        }
      }

      .select-btn {
        width: 200px;
        height: 50px;
        display: flex;
        justify-content: flex-end;

        button {
          width: 120px;
          margin-left: 15px;
          border-radius: 5px;
          color: #fff;
          border: none;
          background-color: #1c689c;
          cursor: pointer;
        }
      }
    }

    .table {
      table {
        width: 80%;
        margin: 0 auto;
        text-align: center;
        border-radius: 8px;
        border-collapse: collapse;
        padding: 10px;

        thead {
          background-color: #ecf3fd;
        }
      }

      td,
      th {
        border-top: 1px solid #ddd;
      }
    }
  }
}
</style>
