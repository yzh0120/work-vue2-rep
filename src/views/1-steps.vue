<!--
 * @Autdor: wjs
 * @Date: 2022-03-21 14:16:14
 * @Description: 首页
 * @FilePatd: \ele-customer\src\views\Home.vue
 * 
-->
<template>
  <div class="home">
    <oneSteps :active="info.applyProjectStatus" />

    <template v-if="info.applyProjectStatus == 0">
      <sendletter
        :info="info"
        @refresh="getguaranteeInfo"
        :globalData="$data"
      ></sendletter>
    </template>

    <template v-else-if="info.applyProjectStatus == 1">
      <auditdata :info="info" v-if="info.id" @refresh="getguaranteeInfo">
      </auditdata>
    </template>

    <template v-else-if="info.applyProjectStatus == 2">
      <payment
        :info="info"
        v-if="info.id"
        @refresh="getguaranteeInfo"
      ></payment>
    </template>

    <template v-else-if="info.applyProjectStatus == 3">
      <financial
        :info="info"
        v-if="info.id"
        @refresh="getguaranteeInfo"
      ></financial>
    </template>

    <template v-else-if="info.applyProjectStatus == 4">
      <guarantee
        :info="info"
        v-if="info.id"
        @refresh="getguaranteeInfo"
      ></guarantee>
    </template>
  </div>
</template>

<script>
import oneSteps from "./components/oneSteps.vue";
import sendletter from "./components/1-sendletter.vue";
import auditdata from "./components/2-auditdata.vue";
import payment from "./components/3-payment.vue";
import financial from "@/views/components/4-financial";
import guarantee from "@/views/components/5-guarantee";
export default {
  name: "Home",
  components: {
    oneSteps,
    sendletter,
    auditdata,
    payment,
    financial,
    guarantee,
  },
  data() {
    return {
      info: {
        applyProjectStatus: 0,
        id: 123,
      },
    };
  },
  created() {
    if (this.$route.params.id && this.$route.params.id != "0") {
      this.getguaranteeInfo();
    }
  },
  methods: {
    getguaranteeInfo() {
      // guaranteeApi.id({ id: this.$route.params.id }).then((res) => {
      //   if (res.code == 200) {
      //     if (res.data) {
      //       this.info = res.data;
      //     }
      //   } else {
      //     this.$message.error(res.info);
      //   }
      // });
    },
  },
};
</script>

<style lang="scss" >
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
