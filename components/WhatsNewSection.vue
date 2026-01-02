<template>
  <div class="whatsnew-section">
    <h1 class="whatsnew-title">
      <span class="whatsnew-title-prepend">Whats new?</span>
      Take a look at some of our pets
    </h1>
    <div class="whatsnew-cards">
      <PetCard
        v-for="pet in pets"
        :image="`${pet.image}`"
        :name="pet.name"
        :gene="pet.gene"
        :age="pet.age"
        :price="pet.price"
      />
    </div>
    <div class="whatsnew-more-container">
      <a class="whatsnew-more" href="">
        View more
        <FontAwesome icon="fa-solid fa-chevron-right" style="font-size: 0.75rem;"></FontAwesome>
      </a>
    </div>
  </div>
</template>

<style scoped>
.whatsnew-section {
  padding: 1rem;
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    "title"
    "cards"
    "more";
}

@media screen and (min-width: 415px) {
  .whatsnew-section {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      "title more"
      "cards cards";
    gap: 1rem;
    margin: 2rem 0;
  }
}


.whatsnew-title {
  grid-area: title;
  font-size: 20px;
  font-weight: 700;
  line-height: 32px;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: start;
  color: #003459;
  font-family: SVN-Gilroy;
  margin: 0;
  text-transform: capitalize;
}

.whatsnew-title-prepend {
  font-family: SVN-Gilroy;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
  color: #000000;
  text-transform: none;
}

.whatsnew-cards {
  grid-area: cards;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  margin-top: 0.5rem;
}

@media screen and (min-width: 415px) {
  .whatsnew-cards {
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
  }
}

.whatsnew-more-container {
  display: flex;
}

@media screen and (min-width: 415px) {
  .whatsnew-more-container {
    justify-content: flex-end;
    align-items: flex-end;
  }
}

.whatsnew-more {
  grid-area: more;
  text-decoration: none;
  padding: 14px 28px 10px 28px;
  border-radius: 57px;
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
  width: 100%;
}

@media screen and (min-width: 415px) {
  .whatsnew-more {
    width: max-content;
    height: 44px;
    padding: 12px 28px 12px 28px;
    margin: 0;
  }
}
</style>


<script>
export default {
  data() {
    return {
      pets: [
        {
          image: "pet-1.png",
          name: "MO231 - Pomeranian White",
          gene: "Male",
          age: "02 months",
          price: "6.900.000 VND"
        },
        {
          image: "pet-2.png",
          name: "MO502 - Poodle Tiny Yellow",
          gene: "Female",
          age: "02 months",
          price: "3.900.000 VND"
        },
        {
          image: "pet-3.png",
          name: "MO102 - Poodle Tiny Sepia",
          gene: "Male",
          age: "02 months",
          price: "4.000.000 VND"
        },
        {
          image: "pet-4.png",
          name: "MO512 - Alaskan Malamute Grey",
          gene: "Male",
          age: "03 months",
          price: "8.900.000 VND"
        },
        {
          image: "pet-5.png",
          name: "MO231 - Pembroke Corgi Cream",
          gene: "Male",
          age: "03 months",
          price: "7.900.000 VND"
        },
        {
          image: "pet-6.png",
          name: "MO502 - Pembroke Corgi Tricolor",
          gene: "Female",
          age: "02 months",
          price: "6.900.000 VND"
        },
        {
          image: "pet-7.png",
          name: "MO102 - Pomeranian Grey",
          gene: "Female",
          age: "02 months",
          price: "6.500.000 VND"
        },
        {
          image: "pet-8.png",
          name: "MO512 - Poodle Tiny Dairy Cow",
          gene: "Male",
          age: "03 months",
          price: "5.000.000 VND"
        },
      ]
    }
  }
}
</script>