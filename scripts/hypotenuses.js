// hypoLinkDeco = document.querySelector("#hypo-link");
const firstSideValue = document.querySelector("#firstSide");
const secondSideValue = document.querySelector("#secondSide"); 
const btnCalcHypo = document.querySelector("#btn-calchypo");
const notifyMessage = document.querySelector("#output"); 


function calcHypotenuse() {
    let hypoSum = ( Number(firstSideValue.value) * Number(firstSideValue.value) ) +
    ( Number(secondSideValue.value) * Number(secondSideValue.value) ); 
    let hypoAns = Math.sqrt(hypoSum); 
    
    // notifyMessage.style.display = "block";
    notifyMessage.innerText = "RESULT: The hypotenuse of triangle with sides: "+firstSideValue.value+"cms and "+secondSideValue.value+"cms is: "+hypoAns.toFixed(2)+" cms."; 

}


// hypoLinkDeco.style.textDecoration = "underline";
// hypoLinkDeco.style.color = "white";
btnCalcHypo.addEventListener("click",calcHypotenuse); 




