<template>
  <MDBCard border="primary">
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
import { ref } from "vue";
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
      YTBApiHost: "http://levandat-cors-bypass.herokuapp.com/https://returnyoutubedislikeapi.com/",
      infoVideo: "Chưa có thông tin",
      videoId: null,
    };
  },
  setup() {
    const input24 = ref("");
    return {
      input24,
    };
  },
  methods: {
    getInfoVideo(videoId) {
      const url = this.YTBApiHost + "votes?videoId=" + videoId;
      this.axios
        .get(url)
        .then((response) => {
          this.infoVideo = response.data;
        })
        .error((error) => {
          this.infoVideo = error;
        });
    },
  },
};
</script>
