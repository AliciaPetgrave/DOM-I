const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Images
const circleImg = document.getElementById('cta-img');
circleImg.src = 'img/header-img.png'

const midImg = document.getElementById('middle-img');
midImg.src = 'img/mid-page-accent.jpg'

//Links
const links = document.querySelectorAll('a');
links[0].textContent = "Services";
links[1].textContent = "Product";
links[2].textContent = "Vision";
links[3].textContent = "Features";
links[4].textContent = "About";
links[5].textContent = "Contact";


// New Links
const newLink = document.querySelector('nav');
const first = document.createElement('a')
first.textContent = "Hello"
newLink.prepend(first);

const anotherLink = document.querySelector('nav');
const second = document.createElement('a')
second.textContent = "Goodbye"
newLink.appendChild(second);

//Link Color
const navLinkColor = document.querySelectorAll('a');
navLinkColor.forEach(newColor => newColor.style.color = 'green');


//Header
const header = document.querySelector('h1');
header.textContent = "DOM IS AWESOME";

//Button
const prettybutton = document.querySelector('button');
prettybutton.textContent = 'Get Started';

//Paragraphs
const features = document.querySelectorAll('h4');
features[0].textContent = "Features";
features[1].textContent = "About";
features[2].textContent = "Services";
features[3].textContent = "Product";
features[4].textContent = "Vision";
features[5].textContent = "Contact"

const parag = document.querySelectorAll('p');
parag[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
parag[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
parag[2].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
parag[3].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
parag[4].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

//Contact
const contactInfo = document.querySelector('.contact');
contactInfo.textContact = 'Contact';

const contactInfoTwo = document.querySelectorAll('.contact p');
contactInfoTwo[0].textContent = "123 Way 456 Street Somewhere, USA";
contactInfoTwo[1].textContent = "1 (888) 888-8888";
contactInfoTwo[2].textContent = "sales@greatidea.io";

//Footer
const copyright = document.querySelector('footer');
copyright.textContent = "Copyright Great Idea! 2018";