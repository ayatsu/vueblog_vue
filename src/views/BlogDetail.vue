<template>
  <div>
      <Header></Header>
      <div class="box">
        <div class="blank"></div>
          <div class="contentbox">
              <div class="newsview">
                <h3 class="news_title">{{ blog.title }}</h3>
                
                <!-- <div class="news_con" v-html="blog.content"> -->
                  <markdown-it-vue class="md-body news_con" :content="blog.content"/>
                <!-- </div> -->
                
              </div>
          </div>    
      </div>
      <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue"

import MarkdownItVue from 'markdown-it-vue'
import 'markdown-it-vue/dist/markdown-it-vue.css'

export default {
    name: "BlogDetail",
    components: {Header, Footer, MarkdownItVue},
    data() {
      return {
        blog: {
          title: '',
          content: ''
        }
      }
    },
    created() {
      const blogId = this.$route.params.blogId
      const _this = this
      this.$axios.get('/blog/'+blogId, {
        headers:{
          "Authorization": localStorage.getItem("token")
        }
      }).then(res => {
        const blog = res.data.data
        _this.blog.title = blog.title
        _this.blog.content = blog.content

        // var MardownIt = require("markdown-it")
        // var md = new MardownIt()
        // var rendercontent = md.render(blog.content)

        // _this.blog.content = rendercontent
      })
    }
}
</script>

<style>
.box{
  margin-bottom: 20px;
}
.news_title{
  margin-bottom: 10px;
}
</style>

// INSERT INTO `m_user` VALUES (5, 'tempvisitor', 'tempvisitor', 'b2df4fd12fc97477ab21d1f483c3e02f', 0, 1, '2021-12-31 20:00:00');