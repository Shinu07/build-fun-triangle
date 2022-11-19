const baseValue = document.querySelector("#first-input");
const heightValue = document.querySelector("#second-input");
const checkAreaBtn = document.querySelector(".btn-check");
const outputE1 = document.querySelector("#output");

function checkAreaTriangle(){
    let sumOfArea = 0.5 * Number(baseValue.value) * Number(heightValue.value);
    outputE1.innerText = "The area of triangles is:" + sumOfArea + "sq.cms.";
}


checkAreaBtn.addEventListener("click",checkAreaTriangle);