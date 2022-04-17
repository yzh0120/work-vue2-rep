<template>
  <div class="right_nav">
    <slot></slot>
  </div>
</template>

<script>
export default {
  activated() {
    this.$nextTick(() => {
      const body = document.querySelector("body");
      if (body.append) {
        body.append(this.$el);
      } else {
        body.appendChild(this.$el);
      }
    });
  },
  deactivated() {
    this.$nextTick(() => {
      const body = document.querySelector("body");
      if (body.removeChild) {
        body.removeChild(this.$el);
      } else {
        console.log("没有方法");
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.right_nav {
  position: fixed;
  right: 10px;
  top: calc(#{$normal_spacing} + #{$el-scrollbar__wrap} + #{$normal_spacing});
  height: calc(
    100% -
      calc(
        #{$normal_spacing} + #{$el-scrollbar__wrap} + #{$normal_spacing} + 50px
      )
  );
  width: 180px;
  box-shadow: $shadow 0px 0px 5px;
  background-color: #fff;
}
</style>