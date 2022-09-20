<template>
  <div>
    <Header></Header>
    <div class="block">
        <el-timeline>
            <el-timeline-item :timestamp="blog.created" placement="top" color="#555" v-for="blog in blogs">
            <el-card>
                <h4>
                    <router-link :to="{name:'BlogDetail', params:{blogId:blog.id}}">
                        {{ blog.title }}
                    </router-link>
                </h4>
                <p>{{ blog.description }}</p>
            </el-card>
            </el-timeline-item>
            
        </el-timeline>

        <el-pagination class="pag"
            background
            layout="prev, pager, next"
            :current-page="currentPage"
            :page-size="pageSize"
            :total="total"
            @current-change="page">
        </el-pagination>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue"
export default {
    name: "Blogs",
    components: {Header,Footer},

    data() {
        return{
          blogs: {},
          currentPage: 1,
          total: 0,
          pageSize: 10    
        }
        
    },
    methods: {
        page(currentPage) {
            const _this = this
            _this.$axios.get("/blogs?currentPage="+currentPage, {
              headers:{
                "Authorization": localStorage.getItem("token")
              }
            }).then(res => {
                // console.log(res)
                _this.blogs = res.data.data.records
                _this.currentPage = res.data.data.current
                _this.total = res.data.data.total
                _this.pageSize = res.data.data.size
            })
        }


    },
    created(){
        this.page(1)
    }
}
</script>

<style>
.block{
    width: 80%;
    margin: 0 auto;
}
.pag{
    text-align: center;
    margin: 0 auto;
    margin-bottom: 10px;
}
</style>