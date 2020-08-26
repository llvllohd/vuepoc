<template>
  <div class="container">
    <!-- --------------------------------------- -->
    <div class="row">
      <ul class="ul">
        <li v-for="i in data" v-bind:key="i.name">
          <a>
            <router-link :to="i.link">{{ i.category }}</router-link>
          </a>
        </li>
        <!-- <li>
          <a>
            <router-link to="/combomeals">Combo Meals</router-link>
          </a>
        </li>
        <li>
          <a>
            <router-link to="/promotions">Promotions</router-link>
          </a>
        </li>
        <li>
          <a>
            <router-link to="/sweets&treats">Sweets & Treats</router-link>
          </a>
        </li> -->
      </ul>
    </div>
    <!-- ------------------------------------- -->
  </div>
</template>

<script>
export default {
  name: "FoodCategory",
  props: ["data"],
  data() {
    return {};
  },
};
</script>

<style scoped>
.row {
  display: flex;
  justify-content: center;
  align-items: center;
}
ul {
  display: flex;
  display: -ms-flexbox;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
}

li {
  margin: 0 13px;
  display: flex;
  justify-content: center;
  align-items: center;
}

a {
  color: #302e4d;
  font-size: 1.3rem;
  font-weight: bold;
  text-transform: capitalize;
  border: 1px solid transparent;
  padding: 5px 0px;
  border-radius: 3px;
  transition: all 0.3s ease;
  text-decoration: none;
}

li a.router-link-exact-active {
  border-bottom: 5px solid #121212;
}
</style>
