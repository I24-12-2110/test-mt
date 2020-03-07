<template>
  <div class="tableList">
    <div class="showList">
      <el-row class="header">
        <span>{{ name }}</span>
        <span v-for="(item,index) in showListData.tabs" :key="index">{{ item.text }}</span>
      </el-row>
      <el-row class="show clear">
        <router-link
          tag="el-card"
          :style='"width :"+width'
          v-for="(item,index) in showListData.data"
          :key="index"
          to="/"
        >
          <img :src="item.imgUrl.split('/w.h').join('')" class="image" />
          <div>
            <h3>{{ item.title }}}</h3>
            <p>{{ item.subTitle }}</p>
            <p>
              <span>
                <i v-show="item.currentPrice !== '抢光了'">￥</i>
                {{ item.currentPrice }}
              </span>
              <span>{{ item.oldPrice}}</span>
              <span>{{ item.bottomInfo}}</span>
            </p>
          </div>
        </router-link>
      </el-row>
    </div>
  </div>
</template>
<script>

export default {
  props: ["name","showListData",'width'],
};
</script>

<style>
.tableList .showList {
  width: 1200px;
  margin: auto;
  margin-top: 30px;
}
.tableList .showList .header {
  height: 44px;
  line-height: 44px;
  box-sizing: border-box;
  font-size: 14px;
  color: #fff;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  background-color: rgb(190, 164, 116);
  background-image: linear-gradient(
    to right,
    rgb(194, 176, 142) 3%,
    rgb(190, 164, 116) 100%
  );
}
.tableList .showList .header span {
  margin-left: 13px;
  margin-right: 10px;
  font-size: 14px;
  cursor: pointer;
}
.tableList .showList .header span:nth-of-type(1) {
  font-size: 18px;
}
.tableList .showList .show {
  padding: 11px 10px 9px 10px;
  background-color: #fff;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  box-sizing: border-box;
  border-left: 1px solid #e5e5e5;
  border-right: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
}

.tableList .showList .show .el-card {
  float: left;
  padding: 10px;
  box-sizing: border-box;
  border: none;
  height: 314px;
  cursor: pointer;
}
.tableList .showList .show .el-card .el-card__body {
  padding: 0;
}
.tableList .showList .show .el-card:hover {
  background: #f4f4f4;
  transition: background-color 500ms;
  border-radius: 4px;
}
.tableList .showList .show .el-card img {
  width: 100%;
  height: 208px;
  border-radius: 4px;
}
.tableList .showList .show .el-card h3 {
  height: 22px;
  line-height: 22px;
  font-size: 16px;
  margin-bottom: 5px;
  font-weight: normal;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.tableList .showList .show .el-card p:nth-of-type(1) {
  font-size: 12px;
  color: #999;
  line-height: 18px;
  height: 18px;
  margin-bottom: 7px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.tableList .showList .show .el-card p span i {
  font-size: 12px;
}
.tableList .showList .show .el-card p span:nth-of-type(1) {
  font-size: 22px;
  color: #be9e4d;
  margin-right: 6px;
  letter-spacing: -0.8px;
  cursor: pointer;
}
.tableList .showList .show .el-card p span:nth-of-type(2) {
  font-size: 12px;
  color: #999;
  text-decoration: line-through;
}
.tableList .showList .show .el-card p span:nth-of-type(3) {
  font-size: 12px;
  color: #999;
  float: right;
  margin-top: 10px;
}

p,
h3 {
  margin: 0;

}
.clear::after {
  content: "";
  display: block;
  clear: both;
}
</style> 