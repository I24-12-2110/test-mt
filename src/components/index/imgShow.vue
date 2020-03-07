<template>
  <div class="imgShow">
    <el-row class="first">
      <el-col :span="24">
        <router-link tag="span" v-for="(item,index) in headerList" :key="index" to="/">{{ item }}</router-link>
      </el-col>
    </el-row>
    <el-row class="second">
      <el-col :span="14">
        <el-carousel height="250px">
          <el-carousel-item v-for="(item,index) in srcList" :key="index">
            <img :src="item" alt />
          </el-carousel-item>
        </el-carousel>
      </el-col>
      <el-col :span="4">
        <img src="../../assets/imgShow-1.jpg" alt />
      </el-col>
      <el-col :span="6">
        <el-row>
          <el-col>
            <img src="../../assets/avatar.jpg" alt />
          </el-col>
          <el-col>HI!你好</el-col>
          <el-col>
            <el-button round>注册</el-button>
          </el-col>
          <el-col>
            <el-button round>立即登录</el-button>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row class="third">
      <el-col :span="7">
        <img src="../../assets/imgShow-2.png" alt />
      </el-col>
      <el-col :span="7">
        <img src="../../assets/imgShow-3.jpg" alt class="img-2" />
      </el-col>
      <el-col :span="4">
        <img src="../../assets/imgShow-4.jpg" alt />
      </el-col>
      <el-col :span="6">
        <el-row>
          <el-col>
            <img src="../../assets/download-qr.png" alt="">
          </el-col>
          <el-col>
            <p>美团APP手机版</p>
            <p>
              <span>1元起</span>吃喝玩乐
            </p>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headerList: [
        "美团外卖",
        "猫眼电影",
        "美团酒店",
        "民宿/公寓",
        "商家入驻",
        "美团公益"
      ],
      srcList: [
        "http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg",
        "http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg",
        "http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg",
        "http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg",
        "https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png"
      ]
    };
  }
};
</script>

<style>
.imgShow .el-row .el-col-24 {
  margin-left: 15px;
}
.imgShow .first .el-col-24 span {
  display: inline-block;
  height: 50px;
  line-height: 50px;
  margin: 0 20px;
  font-weight: 600;
  cursor: pointer;
}

.imgShow .first > .el-col-24 span:nth-of-type(1):hover {
  color: #fbc700;
}
.imgShow .first > .el-col-24 span:nth-of-type(2):hover {
  color: #ed1e24;
}
.imgShow .first > .el-col-24 span:nth-of-type(3):hover {
  color: #ed1e24;
}
.imgShow .first > .el-col-24 span:nth-of-type(4):hover {
  color: #fbc700;
}
.imgShow .first > .el-col-24 span:nth-of-type(5):hover {
  color: #fe8c00;
}
.imgShow .first > .el-col-24 span:nth-of-type(6):hover {
  color: #ed1e24;
}
.imgShow .second .el-col-14 img {
  display: inline-block;
  margin: 10px 0 0 10px;
  height: 240px;
  box-sizing: border-box;
}
.imgShow .second .el-col-4 img {
  box-sizing: border-box;
  margin: 10px 0 0 10px;
  height: 240px;
}
.imgShow .third img {
  margin: 5px 0 0 10px;
  height: 165px;
  box-sizing: border-box;
}
.imgShow .third img.img-2 {
  margin-left: 7px;
  box-sizing: border-box;
}
.imgShow .el-col-6 .el-col {
  margin: 0;
}

.imgShow .el-col-6 .el-row {
  margin-left: 10px;
  border: 1px solid #e5e5e5;
  margin-top: 10px;
  padding-top: 30px;
  height: 240px;
  box-sizing: border-box;
  background-color: #fff;
  text-align: center;
}
.imgShow  .third .el-col-6 .el-row{
  height: 165px;
  margin-top: 5px;
  padding-top: 10px;
}
.imgShow .second .el-col-6 img {
  width: 55px;
  height: 55px;
}
.imgShow .third .el-col-6 img{
  width: 95px;
  height: 95px;
  margin: 0;
}
.imgShow .second .el-col-6 .el-col button {
  height: 40px;
  line-height: 40px;
  text-align: center;
  width: 120px;
  padding: 0;
  margin-top: 5px;
  margin-bottom: 5px;
  cursor: pointer;
}

.imgShow .second .el-col-6 .el-col span {
  height: 40px;
  line-height: 40px;
  text-align: center;
}
.imgShow  .third .el-col-6 .el-row .el-col p{
  margin: 0;
}
.imgShow  .third .el-col-6 .el-row .el-col p:nth-of-type(1){
  height: 21px;
}
.imgShow  .third .el-col-6 .el-row .el-col p:nth-of-type(2){
  height: 16px;
  font-size: 14px;
  line-height: 16px;
}
.imgShow  .third .el-col-6 .el-row .el-col span{
  color: #EC5330;
  margin-right: 5px;
}
</style>