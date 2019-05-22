const navslide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navlinks = document.querySelectorAll('.nav-links li');

  burger.addEventlistener('click', () => {
    nav.classList.toggle('nav-active');
  });

  navlinks.forEach((link,index) => {
    link.stylesheet.animation  = 'navlinkFade 0.5s ease forwards ${index /7 + 0.3}';
  })
}

ide();
