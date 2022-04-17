<template>
  <!--之所以会产生 -->
  <!-- <div class="roll"> -->
  <!-- <el-scrollbar wrap-class="" style="height: 100%;"> -->
  <el-scrollbar wrap-class="scrollbarPage" style="height: 100%">
    <div :class="['page', show ? 'show' : '']">
      <slot></slot>
    </div>
  </el-scrollbar>

  <!-- </div> -->
</template>

<script>
export default {
  // props: ["show"],
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
// 普通页面
.page {
  //page
  min-height: calc(100% - calc(#{$normal_spacing} * 2));
  // margin: $normal_spacing calc(#{$normal_spacing} * 1.2);//margin: calc(#{$normal_spacing} / 1.5) $normal_spacing;
  background-color: white;
  padding: calc(#{$normal_spacing} / 1.5) $normal_spacing;
  overflow: auto; //内容溢出滚动
  box-shadow: $shadow 0px 0px 10px;
  border-radius: 6px;
}
.page.show {
  margin: 0;
  background-color: $elMainBgc;
  // border-radius: 0px;
  box-shadow: $elMainBgc 0px 0px 0px !important;
}
</style>
