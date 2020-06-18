function fibonacci(){
  var term = parseInt(document.getElementById('numberFibonacci').value);
  var penultimate=0, last=1;
  var numero = 0;
  var res = ""

  if (term<=2)
   numero = term-1;
  else
   for (var count=3 ; numero <=term ; count++){
    numero = last + penultimate;
    res += " " + numero
    penultimate = last;
    last = numero;
   }

  document.getElementById('result').innerHTML=res;
}
