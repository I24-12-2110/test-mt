<template>
  <div class="home">
    <my-header />
    <div class="nave">
      <el-row>
        <el-col :span="5">
          <my-nav />
        </el-col>
        <el-col :span="19">
          <my-img />
        </el-col>
      </el-row>
    </div>
    <my-recommend name='有格调' :showListData='qualityList' width='392px'/>
    <my-recommend name='狠优惠' :showListData='cheapList' width='234px'/>
    <my-footer />
  </div>
</template>

<script>
import MyHeader from "../components/Header/Header.vue";
import MyNav from "../components/index/navgetor.vue";
import MyImg from "../components/index/imgShow.vue";
import MyRecommend from '../components/index/midList.vue';
import api from "../components/Api/index.js";
import MyFooter from '../components/footer/Footer.vue'
export default {
  data(){
    return {
      qualityList:[],
      cheapList :[],
    }
  },
    mounted() {
    api.getScenesList({ theme: "quality", tab: "all", limit: 10 ,ci:this.$store.state.cityCi}).then(res => {
      this.qualityList = res.data;
    });
     api.getScenesList({ theme: "cheap", tab: "all", limit: 20 ,ci:this.$store.state.cityCi}).then(res => {
      this.cheapList = res.data;
    });
  },
  components: {
    MyHeader,
    MyNav,
    MyImg,
    MyRecommend,
    MyFooter
  }
};
</script>
<style>
.nave{
  height: 425px;
  margin-bottom: 30px;
}
</style>

<style scoped>
.nave .el-row{
  width: 1200px;
  margin: auto;
  position: relative;
}

.nave .el-row .el-col-5{
  position: absolute;
  top: -50px;
}
.nave .el-row .el-col-19{
  position: absolute;
  top: -50px;
  left: 250px;
}
</style>
