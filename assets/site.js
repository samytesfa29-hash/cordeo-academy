'use strict';
// No dependencies, trackers, API keys, or server required.
document.documentElement.classList.remove('no-js');
const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
$$('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
const toggle = $('.menu-toggle');
const nav = $('#main-nav');
function setMenu(open) {
  toggle?.setAttribute('aria-expanded', String(open));
  nav?.classList.toggle('is-open', open);
  document.body.classList.toggle('menu-is-open', open);
  document.querySelector('main')?.toggleAttribute('inert', open);
  document.querySelector('footer')?.toggleAttribute('inert', open);
}
function closeMenu(focus = false) {
  setMenu(false);
  if (focus) toggle?.focus();
}
toggle?.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  setMenu(open);
});
document.addEventListener('keydown', e => {
  if (toggle?.getAttribute('aria-expanded') !== 'true') return;
  if (e.key === 'Escape') { e.preventDefault(); closeMenu(true); }
  if (e.key === 'Tab') {
    const items = [toggle, ...$$('a', nav)].filter(el => el.getClientRects().length);
    const first = items[0], last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
});
document.addEventListener('click', e => { if (!e.target.closest('.site-header')) closeMenu(); });
nav?.addEventListener('click', e => { if (e.target.closest('a')) closeMenu(); });
window.matchMedia('(min-width:901px)').addEventListener('change', () => closeMenu());
$$('[data-week-widget]').forEach(widget => {
  const tabs = $$('[role=tab]', widget), panels = $$('[role=tabpanel]', widget);
  function activate(index, focus) {
    tabs.forEach((tab, i) => { tab.setAttribute('aria-selected', String(i === index)); tab.tabIndex = i === index ? 0 : -1; panels[i].hidden = i !== index; });
    if (focus) tabs[index].focus();
  }
  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => activate(i, false));
    tab.addEventListener('keydown', e => {
      let n;
      if (e.key === 'ArrowRight') n = (i + 1) % tabs.length;
      if (e.key === 'ArrowLeft') n = (i - 1 + tabs.length) % tabs.length;
      if (e.key === 'Home') n = 0;
      if (e.key === 'End') n = tabs.length - 1;
      if (n !== undefined) { e.preventDefault(); activate(n, true); }
    });
  });
});
// ISO dates are compared as strings, using Portland's local calendar date.
function portlandDate() {
  const parts = new Intl.DateTimeFormat('en-US', {timeZone:'America/Los_Angeles', year:'numeric', month:'2-digit', day:'2-digit'}).formatToParts(new Date());
  const get = type => parts.find(p => p.type === type).value;
  return `${get('year')}-${get('month')}-${get('day')}`;
}
const today = portlandDate();
const upcoming = $('[data-upcoming]');
if (upcoming) {
  const rows = $$('[data-event-date]', upcoming);
  let count = 0;
  rows.forEach(row => { row.hidden = row.dataset.eventEnd < today || count >= 3; if (!row.hidden) count++; });
  if (!count) { const p = document.createElement('p'); p.textContent = 'The published school year has ended. Contact the office for the next calendar.'; upcoming.append(p); }
}
$$('[data-filter]').forEach(button => button.addEventListener('click', () => {
  const filter = button.dataset.filter;
  $$('[data-filter]').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
  const events = $$('#school-events [data-event-date]');
  let count = 0;
  events.forEach(row => { row.hidden = filter === 'upcoming' ? row.dataset.eventEnd < today : filter === 'breaks' ? row.dataset.eventType !== 'No school' : false; if (!row.hidden) count++; });
  const empty = $('.calendar-empty'); if (empty) empty.hidden = count > 0;
  const status = $('[data-calendar-status]'); if (status) status.textContent = `Showing ${count} ${filter === 'all' ? 'school-year' : filter === 'breaks' ? 'no-school' : 'upcoming'} dates.`;
}));
const estimator = $('[data-estimator]');
if (estimator) {
  const money = new Intl.NumberFormat('en-US', {style:'currency',currency:'USD',maximumFractionDigits:0});
  function estimate() {
    const k6 = Number($('#k6-count').value), upper = Number($('#upper-count').value);
    const rates = [...Array(k6).fill(6200), ...Array(upper).fill(6325)].sort((a,b) => b-a);
    const total = rates.reduce((sum, rate, i) => sum + rate * (i === 0 ? 1 : i === 1 ? .9 : .8), 0);
    $('[data-estimate-total]').textContent = money.format(total);
    $('[data-estimate-note]').textContent = rates.length ? `${rates.length} student${rates.length > 1 ? 's' : ''}. Before additional fees; discount application must be confirmed by the school.` : 'Select at least one student to estimate tuition.';
  }
  estimator.addEventListener('change', estimate);
  $('.estimate-form')?.addEventListener('submit', e => e.preventDefault());
  estimate();
}
const form = $('#contact-form');
if (form) {
  $('button[type="submit"]', form).disabled = false;
  const reason = new URLSearchParams(location.search).get('reason');
  if (['tour','enrollment','general'].includes(reason)) $('#reason').value = reason;
  form.addEventListener('submit', e => {
    e.preventDefault();
    for (const id of ['name', 'message']) {
      const input = document.getElementById(id);
      input.setCustomValidity(input.value.trim() ? '' : 'Please enter a name or message.');
    }
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const subject = {tour:'Campus tour request',enrollment:'Enrollment question',general:'Website inquiry'}[data.get('reason')] || 'Website inquiry';
    const body = `Hello Cor Deo,\n\n${String(data.get('message')).trim()}\n\nName: ${data.get('name')}\nEmail: ${data.get('email')}\nPhone: ${data.get('phone') || 'Not provided'}\nGrades of interest: ${data.get('grades') || 'Not provided'}\n\nThank you!`;
    $('#email-draft').value = `To: info@cordeoacademy.org\nSubject: ${subject}\n\n${body}`;
    $('#open-email').href = `mailto:info@cordeoacademy.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    $('#email-preview').hidden = false;
    $('#email-draft').focus();
  });
  form.addEventListener('input', e => { if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) e.target.setCustomValidity(''); });
  $('#copy-email').addEventListener('click', async () => {
    try { await navigator.clipboard.writeText($('#email-draft').value); $('#copy-status').textContent = 'Copied. Paste this draft into your email app to send it.'; }
    catch { $('#email-draft').focus(); $('#email-draft').select(); $('#copy-status').textContent = 'Select the draft above and use Copy in your browser or keyboard.'; }
  });
}
