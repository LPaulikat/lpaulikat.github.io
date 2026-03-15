<script setup lang="ts"></script>

<template>
    <section id="galerie" class="section-gray">
  <div class="container">
    <p class="section-label">Eindrücke</p>
    <h2 class="section-title">GALERIE</h2>
    <div class="red-bar"></div>
    <div class="gallery-grid">
      <div class="gallery-item">
        <img src="../assets/images/Jette.jpg" alt="">
        <div class="gallery-overlay"><span class="overlay-plus">+</span></div>
      </div>
      <div class="gallery-item">
        <img src="../assets/images/Watson.jpg" alt="">
        <div class="gallery-overlay"><span class="overlay-plus">+</span></div>
      </div>
      <div class="gallery-item">
        <img src="../assets/images/Cooper.jpg" alt="">
        <div class="gallery-overlay"><span class="overlay-plus">+</span></div>
      </div>
      <div class="gallery-item">
        <img src="../assets/images/Oscar.jpg" alt="">
        <div class="gallery-overlay"><span class="overlay-plus">+</span></div>
      </div>
      <div class="gallery-item">
        <img src="../assets/images/Fox.jpg" alt="">
        <div class="gallery-overlay"><span class="overlay-plus">+</span></div>
      </div>
    </div>
  </div>
</section>
</template>

<style scoped>

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 240px 240px;
  }
}

.gallery-item {
  overflow: hidden;
  position: relative;
  cursor: pointer;
  min-height: 160px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s;
  }

  &:hover {
    img {
      transform: scale(1.06);
    }

    .gallery-overlay {
      background: rgba(197, 7, 7, 0.3);
    }

    .overlay-plus {
      opacity: 1;
    }
  }

  @media screen and (min-width: 1024px) {
    &:first-child {
      grid-column: span 2;
      grid-row: span 2;
    }
  }
}

.gallery-overlay {
  position: absolute;
  inset: 0;
  background: rgba(197, 7, 7, 0);
  transition: background 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.overlay-plus {
  color: white;
  font-size: 36px;
  font-weight: 200;
  opacity: 0;
  transition: opacity 0.3s;
}

</style>