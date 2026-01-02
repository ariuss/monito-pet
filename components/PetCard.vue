<template>
  <div class="card">
    <img class="card-image" :src="'/assets/img/' + image" alt="">
    <div class="card-content">
      <div class="pet-name">{{ name }}</div>
      <div class="pet-gene">Gene: <span class="pet-gene-value">{{ gene }}</span></div>
      <div class="pet-age">Age: <span class="pet-age-value">{{ age }}</span></div>
      <div class="pet-price">{{ price }}</div>
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
  width:100%;
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

.pet-name {
  font-family: SVN-Gilroy;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  text-align: left;
  color: #00171F;
}

.pet-gene,
.pet-age {
  font-family: SVN-Gilroy;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;
  color: #667479;
}

.pet-gene-value,
.pet-age-value {
  font-weight: 700;
}

.pet-price {
  font-family: SVN-Gilroy;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  text-align: left;
  color: #00171F;
}
</style>

<script>
export default {
  props: {
    image: String,
    name: String,
    gene: String,
    age: String,
    price: String,
  }
}
</script>