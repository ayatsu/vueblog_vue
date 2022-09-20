

<template>
  <div class="homebox">
    <el-container style="height:100%;" direction="verticle">
        <el-main>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="Account" prop="username">
                    <el-input v-model="ruleForm.username"></el-input>
                </el-form-item>
                <el-form-item label="Password" prop="password">
                    <el-input v-model="ruleForm.password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">Login</el-button>
                    <el-button @click="resetForm('ruleForm')">Reset</el-button>
                </el-form-item>
            </el-form>
        </el-main>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        ruleForm: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            { required: true, message: 'Enter in username here', trigger: 'blur' },
          ],
          password: [
            { required: true, message: 'Enter in password here', trigger: 'blur' },
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            const _this = this
            this.$axios.post('/login',this.ruleForm).then(res => {

                const jwt = res.headers['authorization']
                const userinfo = res.data.data
                // console.log("jwt:")
                // console.log(jwt)
                _this.$store.commit("SET_TOKEN", jwt)
                _this.$store.commit("SET_USERINFO", userinfo)

                _this.$router.push("/index")

            })
          } else {
            alert('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style>
.el-header, .el-footer {
    color: #333;
    text-align: center;
    line-height: 60px;
    height: 200px;
}

.el-main {
    color: #333;
    text-align: center;
    line-height: 160px;
}

html,
body,
#app,
.homebox,
.el-container{
    height:100%;
    padding:0;
    margin:0;
}

.mylogo{
    height: 100%;
}

.demo-ruleForm{
    max-width: 400px;
    margin: 0 auto;
}
</style>