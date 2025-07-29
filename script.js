const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const aboutLink = document.getElementById('aboutLink');
const aboutModal = document.getElementById('aboutModal');
const aboutContent = document.querySelector('.modal-content');
const aboutClose = document.getElementById('aboutClose');

aboutLink.addEventListener('click', (e) => {
  e.preventDefault(); 
  aboutModal.style.display = 'flex'; // flex ile ortalanır
  setTimeout(() => {
    aboutContent.classList.add('active'); // animasyonla görünür
  }, 10);
});

aboutClose.addEventListener('click', () => {
  aboutContent.classList.remove('active'); // önce küçült
  setTimeout(() => {
    aboutModal.style.display = 'none'; // sonra gizle
  }, 300); // animasyon süresiyle aynı olmalı
});

window.addEventListener('click', (e) => {
  if (e.target === aboutModal) {
    aboutContent.classList.remove('active');
    setTimeout(() => {
      aboutModal.style.display = 'none';
    }, 300);
  }
});



registerLink.addEventListener('click', ()=>  {
    wrapper.classList.add('active');
})

loginLink.addEventListener('click', ()=>  {
    wrapper.classList.remove('active');
})

btnPopup.addEventListener('click', ()=>  {
    wrapper.classList.add('active-popup');
})

iconClose.addEventListener('click', ()=>  {
    wrapper.classList.remove('active-popup');
})
