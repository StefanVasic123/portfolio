const hero = document.querySelector('.hero');
// const particlesJS = document.querySelector('#particles-js');
const logo = document.querySelector('.logo');
const hamburger = document.querySelector('.menu');
const headline = document.querySelector('.headline');
const herobox = document.querySelector('#hero-box');

const tl = new TimelineMax();

tl.fromTo(hero, 1, {height: "0%"}, {height: "80%", ease: Power2.easeInOut})
.fromTo(
    hero, 
    3, 
    {width: "100%"}, 
    {width: "0%", ease: Power2.easeInOut},)
.fromTo(
    logo, 1.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=1.5")
.fromTo(
    hamburger, 1.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=1.5");






