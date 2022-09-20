<template>
 <div>
        <Header></Header>
        <div class="timebox">
            <ul v-for="blog in blogs">
                <li><span>{{ blog.created }}</span><i>{{ blog.title }}</i></li>
            </ul>
        </div>
        <Footer></Footer>
 </div>
</template>

<script>
import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue"
export default {
    name: "Time",
    components: {Header, Footer},
    data() {
        return{
          blogs: {} 
        }        
    },
    methods: {
        load() {
            const _this = this
            _this.$axios.get("/all", {
              headers:{
                "Authorization": localStorage.getItem("token")
              }
            }).then(res => {
                // console.log(res)
                _this.blogs = res.data.data.records
            })
        }


    },
    created(){
        this.load()
    }
}
</script>

<style>
.timebox { padding: 30px; width: 80%; margin: 0 auto;}
.timebox span { position: relative; line-height: 32px; padding-right: 40px; color: #999 }
.timebox span:after { position: absolute; content: ""; width: 2px; height: 40px; background: #e0dfdf; right: 18px }
.timebox li { text-overflow: ellipsis; white-space: nowrap; overflow: hidden; }
.timebox li i { position: relative; font-style: normal }
.timebox li i:before { content: " "; height: 10px; width: 10px; border: 2px solid #cccaca; background: #fff; position: absolute; top: 4px; left: -26px; border-radius: 50%; -webkit-transition: all .5s ease; -moz-transition: all .5s ease; -ms-transition: all .5s ease; -o-transition: all .5s ease; transition: all .5s ease; }
.timebox li:hover i:before { background: #333 }
</style>