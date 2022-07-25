<template>
  <MDBNavbar expand="lg" light bg="light" position="top" container>
    <MDBNavbarBrand href="#">
      <img
        src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.webp"
        height="30"
        alt=""
        loading="lazy"
      />
      levandat Deptrai
    </MDBNavbarBrand>
    <MDBNavbarToggler
      @click="collapse1 = !collapse1"
      target="#navbarSupportedContent"
    ></MDBNavbarToggler>
    <MDBCollapse v-model="collapse1" id="navbarSupportedContent">
      <MDBNavbarNav class="mb-2 mb-lg-0">
        <MDBNavbarItem>
          <!-- Navbar dropdown -->
          <MDBDropdown class="nav-item" v-model="dropdown1">
            <MDBDropdownToggle
              tag="a"
              class="nav-link"
              @click="dropdown1 = !dropdown1"
            >
              <i class="fab fa-youtube"></i> Youtube Tool
            </MDBDropdownToggle>
            <MDBDropdownMenu aria-labelledby="dropdownMenuButton">
              <MDBDropdownItem href="#">Return video dislike</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </MDBNavbarItem>
        <MDBNavbarItem>
          <MDBDropdown class="nav-item" v-model="riot">
            <MDBDropdownToggle tag="a" class="nav-link" @click="riot = !riot">
              <i class="fas fa-tools"></i> Riot API Tool
            </MDBDropdownToggle>
            <MDBDropdownMenu aria-labelledby="dropdownMenuButton">
              <MDBDropdownItem href="#">
                League of Legends Tool
              </MDBDropdownItem>
              <MDBDropdownItem href="#"> Valorant Tool </MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </MDBNavbarItem>
        <MDBNavbarItem>
          <MDBDropdown class="nav-item" v-model="mc">
            <MDBDropdownToggle tag="a" class="nav-link" @click="mc = !mc">
              <i class="fas fa-tools"></i> Minecraft Tool
            </MDBDropdownToggle>
            <MDBDropdownMenu aria-labelledby="dropdownMenuButton">
              <MDBDropdownItem href="#"> Server Status Check </MDBDropdownItem>
              <MDBDropdownItem href="#"> RGB Text Generator </MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </MDBNavbarItem>
      </MDBNavbarNav>
      <!-- Search form -->
      <form class="d-flex input-group w-auto">
        <input
          type="search"
          class="form-control"
          placeholder="Type query"
          aria-label="Search"
        />
        <MDBBtn outline="primary"> Search </MDBBtn>
      </form>
    </MDBCollapse>
  </MDBNavbar>
</template>
<script>
import { ref } from "vue";
import {
  MDBBtn,
  MDBNavbar,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdb-vue-ui-kit";
export default {
  name: "App",
  components: {
    MDBBtn,
    MDBNavbar,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBCollapse,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
  },
  setup() {
    const collapse1 = ref(false);
    const dropdown1 = ref(false);
    const riot = ref(false);
    const mc = ref(false);
    return {
      collapse1,
      dropdown1,
      riot,
      mc,
    };
  },
};
</script>
