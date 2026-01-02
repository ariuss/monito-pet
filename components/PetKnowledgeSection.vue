<template>
  <div class="petknowledge-section">
    <h1 class="petknowledge-title">
      <span class="petknowledge-title-prepend">You already know ?</span>
      Useful pet knowledge
    </h1>
    <div class="petknowledge-cards">
      <PetKnowledgeCard v-for="knowledge in knowledges" :image="knowledge.image" :title="knowledge.title"
        :description="knowledge.description"></PetKnowledgeCard>
    </div>
    <div class="petknowledge-more-container">
      <a class="petknowledge-more" href="">
        View more
        <FontAwesome icon="fa-solid fa-chevron-right" style="font-size: 0.75rem;"></FontAwesome>
      </a>
    </div>
  </div>
</template>

<style scoped>
.petknowledge-section {
  padding: 1rem;
  margin: 1.5rem 0;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    "title"
    "cards"
    "more";
}

@media screen and (min-width: 415px) {
  .petknowledge-section {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      "title more"
      "cards cards";
    gap: 1rem;
    margin: 2rem 0;
  }
}

.petknowledge-title {
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

@media screen and (min-width: 415px) {
  .petknowledge-title {
    font-size: 24px;
    line-height: 36px;
  }
}

.petknowledge-title-prepend {
  font-family: SVN-Gilroy;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
  color: #000000;
  text-transform: none;
}

.petknowledge-cards {
  grid-area: cards;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 0.5rem;
  margin-top: 0.5rem;
}

@media screen and (min-width: 415px) {
  .petknowledge-cards {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
}

.petknowledge-more-container {
  display: flex;
}

@media screen and (min-width: 415px) {
  .petknowledge-more-container {
    justify-content: flex-end;
    align-items: flex-end;
  }
}

.petknowledge-more {
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
  width: max-content;
}

@media screen and (min-width: 415px) {
  .petknowledge-more {
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
      knowledges: [
        {
          image: "knowledge-1.png",
          title: "What is a Pomeranian? How to Identify Pomeranian Dogs",
          description: "The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed.",
        },
        {
          image: "knowledge-2.png",
          title: "Dog Diet You Need To Know",
          description: "Dividing a dog's diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially newborn puppies with relatively weak resistance.",
        },
        {
          image: "knowledge-3.png",
          title: "Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively",
          description: "Dog bites are common during development. However, no one wants to see their furniture or important items being bitten by a dog.",
        },
      ]
    }
  }
}
</script>