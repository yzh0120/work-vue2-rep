<!--
 * @Author: wjs
 * @Date: 2022-03-21 14:51:30
 * @Description: 步骤条组件
 * @FilePath: \new\src\components\steps.vue
 * 
-->
<template>
  <div>
    <el-steps
      :active="active"
      align-center
      class="mt20 mb15"
      finish-status="success"
    >
      <el-step title="填写项目信息" :description="fn(0)"></el-step>
      <el-step title="上传申请材料" :description="fn(1)"></el-step>
      <el-step title="支付保费" :description="fn(2)"></el-step>
      <el-step title="金融机构审核" :description="fn(3)"></el-step>
      <el-step title="出具保函" :description="fn(4)"></el-step>
    </el-steps>
  </div>
</template>

<script>
export default {
  name: "steps",
  props: {
    active: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    fn(noww) {
      if (noww > Number(this.active)) {
        return "";
      }
      if (noww == Number(this.active)) {
        return "进行中";
      }
      if (noww < Number(this.active)) {
        return "已完成";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
