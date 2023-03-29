
function calculate(pA, pB) {
  
  
  var pA = document.getElementById("xnorm").value;
  var pB = document.getElementById("ynorm").value;


  
    let covXY = -pA * pB


    let varX = pA * (1-pB)


    let varY = (1-pB)* pB


    let res = covXY / (Math.sqrt(varX*varY, 2))

    return res

    console.log(res);


}