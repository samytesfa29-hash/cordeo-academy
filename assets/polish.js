'use strict';
(() => {
  const heroImage = document.getElementById('hero-scene');
  const choices = [...document.querySelectorAll('[data-hero-photo]')];
  choices.forEach(button => button.addEventListener('click', () => {
    if (!heroImage) return;
    heroImage.src = `assets/${button.dataset.heroPhoto}.jpg`;
    heroImage.alt = button.dataset.heroAlt;
    choices.forEach(choice => choice.setAttribute('aria-pressed', String(choice === button)));
    const tourButton = document.querySelector('.hero-discovery [data-open-tour]');
    if (tourButton) tourButton.dataset.tourStart = button.dataset.tourIndex;
  }));
  const grade = document.getElementById('home-grade');
  if (grade) {
    const profiles = {
      k:['1–2','hours of student work','High parent involvement: help with directions, explaining, organization, and review.'],
      '1-2':['2–3','hours of student work','High parent involvement: help with directions, explaining, organization, and review.'],
      '3-4':['3–4','hours of student work','Medium parent involvement: organize, explain, observe, and review.'],
      '5-6':['4–5','hours of student work','Medium parent involvement: organize, explain, observe, and review.'],
      '7-8':['4–6','hours of student work','Lower parent involvement: encourage independence, keep work on track, and check in.'],
      '9-10':['Varies','with course load','Lower parent involvement. Ask the principal about the current classes and time expectations for your child.']
    };
    function updateGrade() {
      const profile = profiles[grade.value] || profiles['3-4'];
      document.querySelector('[data-home-hours]').textContent = profile[0];
      document.querySelector('[data-home-unit]').textContent = profile[1];
      document.querySelector('[data-home-support]').textContent = profile[2];
    }
    grade.addEventListener('change', updateGrade);
    updateGrade();
  }
  // Preview hosting does not change the school's real email domain.
  if (['cordeoacademy.org','www.cordeoacademy.org'].includes(location.hostname)) {
    document.querySelector('[data-preview-note]')?.setAttribute('hidden','');
    document.querySelector('[data-legacy-form]')?.setAttribute('hidden','');
  }
})();
