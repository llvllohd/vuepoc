<template>
  <div class="container">
    <!-- ---------------------------------------------- -->
    <div class="row">
      <h1 class="name">McDonald's</h1>
      <div class="details">
        <span class="check-circle">
          <fa-icon
            :icon="['fas', 'check-circle']"
            size="1x"
            :spin="(spin = false)"
          />
          DashPass
        </span>

        <span class="inner-details">
          • Fast Food, Burger • 4.6
          <fa-icon
            class="star"
            :icon="['fas', 'star']"
            size="x"
            :spin="(spin = false)"
          />
          (500+)</span
        >
      </div>
    </div>
    <!-- ----------------------------------- -->
    <div class="address-details">
      <div class="fee">
        <h2>$0.00</h2>
        <h3>
          delivery fee
          <fa-icon
            class="star"
            :icon="['fas', 'info-circle']"
            size="x"
            :spin="(spin = false)"
          />
        </h3>
      </div>
      <div class="line"></div>
      <div class="address">
        <h2>
          Enter your address for
        </h2>
        <h2>ETA</h2>
      </div>
    </div>

    <!-- ----------------------------------- -->
  </div>
</template>

<script>
export default {
  name: "RestaurantDetails",
};
</script>

<style>
.row {
  padding: 2rem;
  display: flex;
  flex-direction: column;
}
.row h1 {
  font-size: 2.9rem;
  font-weight: 700;
}

.row .details {
  margin-top: 0.7rem;
  font-size: 1.1rem;
  font-weight: bold;
}
.row .details .check-circle {
  color: #00838a;
}
.row .details .inner-details {
  color: #767676;
}

.row .details .inner-details .star {
  font-size: 1rem;
}

.address-details {
  margin-left: 2rem;
  max-width: 480px;
  min-height: 60px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-evenly;
  padding: 0.7rem;
  border: 1px solid rgb(231, 231, 231);
  border-radius: 8px;
  color: #191919;
  font-size: 0.9rem;
  font-weight: bolder;
}

.address-details .line {
  width: 1px;
  height: 28px;
  background-color: rgb(231, 231, 231);
}

.address-details .fee h3 {
  color: #767676;
}

@media (max-width: 560px) {
  .address-details {
    width: 400px;
  }
}

@media (max-width: 560px) {
  .address-details {
    width: 350px;
  }
  .address-details .address {
    font-size: 0.7rem;
  }
}

@media (max-width: 410px) {
  .address-details {
    margin-left: 1rem;
  }
}

@media (max-width: 380px) {
  .address-details {
    margin-left: 0.1rem;
  }
}
</style>
