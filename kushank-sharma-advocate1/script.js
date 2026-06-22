let currentSlide = 0;
const slides = document.querySelectorAll('.hero-bg-slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  if (!slides.length) return;
  currentSlide = (index + slides.length) % slides.length;
  slides.forEach((slide, i) => slide.classList.toggle('active', i === currentSlide));
  dots.forEach((dot, i) => dot.classList.toggle('active', i === currentSlide));
}
function nextSlide(){ showSlide(currentSlide + 1); }
function prevSlide(){ showSlide(currentSlide - 1); }
function setSlide(index){ showSlide(index); }
if (slides.length) setInterval(nextSlide, 5500);

function acceptDisclaimer(){
  localStorage.setItem('legalbysharma_disclaimer','accepted');
  const d = document.getElementById('disclaimer');
  if (d) d.classList.add('hidden');
}
const disclaimer = document.getElementById('disclaimer');
if (disclaimer && localStorage.getItem('legalbysharma_disclaimer') === 'accepted') disclaimer.classList.add('hidden');

function toggleMenu(){
  const menu = document.getElementById('menu');
  if (menu) menu.classList.toggle('open');
}

document.querySelectorAll('nav a').forEach(a=>{
  a.addEventListener('click',()=>{
    const menu=document.getElementById('menu');
    if(menu) menu.classList.remove('open');
  });
});

function sendWhatsApp(event){
  event.preventDefault();
  const name = document.getElementById('name')?.value.trim() || '';
  const phone = document.getElementById('phone')?.value.trim() || '';
  const matter = document.getElementById('matter')?.value || '';
  const message = document.getElementById('message')?.value.trim() || '';
  const text = `Hello Advocate Kushank Sharma,%0A%0AI need legal consultation.%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AMatter: ${encodeURIComponent(matter)}%0ADetails: ${encodeURIComponent(message)}`;
  window.open(`https://wa.me/918800205420?text=${text}`, '_blank');
}

const revealItems = document.querySelectorAll('section, .page-hero, .practice-card, .mini-card, .box, .court-panel, .offer-box, .map-grid, .article-card, .large-cta');
revealItems.forEach(item => item.classList.add('reveal'));

const floatingItems = document.querySelectorAll('.practice-card, .mini-card, .box, .court-panel, .offer-box, .advocate-hero-card, .article-card');
floatingItems.forEach(item => item.classList.add('float-card'));

const revealObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add('show');
  });
},{threshold:.12});

document.querySelectorAll('.reveal').forEach(item=>revealObserver.observe(item));

document.querySelectorAll('#year').forEach(y=>y.textContent = new Date().getFullYear());
