<template>
  <div class="seller-section">
    <div class="seller-section-header">
      <h1 class="seller-title">
        <span class="seller-title-prepend">Proud to be part of</span>
        Pet Sellers
      </h1>
      <div class="seller-all-container">
        <a class="seller-all" href="">
          View all our sellers
          <FontAwesome icon="fa-solid fa-chevron-right" style="font-size: 0.75rem;"></FontAwesome>
        </a>
      </div>
    </div>
    <div class="seller-section-body">
      <img class="seller-logo" src="/assets/img/seller-1.png" alt="">
      <img class="seller-logo" src="/assets/img/seller-2.png" alt="">
      <img class="seller-logo" src="/assets/img/seller-3.png" alt="">
      <img class="seller-logo" src="/assets/img/seller-4.png" alt="">
      <img class="seller-logo" src="/assets/img/seller-5.png" alt="">
      <img class="seller-logo" src="/assets/img/seller-6.png" alt="">
      <img class="seller-logo" src="/assets/img/seller-7.png" alt="">
    </div>
  </div>
</template>

<style scoped>
.seller-section {
  padding: 1rem;
}

.seller-section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.seller-title-prepend {
  font-family: SVN-Gilroy;
  font-size: 16px;
  font-weight: 500;
  line-height: 31px;
  color: #000000;
}

.seller-title {
  font-family: SVN-Gilroy;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  color: #003459;
  margin: 0;
}

.seller-all-container {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}

.seller-all {
  text-decoration: none;
  border: 1.5px solid #003459;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-family: SVN-Gilroy;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #003459;
  padding: 12px 28px 12px 28px;
  border-radius: 57px;
  width: max-content;
  height: 44px;
  margin: 0;
}

.seller-section-body {
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 4rem;
  margin: 2rem 0;
}

.seller-logo {
  flex-shrink: 1;
  width: 100px;
}
</style>