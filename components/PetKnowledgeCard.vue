<template>
  <div class="card">
    <img class="card-image" :src="'/assets/img/' + image" alt="">
    <div class="card-content">
      <div class="card-label">Pet knowledge</div>
      <div class="card-title">{{ title }}</div>
      <p class="card-description">{{ description }}</p>
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

.card-content {
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 8px;
}

.card-image {
  width: 100%;
  gap: 0px;
  border-radius: 10px;
  opacity: 0px;
}

.card-label {
  width: max-content;
  padding: 2px 10px 2px 10px;
  border-radius: 28px;
  background: #00A7E7;
  font-family: SVN-Gilroy;
  font-size: 10px;
  font-weight: 700;
  line-height: 16px;
  text-align: left;
  color: #FDFDFD;
}

.card-title {
  margin: 0;
  font-family: SVN-Gilroy;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  text-align: left;
  color: #00171F;
}

.card-description {
  margin: 0;
  font-family: SVN-Gilroy;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  color: #242B33;
}
</style>

<script>
export default {
  props: {
    image: String,
    title: String,
    description: String,
  }
}
</script>