<template>
    <div class="header">
        <el-row class='header-first'>
            <el-col :span="16">
                <span class="address"><i class="el-icon-location"></i>{{ $store.state.cityName }}</span>
                <router-link tag="span" to="/changeCity">切换城市</router-link>
                <span class="detail-address">
                    [
                    <router-link to="/" tag="a">博兴</router-link> 
                    <router-link to="/" tag="a">利津</router-link>
                    <router-link to="/" tag="a">东营</router-link>
                    ]
                </span>
                <router-link to="/" tag="span">立即登录</router-link>
                <router-link to="/" tag="span">注册</router-link>
            </el-col>
            <el-col :span="8">
                <template v-for='(item,index) in dataList' >
                    <span :key='index + "1"' :class='{"active":item.isShow}'>{{ item.head }}</span>
                    <ul :key='index + "2"' v-if='item.head !=="手机APP"' @mouseenter='handleEnter(index)' @mouseleave='handleLeave(index)' :class='{"active":item.isShow}'>
                         <!-- <li v-if='item.flag == true' v-for="(item,index) in item.hearList" :key="index" :class="item.className">
                            <dl>
                                <dd>{{ item.name }}</dd>
                                <router-link tag="dt" v-for="(item,index) in item.list" :key="index" to="/">{{ item }}</router-link>
                                <router-link tag="img" v-for="item in item.backgroundList" :key="item" to="/" :src='require("../../assets/" + item)'></router-link>
                            </dl>
                        </li> -->
                        <template v-if='item.flag'>
                            <li v-for="(item,index) in item.hearList" :key="index" :class="item.className">
                                <dl>
                                    <dd>{{ item.name }}</dd>
                                    <router-link tag="dt" v-for="(item,index) in item.list" :key="index" to="/">{{ item }}</router-link>
                                    <router-link tag="img" v-for="item in item.backgroundList" :key="item" to="/" :src='require("../../assets/" + item)'></router-link>
                                </dl>
                            </li>
                        </template>
                        <template v-else>
                            <router-link tag="li" v-for="(item,index) in item.hearList" :key="index" to="/">{{ item }}</router-link>
                        </template>
                         
                    </ul>
                </template>
                <!-- <span>我的美团</span>
                <ul>
                    <router-link tag="li" v-for="(item,index) in myMtList" :key="index" to="/">{{ item }}</router-link>
                </ul>
                <span>手机APP</span>
                <span>商家中心</span>
                <ul>
                    <router-link tag="li" to="/" v-for="(item,index) in goodsCenter" :key="index">{{ item }}</router-link>
                </ul>
                <span>美团规则</span>
                <ul>
                    <router-link tag="li" to="/" v-for="(item,index) in rules" :key="index">{{ item }}</router-link>
                </ul>
                <span>网站导航</span>
                <ul>
                    <li v-for="(item,index) in webNav" :key="index" :class="item.className">
                        <dl>
                            <dd>{{ item.name }}</dd>
                            <router-link tag="dt" v-for="(item,index) in item.list" :key="index" to="/">{{ item }}</router-link>
                              <router-link tag="img" v-for="item in item.backgroundList" :key="item" to="/" :src='require("../../assets/" + item)'></router-link>
                        </dl>
                    </li>
                </ul> -->
            </el-col>
        </el-row>
        <el-row class="header-second">
            <el-row class="content">
            <el-col :span="6">
                <router-link to="/" tag='span'>美团</router-link>
            </el-col>
            <el-col :span="18">
                <el-input placeholder="搜索商家或地点" >
                    <template slot="append"><i class="el-icon-search"></i></template>
                </el-input>
            </el-col>
            </el-row>
        </el-row>
    </div>
</template>

<script>
export default {
    data(){
        return {
            dataList : [
                {
                    head:'我的美团',
                    hearList :['我的订单','我的收藏','抵用券','账户设置'],
                    flag :false,
                    isShow : false,
                },{
                     head:'手机APP',
                    flag :false,
                    isShow : false,
                },{
                    head:'商家中心',
                    hearList :['美团餐饮商户中心','登录商家中心','美团智能收银','我想合作','手机免费开店','餐饮代理商招募','商家申请开票','免费合作美团排队'],
                    flag :false,
                    isShow : false,
                },{
                    head:'美团规则',
                    hearList :['规则中心','规则目录','规则评议院'],
                    flag :false,
                    isShow : false,
                },{
                    head:'网站导航',
                    isShow : false,
                    hearList :[
                        {   
                            className : 'hotel',
                            name :'酒店旅游',
                            list : ['国际机票','火车票','榛果民宿','经济型酒店','主题酒店','商务酒店','公寓','豪华酒店','客栈','青年旅社','度假酒店','别墅','农家院']
                        },{
                            className : 'food',
                            name :'吃美食',
                            list : ['烤鱼','特色小吃','烧烤','自助餐','火锅','代金券']
                        },{
                            className : 'movie',
                            name :'看电影',
                            list : ['热映电影','热门影院','热映电影口碑榜','最受期待电影','国内票房榜','北美票房榜','电影排行榜']
                        },{
                            className : 'app',
                            name :'手机APP',
                            backgroundList : ['meituan.png','waimai.png','zhenguo.png','dianping.png','maoyan.png']
                        }],
                        flag :true,
                }],
            // myMtList : ['我的订单','我的收藏','抵用券','账户设置'],
            // goodsCenter : ['美团餐饮商户中心','登录商家中心','美团智能收银','我想合作','手机免费开店','餐饮代理商招募','商家申请开票','免费合作美团排队'],
            // rules : ['规则中心','规则目录','规则评议院'],
            // webNav : [
            //     {   
            //         className : 'hotel',
            //         name :'酒店旅游',
            //         list : ['国际机票','火车票','榛果民宿','经济型酒店','主题酒店','商务酒店','公寓','豪华酒店','客栈','青年旅社','度假酒店','别墅','农家院']
            //     },{
            //         className : 'food',
            //         name :'吃美食',
            //         list : ['烤鱼','特色小吃','烧烤','自助餐','火锅','代金券']
            //     },{
            //         className : 'movie',
            //         name :'看电影',
            //         list : ['热映电影','热门影院','热映电影口碑榜','最受期待电影','国内票房榜','北美票房榜','电影排行榜']
            //     },{
            //         className : 'app',
            //         name :'手机APP',
            //         backgroundList : ['meituan.png','waimai.png','zhenguo.png','dianping.png','maoyan.png']
            //     }]
        }
    },
    methods :{
        handleEnter(index){
            this.dataList[index].isShow = true;
        },
        handleLeave(index){
            this.dataList[index].isShow = false;
        }
    }
}
</script>

<style scoped>
.header-first .el-col-8{
    position: relative;
}

.header-first .el-col-8 ul{
    text-align: center;
    padding: 0;
    position: absolute;
    border: 1px solid #999;
    box-sizing: border-box;
    border-color:transparent  rgb(229, 229, 229) rgb(229, 229, 229);  
    z-index: 110;
    background-color: #fff;
    top: 27px;
    display : none;
}

.header-first .el-col-8 ul.active:not(:nth-of-type(4)){
    display : block;
}
.header-first .el-col-8 ul.active:nth-of-type(4){
    display : flex;
}
.header-first .el-col-8 span:hover +ul:not(:nth-of-type(4)){
    display : block;
}
.header-first .el-col-8 span:hover +ul:nth-of-type(4){
    display : flex ;
}
.header-first .el-col-8 ul:nth-of-type(1){  
    width: 78px;
} 
.header-first .el-col-8 ul:nth-of-type(2){
    width: 110px;
    left: 123px;
}

.header-first .el-col-8 ul:nth-of-type(3){
    width: 78px;
    left: 233px;
}
.header-first .el-col-8 ul:nth-of-type(4){
    width: 1200px;
    right: 8px;
    height: 290px;
}

.header-first .el-col-8 ul:nth-of-type(4) li{
    height: 100%;
}

.header-first .el-col-8 ul .hotel{
    width: 340px;
}

.header-first .el-col-8 ul li dl{
    width: 100%;
    height: 100%;
    padding: 0 20px;
    box-sizing: border-box;

}
.header-first .el-col-8 ul li dl dd{
    margin: 0;
    font-weight: 600;
    margin-bottom: 10px;
}

.header-first .el-col-8 ul li dl dt{
    float: left;
    width: 100px;
    text-align: center;
    cursor: pointer;
}

.header-first .el-col-8 ul li dl img{
    width:55px;
    height :55px;
    margin-right: 10px;
    cursor: pointer;
}

.header-first .el-col-8 ul li dl dt:hover{
  color: #fe8c00;
}
.header-first .el-col-8 ul .food{
    width: 240px;
}
.header-first .el-col-8 ul .movie{
    width: 140px;
}
.header-first .el-col-8 ul .app{
    width: 478px;
}
.header-first .el-col-8 ul li{
    width: 100%;
    list-style: none;
    height: 30px;
    line-height: 30px;
} 

.header-first .el-col-8 ul:not(:nth-of-type(4)) li:hover{
      color: #fe8c00;
      cursor:pointer;
}
.header{
    width: 100%;
    background: #F8F8F8;
    font-size: 12px;
    color: #999;
}

.header .header-first{
    width: 1190px;
    margin: auto;
    height: 40px;
    line-height: 40px;
}

.header .header-first .el-col-16 span:nth-of-type(2){
   background: #F4F4F4;
    border: 1px solid #E5E5E5;
    border-radius: 2px;
    color: #666;
    margin: 0 4px;
    padding: 0 2px;
    cursor: pointer;
}
.header .header-first .el-col-16 span:nth-of-type(2):hover{
    color: #fe8c00;
    font-weight: 400;
}

.header .header-first .el-col-16 span:nth-of-type(4){
    color: #fe8c00;
    margin: 0 10px 0 15px;
    cursor: pointer;
}

.header .header-first .el-col-16 span:nth-of-type(5):hover{
    color: #fe8c00;
    font-weight: 400;
    cursor: pointer;
}
.header .header-first .detail-address a{
    margin: 0 2px;
    text-decoration: none;
     color: #999;
}
.header .header-first .detail-address a:hover{
    color: #fe8c00;
    font-weight: 400;
}

.header .header-first .el-col-8 span{
    padding: 12px 14px;
    box-sizing: border-box;
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
    cursor: pointer;
}

.header .header-first .el-col-8 span:not(:nth-of-type(2)):hover{
    color: #FE8C00;
    background-color: #fff;
    border-color: #E5E5E5;
    box-shadow: 0 3px 5px 0 rgba(0,0,0,0.1);
}

.header .header-first .el-col-8 span.active{
    color: #FE8C00;
    background-color: #fff;
    border-color: #E5E5E5;
    box-shadow: 0 3px 5px 0 rgba(0,0,0,0.1);
}

.header .header-first .el-col-8 span:nth-of-type(2):hover{
    color: #FE8C00;
}

.header .header-first .el-col-8 span:hover ul li{
    color: #999;
    
}

.header .header-second{
    background-color: #ffffff;
    padding: 25px 0 90px;
}
.header .header-second .content{
    width: 1190px;
     margin: auto;
}
.header .header-second .content .el-col-6 span{
    display: inline-block;
    padding-top: 46px;
    width: 126px;
    background-image: url('../../assets/logo.png');
    background-size :cover;
    height: 0;
    overflow: hidden;
    cursor: pointer;
}

.header .header-second .content .el-col-18 .el-input{
    width: 550px;
}
.el-input-group__append i::before{
    font-weight: 600;
}
</style>
<style>
.header .header-second .content .el-col-18 .el-input .el-input__inner{
    width: 470px;
}
.header .header-second .content .el-col-18 .el-input .el-input-group__append{
    width: 80px;
    text-align: center;
    color: #222222;
    cursor: pointer;
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
    background: #FFC300;
}
</style>