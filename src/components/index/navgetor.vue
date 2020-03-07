<template>
    <div class="nav">
        <dl class="dl">
            <dd class="dd">全部分类</dd>
            <dt v-for="(item,index) in list" :key="index">
                <i :class="className[index]"></i>
                <div class="content">
                    <router-link tag="span" v-for="(item,index) in item" :key="index" to="/">{{ index == 0 ? item +" " : "/" +" "+ item+ " "}}</router-link>
                </div>
                <i class="el-icon-arrow-right"></i>
            </dt>
        </dl>
    </div>
</template>

<script>
export default {
    data(){
        return {
                className :['el-icon-knife-fork','el-icon-potato-strips','el-icon-office-building','el-icon-discount','el-icon-view','el-icon-position','el-icon-microphone','el-icon-price-tag','el-icon-coordinate','el-icon-watch-1','el-icon-sugar','el-icon-bicycle','el-icon-brush','el-icon-reading','el-icon-first-aid-kit','el-icon-goblet'],
                list :[
                ['美食'],
                ['外卖'],
                ['酒店'],
                ['榛果民宿'],
                ['猫眼电影'],
                ['机票','火车票'],
                ['休闲娱乐','KTV'],
                ['生活服务'],
                ['丽人','美发','医学美容'],
                ['结婚','婚纱摄影','婚宴'],
                ['亲子','儿童乐园','幼教'],
                ['运动健身','健身中心'],
                ['家装','建材','家居'],
                ['学习培训','音乐培训'],
                ['医疗健康','宠物','爱车'],
                ['酒吧','密室逃脱']
            ]
        }
    }
}
</script>

<style>
.nav dl{
    margin: 0;
    padding: 0;
    text-align: left;
    background-color: #ffffff;
    box-sizing: border-box;
    border: 1px solid #E5E5E5;
}
.nav dl dd{
    margin: 0;
    height: 50px;
    line-height: 50px;
    font-weight: 600;
    text-align: left;
    margin-bottom: 23px;
    padding: 0 15px;
}
.nav dl dt{
    font-size: 14px;
    height: 25px;
    line-height: 25px;
    padding: 0 15px;
}
.nav dl dt:hover{
    background: rgba(255,150,0,0.08);
    color: #222222;
    font-weight: 600;
}
    
.nav dl dt .content{
    padding-left: 10px;
    display: inline-block;
    width: 180px;
}
.nav dl dt .content span{
    cursor: pointer;
}
</style>
