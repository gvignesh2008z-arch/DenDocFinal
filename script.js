/* ============================= DATA ============================= */
const SERVICES = [
  {icon:'stethoscope', title:'General Dentistry', desc:'Comprehensive checkups, cleanings, and preventive care for the whole family.'},
  {icon:'anchor', title:'Dental Implants', desc:'Titanium-precision implants restoring full function and a natural look.'},
  {icon:'activity', title:'Root Canal', desc:'Painless, single-visit root canal therapy using rotary endodontics.'},
  {icon:'align-center', title:'Orthodontics', desc:'Traditional braces and modern alignment systems for every age.'},
  {icon:'sparkles', title:'Cosmetic Dentistry', desc:'Bespoke smile design blending art, symmetry, and dental science.'},
  {icon:'sun', title:'Teeth Whitening', desc:'Clinically proven whitening for a brighter smile in one session.'},
  {icon:'gem', title:'Dental Veneers', desc:'Ultra-thin porcelain veneers custom-shaded to your natural teeth.'},
  {icon:'baby', title:'Pediatric Dentistry', desc:'Gentle, playful care designed specifically for younger smiles.'},
  {icon:'siren', title:'Emergency Dental Care', desc:'Same-day emergency appointments, every day of the week.'},
  {icon:'move', title:'Invisible Aligners', desc:'Discreet, removable aligners for a confident straightening journey.'},
];

const WHY = [
  {icon:'cpu', title:'Latest Technology', desc:'CBCT imaging, AI diagnostics, and digital scanning as standard.'},
  {icon:'award', title:'Experienced Doctors', desc:'Specialists trained at internationally recognized dental institutes.'},
  {icon:'feather', title:'Pain-Free Treatment', desc:'Advanced anesthesia protocols for a genuinely comfortable visit.'},
  {icon:'scan', title:'Digital X-Rays', desc:'90% less radiation than traditional film, instant results.'},
  {icon:'shield', title:'Sterilized Equipment', desc:'Hospital-grade sterilization for every instrument, every patient.'},
  {icon:'gem', title:'Affordable Luxury', desc:'Premium care with transparent, itemized, no-surprise pricing.'},
  {icon:'calendar-clock', title:'Flexible Appointments', desc:'Early morning, evening, and weekend slots available.'},
  {icon:'life-buoy', title:'Emergency Support', desc:'A dedicated line for urgent dental concerns, 24/7.'},
];

const DOCTORS = [
  {name:'Dr. Elena Marchetti', role:'Cosmetic & Aesthetic Dentistry', exp:'14 yrs experience', img:'https://randomuser.me/api/portraits/women/65.jpg'},
  {name:'Dr. Aiden Cole', role:'Implants & Oral Surgery', exp:'18 yrs experience', img:'https://randomuser.me/api/portraits/men/32.jpg'},
  {name:'Dr. Sofia Reyes', role:'Orthodontics', exp:'11 yrs experience', img:'https://randomuser.me/api/portraits/women/44.jpg'},
  {name:'Dr. Marcus Webb', role:'Pediatric Dentistry', exp:'9 yrs experience', img:'https://randomuser.me/api/portraits/men/76.jpg'},
];

const TECH = [
  {icon:'scan-line', title:'CBCT Scan', desc:'3D imaging for precise implant and root canal planning.'},
  {icon:'smile', title:'Digital Smile Design', desc:'Preview your new smile before treatment begins.'},
  {icon:'zap', title:'Laser Dentistry', desc:'Faster healing, minimal discomfort, virtually silent.'},
  {icon:'camera', title:'Intraoral Scanner', desc:'No messy impressions — just a quick digital scan.'},
  {icon:'brain-circuit', title:'AI Diagnosis', desc:'Machine-assisted detection for early-stage issues.'},
];

const TESTIMONIALS = [
  {name:'Priya Nair', role:'Verified Patient', quote:'The most comfortable dental experience I have ever had — the whole team explained every step before doing it.', img:'https://randomuser.me/api/portraits/women/68.jpg'},
  {name:'Rahul Menon', role:'Verified Patient', quote:'My implants healed faster than expected. Genuinely felt like a five-star clinic, not a hospital.', img:'https://randomuser.me/api/portraits/men/54.jpg'},
  {name:'Ananya Iyer', role:'Verified Patient', quote:'The Digital Smile Design preview sold me instantly — the veneers matched exactly what I saw beforehand.', img:'https://randomuser.me/api/portraits/women/21.jpg'},
  {name:'Karthik Suresh', role:'Verified Patient', quote:'Booked an emergency slot on a Sunday and was seen within the hour. Outstanding care.', img:'https://randomuser.me/api/portraits/men/12.jpg'},
];

const FAQS = [
  {q:'Do you offer painless treatment options?', a:'Yes — we use advanced topical and injectable anesthesia protocols, along with laser dentistry where appropriate, to keep every procedure as comfortable as possible.'},
  {q:'How soon can I get an emergency appointment?', a:'Emergency slots are held open every single day. Call our 24/7 emergency line and our team will fit you in within hours, not days.'},
  {q:'Do you accept insurance or offer payment plans?', a:'We work with most major insurance providers and also offer flexible, transparent payment plans for larger treatments like implants or full smile makeovers.'},
  {q:'What technology do you use for diagnosis?', a:'CBCT 3D imaging, digital intraoral scanning, and AI-assisted diagnostics let us catch issues earlier and plan treatment with far greater precision than traditional X-rays alone.'},
  {q:'Is DenDoc suitable for children?', a:'Absolutely. Our pediatric specialist designs every visit to be gentle and reassuring, with a dedicated, playful environment for younger patients.'},
];

/* ============================= LUCIDE ICON RENDER ============================= */
function iconSVG(name){
  const el = document.createElement('i');
  el.setAttribute('data-lucide', name);
  return el.outerHTML;
}

/* ============================= BUILD: SERVICES ============================= */
const servicesGrid = document.getElementById('servicesGrid');
SERVICES.forEach((s,i)=>{
  const el = document.createElement('div');
  el.className = 'service-card reveal reveal-delay-' + ((i%3)+1);
  el.innerHTML = `
    <div class="service-icon">${iconSVG(s.icon)}</div>
    <h3>${s.title}</h3>
    <p>${s.desc}</p>
    <a href="#appointment" class="service-link">Learn More
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
    </a>`;
  servicesGrid.appendChild(el);
});

/* ============================= BUILD: WHY ============================= */
const whyItems = document.getElementById('whyItems');
WHY.forEach((w,i)=>{
  const el = document.createElement('div');
  el.className = 'why-item reveal';
  el.innerHTML = `
    <div class="why-dot">${iconSVG(w.icon)}</div>
    <h4>${w.title}</h4>
    <p>${w.desc}</p>`;
  whyItems.appendChild(el);
});

/* ============================= BUILD: DOCTORS ============================= */
const doctorsGrid = document.getElementById('doctorsGrid');
DOCTORS.forEach((d,i)=>{
  const el = document.createElement('div');
  el.className = 'doctor-card reveal reveal-delay-' + ((i%3)+1);
  el.innerHTML = `
    <div class="doctor-photo">
      <img src="${d.img}" alt="${d.name}">
      <div class="doctor-social">
        <a href="#" aria-label="LinkedIn">${iconSVG('linkedin')}</a>
        <a href="#" aria-label="Instagram">${iconSVG('instagram')}</a>
      </div>
    </div>
    <div class="doctor-info">
      <h4>${d.name}</h4>
      <span class="role">${d.role}</span>
      <p>${d.exp}</p>
      <a href="#appointment" class="doctor-book">Book Consultation</a>
    </div>`;
  doctorsGrid.appendChild(el);
});

/* ============================= BUILD: TECH ============================= */
const techGrid = document.getElementById('techGrid');
TECH.forEach((t,i)=>{
  const el = document.createElement('div');
  el.className = 'tech-card reveal reveal-delay-' + ((i%3)+1);
  el.innerHTML = `<div class="tech-icon">${iconSVG(t.icon)}</div><h4>${t.title}</h4><p>${t.desc}</p>`;
  techGrid.appendChild(el);
});

/* ============================= BUILD: TESTIMONIALS ============================= */
const testSlides = document.getElementById('testSlides');
const testDots = document.getElementById('testDots');
TESTIMONIALS.forEach((t,i)=>{
  const slide = document.createElement('div');
  slide.className = 'test-slide';
  slide.innerHTML = `
    <div class="test-card">
      <div class="test-stars">${'<svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.27 5.82 21 7 14.14l-5-4.87 6.91-1.01z"/></svg>'.repeat(5)}</div>
      <p class="test-quote">"${t.quote}"</p>
      <div class="test-person">
        <img src="${t.img}" alt="${t.name}">
        <div><b>${t.name}</b><span>${t.role}</span></div>
      </div>
    </div>`;
  testSlides.appendChild(slide);
  const dot = document.createElement('div');
  dot.className = 'test-dot' + (i===0?' active':'');
  dot.dataset.i = i;
  testDots.appendChild(dot);
});
let testIndex = 0;
function goTestimonial(i){
  testIndex = (i + TESTIMONIALS.length) % TESTIMONIALS.length;
  testSlides.style.transform = `translateX(-${testIndex*100}%)`;
  [...testDots.children].forEach((d,idx)=>d.classList.toggle('active', idx===testIndex));
}
document.getElementById('testPrev').addEventListener('click', ()=>goTestimonial(testIndex-1));
document.getElementById('testNext').addEventListener('click', ()=>goTestimonial(testIndex+1));
[...testDots.children].forEach(d=>d.addEventListener('click', ()=>goTestimonial(+d.dataset.i)));
setInterval(()=>goTestimonial(testIndex+1), 6000);

/* ============================= BUILD: FAQ ============================= */
const faqWrap = document.getElementById('faqWrap');
FAQS.forEach((f,i)=>{
  const item = document.createElement('div');
  item.className = 'faq-item';
  item.innerHTML = `
    <button class="faq-q"><span>${f.q}</span><span class="plus"></span></button>
    <div class="faq-a"><p>${f.a}</p></div>`;
  faqWrap.appendChild(item);
  const btn = item.querySelector('.faq-q');
  const ans = item.querySelector('.faq-a');
  btn.addEventListener('click', ()=>{
    const isOpen = item.classList.contains('open');
    faqWrap.querySelectorAll('.faq-item').forEach(other=>{
      other.classList.remove('open');
      other.querySelector('.faq-a').style.maxHeight = null;
    });
    if(!isOpen){
      item.classList.add('open');
      ans.style.maxHeight = ans.scrollHeight + 'px';
    }
  });
});

/* ============================= FOOTER SOCIAL ============================= */
const footerSocial = document.getElementById('footerSocial');
['instagram','facebook','linkedin','youtube'].forEach(name=>{
  const a = document.createElement('a');
  a.href = '#'; a.setAttribute('aria-label', name);
  a.innerHTML = iconSVG(name);
  footerSocial.appendChild(a);
});

/* ============================= ICONS FOR STATIC data-icon SPOTS ============================= */
document.querySelectorAll('[data-icon]').forEach(el=>{
  el.innerHTML = iconSVG(el.dataset.icon);
});

/* render all lucide icons now that markup exists */
lucide.createIcons();

/* ============================= LOADER ============================= */
window.addEventListener('load', ()=>{
  setTimeout(()=>document.getElementById('loader').classList.add('hide'), 500);
});

/* ============================= NAV SCROLL / MOBILE ============================= */
const navEl = document.querySelector('nav.nav-links');
const headerEl = document.querySelector('header');
const navLinks = document.getElementById('navLinks');
const mobileToggle = document.getElementById('mobileToggle');
mobileToggle.innerHTML = iconSVG('menu');
lucide.createIcons();
mobileToggle.addEventListener('click', ()=>{
  navLinks.classList.toggle('open');
  mobileToggle.innerHTML = iconSVG(navLinks.classList.contains('open') ? 'x' : 'menu');
  lucide.createIcons();
});
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click', ()=>{
  navLinks.classList.remove('open');
  mobileToggle.innerHTML = iconSVG('menu');
  lucide.createIcons();
}));

function onScroll(){
  const y = window.scrollY;
  navEl.classList.toggle('scrolled', y > 40);

  // scroll progress + thread
  const h = document.documentElement.scrollHeight - window.innerHeight;
  const pct = h > 0 ? (y / h) * 100 : 0;
  document.getElementById('scroll-progress').style.width = pct + '%';
  document.getElementById('thread-fill').style.height = pct + '%';
  document.getElementById('thread-dot').style.top = pct + '%';

  // to-top button
  document.getElementById('toTop').classList.toggle('show', y > 600);
}
document.addEventListener('scroll', onScroll, {passive:true});
onScroll();
document.getElementById('toTop').addEventListener('click', ()=>window.scrollTo({top:0, behavior:'smooth'}));

/* ============================= CURSOR ============================= */
const glow = document.getElementById('cursor-glow');
const dot = document.getElementById('cursor-dot');
const ring = document.getElementById('cursor-ring');
window.addEventListener('mousemove', (e)=>{
  glow.style.left = e.clientX+'px'; glow.style.top = e.clientY+'px';
  dot.style.left = e.clientX+'px'; dot.style.top = e.clientY+'px';
  ring.style.left = e.clientX+'px'; ring.style.top = e.clientY+'px';
});
document.querySelectorAll('a,button,.faq-q').forEach(el=>{
  el.addEventListener('mouseenter', ()=>{ ring.style.width='54px'; ring.style.height='54px'; ring.style.opacity='0.5'; });
  el.addEventListener('mouseleave', ()=>{ ring.style.width='34px'; ring.style.height='34px'; ring.style.opacity='1'; });
});

/* ============================= REVEAL ON SCROLL ============================= */
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){ entry.target.classList.add('in'); io.unobserve(entry.target); }
  });
}, {threshold:0.15});
revealEls.forEach(el=>io.observe(el));
// re-scan periodically for dynamically injected reveal elements
setTimeout(()=>document.querySelectorAll('.reveal:not(.in)').forEach(el=>io.observe(el)), 100);

/* ============================= COUNTERS ============================= */
const counters = document.querySelectorAll('[data-count]');
const counterIO = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      const el = entry.target;
      const target = parseFloat(el.dataset.count);
      const decimals = parseInt(el.dataset.decimal || '0');
      const suffix = el.dataset.suffix || '';
      let cur = 0;
      const step = target / 60;
      const tick = ()=>{
        cur += step;
        if(cur >= target){ el.textContent = target.toFixed(decimals) + suffix; return; }
        el.textContent = cur.toFixed(decimals) + suffix;
        requestAnimationFrame(tick);
      };
      tick();
      counterIO.unobserve(el);
    }
  });
}, {threshold:0.5});
counters.forEach(el=>counterIO.observe(el));

/* ============================= BEFORE / AFTER SLIDER ============================= */
const baSlider = document.getElementById('baSlider');
const baBeforeWrap = document.getElementById('baBeforeWrap');
const baHandle = document.getElementById('baHandle');
let dragging = false;
function setBaPos(clientX){
  const rect = baSlider.getBoundingClientRect();
  let pct = ((clientX - rect.left) / rect.width) * 100;
  pct = Math.max(4, Math.min(96, pct));
  baBeforeWrap.style.width = pct + '%';
  baHandle.style.left = pct + '%';
}
baHandle.addEventListener('mousedown', ()=>dragging=true);
window.addEventListener('mouseup', ()=>dragging=false);
window.addEventListener('mousemove', (e)=>{ if(dragging) setBaPos(e.clientX); });
baHandle.addEventListener('touchstart', ()=>dragging=true, {passive:true});
window.addEventListener('touchend', ()=>dragging=false);
window.addEventListener('touchmove', (e)=>{ if(dragging) setBaPos(e.touches[0].clientX); }, {passive:true});
baSlider.addEventListener('click', (e)=>{ if(e.target===baHandle) return; setBaPos(e.clientX); });

const baSets = {
  1:{before:'photo-1570840934347-4dc56c98b8ef', after:'photo-1494790108377-be9c29b29330'},
  2:{before:'photo-1580465446361-8aae5321522b', after:'photo-1499313843378-eebdb187f629'},
  3:{before:'photo-1599566219227-2efe0c9b7f5f', after:'photo-1545803928-04e3f4cdd4ed'},
};
document.querySelectorAll('.ba-tab').forEach(tab=>{
  tab.addEventListener('click', ()=>{
    document.querySelectorAll('.ba-tab').forEach(t=>t.classList.remove('active'));
    tab.classList.add('active');
    const set = baSets[tab.dataset.set];
    document.querySelector('.ba-after').src = `https://images.unsplash.com/${set.after}?fm=jpg&q=80&w=1000&auto=format&fit=crop`;
    baBeforeWrap.querySelector('img').src = `https://images.unsplash.com/${set.before}?fm=jpg&q=80&w=1000&auto=format&fit=crop`;
  });
});

/* ============================= THEME TOGGLE ============================= */
const themeToggle = document.getElementById('themeToggle');
themeToggle.innerHTML = iconSVG('moon');
lucide.createIcons();
let isDark = false;
themeToggle.addEventListener('click', ()=>{
  isDark = !isDark;
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  themeToggle.innerHTML = iconSVG(isDark ? 'sun' : 'moon');
  lucide.createIcons();
});

/* ============================= RIPPLE BUTTONS ============================= */
document.querySelectorAll('[data-ripple]').forEach(btn=>{
  btn.addEventListener('click', function(e){
    const rect = this.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.className = 'btn-ripple';
    ripple.style.left = (e.clientX - rect.left) + 'px';
    ripple.style.top = (e.clientY - rect.top) + 'px';
    ripple.style.width = ripple.style.height = Math.max(rect.width, rect.height) + 'px';
    this.appendChild(ripple);
    setTimeout(()=>ripple.remove(), 650);
  });
});

/* ============================= FORM SUBMIT ============================= */
document.getElementById('apptForm').addEventListener('submit', function(e){
  e.preventDefault();
  this.style.display = 'none';
  document.getElementById('formSuccess').classList.add('show');
});

/* ============================= NEWSLETTER ============================= */
document.getElementById('newsletterBtn').addEventListener('click', (e)=>{
  e.preventDefault();
  const input = document.querySelector('.newsletter input');
  if(input.value.trim()){
    input.value = '';
    input.placeholder = 'Thank you for joining!';
  }
});

/* ============================= YEAR ============================= */
document.getElementById('year').textContent = new Date().getFullYear();
