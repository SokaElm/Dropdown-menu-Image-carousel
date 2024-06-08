/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function toggleClass() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it

const main = document.querySelector(".mainimg");
const nodeList = document.getElementsByTagName("img");
const array = Array.from(nodeList);

let urls = [];
array.forEach((item, index) => (urls[index] = `url("${item.src}")`));

window.onclick = function (e) {
  if (!e.target.matches(".dropbtn")) {
    var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains("show")) {
      myDropdown.classList.remove("show");
    }
  }
  if (e.target.tagName === "IMG") {
    main.style.backgroundImage = `url(${e.target.src})`;
  }
};

function changeImg(n) {
  let index = urls.indexOf(main.style.backgroundImage);

  if (n === 1 && index === 4) {
    main.style.backgroundImage = urls[0];
  } else if (n === -1 && index === 0) {
    main.style.backgroundImage = urls[4];
  }
  main.style.backgroundImage = urls[index + n];
}
