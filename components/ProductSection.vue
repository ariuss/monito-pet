<template>
  <div class="product-section">
    <div class="product-section-header">
      <h1 class="product-title">
        <span class="product-title-prepend">Hard to choose right products for your pets?</span>
        <br>
        Our Products
      </h1>
      <div class="product-more-container">
        <a class="product-more" href="">
          View more
          <FontAwesome icon="fa-solid fa-chevron-right" style="font-size: 0.75rem;"></FontAwesome>
        </a>
      </div>
    </div>
    <div class="product-section-body">
      <div class="product-cards">
        <ProductCard v-for="product in products" :image="product.image" :name="product.name" :type="product.type"
          :size="product.size" :price="product.price" :bonus="product.bonus"></ProductCard>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-section {
  padding: 1rem;
}

.product-section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.product-title-prepend {
  font-family: SVN-Gilroy;
  font-size: 16px;
  font-weight: 500;
  line-height: 31px;
  color: #000000;
}

.product-title {
  font-family: SVN-Gilroy;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  color: #003459;
  margin: 0;
}

.product-more-container {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}

.product-more {
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
  width: 225px;
  height: 44px;
  margin: 0;
}

.product-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-top: 1rem;
}
</style>

<script>
export default {
  data() {
    return {
      products: [
        {
          image: "product-1.png",
          name: "Reflex Plus Adult Cat Food Salmon",
          type: "Dog Food",
          size: "385gm",
          price: "140.000 VND",
          bonus: "Free Toy & Free Shaker"
        },
        {
          image: "product-2.png",
          name: "Reflex Plus Adult Cat Food Salmon",
          type: "Cat Food",
          size: "1.5kg",
          price: "165.000 VND",
          bonus: "Free Toy & Free Shaker"
        },
        {
          image: "product-3.png",
          name: "Cat scratching ball toy kitten sisal rope ball",
          type: "Toy",
          size: "",
          price: "1.100.000 VND",
          bonus: "Free Cat Food"
        },
        {
          image: "product-4.png",
          name: "Cute Pet Cat Warm Nest",
          type: "Toy",
          size: "",
          price: "410.000 VND",
          bonus: "Free Cat Food"
        },
        {
          image: "product-5.png",
          name: "NaturVet Dogs - Omega-Gold Plus Salmon Oil",
          type: "Dog Food",
          size: "385gm",
          price: "350.000 VND",
          bonus: "Free Toy & Free Shaker"
        },
        {
          image: "product-6.png",
          name: "Costumes Fashion Pet Clother Cowboy Rider",
          type: "Costume",
          size: "1.5kg",
          price: "500.000 VND",
          bonus: "Free Toy & Free Shaker"
        },
        {
          image: "product-7.png",
          name: "Costumes Chicken Drumsti ck Headband",
          type: "Costume",
          size: "",
          price: "400.000 VND",
          bonus: "Free Cat Food"
        },
        {
          image: "product-8.png",
          name: "Plush Pet Toy",
          type: "Toy",
          size: "",
          price: "250.000 VND",
          bonus: "Free Food & Shaker",
        },
      ]
    }
  }
}
</script>