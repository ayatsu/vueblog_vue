<template>
  <div>
      <el-button type="info" class="logout" @click.native="logout" plain>Logout</el-button>
      <div class="logo">今天做饭了吗</div>
      <nav id="myIndex">
        <ul id="starlist">
            <li><a href="/index">首页</a></li>
            <li><a href="/blogs">归档</a></li>
            <li><a href="/time">时间轴</a></li>
        </ul>
      </nav>
  </div>
</template>

<script>
import "../assets/css/contentindex.css"
export default {
    name: "Header",
    methods:{
        logout(){
        const _this = this
        this.$axios.get('/logout', {
          headers: {
            "Authorization": localStorage.getItem("token")
          }
        }).then((res) => {
          _this.$store.commit('REMOVE_INFO')
          _this.$router.push('/')
        });
      }
    }
}
</script>

<style>
.logout{
    position: absolute;
    top: 0;
    right: 0;
}
</style>