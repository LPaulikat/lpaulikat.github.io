<script setup lang="ts">
import Footer from './layout/Footer.vue';
import Nav from './layout/Header.vue';
import Hero from './components/Hero.vue';
import About from './components/About.vue';
import Dogs from './components/Dogs.vue';
import Gallery from './components/Gallery.vue';
import Contact from './components/Contact.vue';
import Header from './layout/Header.vue';
</script>

<template>
<body>
<Header/>
<Hero/>
<About/>
<Dogs/>
<Gallery/>

<!-- <section id="appointments">
  <div class="container">
    <p class="section-label">Aktuell</p>
    <h2 class="section-title">TERMINE</h2>
    <div class="red-bar"></div>
    <div class="events-list">
      <div class="event-item">
        <div class="event-date">
          <div class="event-day">22</div>
          <div class="event-month">Mär 2026</div>
        </div>
        <div class="event-info">
          <h4>Wöchentliches Übungsgelände</h4>
          <p>Trainingsgelände Flensburg-Nord · 09:00 – 13:00 Uhr</p>
        </div>
        <span class="event-tag">Training</span>
      </div>
      <div class="event-item">
        <div class="event-date">
          <div class="event-day">05</div>
          <div class="event-month">Apr 2026</div>
        </div>
        <div class="event-info">
          <h4>BRH-Prüfung Flächensuche</h4>
          <p>Prüfungsgelände Schleswig · Bewertung durch externen Prüfer</p>
        </div>
        <span class="event-tag red">Prüfung</span>
      </div>
      <div class="event-item">
        <div class="event-date">
          <div class="event-day">19</div>
          <div class="event-month">Apr 2026</div>
        </div>
        <div class="event-info">
          <h4>Tag der offenen Tür</h4>
          <p>Für Interessierte und neue Mitglieder · Eintritt frei</p>
        </div>
        <span class="event-tag red">Öffentlich</span>
      </div>
      <div class="event-item">
        <div class="event-date">
          <div class="event-day">10</div>
          <div class="event-month">Mai 2026</div>
        </div>
        <div class="event-info">
          <h4>Jahreshauptversammlung</h4>
          <p>Vereinsheim Schleswig · Alle Mitglieder sind eingeladen</p>
        </div>
        <span class="event-tag">Verein</span>
      </div>
    </div>
  </div>
</section> -->

<Contact/>


<Footer />
</body>
</template>

<style >
section {
  padding: 100px 0;
}


.section-label {
  color: var(--red-dark);
}

.red-bar {
  background: var(--red-dark);
}

.section-dark {
  background: var(--black);
  color: var(--white);

  .section-label {
    color: var(--red);
  }

  .red-bar {
    background: var(--red);
  }

  .section-sub {
    color: #999;
  }

  .about-text p {
    color: #aaa;
  }

  .highlight p {
    color: #bbb;
  }

  .about-img-accent {
    background: var(--red);
  }

  .highlight-dot {
    background: var(--red);
  }

  .contact-icon svg {
    color: var(--red);
  }
}

.section-gray {
  background: var(--gray);
  color: var(--black);

  .section-label {
    color: var(--red-dark);
  }

  .red-bar {
    background: var(--red-dark);
  }
}

</style>
