<script setup lang="ts"></script>


<template>
<section class="hero" aria-labelledby="hero-title">
  <div class="hero-container">
    <div class="hero-text">
      <p class="hero-eyebrow">Rettungshundeverein</p>
      <h1 id="hero-title" class="hero-title">
        RESCUE
        <span class="red">DOGS</span>
        <br>
        <span>Schleswig-Flensburg e.V.</span>
      </h1>
      <p class="hero-subtitle">Wir trainieren Hunde und Hundeführer für den Ernstfall – für die Suche und Rettung vermisster Menschen in schwierigem Gelände.</p>
      <div class="hero-cta">
        <a href="#contact" class="btn btn-primary">Kontakt aufnehmen</a>
        <a href="#about" class="btn btn-outline">Mehr erfahren</a>
      </div>
      <div class="hero-stats">
        <div class="hero-stat">
          <div class="hero-stat-num">23</div>
          <div class="hero-stat-label">Aktive Mitglieder</div>
        </div>
        <div class="hero-stat">
          <div class="hero-stat-num">14</div>
          <div class="hero-stat-label">Ausgebildete Hunde</div>
        </div>
        <div class="hero-stat">
          <div class="hero-stat-num">12</div>
          <div class="hero-stat-label">Jahre aktiv</div>
        </div>
      </div>
    </div>
    <img class="hero-visual" src="../assets/images/gruppe.jpg" alt="Rescue Dogs Team">
  </div>
</section>

</template>


<style>
.hero {
  background: var(--black);
}

.hero-container {
  display: grid;
  gap: 1.5rem;
  max-width: 1920px;
  margin: 0 auto;
  padding-top: 4rem;
  padding-inline: 3rem;

  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
}

.hero-text {
  display: grid;
  gap: 2rem;
}

.hero-eyebrow {
  font-size: 14px;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: var(--red);
  font-weight: 500;
}

.hero-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(64px, 7vw, 104px);
  line-height: 0.92;
  color: var(--white);

  .red {
    color: var(--red);
  }
}

.hero-subtitle {
  font-family: 'Source Serif 4', serif;
  font-style: italic;
  font-size: 18px;
  color: #999;
  line-height: 1.7;
  max-width: 400px;
  font-weight: 300;
}

.hero-cta {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  color: var(--white);
  padding: 0.5rem 1rem;
  font-size: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.2s;

  &-primary {
    background: var(--red);
    border: 2px solid var(--red);
    color: #000;

    &:hover {
      background: var(--red-dark);
      border-color: var(--red-dark);
    }
  }

  &-outline {
    background: transparent;
    border: 2px solid #444;

    &:hover {
      border-color: var(--white);
    }
  }
}

.hero-stats {
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  padding-top: 32px;

  @media screen and (min-width: 1024px) {
    margin-top: 48px;
    flex-direction: row;
    border-top: 1px solid #2a2a2a;
  }
}

.hero-stat {
  @media screen and (min-width: 1024px) {
    & + & {
      border-left: 1px solid #2a2a2a;
      padding-left: 1.5rem;
    }
  }
}

.hero-stat-num {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 44px;
  color: var(--red);
  line-height: 1;
}

.hero-stat-label {
  font-size: 14px;
  color: #999;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-top: 4px;
}

.hero-visual {
  width: 100%;
  max-height: 50vh;
  object-fit: cover;
}

</style>