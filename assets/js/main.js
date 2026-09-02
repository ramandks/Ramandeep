/* Orbo Flow — site interactions. No dependencies. */
(function () {
  'use strict';

  var onReady = function (fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  };

  /* ---------- Sticky header shadow ---------- */
  function initHeader() {
    var header = document.querySelector('.site-header');
    if (!header) return;
    var apply = function () { header.classList.toggle('is-stuck', window.scrollY > 6); };
    apply();
    window.addEventListener('scroll', apply, { passive: true });
  }

  /* ---------- Desktop mega menus ---------- */
  function initMegaMenus() {
    var triggers = Array.prototype.slice.call(document.querySelectorAll('[data-mega-trigger]'));
    if (!triggers.length) return;
    var closeTimer = null;

    function closeAll(except) {
      triggers.forEach(function (t) {
        if (t === except) return;
        var panel = document.getElementById(t.getAttribute('aria-controls'));
        t.setAttribute('aria-expanded', 'false');
        if (panel) panel.setAttribute('data-open', 'false');
      });
    }

    function open(t) {
      window.clearTimeout(closeTimer);
      closeAll(t);
      var panel = document.getElementById(t.getAttribute('aria-controls'));
      t.setAttribute('aria-expanded', 'true');
      if (panel) panel.setAttribute('data-open', 'true');
    }

    function close(t) {
      var panel = document.getElementById(t.getAttribute('aria-controls'));
      t.setAttribute('aria-expanded', 'false');
      if (panel) panel.setAttribute('data-open', 'false');
    }

    // With a fine pointer the menu opens on hover, so a plain toggle would
    // close it again on the click of the very same gesture.
    var hoverPointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    triggers.forEach(function (t) {
      var li = t.closest('li');
      var panel = document.getElementById(t.getAttribute('aria-controls'));

      t.addEventListener('click', function (e) {
        e.preventDefault();
        // e.detail is 0 for keyboard activation, where toggling is expected.
        if (hoverPointer && e.detail > 0) { open(t); return; }
        if (t.getAttribute('aria-expanded') === 'true') close(t); else open(t);
      });
      if (li && hoverPointer) {
        li.addEventListener('mouseenter', function () { open(t); });
        li.addEventListener('mouseleave', function () {
          closeTimer = window.setTimeout(function () { close(t); }, 130);
        });
      }
      if (panel && hoverPointer) {
        panel.addEventListener('mouseenter', function () { window.clearTimeout(closeTimer); });
      }
      t.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') { close(t); t.blur(); }
      });
    });

    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeAll(null); });
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.nav-menu')) closeAll(null);
    });
  }

  /* ---------- Mobile navigation ---------- */
  function initMobileNav() {
    var burger = document.querySelector('.burger');
    var panel = document.getElementById('mobile-nav');
    if (!burger || !panel) return;

    burger.addEventListener('click', function () {
      var open = burger.getAttribute('aria-expanded') === 'true';
      burger.setAttribute('aria-expanded', String(!open));
      panel.classList.toggle('is-open', !open);
      document.body.style.overflow = !open ? 'hidden' : '';
    });

    panel.querySelectorAll('.m-toggle').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var open = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!open));
        var body = btn.nextElementSibling;
        if (body) body.classList.toggle('is-open', !open);
      });
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 1080 && panel.classList.contains('is-open')) {
        panel.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  /* ---------- FAQ accordions ---------- */
  function initFaq() {
    document.querySelectorAll('.faq-q').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var open = btn.getAttribute('aria-expanded') === 'true';
        var answer = document.getElementById(btn.getAttribute('aria-controls'));
        btn.setAttribute('aria-expanded', String(!open));
        if (answer) answer.classList.toggle('is-open', !open);
      });
    });
  }

  /* ---------- Reveal on scroll ---------- */
  function initReveal() {
    var items = document.querySelectorAll('.reveal');
    if (!items.length) return;
    if (!('IntersectionObserver' in window)) {
      items.forEach(function (el) { el.classList.add('in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });
    items.forEach(function (el, i) {
      el.style.transitionDelay = Math.min(i % 6, 5) * 55 + 'ms';
      io.observe(el);
    });
  }

  /* ---------- Animated counters ---------- */
  function initCounters() {
    var nodes = document.querySelectorAll('[data-count]');
    if (!nodes.length || !('IntersectionObserver' in window)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        io.unobserve(el);
        var target = parseFloat(el.getAttribute('data-count'));
        var prefix = el.getAttribute('data-prefix') || '';
        var suffix = el.getAttribute('data-suffix') || '';
        var decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
        // Counting up from zero reads as "0" for most of the run on small
        // targets (1M+, 4.9), so leave those at their rendered value.
        if (target < 10) return;
        var start = performance.now();
        var dur = 1300;
        (function step(now) {
          var p = Math.min((now - start) / dur, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          el.textContent = prefix + (target * eased).toFixed(decimals) + suffix;
          if (p < 1) requestAnimationFrame(step);
        })(start);
      });
    }, { threshold: 0.4 });
    nodes.forEach(function (n) { io.observe(n); });
  }

  /* ---------- Form validation (front-end demo) ---------- */
  function initForms() {
    document.querySelectorAll('form[data-validate]').forEach(function (form) {
      form.setAttribute('novalidate', 'novalidate');

      function fieldOf(input) { return input.closest('.field'); }

      function validate(input) {
        var wrap = fieldOf(input);
        if (!wrap) return true;
        var value = (input.value || '').trim();
        var ok = true;
        var message = '';

        if (input.hasAttribute('required') && !value) {
          ok = false; message = 'This field is required.';
        } else if (input.type === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) {
          ok = false; message = 'Enter a valid email address.';
        } else if (input.type === 'tel' && value && !/^[\d\s()+.\-]{6,}$/.test(value)) {
          ok = false; message = 'Enter a valid phone number.';
        }

        wrap.classList.toggle('err', !ok);
        var msg = wrap.querySelector('.msg');
        if (msg && !ok) msg.textContent = message;
        return ok;
      }

      form.querySelectorAll('input, select, textarea').forEach(function (input) {
        input.addEventListener('blur', function () { validate(input); });
        input.addEventListener('input', function () {
          var wrap = fieldOf(input);
          if (wrap && wrap.classList.contains('err')) validate(input);
        });
      });

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var inputs = Array.prototype.slice.call(form.querySelectorAll('input, select, textarea'));
        var valid = inputs.map(validate).every(Boolean);
        if (!valid) {
          var first = form.querySelector('.field.err input, .field.err select, .field.err textarea');
          if (first) first.focus();
          return;
        }
        var success = form.querySelector('.form-success');
        if (success) {
          success.classList.add('is-on');
          success.setAttribute('role', 'status');
          success.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        form.reset();
      });
    });
  }

  /* ---------- Current year ---------- */
  function initYear() {
    document.querySelectorAll('[data-year]').forEach(function (el) {
      el.textContent = String(new Date().getFullYear());
    });
  }

  onReady(function () {
    initHeader();
    initMegaMenus();
    initMobileNav();
    initFaq();
    initReveal();
    initCounters();
    initForms();
    initYear();
  });
})();
