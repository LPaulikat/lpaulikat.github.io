<script setup lang="ts"></script>

<template>
<section id="contact" class="section-dark">
  <div class="container">
    <p class="section-label">Erreich uns</p>
    <h2 class="section-title">KONTAKT</h2>
    <div class="red-bar"></div>
    <div class="contact-grid">
      <div class="contact-card">
        <div class="contact-icon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="28" height="28">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
        </div>
        <div>
          <span class="sr-only">E-Mail</span>
          <span>info@rescuedogs-sl-fl.de</span>
        </div>
      </div>
      <div class="contact-card">
        <div class="contact-icon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="28" height="28">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
          </svg>
        </div>
        <div>
          <span class="sr-only">Telefon</span>
          <span>+49 461 123 456 78</span>
        </div>
      </div>
     <div class="contact-card paypal">
        <strong>Jetzt spenden</strong>
        <p>
          Wir sind ein ehrenamtlicher Verein und finanzieren uns ausschließlich über Mitgliedsbeiträge und Spenden. Jede Unterstützung hilft uns, unsere Hunde auszubilden und einsatzbereit zu halten – herzlichen Dank!
        </p>
        <a href="https://www.paypal.com/donate/?hosted_button_id=DEINE_BUTTON_ID" target="_blank" rel="noopener noreferrer">
        <img 
          src="https://www.paypalobjects.com/webstatic/de_DE/i/de-pp-logo-150px.png" 
          alt="Mit PayPal spenden"
         
        />
      </a>
      </div>
    </div>
  </div>
</section>

</template>

<style scoped>
.contact-grid {
  display: grid;
  gap: 2rem;
  margin-top: 48px;
  align-items: flex-start;

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.contact-card {
  display: flex;
  align-items: center;
  gap: 12px;

  &.paypal {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;

    strong {
      color: var(--gray);
    }

    p {
      color: #999;
    }
  }
}

.contact-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  flex-shrink: 0;
}

.contact-card {
  strong {
    font-size: 14px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #555;
    font-weight: 500;
  }

  span {
    font-size: 15px;
    color: var(--white);
    line-height: 1.6;
  }
}

</style>