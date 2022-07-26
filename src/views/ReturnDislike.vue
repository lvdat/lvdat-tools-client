<template>
  <MDBCard border="primary" :style="{ marginBottom: '4px' }">
    <MDBCardBody :style="{ textAlign: 'center' }">
      Get realtime dislike count of Youtube video. Please enter video ID or
      Video link bellow:

      <MDBInput
        required
        inputGroup="lg"
        :formOutline="false"
        wrapperClass="mb-3 mt-5"
        v-model="videoId"
        placeholder="Video ID or Video link"
        aria-describedby="button-addon2"
      >
        <MDBBtn
          @click="getInfoVideo(videoId)"
          color="danger"
          id="button-addon2"
          :ripple="{ color: 'dark' }"
        >
          <i class="fas fa-search"></i> SUBMIT
        </MDBBtn>
      </MDBInput>
      <MDBCard :style="{ padding: '1em' }" border="danger">
        {{ infoVideo }}
      </MDBCard>
    </MDBCardBody>
  </MDBCard>
</template>

<script>
import { MDBCard, MDBCardBody, MDBInput, MDBBtn } from "mdb-vue-ui-kit";

export default {
  components: {
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBBtn,
  },
  data() {
    return {
      YTBApiHost:
        "https://levandat-cors-bypass.herokuapp.com/https://returnyoutubedislikeapi.com/",
      infoVideo: "Chưa có thông tin",
      videoId: null,
    };
  },
  setup() {
    return {};
  },
  methods: {
    fetchFromUrl(url) {
      return fetch(url)
        .then((response) => response.json())
        .then((data) => data);
    },
    getInfoVideo(videoId) {
      this.infoVideo = "Đang tải dữ liệu";
      if (videoId === null) {
        this.infoVideo = "Vui lòng nhập thông tin hợp lệ!";
        return;
      }
      const url = this.YTBApiHost + "votes?videoId=" + videoId;
      console.log(this.fetchFromUrl(url));
      this.axios
        .get(url)
        .then((response) => {
          this.infoVideo = response.data;
        })
        .catch((error) => {
          this.infoVideo = error.message;
        });
    },
  },
};
</script>
