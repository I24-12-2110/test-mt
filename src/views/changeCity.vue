<template>
  <div class="changeCity">
    <my-header />
    <my-choose />
    <my-footer />
  </div>
</template>

<script>
import MyHeader from "../components/Header/Header.vue";
import MyFooter from "../components/footer/Footer.vue";
import MyChoose from "../components/changeCity/chooseCity.vue";
export default {
  components: {
    MyHeader,
    MyFooter,
    MyChoose
  }
};
</script>

<style>
.changeCity{
    width: 100%;
    background-color: #F8F8F8;
}
.changeCity .choose{
    width: 100%;
    background-color: #F8F8F8;
    margin-top: -50px;
    position: relative;
    z-index: 11;
    padding-top:20px;
}
</style>