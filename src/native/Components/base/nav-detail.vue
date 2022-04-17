<template>
  <!--之所以会产生 -->
  <!-- <div class="roll"> -->
  <!-- <el-scrollbar wrap-class="" style="height: 100%;"> -->
  <el-scrollbar wrap-class="scrollbarPage" style="height: 100%">
    <div :class="['navDetail']">
      <slot></slot>
    </div>
    <rightNav></rightNav>
  </el-scrollbar>

  <!-- </div> -->
</template>

<script>
import rightNav from "../inBody/right-nav.vue";
export default {
  //   props: ["show"],
  components: {
    rightNav,
  },
};
</script>

<style lang="scss" scoped>
// 普通页面
.navDetail {
  //navDetail
  width: calc(100% - 200px);
  min-height: calc(100% - calc(#{$normal_spacing} * 2));
  // margin: $normal_spacing calc(#{$normal_spacing} * 1.2);//margin: calc(#{$normal_spacing} / 1.5) $normal_spacing;
  background-color: white;
  padding: calc(#{$normal_spacing} / 1.5) $normal_spacing;
  overflow: auto; //内容溢出滚动
  box-shadow: $shadow 0px 0px 10px;
  border-radius: 6px;
}
</style>
