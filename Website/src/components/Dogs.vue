<script setup lang="ts"></script>

<template>
    <section id="dogs" class="section-dark">
  <div class="container">
    <p class="section-label">Unsere Vierbeiner</p>
    <h2 class="section-title">DIE HUNDE</h2>
    <div class="red-bar"></div>
    <p class="section-sub">Jeder unserer Hunde ist ein unverzichtbarer Teil des Teams – hochspezialisiert, zuverlässig und unermüdlich im Einsatz.</p>
    <div class="dogs-grid">
      <div class="dog-card">
        <div class="dog-card-img">
          <img src="../assets/images/Pete-suche.jpg" alt="Rex bei der Flächensuche">
        </div>
        <div class="dog-card-body">
          <span class="dog-badge">Flächensuche</span>
          <div class="dog-name">REX</div>
          <div class="dog-breed">Deutscher Schäferhund · 4 Jahre</div>
          <p class="dog-desc">Rex ist seit 2022 im aktiven Einsatz. Er hat bereits an mehreren Sucheinsätzen teilgenommen und gilt als besonders ausdauernd im Gelände.</p>
        </div>
      </div>
      <div class="dog-card">
        <div class="dog-card-img">
          <img src="../assets/images/Ulrike.jpg" alt="Luna">
        </div>
        <div class="dog-card-body">
          <span class="dog-badge">Flächensuche</span>
          <div class="dog-name">LUNA</div>
          <div class="dog-breed">Labrador Retriever · 5 Jahre</div>
          <p class="dog-desc">Luna ist unsere erfahrenste Hündin und hat ihre Trümmersuch-Prüfung mit Auszeichnung bestanden. Ruhig, fokussiert, zuverlässig.</p>
        </div>
      </div>
      <div class="dog-card">
        <div class="dog-card-img">
          <img src="../assets/images/Charly.jpg" alt="Finn in Ausbildung">
        </div>
        <div class="dog-card-body">
          <span class="dog-badge">In Ausbildung</span>
          <div class="dog-name">FINN</div>
          <div class="dog-breed">Border Collie · 2 Jahre</div>
          <p class="dog-desc">Finn ist unser jüngster Nachwuchs und absolviert gerade seine Grundausbildung. Er zeigt bereits außergewöhnliches Talent und Arbeitseifer.</p>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<style scoped>
.dogs-grid {
  display: grid;
  gap: 1rem;

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.dog-card {
  background: #1a1a1a;
  overflow: hidden;
  transition: transform 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
    z-index: 2;
    position: relative;
  }
}

.dog-card-img {
  width: 100%;
  height: 240px;
  background: #222;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 72px;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 80px;
    background: linear-gradient(transparent, #1a1a1a);
  }
}

.dog-card-body {
  padding: 24px;
}

.dog-badge {
  display: inline-block;
  background: var(--red-dark);
  color: var(--white);
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 4px 10px;
  margin-bottom: 10px;
  font-weight: 500;
}

.dog-name {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 28px;
  color: var(--white);
  margin-bottom: 2px;
}

.dog-breed {
  font-size: 12px;
  color: #999;
  margin-bottom: 10px;
  letter-spacing: 1px;
}

.dog-desc {
  font-size: 13px;
  color: var(--gray);
  line-height: 1.6;
}

</style>