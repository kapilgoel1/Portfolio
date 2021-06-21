window.onscroll = () => {
  const nav = document.querySelector('#navbar');
  const logo = document.querySelector('#logo');
  const link1 = document.querySelector('#link1');
  const link2 = document.querySelector('#link2');
  const link3 = document.querySelector('#link3');
  const link4 = document.querySelector('#link4');
  if (this.scrollY <= 10) {
    nav.className = '';
    link1.className = '';
    link2.className = '';
    link3.className = '';
    link4.className = '';
    logo.style.color = '#EEBBC3';
  } else {
    nav.className = 'scroll';
    link1.className = 'navbar-down';
    link2.className = 'navbar-down';
    link3.className = 'navbar-down';
    link4.className = 'navbar-down';
    logo.style.color = '#232946';
  }
};
