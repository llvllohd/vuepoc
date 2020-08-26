<template>
  <div class="container">
    <div class="borderup"></div>
    <div class="menu">
      <div class="breakfast" v-on:click="breakfast">
        <h3>Breakfast Menu</h3>
        <h4>6:00 AM - 10:29AM</h4>
      </div>
      <div class="lunch" v-on:click="lunch">
        <h3>Lunch Menu</h3>
        <h4>10:30 AM - 4:59PM</h4>
      </div>
      <div class="dinner" v-on:click="dinner">
        <h3>Dinner Menu</h3>
        <h4>5:00 PM - 3:30AM</h4>
      </div>
    </div>
    <div class="borderdown"></div>
    <FoodCategory v-bind:data="menu" />
  </div>
</template>

<script>
import FoodCategory from "./FoodCategory";
export default {
  name: "Dropdown",
  components: {
    FoodCategory,
  },
  data() {
    return {
      menu: [],
    };
  },
  mounted() {
    this.breakfast();
  },
  methods: {
    breakfast() {
      const breakfast = [
        {
          category: "Most Popular",
          link: "mostpopular",
        },
        {
          category: "McCafe Bakery",
          link: "mccafebakery",
        },
        {
          category: "Condiments",
          link: "condiments",
        },
        {
          category: "Promotions",
          link: "promotions",
        },
        {
          category: "Bevarages",
          link: "bevarages",
        },
      ];

      this.menu = breakfast;
    },
    lunch() {
      const lunch = [
        {
          category: "Most Popular",
          link: "mostpopular",
        },

        {
          category: "Combo Meals",
          link: "combomeals",
        },
        {
          category: "Promotions",
          link: "promotions",
        },
        {
          category: "Happy Meal",
          link: "happy meal",
        },
        {
          category: "McCafe",
          link: "mccafe",
        },
        {
          category: "McCafe Bakery",
          link: "mccafebakery",
        },
      ];
      this.menu = lunch;
    },
    dinner() {
      const dinner = [
        {
          category: "Most Popular",
          link: "mostpopular",
        },

        {
          category: "Combo Meals",
          link: "combomeals",
        },
        {
          category: "Promotions",
          link: "promotions",
        },
        {
          category: "Sweets&Treats",
          link: "sweetstreats",
        },
        {
          category: "HappyMeal",
          link: "happymeal",
        },
        {
          category: "condiments",
          link: "condiments",
        },
      ];
      this.menu = dinner;
    },
  },
};
</script>

<style scoped>
.borderup {
  width: 100%;
  border-top: 1px solid rgb(214, 214, 214);
  margin-bottom: 2rem;
}
.borderdown {
  width: 100%;
  border-top: 1px solid rgb(214, 214, 214);
  margin-top: 2rem;
}

.menu {
  margin-left: 2rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-right: 1rem;
}

.breakfast {
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid rgb(231, 231, 231);
  font-size: 0.9rem;
  font-weight: bolder;
  border-radius: 8px;
  padding: 0.9rem;
  cursor: pointer;
}
.breakfast:hover,
.lunch:hover,
.dinner:hover {
  border: 0.1rem solid #121212;
}

.breakfast:active,
.lunch:active,
.dinner:active {
  transform: scale(0.9);
}

.lunch {
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid rgb(231, 231, 231);
  font-size: 0.9rem;
  font-weight: bolder;
  border-radius: 8px;
  padding: 0.9rem;
  cursor: pointer;
}
.dinner {
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid rgb(231, 231, 231);
  font-size: 0.9rem;
  font-weight: bolder;
  border-radius: 8px;
  padding: 0.9rem;
  cursor: pointer;
}

h3 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

h4 {
  color: #767676;
}

@media (max-width: 575px) {
  .menu {
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
    flex-direction: column;
  }
  .breakfast {
    margin-bottom: 1rem;
    width: 250px;
  }
  .lunch {
    margin-bottom: 1rem;
    width: 250px;
  }
  .dinner {
    margin-bottom: 1rem;
    width: 250px;
  }
}
</style>
