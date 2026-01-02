<template>
  <footer class="footer-section">
    <div action="" class="footer-section-top">
      <div class="footer-form-title">Register now so you don't miss our programs</div>
      <form action="" class="footer-form">
        <label class="footer-form-label" for="#footer-form-email"></label>
        <input class="footer-form-field" type="email" name="email" placeholder="Enter your Email"
          id="footer-form-email">
        <button class="footer-form-submit" type="submit">Subscribe Now</button>
      </form>
    </div>
    <div class="footer-section-middle">
      <nav class="footer-nav">
        <a href="" class="footer-nav-link">Home</a>
        <a href="" class="footer-nav-link">Category</a>
        <a href="" class="footer-nav-link">About</a>
        <a href="" class="footer-nav-link">Contact</a>
      </nav>
      <div class="footer-social-container">
        <a href="" class="footer-social">
          <FontAwesome icon="fa-brands fa-facebook" style="font-size: 20px;"></FontAwesome>
        </a>
        <a href="" class="footer-social">
          <FontAwesome icon="fa-brands fa-twitter" style="font-size: 20px;"></FontAwesome>
        </a>
        <a href="" class="footer-social">
          <FontAwesome icon="fa-brands fa-instagram" style="font-size: 20px;"></FontAwesome>
        </a>
        <a href="" class="footer-social">
          <FontAwesome icon="fa-brands fa-youtube" style="font-size: 20px;"></FontAwesome>
        </a>
      </div>
    </div>
    <hr class="footer-separator">
    <div class="footer-section-bottom">
      <div class="footer-logo-container">
        <img src="/assets/img/footer-logo.svg" alt="Monito logo" class="footer-logo">
      </div>
      <nav class="footer-link-container">
        <a class="footer-link" href="">Terms of Service</a>
        <a class="footer-link" href="">Privacy Policy</a>
      </nav>
      <div class="footer-copyright">
        © 2022 Monito. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-section {
  background: linear-gradient(102.87deg, #FCEED5 6.43%, #FCEED5 78.33%, #FFE7BA 104.24%);
  border-radius: 20px 20px 0 0;
  padding: 2rem 1rem 1rem;
}

.footer-section-top {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #003459;
  padding: 1rem;
  border-radius: 1rem;
}

@media screen and (min-width: 415px) {
  .footer-section-top {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    padding: 1.5rem;
  }
}

.footer-form-title {
  font-family: SVN-Gilroy;
  font-size: 20px;
  font-weight: 700;
  line-height: 32px;
  text-align: left;
  color: #FDFDFD;
  text-transform: capitalize;
}

@media screen and (min-width: 415px) {
  .footer-form-title {
    max-width: 300px;
  }
}

.footer-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
  border-radius: 14px;
  background-color: #FFFFFF;
}

@media screen and (min-width: 415px) {
  .footer-form {
    flex-direction: row;
    flex: 1;
  }
}

.footer-form-label {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.footer-form-field {
  height: 48px;
  padding: 14px 28px;
  border-radius: 8px;
  border: solid 1px #99A2A5;
  background-color: #FFFFFF;
  font-family: SVN-Gilroy;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
  flex: 1;
}

.footer-form-submit {
  height: 48px;
  padding: 14px 28px;
  border-radius: 8px;
  background-color: #003459;
  border: none;
  font-family: SVN-Gilroy;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  color: #FDFDFD;
}

.footer-section-middle {
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
}

@media screen and (min-width: 415px) {
  .footer-section-middle {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}

.footer-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media screen and (min-width: 415px) {
  .footer-nav {
    gap: 2rem;
  }
}

.footer-nav-link {
  text-decoration: none;
  font-family: SVN-Gilroy;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  color: #00171F;
}

.footer-social-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 1rem;
}

@media screen and (min-width: 415px) {
  .footer-social-container {
    margin-top: 0;
  }
}

.footer-social {
  text-decoration: none;
  color: #00171F;
}

.footer-separator {
  border: solid 1px #CCD1D2;
  margin: 2rem 0;
}

.footer-section-bottom {
  display: flex;
  flex-direction: column;
}

@media screen and (min-width: 415px) {
  .footer-section-bottom {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;
  }
}

.footer-logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer-link-container {
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  font-family: SVN-Gilroy;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
}

@media screen and (min-width: 415px) {
  .footer-link-container {
    order: -1;
    margin: 0;
  }
}

.footer-link {
  font-family: SVN-Gilroy;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;
  color: #667479;
  text-decoration: none;
}

.footer-copyright {
  margin-top: 0.5rem;
  font-family: SVN-Gilroy;
  font-size: 10px;
  font-weight: 400;
  line-height: 16px;
  text-align: center;
  color: #667479;
}

@media screen and (min-width: 415px) {
  .footer-copyright {
    margin: 0;
  }
}
</style>