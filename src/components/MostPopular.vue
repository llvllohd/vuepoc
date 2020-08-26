<template>
  <div class="container">
    <div class="category-name">
      <h2>Most Popular</h2>
    </div>

    <div class="wrapper">
      <div
        class="food-container"
        v-for="product in products"
        v-bind:key="product.id"
      >
        <div class="item-details">
          <h2>{{ product.name }}</h2>
          <h3>{{ product.cal }}</h3>
          <h4>{{ product.amount }}</h4>
        </div>
        <div class="img">
          <img :src="product.image" />
        </div>
      </div>
      <!-- --------------------------- -->
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

export default {
  name: "MostPopular",
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    this.axios.get("http://localhost:3000/mostpopular").then((resp) => {
      this.products = resp.data;
    });
  },
  method: {},
};
</script>

<style scoped>
.category-name {
  margin-left: 2rem;
}
.category-name h2 {
  font-size: 1.8rem;
  font-weight: 800;
  margin-bottom: 1rem;
}
.wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 1rem;
  margin-left: 2rem;
  margin-right: 2rem;
}

.food-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  -ms-flex: 0 0 50%;
  flex: 0 0 50%;
  max-width: 49%;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  border: 1px solid rgb(214, 214, 214);
  margin-bottom: 1.3rem;
  border-radius: 0.5rem;
  /* margin-right: 0.5rem; */
}

.food-container .item-details {
  display: flex;
  flex-direction: column;
  margin: 0 1.5rem;
  width: 15rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.food-container .item-details h2 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.food-container .item-details h3 {
  color: #767676;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.food-container .item-details h4 {
  color: #767676;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.food-container .img {
  width: 200px;
  height: 90px;
}

.food-container .img img {
  /* object-fit: cover; */
  width: 90%;
  height: 100%;
  margin-left: 1rem;
  /* object-fit: cover; */
  /* z-index: -1; */
  /* background-size: cover; */
  /* background-repeat: no-repeat; */
  /* background-position: center; */
}

@media (max-width: 995px) {
  .food-container .img img {
    margin-left: 0rem;
  }
}
@media (max-width: 750px) {
  .food-container {
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
}

@media (max-width: 475px) {
  .wrapper {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }

  .food-container .item-details {
    width: 19rem;
  }
  .food-container .item-details h2 {
    font-size: 1.2rem;
  }
  .food-container .item-details h3 {
    font-size: 1rem;
  }
  .food-container .item-details h4 {
    font-size: 0.9rem;
  }
}
</style>
