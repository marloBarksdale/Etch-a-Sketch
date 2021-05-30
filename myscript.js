let container = document.querySelector("#container");

let num = 100   ;


container.style.display = "grid";

container.style.gridTemplateColumns = `repeat(${num},1fr) `;
container.style.gridTemplateRows = `repeat(${num},1fr) `;



function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  
 
 
createGrid(num);

function createGrid(size) {

    for (let i = 0; i < (size * size); i++) {

        let pixel = document.createElement("div");
        pixel.classList.add("point");
        pixel.style.cssText = "border: 0.5px black solid";
        container.appendChild(pixel);

        
        pixel.addEventListener('mouseover', function(){

          //console.log("you clicked " + i);

          pixel.style.backgroundColor = getRandomColor();

        });

     


    }
 
}
  


// for (let i = 0; i < imageArray.length; i++) {
//   imageArray[i].addEventListener("click", function() {
//     console.log("you clicked region number " + i);
//   });
// }

   

   






