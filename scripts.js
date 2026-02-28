"use strict";

const header = document.getElementById("navbar");
const sticky = header.offsetTop;

window.onscroll = function () { lockNavBar() };

function lockNavBar() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

window.addEventListener('scroll', function () {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav.navbar-nav li');
  let currentSection = '';
  const scrollBottom = window.scrollY + window.innerHeight;
  const pageHeight = document.documentElement.scrollHeight;

  // If at the bottom of the page, pick the last section.
  if (scrollBottom >= pageHeight - 5) {
    currentSection = sections[sections.length - 1].getAttribute('id');
  }
  else {
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 80;
      if (window.scrollY >= sectionTop) {
        currentSection = section.getAttribute('id');
      }
    });
  }

  navLinks.forEach(li => {
    li.classList.remove('active');
    if (li.querySelector('a').getAttribute('href') === '#' + currentSection) {
      li.classList.add('active');
    }
  });
});

const text = "Hi! I'm Janne Niemelä. I'm a software developer from Oulu, Finland, specialized in Unity/C#, C++/Qt, and usability.";
const h1 = document.querySelector('#About h1');
const cursor = document.getElementById('cursor');
let i = 0;

h1.firstChild.textContent = '';

function type() {
  if (i < text.length) {
    h1.firstChild.textContent += text[i];
    i++;
    setTimeout(type, 20 + (Math.random() * 50 - 20));
  }
}

type();