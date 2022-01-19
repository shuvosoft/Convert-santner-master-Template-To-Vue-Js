<template>
  <!--================ Start Header Area =================-->
    <Header></Header>
  <!--================ End Header Area =================-->

  <router-view></router-view>

  <!--================ Start Newsletter Area =================-->
   <NewsLatter></NewsLatter>
  <!--================ End Newsletter Area =================-->

  <!--================Footer Area =================-->
   <Footer></Footer>
  <!--================End Footer Area =================-->
</template>

<script>
import Header from "../components/frontend/pages/Header";
import Footer from "../components/frontend/pages/Footer"
import NewsLatter from "../components/frontend/pages/NewsLatter"
export default {
  name: "Master",
  components: {
    Header,
    Footer,
    NewsLatter
  }
}
</script>

<style scoped>

</style>