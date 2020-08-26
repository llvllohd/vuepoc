<template>
  <div class="container">
    <header>
      <div class="header">
        <span class="one">Preorder to </span>
        <span class="two">Your Address</span>
      </div>
    </header>

    <div class="banner-img">
      <img src="../assets/store_header_5579.webp" alt="banner" />
    </div>

    <div class="logo">
      <img
        src="../assets/restaurant_cover_square_McDonalds_logo.webp"
        alt="logo"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
};
</script>

<style>
.header {
  text-align: center;
  padding: 1rem;
  border-bottom: 1px solid rgb(214, 214, 214);
}
span.one {
  color: #302e4d;
  font-size: 1.2rem;
}
span.two {
  color: rgb(235, 23, 0);
  font-size: 1.4rem;
  font-weight: 600;
}

.banner-img {
  padding: 2rem;
}
.banner-img img {
  border-radius: 10px;
  width: 100%;
  height: 17rem;
  object-fit: fill;
  /* height: 200px; */
}
.logo {
  position: absolute;
  top: 20rem;
  left: 15rem;
  background-color: transparent;
}

.logo img {
  border: 0.15rem solid #ffffff;
  border-radius: 50%;
  height: 5.5rem;
  width: 5.5rem;
}

@media (max-width: 1110px) {
  .logo {
    left: 11rem;
  }
}
@media (max-width: 997px) {
  .logo {
    left: 7rem;
  }
}
@media (max-width: 550px) {
  .logo {
    left: 5rem;
    top: 21rem;
  }
  .logo img {
    height: 3.5rem;
    width: 3.5rem;
  }
}
</style>
