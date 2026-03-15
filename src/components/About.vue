<script setup lang="ts"></script>


<template>
    <section id="about">
  <div class="container">
    <p class="section-label">Wer wir sind</p>
    <h2 class="section-title">ÜBER DEN VEREIN</h2>
    <div class="red-bar"></div>
    <div class="about-grid">
          <img class="about-img" src="../assets/images/Stand.jpg" alt="Stand bei einer Veranstaltung">
      <div class="about-text">
        <h3>Rettung ist unser Auftrag</h3>
        <p>Der Rescue Dogs Schleswig-Flensburg e.V. ist ein gemeinnütziger Verein, der sich der Ausbildung von Rettungshundeteams widmet. Im Einsatz arbeiten wir eng mit Behörden und Rettungsdiensten zusammen.</p>
        <p>Unsere Teams sind rund um die Uhr einsatzbereit und können innerhalb kürzester Zeit ausrücken – ob bei der Suche nach vermissten Personen im Wald, in Trümmerlagen oder bei Großschadenslagen.</p>
        <ul>
          <li>
            Regelmäßige Übungen und Lehrgänge auf Landes- und Bundesebene
          </li>
          <li>
            Prüfungen nach BRH-Standard (Bundesverband Rettungshunde)
          </li>
          <li >
            Enge Zusammenarbeit mit Feuerwehr, Polizei und DRK
          </li>
          <li >
            Offen für neue Mitglieder – auch ohne Vorkenntnisse
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
</template>

<style scoped>
.about-grid {
  display: grid;
  gap: 80px;
  margin-top: 64px;

  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
}

.about-img {
    width: 100%;
    height: auto;
    object-fit: cover;
    aspect-ratio: 4 / 5;
}

.about-text {
  h3 {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 32px;
    margin-bottom: 20px;
  }

  p {
    font-size: 15px;
    line-height: 1.8;
    color: #444;
    margin-bottom: 14px;
  }
}



</style>