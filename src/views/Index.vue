<template>
  <div>
    <Header></Header>
    <div class="box">
        <div class="newsview">
        <div class="news_infos">
            <h2>置顶须知</h2>
            <ol>
            </ol>
            <br>
        </div>

        </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue"
export default {
    name: "Index",
    components: {Header, Footer}
}
</script>

<style>

</style>