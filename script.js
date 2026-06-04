/* ===========================
   NAV TOGGLE
=========================== */
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close mobile nav on link click
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

/* ===========================
   PUBLICATION FILTER
=========================== */
const filterBtns = document.querySelectorAll('.pf-btn');
const pubItems = document.querySelectorAll('.pub-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    pubItems.forEach(item => {
      if (filter === 'all' || item.dataset.type === filter) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

/* ===========================
   QUANTUM CANVAS ANIMATION
   Animated particle network evoking quantum entanglement
=========================== */
(function () {
  const canvas = document.getElementById('quantum-canvas');
  const ctx = canvas.getContext('2d');
  let W, H, particles, animId;

  const NUM_PARTICLES = 80;
  const CONNECT_DIST = 160;
  const PULSE_PERIOD = 220;

  function resize() {
    W = canvas.width = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  function randomColor() {
    const cols = ['rgba(126,184,247', 'rgba(167,139,250', 'rgba(52,211,153'];
    return cols[Math.floor(Math.random() * cols.length)];
  }

  function makeParticle() {
    return {
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: 1.5 + Math.random() * 2,
      col: randomColor(),
      phase: Math.random() * Math.PI * 2,
    };
  }

  function init() {
    resize();
    particles = Array.from({ length: NUM_PARTICLES }, makeParticle);
  }

  let frame = 0;

  function draw() {
    ctx.clearRect(0, 0, W, H);

    // Background gradient
    const grad = ctx.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, Math.max(W, H) * 0.7);
    grad.addColorStop(0, 'rgba(20,28,60,0.95)');
    grad.addColorStop(1, 'rgba(12,14,20,0.98)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);

    frame++;

    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CONNECT_DIST) {
          const alpha = (1 - dist / CONNECT_DIST) * 0.3;
          const pulse = 0.5 + 0.5 * Math.sin((frame + particles[i].phase * 30) / PULSE_PERIOD * Math.PI * 2);
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(126,184,247,${alpha * pulse})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }

    // Draw particles
    particles.forEach(p => {
      const pulse = 0.5 + 0.5 * Math.sin((frame + p.phase * 20) / 80);
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r * (0.8 + 0.3 * pulse), 0, Math.PI * 2);
      ctx.fillStyle = `${p.col},${0.6 + 0.4 * pulse})`;
      ctx.fill();

      // Glow
      const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 5);
      grd.addColorStop(0, `${p.col},${0.2 * pulse})`);
      grd.addColorStop(1, `${p.col},0)`);
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r * 5, 0, Math.PI * 2);
      ctx.fillStyle = grd;
      ctx.fill();

      // Move
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;
    });

    animId = requestAnimationFrame(draw);
  }

  window.addEventListener('resize', () => {
    cancelAnimationFrame(animId);
    resize();
    draw();
  });

  init();
  draw();
})();

/* ===========================
   SCROLL REVEAL
=========================== */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll(
  '.timeline-item, .research-card, .pub-item, .award-item, .talk-item, .about-bio p'
).forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(18px)';
  el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
  observer.observe(el);
});
