<template>
  <div id="app">
    <Banner />
    <RestaurantDetails />
    <Address />
    <Dropdown />
    <FoodCatogery />
    <!-- <MostPopular /> -->
    <!-- <ComboMeals /> -->
    <router-view />
  </div>
</template>

<script>
import Banner from "./components/Banner";
import RestaurantDetails from "./components/RestaurantDetails";
import Address from "./components/Address";
import Dropdown from "./components/Dropdown";
// import FoodCatogery from "./components/FoodCategory";
// import MostPopular from "./components/MostPopular";
// import ComboMeals from "./components/ComboMeals";
export default {
  name: "App",
  components: {
    Banner,
    RestaurantDetails,
    Address,
    Dropdown,
    // FoodCatogery,
    // MostPopular,
    // ComboMeals,
  },
};
</script>

<style>
* {
  margin: 0;
  background-color: rgb(255, 255, 255);
  box-sizing: border-box;
}

body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
}

#app {
  margin: 0 11rem;
}

@media (max-width: 1105px) {
  #app {
    margin: 0 5rem;
  }
}
@media (max-width: 995px) {
  #app {
    margin: 0 2rem;
  }
}
@media (max-width: 835px) {
  #app {
    margin: 0 0.5rem;
  }
}
</style>
