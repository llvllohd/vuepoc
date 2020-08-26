import Vue from "vue";
import App from "./App.vue";
import "./icons";
import VueRouter from "vue-router";
import MostPopular from "./components/MostPopular.vue";
import ComboMeals from "./components/ComboMeals.vue";
import Promotions from "./components/Promotions.vue";
import SweetsTreats from "./components/Sweets&Treats.vue";
Vue.use(VueRouter);
const routes = [
  { path: "/", component: MostPopular },
  { path: "/combomeals", component: ComboMeals },
  { path: "/promotions", component: Promotions },
  { path: "/sweets&treats", component: SweetsTreats },
];

const router = new VueRouter({
  routes,
});

Vue.config.productionTip = false;

new Vue({
  router: router,
  render: (h) => h(App),
}).$mount("#app");
