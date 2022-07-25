<template>
  <MDBCard border="primary">
    <MDBCardHeader bg="primary" :style="{ color: 'white' }"
      ><i class="fas fa-plug"></i> API Status</MDBCardHeader
    >
    <MDBListGroup flush>
      <MDBListGroupItem
        class="d-flex justify-content-between align-items-start"
        v-for="item in api"
        :key="item.id"
      >
        <i class="fab fa-connectdevelop"></i> {{ item.name }}
        <MDBBadge :class="className(item.id)">{{ item.status }}</MDBBadge>
      </MDBListGroupItem>
    </MDBListGroup>
  </MDBCard>
</template>
<script>
import {
  MDBCard,
  MDBCardHeader,
  MDBListGroup,
  MDBListGroupItem,
  MDBBadge,
} from "mdb-vue-ui-kit";
export default {
  data() {
    return {
      api: [
        {
          id: 1,
          name: "Youtube Dislike API",
          status: "OK",
        },
        {
          id: 2,
          name: "MC Server Status API",
          status: "OK",
        },
        {
          id: 3,
          name: "Riot API KR",
          status: "OK",
        },
        {
          id: 4,
          name: "Riot API NA",
          status: "OK",
        },
        {
          id: 5,
          name: "Riot API EUW1",
          status: "OK",
        },
        {
          id: 6,
          name: "Riot API EUN1",
          status: "OK",
        },
        {
          id: 7,
          name: "Riot API OC1",
          status: "OK",
        }
      ],
      className(id) {
        return this.api[id - 1].status == "OK"
          ? "badge-success"
          : "badge-danger";
      },
    };
  },
  components: {
    MDBCard,
    MDBListGroup,
    MDBListGroupItem,
    MDBCardHeader,
    MDBBadge,
  },
};
</script>
