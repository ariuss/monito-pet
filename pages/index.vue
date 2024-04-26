<template>
  <main>
    <HeroBanner></HeroBanner>
    <WhatsNewSection></WhatsNewSection>
    <OneMoreBanner></OneMoreBanner>
    <div class="desktop-only">
      <ProductSection></ProductSection>
      <SellerSection></SellerSection>
      <AdoptionBanner></AdoptionBanner>
    </div>
    <PetKnowledgeSection></PetKnowledgeSection>
    <Footer></Footer>
  </main>
</template>

<style scoped>
.desktop-only {
  display: none;
}

@media screen and (min-width: 415px) {
  .desktop-only {
    display: block;
  }
}
</style>