<template>
  <div class="container">
    <div class="row">
      <span class="address">Enter your address</span>
      <span class="detail"
        >We'll confirm that you can have this restaurant delivered</span
      >
      <div class="box">
        <span>
          <fa-icon
            class="star"
            :icon="['fas', 'map-marker-alt']"
            size="1x"
            :spin="(spin = false)"
          /> </span
        ><input type="text" class="input" placeholder="Address" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Address",
};
</script>

<style scoped>
.row {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  /* -webkit-box-align: center; */
  align-items: center;
  background-color: rgb(254, 255, 88);
  border-radius: 8px;
  margin: 2rem;
}

.row .address {
  font-size: 1.6rem;
  background-color: transparent;
  color: rgb(25, 25, 25);
  margin-bottom: 0.3rem;
  font-weight: 400;
}
.row .detail {
  font-size: 1.2rem;
  background-color: transparent;
  margin-bottom: 0.7rem;
}

.row .box {
  /* max-width: 50rem; */
  display: flex;
  flex-direction: row;
  border-radius: 7px;
  margin-top: 2rem;
  padding: 0.7rem 16px;
  -webkit-box-align: center;
  align-items: center;
  box-shadow: rgb(214, 214, 214) 0px 0px 0px 1px inset;
  background-color: rgb(255, 255, 255);
}

.box span {
  font-size: 1.3rem;
}
.input {
  border: none;
  text-decoration: none;
  outline: none;
  font-size: 1.4rem;
  margin-top: 0rem;
  margin-left: 0.5rem;
}

@media (max-width: 630px) {
  .row .detail {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 1rem;
  }
}

@media (max-width: 415px) {
  .input {
    font-size: 1rem;
  }
}

@media (max-width: 320px) {
  .input {
    font-size: 0.9rem;
  }
  .box span {
    font-size: 1.5rem;
  }
}
</style>
