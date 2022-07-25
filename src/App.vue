<script setup>
import RightBar from "./components/RightBar.vue";
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <NavBar />
  <MDBContainer :style="{ paddingTop: '4.2em' }">
    <MDBRow>
      <MDBCol md="9">
        <RouterView />
      </MDBCol>
      <MDBCol md="3">
        <RightBar />
      </MDBCol>
    </MDBRow>
  </MDBContainer>
</template>

<script>
import { MDBContainer, MDBRow, MDBCol } from "mdb-vue-ui-kit";
export default {
  name: "App",
  components: {
    MDBContainer,
    MDBRow,
    MDBCol,
  },
  setup() {
    return {};
  },
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        document.title = to.meta.title || "levandat Tech Solution";
      },
      function() {
        this.$nextTick(() => {
          window.scrollTo(0, 0);
        });
      },
    },
  },
};
</script>
