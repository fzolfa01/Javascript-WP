//banner//

const myHeading = document.querySelector("h1");
myHeading.textContent =
  "My name is Fatemeh and I am a designer. Welcome to my website.!";

//good day start//

const hour = new Date().getHours();
let greeting;

if (hour > 18) {
  greeting = "Hi, Good evening";
} else {
  greeting = "Hi, Good day";
}

document.getElementById("greeting").innerHTML = greeting;

// good day ends//

//welcoming start//

let hello = "Hello world!";
alert("Hey! Welcome to my website");

console.log(prompt("My name is Darya. What is your name?", "Name:"));
console.log(prompt("What brings you here :)?"));

console.log(confirm("Let's find your favourite piece of an art"));

const buttonA = document.querySelector("#button_A");
const headingA = document.querySelector("#heading_A");

buttonA.onclick = () => {
  const name = prompt("What is your name?");
  alert(`Hello ${name}, nice to see you!`);
  headingA.textContent = `Welcome ${name} now you can choose your favourite color`;
};

//welcoming end//

// SLIDESHOW
//  ref : https://www.w3schools.com/howto/howto_js_slideshow.asp

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slideshow");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000);
}
// Change image every 3 seconds

// slide show end//

//confussions list 1//

// let myList = ["Darya", true, 9, "painting", "pattern", "abstract"];
// console.log(myList);
// console.log(myList[5]);
//confussions end 1//

//image change start *******//
// const myImage = document.querySelector("img");

// myImage.onclick = () => {
//   const mySrc = myImage.getAttribute("src");
//   if (mySrc === "images/firefox-icon.png") {
//     myImage.setAttribute("src", "images/firefox2.png");
//   } else {
//     myImage.setAttribute("src", "images/firefox-icon.png");
//   }
// };
//image change ends *******//

//confussion start 3//
// const myArray = ["Black", "Grey", "Nude", "Blue", "Orangered"];
// document.getElementById("demoo").innerHTML = myArray;
//confussion end 3//

//cruise start//

// function revealMessage() {
//   document.getElementById("hiddenMessage").style.display = "block";
// }
// function countDown() {
//   var currentVal = document.getElementById("countDownButton").innerHTML;
//   var newVal = currentVal - 1;
// }
// document.getElementById("countDownButton").innerHTML = newVal;

//cruise end//

//gquery starts//
// $(document).ready(function () {
//   $("#hidden").hover(
//     function () {
//       $(this).css("color", "black");
//     },
//     function () {
//       $(this).hide();
//     }
//   );
//   $("button").click(function () {
//     alert("I'm welcoming you to my page");
//   });
// });
//gquery ends//

//API pokemon starts//
fetchData();

async function fetchData() {
  try {
    const pokemonName = document
      .getElementById("pokemonName")
      .value.toLowerCase();

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }
    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById("pokemonSprite");
    imgElement.src = pokemonSprite;
    imgElement.style.display = "block";
  } catch (error) {
    console.error(error);
  }
}
// API pokemon ends//
