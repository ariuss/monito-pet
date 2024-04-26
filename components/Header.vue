<template>
  <header class="header">
    <button class="header-collapse-toggle" type="button">
      <FontAwesome icon="fa-solid fa-bars fa-xl"></FontAwesome>
    </button>
    <a href="/">
      <img class="header-logo" src="~/assets/img/monito-logo.svg" alt="Monito">
    </a>
    <div class="header-collapse">
      <nav class="header-nav">
        <a href="" class="header-nav-link">Home</a>
        <a href="" class="header-nav-link">Category</a>
        <a href="" class="header-nav-link">About</a>
        <a href="" class="header-nav-link">Contact</a>
      </nav>
      <div class="header-search">
        <label class="header-search-label" for="header-search-field">Search</label>
        <div class="header-search-icon">
          <FontAwesome icon="fa-solid fa-magnifying-glass fa-xl"></FontAwesome>
        </div>
        <input class="header-search-field" type="text" id="header-search-field" placeholder="Search something here!">
      </div>
      <a class="header-registration" href="">Join the community</a>
      <button class="header-price-toggle" type="button">
        <img src="~/assets/img/vietnam-flag.png" alt="" width="21px" height="21px">
        <span>VND</span>
        <FontAwesome icon="fa-solid fa-chevron-down fa-sm" style="font-size: 16px;"></FontAwesome>
      </button>
    </div>
    <button class="header-search-toggle" type="button">
      <FontAwesome icon="fa-solid fa-magnifying-glass fa-xl"></FontAwesome>
    </button>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

@media screen and (min-width: 415px) {
  .header {
    padding: 2rem 0;
    gap: 2.5rem;
    justify-content: flex-start;
  }
}

.header-logo {
  width: 92px;
  height: 32px;
  padding: 0px 0.42px 0.42px 0px;
  gap: 0px;
  opacity: 0px;
}

.header-collapse-toggle {
  background-color: transparent;
  border: none;
}

.header-collapse {
  display: none;
}

.header-search-toggle {
  background-color: transparent;
  border: none;
}

@media screen and (min-width: 415px) {
  .header-collapse-toggle {
    display: none;
  }

  .header-collapse {
    display: flex;
  }

  .header-search-toggle {
    display: none;
  }
}

@media screen and (min-width: 415px) {
  .header-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2.5rem;
  }

  .header-nav-link {
    text-decoration: none;
    font-family: SVN-Gilroy;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    text-align: left;
    color: #003459;
  }

  .header-search {
    position: relative;
    margin-left: 2rem;
  }

  .header-search-label {
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

  .header-search-icon {
    position: absolute;
    color: #99A2A5;
    display: flex;
    align-items: center;
    height: 100%;
    margin-left: 1.25rem;
  }

  .header-search-field {
    width: 280px;
    height: 44px;
    padding: 12px 20px 12px 56px;
    border-radius: 46px;
    border: none;
    background-color: #FDFDFD;
    color: #99A2A5;
    font-family: SVN-Gilroy;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
  }

  .header-registration {
    text-decoration: none;
    width: 203px;
    height: 44px;
    padding: 14px 28px 10px 28px;
    border-radius: 57px;
    background-color: #003459;
    font-family: SVN-Gilroy;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    text-align: left;
    color: #FDFDFD;
    margin-left: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .header-price-toggle {
    background-color: transparent;
    border: none;
    width: 104px;
    height: 44px;
    padding: 10px 8px 8px 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
    font-family: SVN-Gilroy;
    font-size: 16px;
    font-weight: 500;
    line-height: 23px;
    text-align: left;
    color: #002A48;
    margin-left: 1rem;
  }
}
</style>