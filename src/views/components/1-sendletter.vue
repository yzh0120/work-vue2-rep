<!--
 * @Author: wjs
 * @Date: 2022-03-21 16:12:32
 * @Description: 出函机构
 * @FilePath: \receive-platform\src\views\sendletter.vue
 * 
-->
<template>
  <div>
    <!-- <panel title="确认开函信息">
      <letterinfo :info="info" ref="letterinfo"></letterinfo>
    </panel>

    <el-checkbox v-model="hascheck" class="mb20">
      浏览并同意
      <span style="color: #409eff">《服务协议》</span>
    </el-checkbox>

    <div class="text-center mb20" v-if="hascheck">
      <el-button type="primary" @click="save">确认</el-button>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "sendletter",
  props: {
    info: {
      type: Object,
      default: () => {},
    },
    globalData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      hascheck: false,
    };
  },
  mounted() {},
  methods: {
    //保存第一步信息
    save() {
      // if (this.$refs.letterinfo.$refs.form.check()) {
      //   let data = Object.assign({}, this.$refs.letterinfo.formInfo.data, { souId: this.$route.query.souId })
      //   guaranteeApi.save().then((res) => {
      //     if (res.code == 200) {
      //       this.$message.success(res.info)
      //       // this.info.applyProjectStatus++
      //       this.globalData.info = res.data
      //       // this.$emit("refresh")
      //       this.$router.push({
      //         path: `/eidtGuarantee/${res.data.id}`
      //       })
      //     } else {
      //       this.$message.error(res.info)
      //     }
      //   })
      // } else {
      // }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
