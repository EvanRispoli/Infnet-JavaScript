let maxValue = document.querySelector("#maxValue");
let minValue = document.querySelector("#minValue");
let range = [];
function calculaMultiplos(){
  for (index = minValue; index < maxValue; index++) {
    if (index % 2 == 0 && index % 3 == 0) {
      range.push(index);
    }
  }
  
  console.log(` A quantidade de  múltiplos de 2 e 3 ao mesmo tempo entre ${minValue} e ${maxValue} é : 
  ${range.length}
  `);
  
  console.log(`Os múltiplos de 2 e 3 ao mesmo tempo entre ${minValue} e ${maxValue} são:
  `);
  
  console.log(range);

}

