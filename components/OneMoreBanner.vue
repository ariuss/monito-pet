<template>
  <div class="banner-section">
    <div class="banner">
      <div class="banner-content">
        <h1 class="banner-title">One more friend</h1>
        <h2 class="banner-subtitle">Thousands more fun!</h2>
        <p class="banner-description">
          Having a pet means you have more joy, a new friend,
          a happy person who will always be with you to have fun.
          We have 200+ different pets that can meet your needs!
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
      </div>
      <div class="banner-image-container">
        <img class="banner-image" src="~/assets/img/banner-image.png" alt="">
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner-section {
  padding: 1rem;
}

.banner {
  position: relative;
  padding: 1rem;
  border-radius: 20px;
  background-color: #FCEED5;
  text-align: center;
  display: flex;
  flex-direction: column;
}

@media screen and (min-width: 415px) {
  .banner {
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    padding: 4rem;
  }
}

.banner-title {
  font-family: SVN-Gilroy;
  font-size: 36px;
  font-weight: 800;
  line-height: 54px;
  text-align: center;
  color: #002A48;
  margin: 0;
}

@media screen and (min-width: 415px) {
  .banner-title {
    font-size: 52px;
    line-height: 68px;
    text-align: right
  }
}

.banner-subtitle {
  font-family: SVN-Gilroy;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  text-align: center;
  color: #002A48;
  margin: 0;
}

@media screen and (min-width: 415px) {
  .banner-subtitle {
    font-size: 36px;
    line-height: 54px;
    text-align: right
  }
}

.banner-description {
  font-family: SVN-Gilroy;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  text-align: center;
  color: #242B33;
}

@media screen and (min-width: 415px) {
  .banner-description {
    max-width: 400px;
    text-align: right;
  }
}

.banner-cta {
  margin-top: 1.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}

@media screen and (min-width: 415px) {
  .banner-cta {
    justify-content: flex-end;
  }
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
}

.banner-image-container {
  display: flex;
  position: relative;
  height: 350px;
}

@media screen and (min-width: 415px) {
  .banner-image-container {
    position: absolute;
    width: 42%;
    height: 350px;
    bottom: 1rem;
    left: 80px;
  }
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