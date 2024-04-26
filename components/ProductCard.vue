<template>
  <div class="card">
    <img class="card-image" :src="'/_nuxt/assets/img/' + image" alt="">
    <div class="card-content">
      <div class="product-name">{{ name }}</div>
      <div class="product-spec">
        <span class="product-type">Product: <span class="product-type-value">{{ type }}</span></span>
        <span class="product-separator" v-if="size">&#183;</span>
        <span class="product-size" v-if="size">Size: <span class="product-size-value">{{ size }}</span></span>
      </div>
      <div class="product-price">{{ price }}</div>
      <div class="product-bonus">
        <img src="~/assets/img/bonus-box.svg" alt="">
        <span class="product-separator">&#183;</span>
        {{ bonus }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  padding: 8px;
  border-radius: 12px;
  background: #FDFDFD;
  box-shadow: 0px 4px 28px -2px #00000014;
}

.card-image {
  width: 100%;
  gap: 0px;
  border-radius: 10px;
  opacity: 0px;
}

.card-content {
  margin-top: 0.5rem;
  padding: 4px;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.product-name {
  font-family: SVN-Gilroy;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #00171F;
}

.product-type,
.product-size {
  font-family: SVN-Gilroy;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;
  color: #667479;
}

.product-type-value,
.product-size-value {
  font-weight: 700;
}

.product-separator {
  display: inline-flex;
  padding: 0 0.5rem;
  justify-content: center;
  align-items: center;
}

.product-price {
  font-family: SVN-Gilroy;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  text-align: left;
  color: #00171F;
}

.product-bonus {
  padding: 8px;
  border-radius: 8px;
  background-color: #FCEED5;
  font-family: SVN-Gilroy;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  text-align: left;
  display: flex;
  align-items: center;
}
</style>

<script>
export default {
  props: {
    image: String,
    name: String,
    type: String,
    size: String,
    price: String,
    bonus: String
  }
}
</script>