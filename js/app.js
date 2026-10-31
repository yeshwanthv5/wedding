/**
 * ANKITHA & YESHWANTH WEDDING WEBSITE
 * California Light Luxury Experience
 */

const WEDDING_DATE = new Date('2026-11-26T09:20:00-08:00'); // Nov 26, 2026, 9:20 AM PST

// ==========================================================================
// COUNTDOWN TIMER
// ==========================================================================
function initCountdown() {
  const daysEl = document.getElementById('count-days');
  const hoursEl = document.getElementById('count-hours');
  const minutesEl = document.getElementById('count-minutes');
  const secondsEl = document.getElementById('count-seconds');

  if (!daysEl) return;

  function update() {
    const now = new Date().getTime();
    const target = WEDDING_DATE.getTime();
    const diff = target - now;

    if (diff <= 0) {
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minutesEl.textContent = '00';
      secondsEl.textContent = '00';
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

// ==========================================================================
// BACKGROUND FLOATING CELEBRATION SPARKLES (Gentle California Sunlight)
// ==========================================================================
function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const petals = [];
  const count = 38;

  // Traditional Indian Wedding Flower Petal Palette:
  // - Saffron Marigold (బంతి పువ్వు)
  // - Golden Marigold / Turmeric Yellow
  // - Pure Fragrant Jasmine White (మల్లె పువ్వు)
  // - Sacred Kumkum Crimson Rose (ఎర్ర గులాబీ)
  // - Tender Mango Leaf Green
  const petalPresets = [
    { type: 'marigold', color: '#f58220', size: 6.5 },
    { type: 'marigold', color: '#ffb703', size: 5.5 },
    { type: 'jasmine',  color: '#ffffff', size: 5.0 },
    { type: 'jasmine',  color: '#fdfbf7', size: 4.5 },
    { type: 'rose',     color: '#9e1b32', size: 6.0 },
    { type: 'leaf',     color: '#2d8a3e', size: 5.0 }
  ];

  for (let i = 0; i < count; i++) {
    const preset = petalPresets[Math.floor(Math.random() * petalPresets.length)];
    petals.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: preset.size * (Math.random() * 0.5 + 0.75),
      type: preset.type,
      color: preset.color,
      speedY: Math.random() * 0.55 + 0.35,
      speedX: (Math.random() - 0.5) * 0.35,
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.025,
      swing: Math.random() * 1.8 + 0.8,
      angle: Math.random() * Math.PI * 2,
      opacity: Math.random() * 0.35 + 0.3
    });
  }

  function drawPetal(p) {
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rotation);
    ctx.fillStyle = p.color;
    ctx.globalAlpha = p.opacity;

    ctx.beginPath();
    if (p.type === 'marigold') {
      // Elongated ruffled marigold petal
      ctx.moveTo(0, -p.size * 1.3);
      ctx.quadraticCurveTo(p.size * 0.85, -p.size * 0.4, p.size * 0.5, p.size * 0.85);
      ctx.quadraticCurveTo(0, p.size * 1.3, -p.size * 0.5, p.size * 0.85);
      ctx.quadraticCurveTo(-p.size * 0.85, -p.size * 0.4, 0, -p.size * 1.3);
    } else if (p.type === 'jasmine') {
      // Delicate oval jasmine bud petal
      ctx.ellipse(0, 0, p.size * 0.45, p.size * 1.1, 0, 0, Math.PI * 2);
    } else if (p.type === 'rose') {
      // Gentle heart-shaped rose petal
      ctx.moveTo(0, p.size);
      ctx.bezierCurveTo(-p.size, p.size * 0.3, -p.size * 1.05, -p.size * 0.6, 0, -p.size);
      ctx.bezierCurveTo(p.size * 1.05, -p.size * 0.6, p.size, p.size * 0.3, 0, p.size);
    } else {
      // Mango leaf / slender green accent
      ctx.moveTo(0, -p.size * 1.25);
      ctx.quadraticCurveTo(p.size * 0.55, 0, 0, p.size * 1.25);
      ctx.quadraticCurveTo(-p.size * 0.55, 0, 0, -p.size * 1.25);
    }
    ctx.fill();
    ctx.restore();
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    for (let p of petals) {
      p.angle += 0.015;
      p.x += Math.sin(p.angle) * p.swing * 0.35 + p.speedX;
      p.y += p.speedY;
      p.rotation += p.rotSpeed;

      drawPetal(p);

      if (p.y > height + 25) {
        p.y = -25;
        p.x = Math.random() * width;
      }
      if (p.x < -25) p.x = width + 25;
      if (p.x > width + 25) p.x = -25;
    }
    requestAnimationFrame(render);
  }
  render();
}

// ==========================================================================
// .ICS CALENDAR INVITE GENERATOR (Apple, Google, Outlook)
// Time Block: 7:00 AM - 4:00 PM PST (Thursday, Nov 26, 2026)
// ==========================================================================
function downloadCalendarInvite() {
  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Ankitha and Yeshwanth//Wedding Celebration//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VTIMEZONE',
    'TZID:America/Los_Angeles',
    'BEGIN:STANDARD',
    'DTSTART:20261101T020000',
    'RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU',
    'TZOFFSETFROM:-0700',
    'TZOFFSETTO:-0800',
    'TZNAME:PST',
    'END:STANDARD',
    'END:VTIMEZONE',
    'BEGIN:VEVENT',
    'UID:ankitha-yeshwanth-wedding-2026@wedding.local',
    'DTSTAMP:20261028T000000Z',
    'DTSTART;TZID=America/Los_Angeles:20261126T070000',
    'DTEND;TZID=America/Los_Angeles:20261126T160000',
    'SUMMARY:Ankitha & Yeshwanth Wedding Celebration (కల్యాణ మహోత్సవం)',
    'DESCRIPTION:You are cordially invited to celebrate the auspicious Telugu wedding celebration of Ankitha and Yeshwanth at Stemple Creek Ranch in Tomales, California.\\n\\nTime Block: 7:00 AM - 4:00 PM PST\\n• 8:00 AM – 8:30 AM: Welcome & Breakfast (ఎదురుకోలు స్వాగతం & అల్పాహారం • Ranch Courtyard)\\n• 8:30 AM – 10:30 AM: Wedding Ceremony (కల్యాణ మహోత్సవం • Auspicious Muhurtham 9:20 AM - 10:20 AM • Courtyard Mandapam)\\n• 10:30 AM – 11:30 AM: Ashirvad & Photos (ఆశీర్వాదం & ఫొటోలు • Courtyard Mandapam)\\n• 11:30 AM – 3:00 PM: Lunch & Reception (కల్యాణ విందు భోజనం • Historic Timber Barn)\\n• 3:00 PM: Wrap Up & Farewell (Ranch Courtyard)\\n\\nLocation: Stemple Creek Ranch, 900 Burbank Ln, Tomales, CA 94971\\n\\nRSVP: https://forms.gle/UVwjsUtFKT6nmSxG8',
    'LOCATION:Stemple Creek Ranch\\, 900 Burbank Ln\\, Tomales\\, CA 94971\\, USA',
    'STATUS:CONFIRMED',
    'TRANSP:OPAQUE',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Ankitha_Yeshwanth_Wedding_Invite.ics';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// ==========================================================================
// NAVIGATION & EVENT LISTENERS
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initCountdown();
  initParticles();

  // Add to Calendar buttons (.ics)
  document.querySelectorAll('.btn-add-calendar').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      downloadCalendarInvite();
    });
  });

  // Sticky navbar scroll styling
  const nav = document.querySelector('.site-nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav?.classList.add('scrolled');
    } else {
      nav?.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.querySelector('.nav-links');
  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
    });
    // Close on link click
    navLinks.querySelectorAll('a').forEach(l => {
      l.addEventListener('click', () => navLinks.classList.remove('mobile-open'));
    });
  }
});
