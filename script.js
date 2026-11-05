const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');

menu?.addEventListener('click', () => {
  const open = nav.classList.toggle('show');
  menu.setAttribute('aria-expanded', String(open));
  menu.textContent = open ? '×' : '☰';
});

nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('show');
  menu.setAttribute('aria-expanded', 'false');
  menu.textContent = '☰';
}));

document.querySelectorAll('.tile').forEach((tile) => tile.addEventListener('click', () => {
  const source = tile.querySelector('img');
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.setAttribute('role', 'dialog');
  lightbox.setAttribute('aria-modal', 'true');
  lightbox.innerHTML = `<button aria-label="Close image">×</button><img src="${source.src}" alt="${source.alt}">`;
  const close = () => lightbox.remove();
  lightbox.addEventListener('click', close);
  lightbox.querySelector('img').addEventListener('click', (event) => event.stopPropagation());
  lightbox.querySelector('button').addEventListener('click', close);
  document.body.append(lightbox);
  lightbox.querySelector('button').focus();
}));

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') document.querySelector('.lightbox')?.remove();
});

document.querySelector('.form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const firstName = new FormData(form).get('name')?.trim().split(/\s+/)[0] || 'there';
  const notice = form.querySelector('.formnote');
  notice.classList.add('success');
  notice.textContent = `Thanks, ${firstName}! Call us at (770) 560-2718 to finish your quote request.`;
  form.reset();
});
