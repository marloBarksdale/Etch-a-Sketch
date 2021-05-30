let container = document.querySelector("#container");



var slider = document.getElementById("myRange");
let num = slider.value;
createGrid(num);





slider.oninput = function () {



  container = document.querySelector('#container');
  removeAllChildNodes(container);

  num = slider.value;

  createGrid(num);


}



function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function refresh() {

  let refreshed = document.querySelectorAll('.colored');

  refreshed.forEach(function (e) {
    e.style.backgroundColor = 'white';
    e.classList.remove('colored');

  });



  //createGrid(num);
}


function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}


function createGrid(size) {


  container.style.display = "grid";

  container.style.gridTemplateColumns = `repeat(${num},1fr) `;
  container.style.gridTemplateRows = `repeat(${num},1fr) `;


  for (let i = 0; i < (size * size); i++) {




    let pixel = document.createElement("div");
    pixel.classList.add("point");
    pixel.style.cssText = "border: 0.5px black solid";
    container.appendChild(pixel);

    pixel.style.backgroundColor = 'white';

    pixel.addEventListener('mouseover', function () {

      //console.log("you clicked " + i);
      pixel.classList.add('colored');

      pixel.style.backgroundColor = getRandomColor();

    });




  }

}



// for (let i = 0; i < imageArray.length; i++) {
//   imageArray[i].addEventListener("click", function() {
//     console.log("you clicked region number " + i);
//   });
// }










