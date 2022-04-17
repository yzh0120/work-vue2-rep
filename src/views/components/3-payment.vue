<!--
 * @Author: wjs
 * @Date: 2022-03-21 18:28:49
 * @Description: 支付保费
 * @FilePath: \receive-platform\src\views\payment.vue
 * 
-->
<template>
  <div></div>
</template>

<script>
export default {
  name: "payment",
  props: {
    info: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.basic {
  td:nth-child(odd) {
    width: 15%;
  }
}

.selstyle {
  display: flex;
  align-items: center;

  img {
    padding-right: 15px;
    max-width: 25px;
    height: 100%;
  }
}

.notice {
  font-weight: bold;
}
</style>
