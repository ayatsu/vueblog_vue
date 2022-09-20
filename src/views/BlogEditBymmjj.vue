<template>
  <div>
      <Header></Header>
      <div class="maincontent">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm myform">
          <el-form-item label="标题" prop="title" class="mycontent">
            <el-input v-model="ruleForm.title"></el-input>
          </el-form-item>
          <el-form-item label="摘要" prop="description" class="mycontent">
            <el-input type="textarea" v-model="ruleForm.description"></el-input>
          </el-form-item>
          <el-form-item label="内容" prop="content" class="mycontent">
            <mavon-editor v-model="ruleForm.content"></mavon-editor>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
      <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue"
export default {
    name: "BlogEditBymmjj",
    components: {Header,Footer},
    data() {
      return {
        ruleForm: {
          id: '',
          title: '',
          description: '',
          content: ''
        },
        rules: {
          title: [
            { required: true, message: 'title needed', trigger: 'blur' }
          ],
          description: [
            { required: true, message: 'description needed', trigger: 'blur' }
          ],
          content: [
            { required: true, message: 'content needed', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            const _this = this
            this.$axios.post('/blog/edit', this.ruleForm, {
              headers:{
                "Authorization": localStorage.getItem("token")
              }
            }).then(res => {
              _this.$alert('操作成功', '提示', {
                confirmButtonText: '确定',
                callback: action => {
                  _this.$router.push("/blogs")
                }
              });
            })
          } else {
            // console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    created(){
      const blogId = this.$route.params.blogId
      const _this = this
      if(blogId){
        this.$axios.get('/blog/'+blogId, {
        headers:{
          "Authorization": localStorage.getItem("token")
        }
      }).then(res => {
          const blog = res.data.data
          _this.ruleForm.id = blog.id
          _this.ruleForm.title = blog.title
          _this.ruleForm.description = blog.description
          _this.ruleForm.content = blog.content

        })
      }
    }
}
</script>

<style>
.maincontent{
  text-align: center;
  width: 100%;
}
.myform{
  text-align: left;
  margin-left: 8%;
}

.mycontent{
  width: 1200px;
}
</style>