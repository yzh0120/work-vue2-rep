<!--
 * @Author: wjs
 * @Date: 2022-03-21 14:16:14
 * @Description: 提交申请资料
 * @FilePath: \receive-platform\src\views\auditdata.vue
 * 
-->
<template>
  <div></div>
</template>

<script>
export default {
  name: "auditdata",
  props: {
    info: {
      type: Object,
      default: () => {},
    },
  },
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.font {
  color: red;
}

.table > tbody > tr > td {
  vertical-align: middle;
}

.basic {
  td:nth-child(odd) {
    width: 15%;
  }
}
</style>
