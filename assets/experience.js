'use strict';
(() => {
  const header = document.querySelector('.site-header');
  const onScroll = () => header?.classList.toggle('is-scrolled', window.scrollY > 16);
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if ('IntersectionObserver' in window && !motion.matches) {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) {
        entry.target.classList.remove('reveal-wait');
        entry.target.classList.add('reveal-visible');
        observer.unobserve(entry.target);
      }
    }, {threshold:.08});
    document.querySelectorAll('.section-heading,.welcome .section-copy,.grade-card,.purpose-grid article,.stage,.giving-block').forEach(el => {
      if (el.getBoundingClientRect().top > innerHeight) el.classList.add('reveal-wait');
      observer.observe(el);
    });
    motion.addEventListener('change', e => { if (e.matches) { observer.disconnect(); document.querySelectorAll('.reveal-wait').forEach(el => el.classList.remove('reveal-wait')); } });
    window.addEventListener('beforeprint', () => document.querySelectorAll('.reveal-wait').forEach(el => el.classList.remove('reveal-wait')));
  }
  const dialog = document.getElementById('photo-tour');
  if (!dialog || typeof dialog.showModal !== 'function') {
    document.querySelectorAll('[data-open-tour]').forEach(el => el.hidden = true);
    return;
  }
  const photos = [
    {src:'students-at-picnic-table',alt:'Cor Deo students sharing time together at an outdoor picnic table',category:'A PLACE TO BELONG',title:'The people make the place.',story:'Shared days become shared memories. Get a glimpse of the community your child could be part of.'},
    {src:'girls-reading-together',alt:'Two Cor Deo students sharing a book',category:'CURIOSITY, SHARED',title:'A little discovery goes a long way.',story:'Learning is full of small moments: a page, a question, a new connection. Here is one glimpse of students learning together.'},
    {src:'classroom-lesson',alt:'A teacher leading a lesson in a Cor Deo classroom',category:'THE CLASSROOM CONNECTION',title:'Together, the learning begins.',story:'Campus days connect students with their teachers and peers. Teacher-prepared assignments carry that learning into home days.'},
    {src:'students-on-the-stairs',alt:'A teacher and Cor Deo students gathered on the school stairs',category:'OUR SCHOOL COMMUNITY',title:'More than a place to study.',story:'Teachers, students, and families share the work of growing in knowledge, character, and faith.'},
    {src:'students-outside-the-school',alt:'Students gathered outside Cor Deo Christian Academy',category:'COME MEET US',title:'Picture your next chapter here.',story:'A photograph is just a beginning. Visit campus, meet the principal, and ask the questions that matter to your family.'},
    {src:'student-on-playground-rings',alt:'A student reaching for rings on the school playground',category:'A LITTLE COURAGE',title:'Reach a little further.',story:'School days include everyday chances to try, play, and spend time together.'},
    {src:'boys-in-the-gym',alt:'Five students smiling together in the school gym',category:'ROOM FOR FRIENDSHIP',title:'A place among friends.',story:'The school community is part of the experience: shared learning and shared moments across the week.'},
    {src:'game-in-the-gym',alt:'Cor Deo students taking part in a game in the gym',category:'TIME TOGETHER',title:'Room to play, too.',story:'A glimpse of students taking part in an activity together in the school gym.'},
    {src:'girl-on-the-slide',alt:'A Cor Deo student playing on a slide',category:'EVERYDAY JOY',title:'The little moments matter.',story:'A school is made up of many moments. Come visit and experience the community for yourself.'}
  ];
  let index = 0;
  const image = document.getElementById('tour-image');
  const scene = dialog.querySelector('.tour-scene');
  function showPhoto(next) {
    index = (next + photos.length) % photos.length;
    const photo = photos[index];
    image.src = `assets/${photo.src}.jpg`;
    image.alt = photo.alt;
    document.getElementById('tour-category').textContent = photo.category;
    document.getElementById('tour-caption').textContent = photo.title;
    document.getElementById('tour-story').textContent = photo.story;
    document.getElementById('tour-position').textContent = `Photo ${index + 1} of ${photos.length}`;
    scene.classList.remove('is-changing');
    if (!motion.matches) requestAnimationFrame(() => { if (dialog.open) scene.classList.add('is-changing'); });
  }
  function openTour(start = 0) {
    showPhoto(start);
    dialog.showModal();
    document.body.classList.add('tour-is-open');
  }
  document.querySelectorAll('[data-open-tour]').forEach(button => button.addEventListener('click', () => openTour(Number(button.dataset.tourStart) || 0)));
  dialog.querySelector('[data-close-tour]').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => document.body.classList.remove('tour-is-open'));
  dialog.querySelector('[data-tour-next]').addEventListener('click', () => showPhoto(index + 1));
  dialog.querySelector('[data-tour-previous]').addEventListener('click', () => showPhoto(index - 1));
  dialog.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight') { event.preventDefault(); showPhoto(index + 1); }
    if (event.key === 'ArrowLeft') { event.preventDefault(); showPhoto(index - 1); }
  });
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
  document.querySelectorAll('.gallery figure').forEach(figure => {
    const img = figure.querySelector('img');
    const start = photos.findIndex(photo => img.getAttribute('src').includes(photo.src));
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'gallery-photo-button';
    button.setAttribute('aria-label', `Explore photo: ${img.alt}`);
    button.setAttribute('aria-haspopup', 'dialog');
    figure.prepend(button);
    button.append(img);
    button.addEventListener('click', () => openTour(Math.max(0, start)));
  });
})();
