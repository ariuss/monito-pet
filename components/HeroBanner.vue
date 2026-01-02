<template>
  <div class="hero-section">
    <div class="hero-background-container">
      <div class="hero-background-effect-primary"></div>
      <div class="hero-background-effect-secondary"></div>
      <div class="hero-background-effect-tertiary"></div>
    </div>
    <div class="hero-header">
      <Header></Header>
    </div>
    <div class="hero-content">
      <h1 class="hero-title">One more friend</h1>
      <h2 class="hero-subtitle">Thousands more fun!</h2>
      <p class="hero-description">
        Having a pet means you have more joy, a
        new friend, a happy person who will always be with you to have fun. We
        have 200+ different pets that can meet your needs!</p>
      <div class="hero-cta">
        <button type="button" class="hero-button-primary">
          View intro
          <FontAwesome icon="fa-regular fa-circle-play"></FontAwesome>
        </button>
        <button type="button" class="hero-button-secondary">
          Explore now
        </button>
      </div>
    </div>
    <div class="hero-image-container">
      <img class="hero-image" src="/assets/img/hero-image.png" alt="">
    </div>
  </div>
</template>

<style scoped>
.hero-section {
  position: relative;
  border-radius: 0px 0px 20px 20px;
  background: linear-gradient(102.87deg, #FCEED5 6.43%, #FCEED5 78.33%, #FFE7BA 104.24%);
}

@media screen and (min-width: 415px) {
  .hero-section {
    padding: 0rem 2rem 4rem;
  }
}

.hero-background-container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  border-radius: 0 0 1rem 1rem;
}

.hero-background-effect-primary {
  position: absolute;
  width: 635px;
  height: 635px;
  border-radius: 61px;
  top: -640px;
  left: -260px;
  transform: rotate(-70deg);
  background-color: #F7DBA7;
}

@media screen and (min-width: 415px) {
  .hero-background-effect-primary {
    top: -600px;
    left: -375px;
    transform: rotate(-70deg);
  }
}

.hero-background-effect-secondary {
  position: absolute;
  width: 528.98px;
  height: 528.98px;
  top: 475px;
  left: 65px;
  border-radius: 48px;
  transform: rotate(8deg);
  background-color: #003459;
}

@media screen and (min-width: 415px) {
  .hero-background-effect-secondary {
    top: 285px;
    left: 608px;
    transform: rotate(12deg);
  }
}

.hero-background-effect-tertiary {
  position: absolute;
  width: 528.98px;
  height: 528.98px;
  border-radius: 48px;
  top: 450px;
  left: 110px;
  transform: rotate(24deg);
  background-color: #F7DBA7;
}

@media screen and (min-width: 415px) {
  .hero-background-effect-tertiary {
    top: 250px;
    left: 640px;
    transform: rotate(25deg);
  }
}

.hero-header {
  position: relative;
  z-index: 1;
}

.hero-content {
  margin-top: 1.5rem;
  padding: 1rem;
  position: relative;
  z-index: 1;
}

@media screen and (min-width: 415px) {
  .hero-content {
    padding: 2rem 0 4rem;
  }
}

.hero-title {
  text-transform: capitalize;
  font-family: SVN-Gilroy;
  font-size: 46px;
  font-weight: 800;
  line-height: 60px;
  text-align: left;
  color: #002A48;
  margin: 0;
}

.hero-subtitle {
  text-transform: capitalize;
  font-family: SVN-Gilroy;
  font-size: 28px;
  font-weight: 700;
  line-height: 38px;
  text-align: left;
  color: #002A48;
  margin: 0;
}

.hero-description {
  font-family: SVN-Gilroy;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;
  color: #242B33;
  margin-top: 0.5rem;
}

@media screen and (min-width: 415px) {
  .hero-description {
    max-width: 400px;
  }
}

.hero-cta {
  margin-top: 1.75rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.hero-button-primary {
  height: 48px;
  padding: 10px 28px 10px 28px;
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
  gap: 0.25rem;
}

.hero-button-secondary {
  height: 48px;
  padding: 10px 28px 10px 28px;
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

.hero-image-container {
  display: flex;
  position: relative;
  height: 386px;
}

@media screen and (min-width: 415px) {
  .hero-image-container {
    position: absolute;
    width: 42%;
    height: 425px;
    bottom: 1rem;
    right: 150px;
  }
}

.hero-image {
  object-fit: cover;
  object-position: center;
  height: 100%;
  width: 100%;
  position: absolute;
}

@media screen and (min-width: 415px) {
  .hero-image {
    bottom: -1rem;
  }
}
</style>