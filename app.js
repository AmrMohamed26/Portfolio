var typed = new Typed(".auto-type", {
  strings: ["Web-Designer"],
  typeSpeed: 100,
  backSpeed: 80,
  loop: true,
});
var dialog = document.getElementById("contact");

function openContact() {
  dialog.showModal();
}
function closeContact() {
  dialog.close();
}
var div = document.getElementById("contact-me");
function openContactMe() {
  div.showModal();
}
function closeContactMe() {
  div.close();
}
const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");
btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
});
const testimonials = [
  {
    name: "Asaad Gafar",
    job: "Front-End Web Developer, CTI",
    image:
      "https://media.licdn.com/dms/image/C4D03AQFIRDEg1j1aEA/profile-displayphoto-shrink_800_800/0/1627201830641?e=1683158400&v=beta&t=SUrzC0W3QIw691760q3kWV_Om86pT7cZX3KRTbmb8Pg",
    testimonial:
      "Highly recommended for people interested in scaling their businesses 😊",
  },
  {
    name: "Nada Mohamed",
    job: "Android Developer, TraitQuest",
    image:
      "https://media.licdn.com/dms/image/C4E03AQG1HaW_exeLdA/profile-displayphoto-shrink_800_800/0/1652257781487?e=1683158400&v=beta&t=wUentBrGaq-ZnX2RBTTP3CnFCeqj62NFVh8onBlwwow",
    testimonial:
      "It was such pleasure working with Amr, his work is efficient and effective, he was dedicated to finish all the work on time with such high quality. More over his way of handling problems was astonishing. he is very decent and polit person when we talk about the communication level, and such a great person on the personal side.",
  },
  {
    name: "Abdullah Elwalid",
    job: "Backend Python developer, CTI",
    image:
      "https://media.licdn.com/dms/image/C4E03AQFOrFIBZJwqwQ/profile-displayphoto-shrink_800_800/0/1638598154817?e=1683158400&v=beta&t=AnbmgEHCw5PJzIe-7ARS59dQX7S7v5YCEK00aiqa_3k",
    testimonial:
      "Amr’s work is wonderful. I like how he handle variable changes to the project requirements.",
  },
  {
    name: "Kar Hoe Lee ",
    job: "Consultant, TRIIIO",
    image:
      "https://media.licdn.com/dms/image/C5603AQHjuaZDasvHvw/profile-displayphoto-shrink_400_400/0/1649078193604?e=1683158400&v=beta&t=D51KKyja_4g3aTavBpu9LzQ9tEcet40n1xNnfxwSUrQ",
    testimonial:
      "The work that Amr is doing is amazing, highly recommend those who are interest to work with Amr.",
  },
  {
    name: "Khaled Mohamed",
    job: "Performance Marketing Manager, Elfo",
    image:
      "https://media.licdn.com/dms/image/C5103AQHpL4vpojq40Q/profile-displayphoto-shrink_800_800/0/1579418936261?e=1683158400&v=beta&t=ZGJ6k4UnKBH4DxnB9dz6CWgccA_WOUWFTw3B7YMpgF8",
    testimonial:
      "He is Flexible and the work was delivered on time for a decent price.",
  },
  {
    name: "Ahmed Moh",
    job: "CEO & Team Leader, ART Development",
    image:
      "https://media.licdn.com/dms/image/C5603AQHhafTqC-zbPA/profile-displayphoto-shrink_400_400/0/1647945027869?e=1683158400&v=beta&t=Us4iy0qB6EBF0cMJ5EEShRumIeWScOaYpHPmfJ9bYTw",
    testimonial: "Great person to work with.",
  },
  {
    name: "Hasibul Islam ",
    job: "Deposit Executive, Zain's International",
    image:
      "https://media.licdn.com/dms/image/C4D03AQEplbNWj1t6Ig/profile-displayphoto-shrink_400_400/0/1619797172371?e=1683158400&v=beta&t=M_qLH50cKP3cBhw2LSOyLytnz9puXKoQ9ien8w4DpMk",
    testimonial:
      "Good work. we can belive him. so we can take help from him for our project according to requirment.",
  },
  {
    name: "Safa FathiSafa Fathi",
    job: "Accounting Assistant, Al Moulk Pharmacy",
    image:
      "https://media.licdn.com/dms/image/D4E03AQEuuesLaacFGA/profile-displayphoto-shrink_800_800/0/1677692086185?e=1683158400&v=beta&t=JalWQmEI_70Sw8Na--ZTL0IecGcroALit8KrjZ3la20",
    testimonial:
      "Working with Amr was such a good experience which I will always remember",
  },
  {
    name: "Malgazhdar ZhanatMalgazhdar Zhanat",
    job: "Security Operations Center Analyst, AKATI Sekurity",
    image:
      "https://media.licdn.com/dms/image/C5603AQG1OrUJ47PbdQ/profile-displayphoto-shrink_400_400/0/1606313335502?e=1683158400&v=beta&t=8P6g9vSNA0nzCyZWmYMoc6TTqho7qVqzuaTX61Nk8FE",
    testimonial:
      "Amr is a great developer with passion, great experience and knowledge in coding. Highly recommended",
  },
  {
    name: "Mohamed JasirMohamed Jasir",
    job: "Real Estate Consultant, Primrose Real Estate",
    image:
      "https://media.licdn.com/dms/image/C5603AQGNH9toUrQMVg/profile-displayphoto-shrink_400_400/0/1664211800405?e=1683158400&v=beta&t=MGNh1DBs-Pffp9yd94lVc_NW--8Egu8GwntiJYCT9p0",
    testimonial:
      "As a front end web developer, his work is really professional with simple and engaging designs. I'd definitely recommend him",
  },
];
let i = 0;
let j = testimonials.length;
let testimonialContainer = document.getElementById("testimonial-container");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");
nextBtn.addEventListener("click", () => {
  i = (j + i + 1) % j;
  displayTestimonial();
});
prevBtn.addEventListener("click", () => {
  i = (j + i - 1) % j;
  displayTestimonial();
});
let displayTestimonial = () => {
  testimonialContainer.innerHTML = `
    <p>${testimonials[i].testimonial}</p>
    <img src=${testimonials[i].image}>
    <h3>${testimonials[i].name}</h3>
    <h6>${testimonials[i].job}</h6>
  `;
};
window.onload = displayTestimonial;
const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 400) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
const selectorElements = document.querySelectorAll(".selector");
selectorElements.forEach((el) => observer.observe(el));
var nameError = document.getElementById("nameError");
var emailError = document.getElementById("emailError");
var messageError = document.getElementById("messageError");
var submitError = document.getElementById("submitError");
var button = document.getElementById("button");
function validateName() {
  var name = document.getElementById("contactName").value;
  if (name.length == 0) {
    nameError.innerHTML = "This field is required";
    return false;
  }
  if (name.length > 0) {
    nameError.innerHTML = "";
    return true;
  }
}
function validateEmail() {
  var email = document.getElementById("contactEmail").value;
  if (email.length == 0) {
    emailError.innerHTML = "This field is required";
    return false;
  }
  if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    emailError.innerHTML = "Please enter a valid email";
    return false;
  }
  emailError.innerHTML = "";
  return true;
}
function validateMessage() {
  var message = document.getElementById("contactMessage").value;
  if (message.length == 0) {
    messageError.innerHTML = "This field is required";
    return false;
  }
  if (message.length > 0) {
    messageError.innerHTML = "";
    return true;
  }
}
function validateForm() {
  if (!validateName() || !validateEmail() || !validateMessage()) {
    submitError.style.display = "block";
    submitError.innerHTML = "Please fill all the required fields";
    setTimeout(function () {
      submitError.style.display = "none";
    }, 5000);
    return false;
  }
}
const scriptURL =
  "https://script.google.com/macros/s/AKfycbxyvcGhtZMzOLcgFBHIEulVrBLhlPwMAxhWB_FYCD5VuZFrJtg1L1_fDTO6EhK_Rnb5/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  button.innerHTML = "Sending...";
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then(() => {
      msg.innerHTML = "Thank you for your message";
      setTimeout(function () {
        msg.innerHTML = "";
        button.innerHTML = "Send Message";
      }, 1000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
function showMore() {
  var dot = document.getElementById("dot");
  var more = document.getElementById("show");
  var btn = document.getElementById("Btn");
  if (dot.style.display === "none") {
    dot.style.display = "inline";
    btn.innerHTML = "Show more";
    more.style.display = "none";
  } else {
    dot.style.display = "none";
    btn.innerHTML = "Show less";
    more.style.display = "inline";
  }
}
