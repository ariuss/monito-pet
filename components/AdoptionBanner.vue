<template>
  <div class="banner-section">
    <div class="banner">
      <h1 class="banner-title">Adoption <img src="~/assets/img/paw.svg" alt="" style="height: 0.75em;"></h1>
      <h2 class="banner-subtitle">We need help. so do they.</h2>
      <p class="banner-description">
        Adopt a pet and give it a home, <br>
        it will be love you back unconditionally.
      </p>
      <div class="banner-cta">
        <button type="button" class="banner-button-primary">
          View intro
          <FontAwesome icon="fa-regular fa-circle-play"></FontAwesome>
        </button>
        <button type="button" class="banner-button-secondary">
          Explore now
        </button>
      </div>
      <div class="banner-image-container">
        <img class="banner-image" src="~/assets/img/paw-holding.png" alt="">
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner-section {
  padding: 1rem;
}

.banner {
  padding: 3rem 4rem;
  border-radius: 20px;
  background-color: #FCEED5;
  position: relative;
  overflow: hidden;
}

.banner-title {
  font-family: SVN-Gilroy;
  font-size: 52px;
  font-weight: 800;
  line-height: 68px;
  color: #002A48;
  margin: 0;
  margin-top: 1rem;
}

.banner-subtitle {
  font-family: SVN-Gilroy;
  font-size: 36px;
  font-weight: 700;
  line-height: 54px;
  color: #002A48;
  margin: 0;
  text-transform: capitalize;
}

.banner-description {
  font-family: SVN-Gilroy;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  color: #242B33;
}

.banner-cta {
  margin-top: 1.75rem;
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
}

.banner-button-primary {
  height: 48px;
  padding: 14px 28px 10px 28px;
  border: solid #003459 1.5px;
  border-radius: 57px;
  text-transform: capitalize;
  background-color: transparent;
  color: #003459;
  font-family: SVN-Gilroy;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
}

.banner-button-secondary {
  height: 48px;
  padding: 14px 28px 10px 28px;
  border-radius: 57px;
  text-transform: capitalize;
  background-color: #003459;
  color: #FDFDFD;
  font-family: SVN-Gilroy;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
  margin-left: 0.5rem;
  border: none;
  display: flex;
  justify-content: center;
}

.banner-image-container {
  display: flex;
  position: absolute;
  width: 42%;
  height: 350px;
  top: 0;
  right: 50px;
  transform: rotate(60deg) scaleX(-1);
}

.banner-image {
  object-fit: cover;
  object-position: center;
  height: 100%;
  width: 100%;
  position: absolute;
  bottom: -1rem;
}
</style>