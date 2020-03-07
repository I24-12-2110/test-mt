<template>
  <div class="choose">
    <div class="content">
      <div class="cityChoose">
        <span>按省份选择：</span>
        <el-button @click="getProvince" >
          <span>{{province}}</span>
          <i class="el-icon-caret-bottom"></i>
        </el-button>
        <div class="down pro" v-show="provinceShow">
          <dl>
            <dd>省份</dd>
            <dt v-for="(item,index) in provinceChoose" :key="index">
              <span v-for="(item,index) in item" :key="index" @click="changeProvince" :data-id='index'>{{ item.provinceName }}</span>
            </dt>
          </dl>
        </div>
        <el-button :disabled='idDisabled' @click="getCityShow">
          <span>城市</span>
          <i class="el-icon-caret-bottom"></i>
        </el-button>
        <div class="down pro-city" v-show="cityShow">
          <dl>
            <dd>城市</dd>
            <dt v-for="(item,index) in cityList" :key="index"  @click="chooseCity">
              <span v-for="(item,index) in item" :key="index" @click="chooseCity" :data-id='item.id'>{{ item.name }}</span>
            </dt>
          </dl>
        </div>
        <span class="search">直接搜索：</span>
        <el-input placeholder="请输入城市中文或者拼音" v-model="inputVal" @input="getCityList"></el-input>
        <div class="down search" v-show="inputVal">
          <div @click="changeCity">
            <span v-for="(item,index) in cityShowList" :key="index" :data-id='item.cityId'> {{item.cityName}}</span>
            <span v-show="noResult">搜索无结果</span>
          </div>
        </div>
      </div>
      <div class="hotCity" @click="changeCity">
        <dl>
          <dd>热门城市：</dd>
          <dt v-for="(item,index) in hotCityList" :key="index" :data-id='item.id'>{{item.city}}</dt>
        </dl>
      </div>
      <div class="reread" @click="changeCity"  v-show="$store.state.resentList.length !==0">
        <dl>
          <dd>最近搜索：</dd>
          <dt  
            v-for="(item,index) in $store.state.resentList"
            :key="index"
            :data-id='item.id'>{{item.city}}</dt>
        </dl>
      </div>
      <div class="list">
        <el-row class="list-header">
          <dl>
            <dd>按拼音首字母选择：</dd>
            <dt v-for="(item,index) in shou" :key="index" class="shou">
              <a :href="'#' + item">{{item}}</a>
            </dt>
          </dl>
        </el-row>
        <el-row
          v-for="(item,index) in $store.state.shouList"
          :key="index"
          class="list-content clear"
          :id="index[0].toUpperCase()"
          v-show="$store.state.shouList[`${index[0]}list`].length !==0"
        >
          <dl>
            <dd>{{ index[0].toUpperCase() }}</dd>
          </dl>
          <dl class="clear" @click="changeCity">
            <dt
              v-for="(item,index) in item"
              :key="index"
              class="shou-mid"
              :data-id="item.cityId">{{ item.cityName.trim() }}</dt>
          </dl>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
import api from "../Api/index.js";
import changeCityVue from "../../views/changeCity.vue";
export default {
  data() {
    return {
      hotCityList: [{
        city :  "北京",
        id : 1
      },{
        city :  "上海",
        id : 10
      },{
        city :  "广州",
        id : 20
      },{
        city :   "深圳",
        id : 30
      },{
        city :  "天津",
        id : 40
      },{
        city :  "西安",
        id : 42
      },{
        city :  "重庆",
        id : 45
      },{
        city :  "杭州",
        id : 50
      },{
        city :  "南京",
        id : 55
      },{
        city :  "武汉",
        id : 57
      },{
        city :  "成都",
        id : 59
      }],
      provinceChoose:{
        provinceOne : [],
        provinceTwo : [],
        provinceThree : [],
      },
      provinceShow : false,
      cityShow :false,
      province: '省份',
      idDisabled : 'disabled',
      cityList : [],
      inputVal : '',
      cityShowList : [],
      noResult : false
    };
  },
  computed: {
    shou() {
      return "ABCDEFGHJKLMNPQRSTWXYZ".split("");
    }
  },
  mounted() {
    if (this.$store.state.shouList.alist.length !== 0) {
      return;
    } else {
      this.$store.dispatch('changeShouList')
    }
  },
  methods: {
    changeCity(e) {
      if (e.target.nodeName == "DT" || e.target.nodeName == 'SPAN') {
        let odom = e.target;
        let city = odom.innerText;
        let id = +odom.dataset.id;
        this.$store.commit("changeCityName", city);
        this.$store.commit("changeCityCi", id);
        this.$store.commit("changeResentList", {city,id});
        this.$router.push('/')
      }
    },
    getProvince(){
      if(this.provinceChoose.provinceOne.length ==0 ){
        api.getP().then(res =>{
          this.provinceChoose.provinceOne = res.data.splice(0,12)
          this.provinceChoose.provinceTwo = res.data.splice(0,12)
          this.provinceChoose.provinceThree = res.data.splice(0)
          this.provinceShow = true;
        })
      }else{
          this.cityShow = false;
          this.provinceShow = true;
      } 
    },
    changeProvince(e){
      let sss= e.target.innerText
      let index = e.target.dataset.id;
      let cityListAll = [];
      this.province = sss;
      this.provinceShow = false;
      if(this.provinceChoose.provinceOne[index].provinceName == sss){
        cityListAll = this.provinceChoose.provinceOne[index].cityInfoList
      }
      else if(this.provinceChoose.provinceTwo[index].provinceName == sss){
        cityListAll =this.provinceChoose.provinceTwo[index].cityInfoList
      }
      else{
         cityListAll =this.provinceChoose.provinceThree[index].cityInfoList
      }
      let col = Math.ceil(cityListAll.length / 12);
      this.cityList = [];
      for(let i = 0;i < col ;i ++){
          this.cityList[i] = cityListAll.slice(i*12,i*12 + 12)
      }
      this.idDisabled = false;
    },
    getCityShow(){
      this.provinceShow = false;
      this.cityShow = true;
    },
    chooseCity(e){
      if (e.target.nodeName == "SPAN"){
        let odom = e.target;
        let city = odom.innerText;
        let id = odom.dataset.id;
        this.$store.commit("changeCityName", city);
        this.$store.commit("changeCityCi", id);
        this.$store.commit("changeResentList", {city,id});
        this.$router.push('/')
      }
    },
    getCityList(){
      if(this.inputVal){
         this.cityShowList = []; 
        api.getShowList(this.inputVal).then(res =>{
          if(res.data.data.length == 0){
            this.noResult = true;
            return;
          }
          else{
             this.noResult = false;
            this.cityShowList = res.data.data;
          }
        })
      }
    }
  }
};
</script>
<style >
.choose .content {
  width: 1200px;
  background-color: #ffffff;
  box-sizing: border-box;
  margin: auto;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  min-height: 1000px;
  padding: 20px;
}
.choose .content .cityChoose {
  padding-bottom: 30px;
  border-bottom: 1px solid #e5e5e5;
  position: relative;
}
.choose .content .cityChoose button {
  margin-left: 10px;
  margin-right: 10px;
  padding: 12px 20px 12px 10px;
  box-sizing: border-box;
}
.choose .content .cityChoose button span {
  display: inline-block;
  width: 120px;
  text-align: left;
  box-sizing: border-box;
}

.choose .content .cityChoose .el-input {
  width: 220px;
  margin-left: 10px;
  height: 40px;
}
.choose .content .cityChoose .search {
  display: inline-block;
  margin-left: 60px;
}

.choose .content dl {
  display: flex;
  margin: 0;
}
.choose .content dl dd {
  margin: 0;
  font-size: 16px;
  color: #333;
  font-weight: 500;
  vertical-align: top;
}
.choose .content dl dt {
  margin: 0 20px;
  color: #666;
  cursor: pointer;
  font-size: 14px;
}
.choose .content .list dl dt.shou {
  margin: 0 10px;
  font-size: 15px;
  display: inline-block;
  width: 25px;
  height: 25px;
  line-height: 25px;
  text-align: center;
}

.choose .content > div:not(:nth-of-type(1)) {
  border-bottom: 1px solid #e5e5e5;
  padding: 30px 0;
}

.choose .content .list .list-content dl:nth-of-type(1) {
  position: absolute;
  display: block;
  width: 40px;
  text-align: center;
  box-sizing: border-box;
  left: 10px;
  top: 13px;
}

.choose .content .list .list-content dl:nth-of-type(1) dd {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #222222;
  background: #ffd000;
  line-height: 40px;
}
.choose .content .list .list-content dl:nth-of-type(2) {
  width: 1078px;
  display: block;
  position: relative;
  left: 40px;
  text-align: left;
  padding: 0;
}
.choose .content .list .list-content dl dt {
  margin: 10px 20px;
  display: inline-block;
}
.choose .content .list .list-content {
  position: relative;
  border: none;
  padding: 13px 30px 13px 10px;
}
.choose .content .list .list-header {
  padding: 30px 0;
}
.choose .content div.list {
  border: none;
  padding: 0;
}
.choose .content .list a {
  color: #222222;
}
.choose .content .cityChoose .pro{
 width: 264px;
}
.choose .content .cityChoose .down{
  position: absolute;
  left: 107px;
  top: 44px;
    height: 375px;
    padding: 20px 0 20px 15px;
    box-sizing: border-box;
    background-color: #fff;
    border: 1px solid #E5E5E5;
    box-shadow: 0 3px 5px 0 rgba(0,0,0,0.10);
    border-radius: 4px;
    z-index: 111;
}
.choose .content .cityChoose .down::before{
  content: '';
  display: inline-block;
  width: 5px;
  height: 5px;
  border-top: 1px solid #E5E5E5;
  border-left: 1px solid #E5E5E5;
  position: absolute;
  top: -4px;
  left: 20px;
  z-index: 1;
  background-color: #ffffff;
  transform: rotateZ(45deg)
}
.choose .content .cityChoose .down dl{
  display: block;
}
.choose .content .cityChoose .down dl dd{
  margin: 0;
  display: block;
  font-size: 16px;
    color: #CCC;
    margin-bottom: 11px;
}
.choose .content .cityChoose .pro-city{
  position: absolute;
  left: 278px;
  top: 43px;
  min-width: 150px;
}

.choose .content .cityChoose .down dl dt{
  margin: 0;
  float: left;
  display: block;
}
.choose .content .cityChoose .down dl dt span{
   cursor: pointer;
    font-size: 12px;
    color: #666;
    display: table;
    box-sizing: border-box;
    min-width: 40px;
    height: 20px;
    padding: 1px 8px;
    margin: 6px 38px 6px 0;
}

.choose .content .cityChoose .down dl dt span:hover{
  border-radius: 10px;
    background: #F4F4F4;
}
.choose .content .cityChoose div.search{
    padding: 0;
  box-shadow: 0 3px 5px 0 rgba(0,0,0,0.10);
    left: 529px;
}
.choose .content .cityChoose div.search > div{
  overflow-y: scroll;
  min-width: 150px;
  height: 375px;
  padding: 0 20px 0 15px;
  box-sizing: border-box;
  background-color: #fff; 
}
.choose .content .cityChoose div.search > div span{
    cursor: pointer;
    font-size: 12px;
    color: #666;
    display: block;
    box-sizing: border-box;
    min-width: 40px;
    height: 20px;
    padding: 1px 8px;
    margin: 6px 38px 6px 0;
    white-space: nowrap;
}
</style>